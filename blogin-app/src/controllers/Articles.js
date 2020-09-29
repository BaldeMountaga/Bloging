
const articleRouter = require ('express').Router;
const Article = require('../models/Articles');

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
module.exports = articleRouter;