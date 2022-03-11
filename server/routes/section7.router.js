const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, async (req, res) => {

    let sqlText1 = `
        SELECT * FROM "investmentVehicles";
    `;

    let sqlText2 = `
        SELECT * FROM "fundingUse";
    `;

    let sqlText3 = `
        SELECT * FROM "helpMoveForward";
    `;

    let sqlText4 = `
    SELECT * FROM "societalImpact";
    `;

    let sqlText5 = `
        SELECT * FROM "environmentalImpact";
    `;

    let sqlText6 = `
        SELECT * FROM "economicImpact";
    `;

    const results1 = await pool.query(sqlText1);
    const results2 = await pool.query(sqlText2);
    const results3 = await pool.query(sqlText3);
    const results4 = await pool.query(sqlText4);
    const results5 = await pool.query(sqlText5);
    const results6 = await pool.query(sqlText6);

    const results = {
        results1: results1.rows,
        results2: results2.rows,
        results3: results3.rows,
        results4: results4.rows,
        results5: results5.rows,
        results6: results6.rows
    }

    res.send(results);
});

router.get('/:id', rejectUnauthenticated, async (req, res) => {

    let sqlText1 = `
        SELECT 
            ARRAY_AGG("investmentVehicleId")
        FROM "investmentVehiclesJunction"
        WHERE "enterpriseId" = $1;
    `;

    let sqlText2 = `
        SELECT 
            ARRAY_AGG("fundingUseId")
        FROM "fundingUseJunction"
        WHERE "enterpriseId" = $1;
    `;

    let sqlText3 = `
        SELECT 
            ARRAY_AGG("assistanceId")
        FROM "helpMoveForwardJunction"
        WHERE "enterpriseId" = $1;
    `;

    let sqlText4 = `
        SELECT "raisingFunds7", "targetAmount7", "nextSteps7", "understandProblem7"
        FROM "answers"
        WHERE "enterpriseId" = $1;
    `;

    let sqlText5 = `
        SELECT * FROM "societalImpactJunction"
        WHERE "enterpriseId" = $1;
    `;

    let sqlText6 = `
        SELECT * FROM "environmentalImpactJunction"
        WHERE "enterpriseId" = $1;
    `;

    let sqlText7 = `
        SELECT * FROM "economicImpactJunction"
        WHERE "enterpriseId" = $1;
    `;

    let sqlParams = [
        req.user.id
    ];

    const investmentVehicleId = await pool.query(sqlText1, sqlParams);
    const fundingUseId = await pool.query(sqlText2, sqlParams);
    const assistanceId = await pool.query(sqlText3, sqlParams);
    const answers = await pool.query(sqlText4, sqlParams);
    const societalImpactId = await pool.query(sqlText5, sqlParams);
    const environmentalImpactId = await pool.query(sqlText6, sqlParams);
    const economicImpactId = await pool.query(sqlText7, sqlParams);

    const results = {        
        investmentVehicleId: Array.isArray(investmentVehicleId.rows[0].array_agg) ? investmentVehicleId.rows[0].array_agg : [],
        fundingUseId: Array.isArray(fundingUseId.rows[0].array_agg) ? fundingUseId.rows[0].array_agg : [],
        assistanceId: Array.isArray(assistanceId.rows[0].array_agg) ? assistanceId.rows[0].array_agg : [],
        ...answers.rows[0],
        societalImpactId: societalImpactId.rows[0].societalImpactId,
        environmentalImpactId: environmentalImpactId.rows[0].environmentalImpactId,
        economicImpactId: economicImpactId.rows[0].economicImpactId
    }

    res.send(results);
});

// Router for putting/updating answers into table
router.put('/', rejectUnauthenticated, (req, res) => {

    let sqlText = `
        UPDATE "answers"
        SET 
            "raisingFunds7" = $1,
            "targetAmount7" = $2,
            "nextSteps7" = $3,
            "understandProblem7" = $4
        WHERE "answers"."enterpriseId" = $5;
    `;

    let sqlParams = [
        req.body.raisingFunds7,
        Number(req.body.targetAmount7),
        req.body.nextSteps7,
        Number(req.body.understandProblem7),
        req.user.id
    ];

    pool
    .query(sqlText, sqlParams)
    .then(res.sendStatus(200))
    .catch(error => {
        console.log('error putting answers section 7', error)
        res.sendStatus(500);
    })
});

// Post router for posting to junction table for checkboxes
router.post('/', rejectUnauthenticated, async (req, res) => {
    try {
        let sqlText1 = `
        DELETE FROM "investmentVehiclesJunction"
        WHERE "enterpriseId" = $1;
        `;

        let sqlParams1 = [
            req.user.id
        ];

        await pool.query(
            sqlText1, 
            sqlParams1
        );

        let sqlText1a = `
        DELETE FROM "fundingUseJunction"
        WHERE "enterpriseId" = $1;
        `;

        let sqlParams1a = [
            req.user.id
        ];

        await pool.query(
            sqlText1a, 
            sqlParams1a
        );

        let sqlText1b = `
        DELETE FROM "helpMoveForwardJunction"
        WHERE "enterpriseId" = $1;
        `;

        let sqlParams1b = [
            req.user.id
        ];

        await pool.query(
            sqlText1b, 
            sqlParams1b
        );

        for (let vehicle of req.body.investmentVehicleId) {

            let sqlText2 = `
                INSERT INTO "investmentVehiclesJunction"
                    ("enterpriseId", "investmentVehicleId")
                VALUES
                    ($1, $2)
            `;

            let sqlParams2 = [
                req.user.id,
                vehicle
            ];

            await pool.query(sqlText2, sqlParams2)
        
        }

        for (let use of req.body.fundingUseId) {

            let sqlText3 = `
                INSERT INTO "fundingUseJunction"
                    ("enterpriseId", "fundingUseId")
                VALUES
                    ($1, $2)
            `;
    
            let sqlParams3 = [
                req.user.id,
                use
            ];
    
            await pool.query(sqlText3, sqlParams3)

        }

        for (let help of req.body.assistanceId) {

            let sqlText4 = `
                INSERT INTO "helpMoveForwardJunction"
                    ("enterpriseId", "assistanceId")
                VALUES
                    ($1, $2)
            `;
    
            let sqlParams4 = [
                req.user.id,
                help
            ];
    
            await pool.query(sqlText4, sqlParams4)

        }

        let sqlText5 = `
                INSERT INTO "societalImpactJunction"
                    ("enterpriseId", "societalImpactId")
                VALUES
                    ($1, $2)
            `;

        let sqlParams5 = [
            req.user.id,
            req.body.societalImpactId
        ];

        await pool.query(sqlText5, sqlParams5)

        let sqlText6 = `
                INSERT INTO "environmentalImpactJunction"
                    ("enterpriseId", "environmentalImpactId")
                VALUES
                    ($1, $2)
            `;

        let sqlParams6 = [
            req.user.id,
            req.body.environmentalImpactId
        ];

        await pool.query(sqlText6, sqlParams6)

        let sqlText7 = `
                INSERT INTO "economicImpactJunction"
                    ("enterpriseId", "economicImpactId")
                VALUES
                    ($1, $2)
            `;

        let sqlParams7 = [
            req.user.id,
            req.body.economicImpactId
        ];

        await pool.query(sqlText7, sqlParams7)

        res.sendStatus(200);
    }
    catch (error){
        console.log('error in section 7 junction post,', error);
        res.sendStatus(500);
    }

});

module.exports = router;