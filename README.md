# Movie Finder API

SBA: Express server that proxies the OMDb (Open Movie Database) API.

## Description
A RESTful API built with Node.js and Express that acts as an intermediary between a client and the public OMDb API. It exposes a search endpoint and a movie details endpoint, securely handling the OMDb API key on the server side.

## Tech
- Node.js
- Express
- Axios
- dotenv

## File Structure
```
movie-finder-api/
├── controllers/movieController.js
├── routes/movieRoutes.js
├── server.js
├── package.json
├── .env.example
└── .gitignore
```

## Setup
1. Clone the repo
2. `npm install`
3. Get a free OMDb API key at `http://www.omdbapi.com/apikey.aspx`
4. Create `.env` at project root (see `.env.example`)
5. `node server.js`

### Examples
```
GET http://localhost:3001/api/search?title=batman
GET http://localhost:3001/api/movies/tt0372784
```

## Validation
- `/api/search` returns `400` if `title` query parameter is missing.

## Error Handling
- Both controller functions use `try/catch` blocks.
- Network or API failures return `500` with a clear error message.

## Security
`.env` is git-ignored. The OMDb API key is never sent to the client. See `.env.example` for required variables.

## Author
- Kwadwo 

## Acknowledgement
- Per Scholas Node and Express Modules
- AI