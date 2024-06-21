import { Module } from '@nestjs/common';
import { PostModule } from './post/post.module';
import { PrismaService } from './prisma/prisma.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [PostModule, UserModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
