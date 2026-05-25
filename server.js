// DEPENDENCIES
require("dotenv").config();
const express = require("express");
const app = express();
const movieRoutes = require("./routes/movieRoutes");

// Local Environmental Variables
const PORT = process.env.PORT || 3001;

// MIDDLEWARE
app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
    res.send("Server's up and running...");
});

app.use("/api", movieRoutes);

// PORT
app.listen(PORT, () => {
    console.log(`Server running on: http://localhost:${PORT}`);
});