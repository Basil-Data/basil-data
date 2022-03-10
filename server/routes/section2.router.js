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
})





router.get('/:id', async (req, res) => {

    const sqlText = `
        SELECT
            "impactSectors"."id",
            "impactSectors"."impactSector"
        FROM "user"
        JOIN "impactTableJunction"
            ON "user"."id" = "impactTableJunction"."enterpriseId"
        JOIN "impactSectors"
            ON "impactTableJunction"."impactSectorId" = "impactSector"."id"
        WHERE "user"."id" = $1    
    `;

    const sqlText2 = `
        SELECT
            "stakeholderSegments"."id",
            "stakeholderSegments"."segment"
        FROM "user"
        JOIN "stakeholderSegmentsJunction"
            ON "user"."id" = "stakeholderSegmentsJunction"."enterpriseId"
        JOIN "stakeholderSegments"
            ON "stakeholderSegmentsJunction"."segmentId" = "stakeholderSegments"."id"
        WHERE "user"."id" = $1;
    `;

    const sqlParams = [
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

module.exports = router;