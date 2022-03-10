const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');

/**
 * GET route template
 */

// Router to get the arrays for Section One
router.get('/', async (req, res) => {
    // GET route code here
    console.log('in get router for section 1')

    let sqlText = `
        SELECT *
        FROM "operatingSector"
    `;

    let sqlText2 = `
        SELECT *
        FROM "painPoints"
    `;

    let sqlText3 = `
        SELECT *
        FROM "technologies"
    `;

    const results1 = await pool.query(sqlText);
    const results2 = await pool.query(sqlText2);
    const results3 = await pool.query(sqlText3);

    const results = {
        operatingSector: results1.rows,
        painPoints: results2.rows,
        technologies: results3.rows
    };

    res.send(results);
});

router.get('/:id', async (req, res) => {
  // GET route code here
    console.log('in get router for section 1')

    let sqlText = `
        SELECT 
            "competitiveAdvantages"."id",
            "competitiveAdvantages"."advantage"
        FROM "user"
        JOIN "competitiveAdvantagesJunction"
            ON "user"."id" = "competitiveAdvantagesJunction"."enterpriseId"
        JOIN "competitiveAdvantages"
            ON "competitiveAdvantagesJunction"."advantageId" = "competitiveAdvantages"."id"
        WHERE "user"."id" = $1;
    `;

    let sqlText2 = `
        SELECT 
            "anticipatedRisks"."id",
            "anticipatedRisks"."risk"
        FROM "user"
        JOIN "anticipatedRisksJunction"
            ON "user"."id" = "anticipatedRisksJunction"."enterpriseId"
        JOIN "anticipatedRisks"
            ON "anticipatedRisksJunction"."riskId" = "anticipatedRisks"."id"
        WHERE "user"."id" = $1;
    `;

    let sqlParams = [
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

/**
 * PUT route template
 */
router.put('/:id', (req, res) => {
  // PUT route code here
    // Console log so you can see what is coming
    console.log(req.body)

    // Update the database, make sure to include all columns that
    // are coming from the saga
    let sqlText = `
        UPDATE "answers"
        SET 
            "payingCustomerProfile3" = $1,
            "mainCompetitors3" = $2,
            "differFromCompetitors3" = $3,
            "testimonial3" = $4,
            "businessModel3" = $5
        WHERE "answers"."enterpriseId" = $6;
    `;

    // match up everything
    let sqlParams = [
        req.body.payingCustomerProfile3,
        req.body.mainCompetitors3,
        req.body.differFromCompetitors3,
        req.body.testimonial3,
        req.body.businessModel3,
        req.params.id
    ];
    
    pool.query(sqlText, sqlParams)
        .then(res.sendStatus(200))
        .catch((err) => console.log('error in section three post', err))
});

module.exports = router;