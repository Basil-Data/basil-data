const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

// Router to get the multiple choice arrays for Section Three
router.get('/', rejectUnauthenticated, async (req, res) => {

    let sqlText1 = `
        SELECT * FROM "anticipatedRisks";
    `;

    let sqlText2 = `
        SELECT * FROM "startupBarriers";
    `;

    let sqlText3 = `
        SELECT * FROM "growthFactors";
    `;

    const results1 = await pool.query(sqlText1);
    const results2 = await pool.query(sqlText2);
    const results3 = await pool.query(sqlText3);

    const results = {
        results1: results1.rows,
        results2: results2.rows,
        results3: results3.rows
    }

    res.send(results);
});

// Gets the individual enterprise's previous answers for the 
// answers
router.get('/:id', rejectUnauthenticated, async (req, res) => {

    let sqlText1 = `
        SELECT "riskId", "riskPreparedness"
        FROM "anticipatedRisksJunction"
        WHERE "enterpriseId" = $1;
    `;

    let sqlParams = [
        req.user.id
    ];

    const enterpriseRisk = await pool.query(sqlText1, sqlParams);
    console.log('enterprise risk:', enterpriseRisk);

    // const results = {        
    //     riskId: enterpriseRisk.rows[0].riskId ?? [],
    //     riskPreparedness: enterpriseRisk.rows[0].riskPreparedness ?? [],
    // }
    
    res.send({risks: enterpriseRisk.rows});
});


// POST endpoint for posting to junction table for check boxes
router.put('/', rejectUnauthenticated, async (req, res) => {

    console.log('req.body is:', req.body);

    try {
        let sqlText1 = `
        DELETE FROM "anticipatedRisksJunction"
        WHERE "enterpriseId" = $1;
        `;

        let sqlParams1 = [
            req.user.id
        ];

        await pool.query(sqlText1, sqlParams1);

        for (let risk of req.body.riskId) {

            let sqlText2 = `
                    INSERT INTO "anticipatedRisksJunction"
                        ("enterpriseId", "riskId", "riskPreparedness")
                    VALUES
                        ($1, $2, $3);
                `;

            let sqlParams2 = [
                req.user.id,
                req.body.riskId,
                req.body.riskPreparedness
            ];

            await pool.query(sqlText2, sqlParams2);

        }
        
        res.sendStatus(200);
    }
    catch (error){
        console.log('error in section 6 junction post,', error);
        res.sendStatus(500);
    }

});

module.exports = router;
