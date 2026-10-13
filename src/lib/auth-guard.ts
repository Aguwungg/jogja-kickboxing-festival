import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { hasAdminAccess } from "@/lib/rbac";

/**
 * Server-side authorization check for Admin Server Components.
 * Redirects unauthenticated or unauthorized users to /admin/login immediately
 * before any database operations or page rendering occur.
 */
export async function requireAdminSession() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/admin/login");
  }

  const user = session.user as { role?: string };
  if (!hasAdminAccess(user.role)) {
    redirect("/admin/login?error=AccessDenied");
  }

  return session;
}

/**
 * Server-side authorization check for Admin Server Actions and Route Handlers.
 * Throws an error if the caller is not an authenticated administrator.
 */
export async function verifyAdminAction() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    throw new Error("UNAUTHORIZED: Sesi administrator diperlukan untuk tindakan ini.");
  }

  const user = session.user as { role?: string };
  if (!hasAdminAccess(user.role)) {
    throw new Error("FORBIDDEN: Peran akun Anda tidak memiliki hak akses administrator.");
  }

  return session;
}
