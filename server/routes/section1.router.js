const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');

/**
 * GET route template
 */

// Router to get the arrays for Section One
router.get('/', async (req, res) => {
    // GET route code here
    console.log('in get router for section 1')

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
  // GET route code here
    console.log('in get router for section 1')

    let sqlText = `
        SELECT 
            "competitiveAdvantages"."id",
            "competitiveAdvantages"."advantage"
        FROM "user"
        JOIN "competitiveAdvantagesJunction"
            ON "user"."id" = "competitiveAdvantagesJunction"."enterpriseId"
        JOIN "competitiveAdvantages"
            ON "competitiveAdvantagesJunction"."advantageId" = "competitiveAdvantages"."id"
        WHERE "user"."id" = $1;
    `;

    let sqlText2 = `
        SELECT 
            "anticipatedRisks"."id",
            "anticipatedRisks"."risk"
        FROM "user"
        JOIN "anticipatedRisksJunction"
            ON "user"."id" = "anticipatedRisksJunction"."enterpriseId"
        JOIN "anticipatedRisks"
            ON "anticipatedRisksJunction"."riskId" = "anticipatedRisks"."id"
        WHERE "user"."id" = $1;
    `;

    let sqlParams = [
        req.user.id
    ];

    const results1 = await pool.query(sqlText, sqlParams);
    const results2 = await pool.query(sqlText2, sqlParams);

    const results = {
        results1: results1.rows,
        results2: results2.rows
    }

    res.send(results);
});

// Router for putting/updating answers into table
router.put('/:id', (req, res) => {
  // PUT route code here

    // Console log so you can see what is coming
    console.log(req.body)

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
        req.params.id
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