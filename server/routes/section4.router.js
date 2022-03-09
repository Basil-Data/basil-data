const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', async (req, res) => {
  
  let sqlText = `
    SELECT * FROM "developmentStage"
  `;

  let sqlText2 =`
    SELECT * FROM "investmentStage"
  `;

  let sqlText3 =`
    SELECT * FROM "progressIndicators"
  `;

  const results1 = await pool.query(sqlText);
  const results2 = await pool.query(sqlText2);
  const results3 = await pool.query(sqlText3);

  const results = {
    results1: results1.rows,
    results2: results2.rows,
    results3: results3.rows
  }

  res.send(results);
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
