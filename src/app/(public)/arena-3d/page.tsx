import { redirect } from "next/navigation";

/**
 * Legacy 3D arena preview unpublished per Requirement 14:
 * Previous 3D geometry represented an earlier venue configuration & outdated production setup.
 * Source files remain safely preserved in src/components/arena3d/ and 3D/.
 */
export default function Arena3DPage() {
  redirect("/venue");
}
