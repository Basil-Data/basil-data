const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', async (req, res) => {

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

module.exports = router;
