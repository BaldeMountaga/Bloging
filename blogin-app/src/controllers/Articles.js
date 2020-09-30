
const articleRouter = require ('express').Router;
const { update, updateOne } = require('../models/Articles');
const Article = require('../models/Articles');

//Home page
articleRouter.get('/', (req, res) => {
    Article.find({}).then(articles => {
        res.send(articles.map(article => article.toJSON()))
    });
});

articleRouter.get('/:id', (req, res, next) =>{
    Article.findById(req.params.id)
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
articleRouter.post('/', (req, res) =>{
    const body = req.body
    if(body.title === undefined){
        return res.status(400).json({
            error: 'title missing'
        })
    }
    else if(body.content === undefined){
        return res.status(400).json({
            error: 'content missing'
        })
    }
    const article = new Article({
        title: body.title,
        content: body.content
    });
    article.save()
        .then(savedArticle => savedArticle.toJSON())
        .then(savedAndFormateArticle => {
            res.json(savedAndFormateArticle)
        })
})

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
