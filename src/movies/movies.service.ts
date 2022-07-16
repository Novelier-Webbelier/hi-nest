import { Injectable } from '@nestjs/common';
import { Movie } from './entities/Movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: string): Movie {
    return this.movies.find((movie) => movie.id === +id);
  }

  deleteOne(id: string): boolean {
    const isExist = this.getOne(id);

    if (isExist) {
      this.movies.filter((movie) => movie.id !== +id);
      return true;
    }

    return false;
  }

  createOne(movieData): boolean {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });

    return true;
  }
}
