const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h1>Hello world!</h1>");
});

router.get("/getData", (req, res) => {
  const { number } = req.query;
  if (!number) {
    return res.json({ message: "Lack of Parameter" });
  } else if (+number >= 0 && Number.isInteger(+number)) {
    let initNumber = 0;
    for (let i = 0; i < +number + 1; i++) {
      initNumber += i;
    }
    return res.json({ message: `${initNumber}` });
  }
  return res.json({ message: "Wrong Parameter" });
});

router.get("/myName", (req, res) => {
  const { username } = req.cookies;
  if (!username) {
    return res.send(`
        <form action="/trackName" method="get">
            <input type="text" name="name"></input>
            <button type="submit">Submit</button>
        </form>
        `);
  } else {
    return res.send(`${username}`);
  }
});

router.get("/trackName", (req, res) => {
  const { name } = req.query;
  res.cookie("username", name);
  res.redirect("/myName");
});

module.exports = router;
