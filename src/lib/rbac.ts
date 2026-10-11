export type UserRole =
  | "SUPER_ADMIN"
  | "CONTENT_ADMIN"
  | "EVENT_MANAGER"
  | "COMPETITION_OPERATOR"
  | "CREATOR_MANAGER"
  | "MERCH_MANAGER"
  | "CREATOR"
  | "VIEWER";

export const ADMIN_ROLES: UserRole[] = [
  "SUPER_ADMIN",
  "CONTENT_ADMIN",
  "EVENT_MANAGER",
  "COMPETITION_OPERATOR",
  "CREATOR_MANAGER",
  "MERCH_MANAGER",
];

export function hasAdminAccess(role?: string | null): boolean {
  if (!role) return false;
  return ADMIN_ROLES.includes(role as UserRole);
}

export function canManageFighters(role?: string | null): boolean {
  return role === "SUPER_ADMIN" || role === "CONTENT_ADMIN" || role === "COMPETITION_OPERATOR";
}

export function canManageSchedule(role?: string | null): boolean {
  return role === "SUPER_ADMIN" || role === "CONTENT_ADMIN" || role === "EVENT_MANAGER";
}

export function canManageLineup(role?: string | null): boolean {
  return role === "SUPER_ADMIN" || role === "CONTENT_ADMIN";
}

export function canManageVoting(role?: string | null): boolean {
  return role === "SUPER_ADMIN" || role === "CONTENT_ADMIN";
}

export function canManageCreators(role?: string | null): boolean {
  return role === "SUPER_ADMIN" || role === "CONTENT_ADMIN" || role === "CREATOR_MANAGER";
}
