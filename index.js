import express from "express";

//import routera
import indexRouter from "./routes/index.js";
import todosRouter from "./routes/todos.js";
import usersRouter from "./routes/users.js";
import tasksRouter from "./routes/tasks.js";

//Priprema environmenta
const host = "localhost";
const port = 3000;

//stvaranje aplikacije
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//postavljanje rutera na rute
app.use("/", indexRouter);
app.use("/api/users", usersRouter);
app.use("/api/todos", todosRouter);
app.use("/api/tasks", tasksRouter);

//počni slušati i ujedino i serviraj prijaltelju
app.listen(port, () => {
  console.log(`Pokrenuto na http://${host}:${port}/`);
});
