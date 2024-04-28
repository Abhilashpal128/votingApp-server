const express = require("express");
const PORT = 5000;
const UserRouter = require("./router/user");
const url = "mongodb://localhost:27017/VotingApp";
const { UserDBConnection } = require("./Connection");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/users", UserRouter);
UserDBConnection(process.env.MongoDB_URL).then(() => {
  console.log("db Connection established");
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
