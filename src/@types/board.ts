export interface BoardPost {
  id: string;
  name: string;
  password: string;
  title: string;
  contents: string;
  created_at: string;
}

export interface BoardFormData {
  name: string;
  password: string;
  title: string;
  contents: string;
}