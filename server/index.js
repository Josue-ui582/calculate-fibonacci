const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const fibonacciRoutes = require("./routes/fibonacciRoutes");
const errorHandler = require("./middleware/errorHandler");

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET"],
}));

app.use(express.json());
app.use("/api", fibonacciRoutes);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`server démarré sur le port ${port}`)
});