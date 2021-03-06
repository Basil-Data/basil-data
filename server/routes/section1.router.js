const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

// Router to get the multiple choice arrays for Section One
router.get('/', rejectUnauthenticated, async (req, res) => {

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

// Gets the individual enterprise's previous answers for the 
// answers
router.get('/:id', rejectUnauthenticated, async (req, res) => {
    console.log(req.user.id, req.params.id);

    let sqlText = `
        SELECT 
            ARRAY_AGG("advantageId")
        FROM "competitiveAdvantagesJunction"
        WHERE "enterpriseId" = $1;
    `;

    let sqlText2 = `
        SELECT
            "enterpriseSize1",
            TO_CHAR("dateFounded1", 'yyyy-MM-dd') AS "dateFounded1",
            "missionStatement1",
            "understandProblem1",
            "yearsCollectiveExperience1",
            "percentageBIPOC1",
            "percentageFemale1",
            "investorIntroduction1",
            "admin1"
        FROM "answers"
        WHERE "enterpriseId" = $1
    `;

    let sqlParams = [];
    if (req.user.authLevel === 'guest') {
        sqlParams = [
            req.user.id
        ];
    }
    else { 
        sqlParams = [
            req.params.id
        ]
    }
    

    const competitiveAdvantagesId = await pool.query(sqlText, sqlParams);
    const answers = await pool.query(sqlText2, sqlParams);

    const results = {
        competitiveAdvantagesId: Array.isArray(competitiveAdvantagesId.rows[0].array_agg) ? competitiveAdvantagesId.rows[0].array_agg : [],
        ...answers.rows[0]
    };

    res.send(results);
});

// Post router for posting to joiner table for check boxes
router.post('/', rejectUnauthenticated, async (req, res) => {

    // deletes all the existing rows 
    let sqlText = `
    DELETE FROM "competitiveAdvantagesJunction"
    WHERE "enterpriseId" = $1;
    `;

    let sqlParams = [
        req.user.id
    ];

    await pool.query(sqlText, sqlParams);

    // loops through the array and adds them anew to the table
    if (req.body.competitiveAdvantagesId) {
    for (let individual of req.body.competitiveAdvantagesId) {
            
        let sqlText2 = `
            INSERT INTO "competitiveAdvantagesJunction"
                ("enterpriseId", "advantageId")
            VALUES
                ($1, $2)
        `;

        let sqlParams2 = [
            req.user.id,
            individual
        ];

        await pool.query(sqlText2, sqlParams2);
    }}

    res.sendStatus(200);

})

// Router for putting/updating answers into table as the
// individual enterprise changes their answers
router.put('/', rejectUnauthenticated, (req, res) => {

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
            "investorIntroduction1" = $8,
            "admin1" = $9
        WHERE "answers"."enterpriseId" = $10;
    `;

    let sqlParams = [];
    if(req.user.authLevel === 'guest') {
        sqlParams = [
            req.body.enterpriseSize1,
            req.body.dateFounded1,
            req.body.missionStatement1,
            req.body.understandProblem1,
            req.body.yearsCollectiveExperience1,
            req.body.percentageBIPOC1,
            req.body.percentageFemale1,
            req.body.investorIntroduction1,
            req.body.admin1,
            req.user.id
        ];
    }
    else {
        sqlParams = [
            req.body.enterpriseSize1,
            req.body.dateFounded1,
            req.body.missionStatement1,
            req.body.understandProblem1,
            req.body.yearsCollectiveExperience1,
            req.body.percentageBIPOC1,
            req.body.percentageFemale1,
            req.body.investorIntroduction1,
            req.body.admin1,
            req.body.id
        ];
    }

    pool
        .query(sqlText, sqlParams)
        .then(res.sendStatus(200))
        .catch(error => {
            console.log('error posting answers section 1', error)
            res.sendStatus(500);
        })
});

module.exports = router;