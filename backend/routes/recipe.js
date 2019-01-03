/** Package imports **/
const express = require('express');
const router = express.Router({mergeParams: true});
const request = require('request-promise');

/** Routes **/
router.get('/', getRecipes);

async function getRecipes(req, res) {
    try {
        let ingredient;
        if (req.query.name)
            ingredient = req.query.name;
        const requestOptions = {
            method: 'GET',
            uri: 'https://api.edamam.com/search',
            json: true,
            qs: {
                q: ingredient,
                app_id: 'APP_ID',
                app_key: 'API_KEY',
                to: 5
            }
        };

        const recipes = await request(requestOptions);
        const filteredRecipes = [];

        for (const recipe in recipes.hits) {
            filteredRecipes.push(recipes.hits[recipe].recipe);
        }
        res.status(200).send({
            status: 'UPDATED',
            data: filteredRecipes
        });



    } catch (e) {
        res.status(500).send(e);
    }
}


module.exports = router;
