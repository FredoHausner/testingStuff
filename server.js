const express = require("express");
const app = express();
const path = require("path");

const PORT = 3000;
// app.use(express.static("/web"));

app.use("/", express.static(path.join(__dirname, "web/public/")));
app.use("/admin", express.static(path.join(__dirname, "web/admin/")));
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
app.get("/user", (req, res) => {
  console.log(req.method);
  res.send("GET USER");
});
app.post("/user", (req, res) => {
  console.log(req.method);
  res.send("POST USER");
});
app.delete("/user", (req, res) => {
  console.log(req.method);
  res.send("DELETE USER");
});

app.use("/*", express.static(path.join(__dirname, "web/404/")));
app.listen(PORT, () => {
  console.log(`server listening on port: ${PORT}`);
});
