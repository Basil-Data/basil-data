const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', async (req, res) => {
    // GET route code here
    console.log('in get router for section 1')

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

module.exports = router;