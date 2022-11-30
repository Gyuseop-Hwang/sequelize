const express = require('express');
const User = require('./models/user.js');
const Comment = require('./models/comment.js')
const db = require('./models/index.js');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

db.sequelize.sync();

app.post('/:id', async (req, res, next) => {
  const id = parseInt(req.params.id);
  const comment = req.body.comment;
  // const newComment = await Comment.create({
  //   commenter: id,
  //   comment
  // })
  // const newComment = await Comment.create({
  //   commenter: id,
  //   comment
  // }).then(data => {
  //   return Comment.findOne({
  //     where: { id: data.id },
  //     include: [{
  //       model: User
  //     }]
  //   })
  // })
  const foundUser = await User.findOne({ where: { id } })
  const newComment = await Comment.create({ comment })
  await foundUser.addComment(newComment).then(data => { return data })
  res.json(newComment);
})

// app.get("/user/:id", async (req, res, next) => {
//   const 
//   const user = await User.findOne()
// })

// app.get('/:id', (req, res, next) => {

// })

app.get("/:id/comments", async (req, res, next) => {
  const foundComments = await Comment.findAll({
    include: {
      model: User,
      where: { id: req.params.id }
    }
  })
  res.json(foundComments)
})

app.listen(3000, () => {
  console.log("listening on port 3000")
})