export interface UserRequest {
  name_user: string;
  email_user: string;
  cpf_user: string[11];
  password_user: string;
  role_user: "admin" | "teacher" | "student";
}

export interface UserResponse {
  id_user: string;
  name_user: string;
  email_user: string;
  cpf_user: string[11];
  role_user: "admin" | "teacher" | "student";
}

export interface UserLogin {
  email_user: string;
  password_user: string;
}

export interface UserPatch {
  name_user?: string;
  email_user?: string;
  cpf_user?: string[11];
  password_user?: string;
  role_user?: "admin" | "teacher" | "student";
}
