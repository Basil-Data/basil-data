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
        SELECT 
            ARRAY_AGG("riskId")
        FROM "anticipatedRisksJunction"
        WHERE "enterpriseId" = $1;
    `;

    let sqlText2 = `
        SELECT 
            ARRAY_AGG("barrierId")
        FROM "startupBarriersJunction"
        WHERE "enterpriseId" = $1;
    `;

    let sqlText3 = `
        SELECT 
            ARRAY_AGG("factorId")
        FROM "growthFactorsJunction"
        WHERE "enterpriseId" = $1;
    `;

    let sqlText4 = `
        SELECT "riskPrep6", "barrierPlan6", "externalGrowth6"
        FROM "answers"
        WHERE "enterpriseId" = $1;
    `;

    let sqlParams = [
        req.user.id
    ];

    let riskId = await pool.query(sqlText1, sqlParams);
    let barrierId = await pool.query(sqlText2, sqlParams);
    let factorId = await pool.query(sqlText3, sqlParams);
    let answers = await pool.query(sqlText4, sqlParams);

    [riskId, barrierId, factorId, answers] = await Promise.all([
        pool.query(sqlText1, sqlParams),
        pool.query(sqlText2, sqlParams),
        pool.query(sqlText3, sqlParams),
        pool.query(sqlText4, sqlParams)
    ])

    res.send({
        riskId: riskId.rows[0]?.array_agg || [], 
        barrierId: barrierId.rows[0]?.array_agg || [], 
        factorId: factorId.rows[0]?.array_agg || [], 
        riskPrep6: answers.rows[0]?.riskPrep6 || '',
        barrierPlan6: answers.rows[0]?.barrierPlan6 || '',
        externalGrowth6: answers.rows[0]?.externalGrowth6 || ''
    });
});


// POST endpoint for posting to junction table for check boxes
router.put('/', rejectUnauthenticated, async (req, res) => {

    try {

        let sqlText = `
            UPDATE "answers"
            SET 
                "riskPrep6" = $2,
                "barrierPlan6" = $3,
                "externalGrowth6" = $4
            WHERE "answers"."enterpriseId" = $1;
        `;

        let sqlParams1 = [
            req.user.id,
            req.body.riskPrep6,
            req.body.barrierPlan6,
            req.body.externalGrowth6
        ];

        await pool.query(sqlText, sqlParams1);

        let sqlText1 = `
            DELETE FROM "anticipatedRisksJunction"
            WHERE "enterpriseId" = $1;
        `;

        let sqlText3 = `
            DELETE FROM "startupBarriersJunction"
            WHERE "enterpriseId" = $1;
        `;

        let sqlText5 = `
            DELETE FROM "growthFactorsJunction"
            WHERE "enterpriseId" = $1;
        `;

        let sqlParams = [
            req.user.id
        ];

        await Promise.all([
            pool.query(sqlText1, sqlParams),
            pool.query(sqlText3, sqlParams),
            pool.query(sqlText5, sqlParams)
        ])

        for (let risk of req.body.riskId) {

            let sqlText2 = `
                INSERT INTO "anticipatedRisksJunction"
                    ("enterpriseId", "riskId")
                VALUES
                    ($1, $2);
            `;

            let sqlParams2 = [
                req.user.id,
                risk
            ];

            await pool.query(sqlText2, sqlParams2);

        }

        for (let barrier of req.body.barrierId) {

            let sqlText4 = `
                INSERT INTO "startupBarriersJunction"
                    ("enterpriseId", "barrierId")
                VALUES
                    ($1, $2);
            `;

            let sqlParams4 = [
                req.user.id,
                barrier
            ];

            await pool.query(sqlText4, sqlParams4);

        }

        for (let factor of req.body.factorId) {

            let sqlText6 = `
                INSERT INTO "growthFactorsJunction"
                    ("enterpriseId", "factorId")
                VALUES
                    ($1, $2);
            `;

            let sqlParams6 = [
                req.user.id,
                factor
            ];

            await pool.query(sqlText6, sqlParams6);

        }
        res.sendStatus(200);
    }
    catch (error){
        console.log('error in section 6 junction post,', error);
        res.sendStatus(500);
    }

});

module.exports = router;