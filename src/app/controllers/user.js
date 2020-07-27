const Recipe = require('../models/Recipe')
const Chef = require('../models/Chef')

exports.index = function(req,res){ //index
    Recipe.all(function(recipes){
        return res.render('user/index', {recipes})
    })
}
exports.recipes = function(req,res){//receitas
    Recipe.all(function(recipes){
        return res.render('user/recipes',{recipes})
    })
}
exports.about = function(req,res){//sobre
    return res.render('user/about')
}
exports.show = function(req,res){//receita detalhes

    Recipe.find(req.params.id, function(recipe){
        if(!recipe) return res.send("Recipe not found")

        return res.render('user/show',{recipe})
    })
}
exports.chefs = function(req,res){
    Chef.all(function(chefs){
        return res.render('user/chefs',{chefs})
    })

}
