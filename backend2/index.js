const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const petsRouter = require("./routes/pets");
const usersRouter = require("./routes/users");
const shiftsRouter = require("./routes/shifts");
const authRouter = require("./routes/auth");
const servicesRouter = require("./routes/services");
const productsRouter = require("./routes/products");
require("dotenv").config();
const { dbConnection } = require("./database/config");

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
dbConnection();
app.use("/pets", petsRouter);
app.use("/users", usersRouter);
app.use("/shifts", shiftsRouter);
app.use("/login", authRouter);
app.use("/services", servicesRouter);
app.use("/products", productsRouter);

app.listen(port, () => {
  console.log(`Servidor activo en puerto ${port}`);
});
//const cors = require("cors");
