import { Post } from 'src/post/entities/post.entity';

export class User {
  id: number;
  email: string;
  name?: string;
  posts: Post[];
}
