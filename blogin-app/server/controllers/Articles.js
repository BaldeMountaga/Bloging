
const articleRouter = require('express').Router();
const { update, updateOne } = require('../models/Articles');
const Article = require('../models/Articles');
const emptyField = require('../utils').emptyField;

//Home page
articleRouter.get('/', (req, res) => {
    Article.find({}).then(articles => {
        res.send(articles.map(article => article.toJSON()))
    });
});

articleRouter.get('/:id', async (req, res, next) =>{
    await Article.findById(req.params.id)
    .then(article => {
        if(article) {
            res.json(note.toJSON())
        }else {
            res.status(404).end()
        }
    })
    .catch(error =>
        next(error)
    );
})

//posting your blog ask about this one because the creation 
// post = {
//   title: '',
//   content: '',
//   likes: '',
//   disLikes: '',
//   author
// }

if(!emptyField(userData)) {
    const user = new User(request.body);
    user.passwordHash = bcrypt.hashSync(request.body.password, 10);
    // bcrypt.compareSync(password, hash)

    console.log(user.passwordHash);

    try {
        await user.save();
        response.status(201).send({status: statusMessages.CREATED_201})
    } catch (error) {
        response.status(500).json({error: statusMessages.SERVER_ERROR_500})
    }

}else {
    console.log(emptyField(userData));
}

//Edit or update
articleRouter.put('/:id', (req, res, next) => {
    const body =req.body;

    const article = {
        title: body.title,
        content: body.content
    }

    Article.findByIdAndUpdate(req.params.id, article, {new: true})
        .then(updateArticle => {
            res.json(updateArticle.toJSON())
        })
        .catch(error => next(error))
})

//Delete
articleRouter.delete('/:id', async (req, res, next) => {
    try {
        const article = await Article.findByIdAndDelete(req.params.id);
        res.status(204).end();
    } catch (error) {
        next(error)
    }
  });

module.exports = articleRouter;
