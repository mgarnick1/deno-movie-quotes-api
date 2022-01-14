# deno-movie-quotes-api
REST API built in Deno connecting to a postgres db

You will need to create a postgres database
If you have not already installed postgresql please do the following:
- Install postgres
- enter `psql` in the terminal
- enter `\du` and ensure there is a user with Create DB role attributes
- If you are not currently logged in as a user with Create DB roles, please switch to one via, `\c - <user name here>`
- Next enter `CREATE DATABASE demo_database;`, or whatever database name you want to use. This created the database in postgresql.
- Next use your preferred database management tool. I use DBeaver. 
- Create a new database connection. 
- The host will be localhost or any public url.
- the Database will be the database you just created
- Username is the psql username, you can always find this with `\conninfo`
- Password is your psql username password. 
- After completing this steps you have connected to an empty database. 

You can update your database with the following tables:
```
create table movie_quotes(
	id serial primary key not null,
	quote varchar(1024) not null,
	author varchar(64) not null,
	actor varchar(64) not null,
	movie_id INT
	constraint fk_movie_id foreign key(movie_id) references movies(id) ON DELETE SET null
);

create table movies(
	id serial primary key not null,
	name varchar(256) not null,
	year date
);
```

# Create a .env file
- Create a `.env` file and populate it with your database connection info. Update the database.js file to env variables. Feel free to change them as you prefer. 

# Update the database.js file
You will create a database.js file at the root of your project to enable connecting to the postgres db. 

```
class Database {
  constructor() {
    this.connect();
  }

  async connect() {
    this.client = new Client({
      user: Deno.env.get("DB_USER"), // set your env variables from your .env
      database: Deno.env.get("DBNAME"), // set your env variables from your .env
      hostname: Deno.env.get("DB_HOST"), // set your env variables from your .env
      password: Deno.env.get("DB_PASS"), // set your env variables from your .env
      port: 5432,
    });

    await this.client.connect();
  }
}
```


# Adding data to the database
Using curl or postman you can call the endpoints to populate the database
## add a quote
http://localhost:3001/quotes/add
The body or data needs to be with `Content-type: application/json`
```
{
	"quote": "I can do this all day.",
	"author": "Captain America",
	"actor": "Chris Evans",
	"movie_id": 1 /// this is optional
}
```

