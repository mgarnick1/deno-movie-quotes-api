import { addMovie } from "../services/movieService.js";

export default async ({ request, response }) => {
  if (!request.hasBody) {
    response.status = 400;
    response.body = { msg: "Invalid movie data" };
    return;
  }

  const { name, year } = request.body().value;

  console.log(await request.body({ type: "json" }).value);
  console.log(name);

  if (!name) {
    response.status = 422;
    response.body = {
      msg: "Incorrect Movie data, name is required",
    };
    return;
  }

  const movieId = await addMovie({ name, year });

  response.body = { msg: `Movie successfully added with ID: ${movieId}` };
};