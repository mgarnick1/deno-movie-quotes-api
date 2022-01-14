import { getQuotes } from '../services/quoteService.js';

export default async ({ response}) => {
    response.body = await getQuotes();
}