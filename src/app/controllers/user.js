const Recipe = require('../models/Recipe')
const Chef = require('../models/Chef')

//index
exports.index = function(req,res){
    Recipe.all(function(recipes){
        return res.render('user/index', {recipes})
    })
}

//receitas
exports.recipes = function(req,res){
    Recipe.all(function(recipes){
        return res.render('user/recipes',{recipes})
    })
}

//sobre
exports.about = function(req,res){
    return res.render('user/about')
}

//detalhes
exports.show = function(req,res){

    Recipe.find(req.params.id, function(recipe){
        if(!recipe) return res.send("Recipe not found")

        return res.render('user/show',{recipe})
    })
}

