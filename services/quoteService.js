import quoteRepo from "../repositories/quoteRepo.js";

export const getQuotes = async () => {
  const quotes = await quoteRepo.getAll();
  var result = new Array();

  quotes.rows.map((quote) => {
    var obj = new Object();
    quotes.rowDescription.columns.map((el, i) => {
      obj[el.name] = quote[i];
    });
    result.push(obj);
  });
  return result;
};

export const getQuotesById = async (id) => {
  const quote = await quoteRepo.getById(id);
  var result = new Object();
  quote.rows.map((q) => {
    result = q;
  });
  return result;
};

export const addQuote = async (quoteData) => {
  const newQuote = {
    quote: String(quoteData.quote),
    author: String(quoteData.author),
    actor: String(quoteData.actor),
    movie_id: quoteData.movie_id,
  };

  await quoteRepo.add(newQuote);
  return quoteRepo.id;
};

export const updateQuote = async (id, quoteData) => {
  const quote = await getQuotesById(id);
  if (Object.keys(quote).length === 0 && quote.constructor === Object) {
    throw new Error("Quote not found");
  }

  const updatedQuote = {
    quote:
      quoteData.quote !== undefined ? String(quoteData.quote) : quote.quote,
    author:
      quoteData.author !== undefined ? String(quoteData.author) : quote.author,
    actor:
      quoteData.actor !== undefined ? String(quoteData.actor) : quote.actor,
    movie_id:
      quoteData.movie_id !== undefined ? quoteData.movie_id : quote.movie_id,
  };

  quoteRepo.update(id, updatedQuote);
};

export const deleteQuote = async (id) => {
    quoteRepo.delete(id)
}
