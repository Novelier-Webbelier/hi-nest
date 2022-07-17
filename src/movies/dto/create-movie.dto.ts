import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  readonly title: string;

  @IsOptional()
  @IsString()
  readonly description: string;

  @IsNumber()
  readonly year: number;

  @IsString({ each: true })
  readonly genres: string[];
}
