const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// This get is for the checkboxes on section 4
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

router.get('/:id', async (req,res) => {

  let sqlText =`
    SELECT
      ARRAY_AGG("indicatorId")
      FROM "progressIndicatorsJunction"
      WHERE "enterpriseId" = $1;
    `;
  
    let sqlParams = [
      req.user.id
    ];

    let sqlText2 =`
      SELECT
        "fundingReceived4",
        "customerGrowth4",
        "generatingRevenue4",
        "averageGrowth4",
        "makingProfit4",
        "netProfitMargin4",
        "customerAcquisitionCost4",
        "marketingExpenses4",
        "newCustomers4"
      FROM "answers"
      WHERE "enterpriseId" = $1;
        `;
      
    let sqlParams2 = [
      req.user.id
    ]

    const progressIndicatorId = await pool.query(sqlText, sqlParams);
    const answers = await pool.query(sqlText2, sqlParams);

    const results = {
      progressIndicatorId: Array.isArray(progressIndicatorId.rows[0].array_agg) ? progressIndicatorId.rows[0].array_agg : [],
      ...answers.rows[0]
    }

    res.send(results)
});

// Posts to junction table for checkboxes
router.post('/', async (req, res) => {
try {
  let sqlText1 =`
    DELETE FROM "progressIndicatorsJunction"
      WHERE "enterpriseId" = $1;
      `;
    
      let sqlParams1 = [
        req.user.id
      ];
      
      await pool.query(
        sqlText1,
        sqlParams1
      )
  
  for (let indicator of req.body.progressIndicatorId) {
    let sqlText2 = `
      INSERT INTO "progressIndicatorsJunction"
        ("enterpriseId", "indicatorId")
      VALUES
        ($1, $2)
    `;

    let sqlParams2 = [
      req.user.id,
      indicator
    ];

    await pool.query(sqlText2, sqlParams2)
  };

  
  
  res.sendStatus(200);
}
catch (err){
  console.error('POST failed', err);
}
});

// Sending answers to answers table
router.put('/', (req, res) => {
  console.log('req.body is', req.body);
  let sqlText = `
    UPDATE "answers"
    SET
      "fundingReceived4" = $1,
      "customerGrowth4" = $2,
      "generatingRevenue4" = $3,
      "averageGrowth4" = $4,
      "makingProfit4" = $5,
      "netProfitMargin4" = $6,
      "customerAcquisitionCost4" = $7,
      "newCustomers4" = $8
    WHERE "answers"."enterpriseId" = $9;
      `;
    
    let sqlParams = [
      req.body.fundingReceived4,
      req.body.customerGrowth4,
      req.body.generatingRevenue4,
      req.body.averageGrowth4,
      req.body.makingProfit4,
      req.body.netProfitMargin4,
      req.body.customerAcquisitionCost4,
      req.body.newCustomers4,
      req.user.id
    ]

    pool.query(sqlText, sqlParams)
      .then(res.sendStatus(200))
      .catch((err) => console.error(err))
});

module.exports = router;
