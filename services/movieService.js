import movieRepo from "../repositories/movieRepo.js";

export const getMovies = async () => {
  const movies = await movieRepo.getAll();
  var result = new Array();

  movies.rows.map((movie) => {
    var obj = new Object();

    movies.rowDescription.columns.map((el, i) => {
      obj[el.name] = movie[i];
    });
    result.push(obj);
  });
  return result;
};

export const addMovie = async (movieData) => {
    const newMovie = {
      name: String(movieData.name),
      year: String(movieData.year),
    };
  
    await movieRepo.add(newMovie);
    return movieRepo.id;
  };


