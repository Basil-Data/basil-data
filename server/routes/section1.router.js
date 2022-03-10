const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');

/**
 * GET route template
 */

// Router to get the arrays for Section One
router.get('/', async (req, res) => {

    let sqlText = `
        SELECT *
        FROM "competitiveAdvantages"
    `;

    const results1 = await pool.query(sqlText);

    const results = {
        competitiveAdvantages: results1.rows,
    };

    res.send(results);
});

router.get('/:id', async (req, res) => {

    let sqlText = `
        SELECT 
            ARRAY_AGG("advantageId")
        FROM "competitiveAdvantagesJunction"
        WHERE "enterpriseId" = $1;
    `;

    let sqlParams = [
        req.user.id
    ];

    const competitiveAdvantagesId = await pool.query(sqlText, sqlParams);

    const results = {
        competitiveAdvantagesId: competitiveAdvantagesId.rows[0].array_agg,
    }

    res.send(results);
});

// Post router for posting to joiner table for check boxes
router.post('/', (req, res) => {

    console.log(req.body)

    for (let individual of req.body.competitiveAdvantagesId) {

    let sqlText = `
        INSERT INTO "competitiveAdvantagesJunction"
            ("enterpriseId", "advantageId")
        VALUES
            ($1, $2)
    `;

    let sqlParams = [
        req.user.id,
        individual
    ];

    pool.query(sqlText, sqlParams)
    }

    res.sendStatus(200);

})

// Router for putting/updating answers into table
router.put('/', (req, res) => {

    let sqlText = `
        UPDATE "answers"
        SET 
            "enterpriseSize1" = $1,
            "dateFounded1" = $2,
            "missionStatement1" = $3,
            "understandProblem1" = $4,
            "yearsCollectiveExperience1" = $5,
            "percentageBIPOC1" = $6,
            "percentageFemale1" = $7,
            "investorIntroduction1" = $8
        WHERE "answers"."enterpriseId" = $9;
    `;

    let sqlParams = [
        req.body.enterpriseSize1,
        req.body.dateFounded1,
        req.body.missionStatement1,
        req.body.understandProblem1,
        req.body.yearsCollectiveExperience1,
        req.body.percentageBIPOC1,
        req.body.percentageFemale1,
        req.body.investorIntroduction1,
        req.user.id
    ];

    pool
        .query(sqlText, sqlParams)
        .then(res.sendStatus(200))
        .catch(error => {
            console.log('error posting answers section 1', error)
            res.sendStatus(500);
        })
});

module.exports = router;