import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Título da postagem.',
  })
  title: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'Descrição da postagem.',
  })
  content?: string;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({
    description: 'Verificação se a postagem foi publicada.',
  })
  published?: boolean;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Autor da postagem.',
  })
  authorId: number;
}
