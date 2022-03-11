const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

// Router to get the multiple choice arrays for Section Three
router.get('/', rejectUnauthenticated, async (req, res) => {
  let sqlText =`
    SELECT * FROM "addressableMarket5"
    `;
  
  let sqlText2 = `
    SELECT * FROM "serviceableMarket5"
    `;
  
  let sqlText3 = `
    SELECT * FROM "obtainableMarket5"
    `;
  
  let sqlText4 = `
    SELECT * FROM "whyRealistic5"
    `;

  const results1 = await pool.query(sqlText);
  const results2 = await pool.query(sqlText2);
  const results3 = await pool.query(sqlText3);
  const results4 = await pool.query(sqlText4);

  const results = {
    results1: results1.rows,
    results2: results2.rows,
    results3: results3.rows,
    results4: results4.rows,
  }

  res.send(results);
});

// Gets the individual enterprise's previous answers for the 
// answers
router.get('/:id', async (req, res) => {
  let sqlText =`
    SELECT
      "addressableMarket5",
      "serviceableMarket5",
      "obtainableMarket5",
      "whyRealistic5"
    FROM "answers"
    WHERE "enterpriseId" = $1;
    `;
  
    let sqlParams = [
      req.user.id
    ]

    const answers = await pool.query(sqlText, sqlParams);

    const results = {
      ...answers.rows[0]
    }

    res.send(results)
});

// Post router for posting to joiner table for check boxes
router.post('/', rejectUnauthenticated, (req, res) => {

  let sqlText = `
    INSERT INTO "answers" ( "addressableMarket5", "serviceableMarket5", "obtainableMarket5", "whyRealistic5")
    VALUES ($1, $2, $3, $4)
    WHERE "answers"."id" = $5`

    let sqlParams = [
      req.body.addressableMarket5,
      req.body.serviceableMarket5,
      req.body.obtainableMarket5,
      req.body.whyRealistic5,
      req.user.id
    ]

    pool.query(sqlText, sqlParams)
      .then(() => res.sendStatus(201))
      .catch((err) => {
        console.error('POST section5 route failed', err);
        res.sendStatus(500);
      });
});

// Router for putting/updating answers into table as the
// individual enterprise changes their answers
router.put('/:id', rejectUnauthenticated, async (req, res) => {

  console.log(req.body);

  let sqlText =`
    UPDATE "answers"
    SET 
      "addressableMarket5" = $1,
      "serviceableMarket5" = $2,
      "obtainableMarket5" = $3,
      "whyRealistic5" = $4
    WHERE "answers"."enterpriseId" = $5;
     `;

  let sqlParams = [
    req.body.addressableMarket5,
    req.body.serviceableMarket5,
    req.body.obtainableMarket5,
    req.body.whyRealistic5,
    req.user.id
  ]

  pool.query(sqlText, sqlParams)
    .then(res.sendStatus(200))
    .catch((err) => console.error(err))
});

module.exports = router;
