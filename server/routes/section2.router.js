const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.get('/', async (req, res) => {
    console.log('in GET router for section 2');

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