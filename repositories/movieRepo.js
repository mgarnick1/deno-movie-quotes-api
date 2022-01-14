import client from "../db/database.js";

class MovieRepo {
  getAll() {
    return client.queryArray("SELECT * FROM movies ORDER BY id ASC");
  }
  add(movie) {
    return client.queryObject(
      "INSERT INTO movies (name, year) VALUES ($1, $2) RETURNING id",
      movie.name,
      movie.year
    );
  }
}

export default new MovieRepo()
