export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  author: string;
  publishDate: string;
  tags: string[];
  readTime: number;
}
