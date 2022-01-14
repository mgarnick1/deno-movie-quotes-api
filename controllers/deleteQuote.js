import { deleteQuote, getQuotesById } from "../services/quoteService.js";

export default async ({ params, response }) => {
  const quoteId = params.id;

  if (!quoteId) {
    response.status = 400;
    response.body = { msg: "Invalid quote id" };
    return;
  }

  const exists = await getQuotesById(quoteId);
  if (!exists) {
    response.status = 404;
    response.body = { msg: `Quote with ID: ${quoteId} not found` };
    return;
  }

  await deleteQuote(quoteId)
  response.body = { msg: 'Quote deleted'}
};
