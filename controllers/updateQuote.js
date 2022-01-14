import { updateQuote } from "../services/quoteService.js";

export default async ({ params, request, response }) => {
  const quoteId = +params.id;

  if (!quoteId) {
    response.status = 400;
    response.body = { msg: "Invalid quote id" };
    return;
  }

  if (!request.hasBody) {
    response.status = 400;
    response.body = { msg: "Invalid quote data" };
    return;
  }

  const { quote, author, actor, movie_id } = await request.body().value;

  await updateQuote(quoteId, { quote, author, actor, movie_id });

  response.body = { msg: `Quote ID: ${quoteId} updated`}
};
