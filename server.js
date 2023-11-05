const express = require("express");
const app = express();
const path = require("path");

const PORT = 3000;
// app.use(express.static("/web"));

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/", express.static(path.join(__dirname, "web/public/")));
app.use("/admin", express.static(path.join(__dirname, "web/admin/")));
app.use(
  "/number_game",
  express.static(path.join(__dirname, "web/current_number/"))
);

let CURRENT_NUMBER = null;
// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/web/public/index.html");
// });

// app.get("/admin", (req, res) => {
//   res.sendFile(__dirname + "/web/admin/index.html");
// });

// app.use("/admin", () => {
//   res.send("admin site");
// });

// app.use("/admin", express.static(path.join(__dirname, "admin/www")));

// app.get("*", (req, res) => {
//   res.send("404");
// });

// app.use("/user", (req, res) => {
//   console.log(req.method);
//   if (req.method === "GET") {
//     res.send("GET USER");
//   } else if (req.method === "POST") {
//     res.send("POST USER");
//   } else if (req.method === "DELETE") {
//     res.send("DELETE USER");
//   }
// });
// app.get("/get_date", (req, res) => {
//   let date = new Date();
//   console.log(date);
//   res.send(date);
//   // console.log(req.method);

//   res.send("GET USER");
// });

// app.get("/roll_dice", (req, res) => {
//   let dice = Math.floor(Math.random() * 6) + 1;
//   res.send(`Rolled a D1000: ${dice}`);
// });
// app.post("/user", (req, res) => {
//   console.log(req.method);
//   res.send("POST USER");
// });
// app.delete("/user", (req, res) => {
//   console.log(req.method);
//   res.send("DELETE USER");
// });d

app.get("/current_number", (req, res) => {
  if (!CURRENT_NUMBER) {
    CURRENT_NUMBER = Math.floor(Math.random() * 365) + 1;
  }
  res.send(`the current number is: ${CURRENT_NUMBER}`);
});
app.post("/current_number", (req, res) => {
  CURRENT_NUMBER = req.body.number;
  res.sendStatus(200);
});

app.use("/*", express.static(path.join(__dirname, "web/404/")));
app.listen(PORT, () => {
  console.log(`server listening on port: ${PORT}`);
});
