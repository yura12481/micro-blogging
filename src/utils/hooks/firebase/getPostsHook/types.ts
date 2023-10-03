export interface Comment {
  id: string;
  text: string;
  email: string;
}

export interface Post {
  id: string;
  title: string;
  details: string;
  email: string;
  comments?: Comment[];
}
