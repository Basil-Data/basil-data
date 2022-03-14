const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

// Router to get the multiple choice arrays for Section Two
router.get('/', rejectUnauthenticated, async (req, res) => {

    const sqlText = 'SELECT * FROM "impactSectors"';
    const sqlText2 = 'SELECT * FROM "supportiveCharacteristics"';
    const sqlText3 = 'SELECT * FROM "sdg" ORDER BY "sdg"."id" ASC';
    const sqlText4 = 'SELECT * FROM "stakeholderSegments"';
    const sqlText5 = 'SELECT * FROM "indicators" ORDER BY "indicators"."sdgId" ASC';

    const results1 = await pool.query(sqlText);
    const results2 = await pool.query(sqlText2);
    const results3 = await pool.query(sqlText3);
    const results4 = await pool.query(sqlText4);
    const results5 = await pool.query(sqlText5);

    const results = {
        impactSectors: results1.rows,
        supportiveCharacteristics: results2.rows,
        sdg: results3.rows,
        stakeholderSegments: results4.rows,
        indicators: results5.rows
    }

    res.send(results);
    
});

// Gets the individual enterprise's previous answers for the 
// answers
router.get('/:id', rejectUnauthenticated, async (req, res) => {

    const sqlText = `
        SELECT
            ARRAY_AGG("impactSectors"."id")
        FROM "user"
        JOIN "impactTableJunction"
            ON "user"."id" = "impactTableJunction"."enterpriseId"
        JOIN "impactSectors"
            ON "impactTableJunction"."impactSectorId" = "impactSectors"."id"
        WHERE "user"."id" = $1    
    `;

    const sqlText2 = `
        SELECT
            ARRAY_AGG("stakeholderSegments"."id")
        FROM "user"
        JOIN "stakeholderSegmentsJunction"
            ON "user"."id" = "stakeholderSegmentsJunction"."enterpriseId"
        JOIN "stakeholderSegments"
            ON "stakeholderSegmentsJunction"."segmentId" = "stakeholderSegments"."id"
        WHERE "user"."id" = $1    
    `;

    const sqlText3 = `
        SELECT
            "problemBeingSolved2",
            "costOfProblem2",
            "howTheySolve2",
            "whoBenefits2"
        FROM "answers"
        WHERE "enterpriseId" = $1
    `;

    const sqlParams = [
        req.user.id
    ];

    const impactSectorId = await pool.query(sqlText, sqlParams);
    const segmentId = await pool.query(sqlText2, sqlParams);
    const answers = await pool.query(sqlText3, sqlParams);

    const results = {
        impactSectorId: Array.isArray(impactSectorId.rows[0].array_agg) ? impactSectorId.rows[0].array_agg : [],
        segmentId: Array.isArray(segmentId.rows[0].array_agg) ? segmentId.rows[0].array_agg : [],
        ...answers.rows[0]
    }

    res.send(results);

});

// Router for putting/updating answers into table as the
// individual enterprise changes their answers
router.put('/', rejectUnauthenticated, (req, res) => {
    console.log('PUT section2');
    console.log('req.body:', req.body);
    console.log('req.user.id', req.user.id);

    const sqlText = `
        UPDATE "answers"
        SET
            "problemBeingSolved2" = $1, 
            "costOfProblem2" = $2,
            "howTheySolve2" = $3,
            "whoBenefits2" = $4,
            "elaborateOnIndicators2" = $5,
            "organizationLocation2" = $6,
            "focusedEfforts2" = $7,
            "specificChanges2" = $8,
            "measuredOutcome2" = $9,
            "secondarySDG2" = $10,
            "impactLevel2" = $11
        WHERE "answers"."enterpriseId" = $12;
    `;  


    const sqlParams = [
        req.body.problemBeingSolved2,
        req.body.costOfProblem2,
        req.body.howTheySolve2,
        req.body.whoBenefits2,
        req.body.elaborateOnIndicators2,
        req.body.organizationLocation2,
        req.body.focusedEfforts2,
        req.body.specificChanges2,
        req.body.measuredOutcome2,
        req.body.secondarySDG2,
        req.body.impactLevel2,
        req.user.id
    ];

    pool.query(sqlText, sqlParams)
        .then(res.sendStatus(200))
        .catch((error) => {
            console.log('PUT section2 error', error); 
        })
})

router.post('/', rejectUnauthenticated, async (req, res) => {
    console.log('req.body', req.body);

    // deletes all the existing rows 
    let sqlText = `
        DELETE FROM "impactTableJunction"
        WHERE "enterpriseId" = $1;
    `;

    let sqlText2 = `
        DELETE FROM "supportiveCharacteristicsJunction"
        WHERE "enterpriseId" = $1;
    `;

    let sqlText3 = `
        DELETE FROM "stakeholderSegmentsJunction"
        WHERE "enterpriseId" = $1;
    `;

    let sqlText4 = `
        DELETE FROM "sdgJunction"
        WHERE "enterpriseId" = $1;
    `;

    let sqlText5 = `
        DELETE FROM "indicatorsJunction"
        WHERE "enterpriseId" = $1;
    `;

    let sqlParams = [
        req.user.id
    ];



    await pool.query(sqlText, sqlParams);
    await pool.query(sqlText2, sqlParams);
    await pool.query(sqlText3, sqlParams);
    await pool.query(sqlText4, sqlParams);
    await pool.query(sqlText5, sqlParams);

    for (let impact of req.body.impactSectorId) {

        let sqlText = `
            INSERT INTO "impactTableJunction"
                ("enterpriseId", "impactSectorId")
            VALUES
                ($1, $2)
        `;

        let sqlParams = [
            req.user.id,
            impact
        ];

        pool.query(sqlText, sqlParams);
    }

    for (let characteristic of req.body.characteristicId) {
         let sqlText = `
            INSERT INTO "supportiveCharacteristicsJunction"
                ("enterpriseId", "characteristicId")
            VALUES
                ($1, $2)
            `;

        let sqlParams = [
            req.user.id,
            characteristic
        ];

        pool.query(sqlText, sqlParams);
    }

    if (req.body.segmentId) {
        for (let segment of req.body.segmentId) {
            let sqlText = `
                INSERT INTO "stakeholderSegmentsJunction"
                    ("enterpriseId", "segmentId")
                VALUES
                    ($1, $2)
            `;

        let sqlParams = [
            req.user.id,
            segment
        ];

        pool.query(sqlText, sqlParams);
        }   
    }

    if (req.body.sdgId) {
        let sqlText = `
            INSERT INTO "sdgJunction"
                ("enterpriseId", "sdgId")
            VALUES
                ($1, $2)
        `;

        let sqlParams = [
            req.user.id,
            req.body.sdgId
        ];

        pool.query(sqlText, sqlParams);
    }

    for (let indicator of req.body.indicatorId) {
        let sqlText = `
            INSERT INTO "indicatorsJunction"
                ("enterpriseId", "indicatorId")
            VALUES
                ($1, $2)
        `;

        let sqlParams = [
            req.user.id,
            indicator
        ];

        pool.query(sqlText, sqlParams);
    }

        res.sendStatus(200);
})

module.exports = router;