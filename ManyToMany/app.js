const express = require('express');
const User = require('./models/user.js');

const db = require('./models/index.js');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

db.sequelize.sync();

app.post("/:id/follow", async (req, res, next) => {
  const user = await User.findOne({ where: { id: 1 } });
  user.addFollowings(parseInt(req.params.id));
  res.send("성공");
})

app.listen(3000, () => {
  console.log("listening on port 3000")
})