import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { rateLimit, getSanitizedClientIp } from "@/lib/rateLimit";

export async function POST(req: NextRequest) {
  try {
    const ip = getSanitizedClientIp(req.headers);
    // Rate limit: 5 messages per 10 minutes per IP
    const rl = rateLimit(`contact:${ip}`, { limit: 5, windowMs: 10 * 60 * 1000 });
    if (!rl.success) {
      return NextResponse.json(
        { error: "Terlalu banyak permintaan pengiriman pesan. Mohon tunggu beberapa saat sebelum mencoba kembali." },
        { status: 429 }
      );
    }

    const body = await req.json().catch(() => null);
    if (!body) {
      return NextResponse.json({ error: "Permintaan tidak valid." }, { status: 400 });
    }

    const { name, email, phone, subject, message } = body;

    // Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json({ error: "Nama lengkap wajib diisi (minimal 2 karakter)." }, { status: 400 });
    }

    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return NextResponse.json({ error: "Alamat email tidak valid." }, { status: 400 });
    }

    if (!subject || typeof subject !== "string" || subject.trim().length < 3) {
      return NextResponse.json({ error: "Subjek pesan wajib diisi." }, { status: 400 });
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json({ error: "Isi pesan terlalu singkat (minimal 10 karakter)." }, { status: 400 });
    }

    // Persist to database
    const contact = await prisma.contactMessage.create({
      data: {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone ? String(phone).trim() : null,
        subject: subject.trim(),
        message: message.trim(),
        status: "UNREAD",
      },
    });

    return NextResponse.json({
      success: true,
      message: "Terima kasih! Pesan dan pertanyaan Anda telah berhasil dikirim ke panitia resmi JKB 2026.",
      id: contact.id,
    });
  } catch (error) {
    console.error("Error submitting contact message:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan internal server. Silakan coba kembali nanti." },
      { status: 500 }
    );
  }
}
