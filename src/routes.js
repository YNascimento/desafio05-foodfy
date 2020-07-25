const express = require('express')
const routes = express.Router()
const admin = require('./app/controllers/admin')
const user = require('./app/controllers/user')

//USER
routes.get('/', user.index) //index
routes.get('/recipes', user.recipes)//receitas
routes.get('/about', user.about)//sobre
routes.get('/recipe/:id', user.show) //detalhes receita

//ADMIN
routes.get("/admin", function(req,res){res.redirect("/admin/recipes")})
routes.get("/admin/recipes", admin.index); // LIST
routes.get("/admin/recipes/create", admin.create); // CREATE
routes.get("/admin/recipes/:id", admin.show); // SHOW
routes.get("/admin/recipes/:id/edit", admin.edit); // EDIT
routes.post("/admin/recipes", admin.post); // POST
routes.put("/admin/recipes", admin.put); // PUT/ATT
routes.delete("/admin/recipes", admin.delete); // DELETE

module.exports = routes