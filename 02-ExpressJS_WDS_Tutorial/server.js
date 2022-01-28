const express = require("express");
const app = express();

app.use(express.static("public"));

// ! to use ejs or pug as view engine you have to set it first by typing
app.set("view engine", "ejs");

// * Setting up the basic get request router
// * get request take 2 parameters first <'route'>, second <function with 3 parameters<req,res,next>>
// ! 99% we dont use next so we only write 2 parameters <req,res>
app.get("/", (req, res) => {
  console.log("hello world");
  // * we generally dont use send we only use it for testing purpose we use something that is more specific that send
  // res.send("how do you do? send");
  // * to send the status as an response
  // res.sendStatus(500);
  // * but we can chain the status and send to give user message as well as status
  // res.status(203).send("how do you do?");
  // * not only can we send string we can also send json object
  // res.status(500).json({ message: "tere mummy meri houja" });
  // * when you went down to send file to user we user
  // res.download("server.js");
  // * we mostly send response as an json object or we are rendering file
  // res.render("index", { message: "bhupesh" });
});

// ! calling logger middleware
// app.use(logger);

// TODO: As the app grow the route send code become big and messy two

const userRouter = require("./routes/users");
//  * for linking a route to a particular path
app.use("/users", userRouter);

// ! this is copy of the code main code has been moved to user.js file
// function logger(req, res, next) {
//   console.log(req.originalUrl);
//   next();
// }
app.listen(3000);
