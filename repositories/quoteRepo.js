import client from "../db/database.js";

class QuoteRepo {
  add(quote) {
    return client.queryObject(
      "INSERT INTO movie_quotes (quote, author, actor, movie_id) VALUES ($1, $2, $3, $4) RETURNING id",
      quote.quote,
      quote.author,
      quote.actor,
      quote.movie_id
    );
  }
  getAll() {
    return client.queryArray("SELECT * FROM movie_quotes ORDER BY id ASC");
  }
  getById(id) {
    return client.queryObject("SELECT * FROM movie_quotes WHERE id = $1", id);
  }
  update(id, quote) {
    var latestQuote = this.getById(id);
    var query = `UPDATE movie_quotes SET quote = $1, author = $2, actor = $3, movie_id = $4 WHERE id = $5`;
    return client.queryObject(
      query,
      quote.quote !== undefined ? quote.quote : latestQuote.quote,
      quote.author !== undefined ? quote.author : latestQuote.author,
      quote.actor !== undefined ? quote.actor : latestQuote.actor,
      quote.movie_id !== undefined ? quote.movie_id : latestQuote.movie_id,
      id
    );
  }
  delete(id) {
    return client.queryObject("DELETE FROM movie_quotes WHERE id = $1", +id);
  }
}

export default new QuoteRepo()
