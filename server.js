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

app.get("*", (req, res) => {
  res.send("404");
});

app.listen(PORT, () => {
  console.log(`server listening on port: ${PORT}`);
});