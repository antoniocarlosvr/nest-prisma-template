import { User } from 'src/user/entities/user.entity';

export class Post {
  id: number;
  title: string;
  content?: string;
  published?: boolean;
  author?: User;
  authorId?: number;
}
