import express, { response } from "express";

const app = express();

// HTTP Methods / API RESTful / HTTP Codes

// GET, POST, PUT, PATCH, DELETE

app.get("/games", (req, res) => {
  return res.json([]);
});

app.post("/ads", (req, res) => {
  return res.status(201).json([]);
});

app.get("/games/:id/ads", (req, res) => {
  //const gameId = req.params.id

  return res.json([
    {
      id: 1,
      name: "Anúncio 1",
    },
    {
      id: 2,
      name: "Anúncio 2",
    },
    {
      id: 3,
      name: "Anúncio 3",
    },
    {
      id: 4,
      name: "Anúncio 4",
    },
    {
      id: 5,
      name: "Anúncio 5",
    },
    {
      id: 6,
      name: "Anúncio 6",
    },
  ]);
});

app.get("/games/:id/discord", (req, res) => {
  //const adId = req.params.id

  return res.json([]);
});

app.listen(3333);
