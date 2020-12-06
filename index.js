const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/o-mnie", (req, res) => {
  res.send(`
    <div>
      <h1>Strona o mnie</h1>
      <a href="http://localhost:3000/">
        wroc na strone glowna
      </a>
      <br/>
      <p>Hej tutaj alicja</p>
    </div>
  `);
});

app.get("/kontakt", (req, res) => {
  res.send(`
    <div>
      <h1>kontakt z ala</h1>
      <a href="http://localhost:3000/">
        wroc na strone glowna
      </a>
      <br/>
      <a href="http://localhost:3000/o-mnie">
        przeczytaj cos o mnie
      </a>
      <br/>
      <a href="tel:880143373">
        Telefon do mnie
      </a>
      <br/>
      <a href="mailto:szotalicja8@gmail.com">
        wyslij mi maila
      </a>
    </div>
  `);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
