import { getMovies } from '../services/movieService.js';

export default async ({ response}) => {
    response.body = await getMovies();
}