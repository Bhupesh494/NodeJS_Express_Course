const express = require("express");
const router = express.Router();

router.use(logger);
// * setting up users route
router.get("/", (req, res) => {
  res.send("List of All Users");
});
// * setting up new-user route
router.get("/new", (req, res) => {
  res.send("New User Form");
});
// * post request to create new user
router.post("/", (req, res) => {
  res.send("Created User");
});

// TODO: new Way to do multipe request together like post,get,put,delete
router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user);
    res.send(`new get the info on user no: ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`new update the info on user no: ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`new delete the info on user no: ${req.params.id}`);
  });

const users = [{ name: "kyle" }, { name: "john" }];
router.param("id", (req, res, next, id) => {
  req.user = users[id];
  next();
});

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

// TODO: using params in http request
// ! depricated way to do multipe request together like post,get,put,delete
// ! in this way we specify our same route path at multiple places
// * get request to get specified user in http request
router.get("/:id", (req, res) => {
  res.send(`get the info on user no: ${req.params.id}`);
});
// * put request to update specified user in http request
router.put("/:id", (req, res) => {
  res.send(`update the info on user no: ${req.params.id}`);
});
// * delete request to delete specified user in http request
router.delete("/:id", (req, res) => {
  res.send(`delete the info on user no: ${req.params.id}`);
});

module.exports = router;
