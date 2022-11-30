const express = require('express');
const db = require('./models/index')
const app = express();
const User = require('./models/user.js')
const Info = require('./models/info.js')
const Sequelize = require('sequelize');

db.sequelize.sync();


app.get('/:id', async (req, res, next) => {
  const id = req.params.id;
  const foundUser = await User.findOne({
    where: { id },
    // attributes: [
    //   "id",
    //   "name",
    //   "nickname",
    //   "age",
    //   "InfoId",
    //   [Sequelize.col("Info.race"), "race"],
    //   [Sequelize.col("Info.country"), "country"],
    //   [Sequelize.col("Info.home"), "home"],
    //   [Sequelize.col("Info.height"), "height"],
    //   [Sequelize.col("Info.weight"), "weight"],
    // ],
    include: {
      model: Info,
      // attributes: []
      // attributes: ["race", "country", "home"]
    }

  })
  return res.json(foundUser)
})



app.listen(3000, () => {
  console.log("listening on port 3000")
})