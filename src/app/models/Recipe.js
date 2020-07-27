const db = require('../../config/db')
const { create } = require('browser-sync')
const {date} = require('../../lib/util')

module.exports = {
    all(callback){
        db.query(`SELECT recipes.*, chefs.name as chef_names FROM recipes 
        LEFT JOIN chefs ON (recipes.chef_id = chefs.id)
        order by chef_names`,
        function(err, results){

            if(err) throw `all function error ${err}`
            callback(results.rows)
        })
    },
    create(data, callback){
        const query = `
            INSERT INTO recipes (
                image,
                chef_id,
                title,
                ingredients,
                preparation,
                information,
                created_at
            ) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING id`

        const values = [
            data.image,
            data.chef,
            data.title,
            data.ingredients,
            data.preparation,
            data.information,
            date(Date.now()).iso
        ]

        db.query(query,values,function(err,results){
            if(err) throw `create function error ${err}`

            callback(results.rows[0])
        })
    },
    find(id,callback){
        db.query(`SELECT * FROM recipes WHERE id = $1`,[id],
        function(err,results){
            if(err)throw `find function error ${err}`

            callback(results.rows[0])
        })
    },
    findBy(filter,callback){

    },
    update(data,callback){
        const query = `
            UPDATE recipes SET
                image = ($1),
                chef_id = ($2),
                title = ($3),
                ingredients = ($4),
                preparation = ($5),
                information = ($6)
                WHERE id = ($7)`

        const values = [
            data.image,
            data.chef,
            data.title,
            data.ingredients,
            data.preparation,
            data.information,
            data.id
        ]

        db.query(query,values,function(err,results){
            if(err) throw `Update function error ${err}`

            callback(results.rows[0])
        })
    },
    delete(id,callback){
        db.query(`DELETE FROM recipes WHERE id = $1`, [id],function(err,results){
            if(err) throw `delete function error ${err}`
            callback()
        })
    },
    chefOptions(callback){
        db.query(`SELECT name, id FROM chefs ORDER BY name ASC`, function(err,results){
            if(err) throw `cheOptions error ${err}`
            callback(results.rows)
        })
    },
    paginate(params){},
}