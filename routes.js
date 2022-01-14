import { Router } from "https://deno.land/x/oak/mod.ts";
import getQuotes from "./controllers/getQuotes.js";
import getQuotesById from "./controllers/getQuotesById.js";
import addQuote from "./controllers/addQuote.js";
import addMovie from "./controllers/addMovie.js";
import getAllMovies from "./controllers/getAllMovies.js";
import updateQuote from "./controllers/updateQuote.js";
import deleteQuote from "./controllers/deleteQuote.js";

const router = new Router();

router.get("/quotes", getQuotes);
router.get("/quotes/:id", getQuotesById);
router.get("/movies", getAllMovies);
router.post("/quotes/add", addQuote);
router.post("/movie/add", addMovie);
router.put("/quotes/:id", updateQuote);
router.delete("/quotes/:id", deleteQuote);

export default router;
