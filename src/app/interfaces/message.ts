export interface Message {
  id: number;
  full_name: string;
  email: string;
  phone: string;
  plan: string | null;
  message: string | null;
  business_id: number;
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T> {
  message: string;
  data: T;
}
