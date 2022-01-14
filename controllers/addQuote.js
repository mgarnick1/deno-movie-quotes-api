import { addQuote } from "../services/quoteService.js";

export default async ({ request, response }) => {
  if (!request.hasBody) {
    response.status = 400;
    response.body = { msg: "Invalid quote data" };
    return;
  }

  const { quote, author, actor, movie_id } = request.body().value;

  console.log(await request.body({ type: "json" }).value);
  console.log(quote);

  if (!quote || !author || !actor) {
    response.status = 422;
    response.body = {
      msg: "Incorrect Quote data, quote, author, and actor are required",
    };
    return;
  }

  const quoteId = await addQuote({ quote, author, actor, movie_id });

  response.body = { msg: `Quote successfully added with ID: ${quoteId}` };
};
