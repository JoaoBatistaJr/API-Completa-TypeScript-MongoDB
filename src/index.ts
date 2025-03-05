import express from "express";
import {config} from "dotenv";

config();

const app = express();

const port = process.env.PORT || 8000

app.get("/", (req, res) => {
  res.send("Hello, World!")
})

<<<<<<< HEAD
  app.get("/users", async (req, res) => {
    const mongoGetUsersRepository = new MongoGetUsersRepository();
    const getUsersController = new GetUsersController(mongoGetUsersRepository);

    const { body, statusCode } = await getUsersController.handle();

    res.send(body).status(statusCode);
  });

  app.listen(port, () => console.log(`listening on port ${port}!`));
};

main();
=======
app.listen(port, () => console.log(`listening on port ${port}!`))
>>>>>>> main
