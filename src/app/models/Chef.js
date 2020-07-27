const db = require('../../config/db')
const {date} = require('../../lib/util')

module.exports = {
    all(callback){
        db.query(`SELECT chefs.*,count(recipes) AS total_recipes 
        FROM chefs LEFT JOIN recipes ON (chefs.id = recipes.chef_id)
        GROUP BY chefs.id`,
        function(err, results){

            if(err) throw `all function error ${err}`
            callback(results.rows)
        })
    },
    create(data, callback){
        const query = `
            INSERT INTO chefs (
                name,
                avatar_url,
                created_at
            ) VALUES ($1,$2,$3) RETURNING id`

        const values = [
            data.name,
            data.avatar_url,
            date(Date.now()).iso
        ]

        db.query(query,values,function(err,results){
            if(err) throw `create function error ${err}`

            callback(results.rows[0])
        })
    },
    find(id,callback){
        db.query(`SELECT * FROM chefs WHERE id = $1`,[id],
        function(err,results){
            if(err)throw `find function error ${err}`

            callback(results.rows[0])
        })
    },
    findBy(filter,callback){

    },
    update(data,callback){
        const query = `
            UPDATE chefs SET
                name = ($1),
                avatar_url = ($2)
                WHERE id = ($3)`

        const values = [
            data.name,
            data.avatar_url,
            data.id
        ]

        db.query(query,values,function(err,results){
            if(err) throw `Update function error ${err}`

            callback(results.rows[0])
        })
    },
    delete(id,callback){
        db.query(`DELETE FROM chefs WHERE id = $1`, [id],function(err,results){
            if(err) throw `delete function error ${err}`
            callback()
        })
    },
    recipesBy(id,callback){
        db.query(`SELECT recipes.* FROM recipes WHERE chef_id = $1`,[id],function(err,results){
            if(err) `recipesBy error ${err}`
            callback(results.rows)
        })
    },
    totalRecipesByChef(id,callback){
        db.query('SELECT count(recipes) AS total FROM recipes WHERE chef_id = $1',[id],function(err,results){
            if(err)throw `error totalRecipes ${err}`
            callback(results.rows[0])
        })
    },
    paginate(params){},
}