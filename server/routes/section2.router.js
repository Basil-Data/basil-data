const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


router.get('/', async (req, res) => {

    const sqlText = 'SELECT * FROM "impactSectors"';
    const sqlText2 = 'SELECT * FROM "supportiveCharacteristics"';
    const sqlText3 = 'SELECT * FROM "sdg" ORDER BY "sdg"."id" ASC';
    const sqlText4 = 'SELECT * FROM "stakeholderSegments"';

    const results1 = await pool.query(sqlText);
    const results2 = await pool.query(sqlText2);
    const results3 = await pool.query(sqlText3);
    const results4 = await pool.query(sqlText4);

    const results = {
        impactSectors: results1.rows,
        supportiveCharacteristics: results2.rows,
        sdg: results3.rows,
        stakeholderSegments: results4.rows
    }

    res.send(results);
});





router.get('/:id', async (req, res) => {

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
        JOIN "stakeholderSegments"
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


router.put('/', (req, res) => {
    console.log('PUT section2');
    console.log('req.body:', req.body);
    console.log('req.user.id', req.user.id);
    
    

    const sqlText = `
        UPDATE "answers"
        SET
            "problemBeingSolved2" = $1, 
            "costOfProblem2" = $2,
            "howTheySolve2" = $3,
            "whoBenefits2" = $4
        WHERE "answers"."enterpriseId" = $5;
    `;  


    const sqlParams = [
        req.body.problemBeingSolved2,
        req.body.costOfProblem2,
        req.body.howTheySolve2,
        req.body.whoBenefits2,
        req.user.id
    ];

    pool.query(sqlText, sqlParams)
        .then(res.sendStatus(200))
        .catch((error) => {
            console.log('PUT section2 error', error); 
        })
})

router.post('/', (req, res) => {
    console.log('req.body', req.body);

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

        pool.query(sqlText, sqlParams)
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

        pool.query(sqlText, sqlParams)
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

        pool.query(sqlText, sqlParams)
        }   
    }
        res.sendStatus(200);
})

module.exports = router;