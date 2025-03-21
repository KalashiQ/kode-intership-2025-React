export type TabType =
  | "all"
  | "android"
  | "ios"
  | "design"
  | "management"
  | "qa"
  | "back_office"
  | "frontend"
  | "hr"
  | "pr"
  | "backend"
  | "support"
  | "analytics";

export interface User {
  id: string;
  avatarUrl: string;
  fallbackAvatarUrl?: string;
  firstName: string;
  lastName: string;
  userTag: string;
  department: string;
  birthday: string;
  email: string;
  phone: string;
}
