const Recipe = require('../models/Recipe')
const Chef = require('../models/Chef')
const {date} = require('../../lib/util')

exports.index = function(req,res){
    
    Recipe.all(function(recipes){
        return res.render('admin/recipes/list', {recipes})
    })
}
exports.create = function(req,res){
    return res.render('admin/recipes/create')
}
exports.show = function(req,res){

    Recipe.find(req.params.id,function(recipe){
        if(!recipe) return res.send("Recipe not found")

        return res.render('admin/recipes/show',{recipe})
    })
}
exports.edit = function(req,res){

    Recipe.find(req.params.id,function(recipe){
        if(!recipe) return res.send("Recipe not found")

        recipe.created_at = date(recipe.created_at).format

        return res.render('admin/recipes/edit',{recipe})
    })
}
exports.post = function(req,res){

    for(key of Object.keys(req.body)){
        if(req.body[key] == "" && key != "information"){
            res.send(req.body)
        }
    }
    
    Recipe.create(req.body, function(recipe){
        return res.redirect(`/admin/recipes/${recipe.id}`)
    })
    
}
exports.put = function(req,res){

    //check if number of fields on req.body equals number on data.recipes
    if( Object.keys(req.body).length != 7)  return res.send(req.body)

    Recipe.update(req.body, function(recipe){
        return res.redirect(`/admin/recipes/${req.body.id}`)
    })
}
exports.delete = function(req,res){

    Recipe.delete(req.body.id,function(){
        return res.redirect('/admin/recipes')
    })
}
