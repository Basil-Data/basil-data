const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');

/**
 * GET route template
 */

// Router to get the arrays for Section One
router.get('/', async (req, res) => {

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

    let sqlText = `
        SELECT 
            ARRAY_AGG("sectorId")
        FROM "operatingSectorJunction"
        WHERE "enterpriseId" = $1;
    `;

    let sqlText2 = `
        SELECT 
            ARRAY_AGG("painPointId")
        FROM "painPointsJunction"
        WHERE "enterpriseId" = $1;
    `;

    let sqlText3 = `
        SELECT 
            ARRAY_AGG("technologyId")
        FROM "technologiesJunction"
        WHERE "enterpriseId" = $1;
    `;

    let sqlText4 = `
        SELECT
            "payingCustomerProfile3",
            "mainCompetitors3",
            "differFromCompetitors3",
            "testimonial3",
            "businessModel3"
        FROM "answers"
        WHERE "enterpriseId" = $1
    `;

    let sqlParams = [
        req.user.id
    ];

    const operatingSectorId = await pool.query(sqlText, sqlParams);
    const paintPointsId = await pool.query(sqlText2, sqlParams);
    const technologiesId = await pool.query(sqlText3, sqlParams);
    const answers = await pool.query(sqlText4, sqlParams);

    const results = {
        operatingSectorId: Array.isArray(operatingSectorId.rows[0].array_agg) ? operatingSectorId.rows[0].array_agg : [],
        paintPointsId: Array.isArray(paintPointsId.rows[0].array_agg) ? paintPointsId.rows[0].array_agg : [],
        technologiesId: Array.isArray(technologiesId.rows[0].array_agg) ? technologiesId.rows[0].array_agg : [],
        ...answers.rows[0]
    }

    res.send(results);
});

// Post router for posting to joiner table for check boxes
router.post('/', async (req, res) => {

    console.log(req.body)

    for (let sector of req.body.operatingSectorId) {

    let sqlText = `
        INSERT INTO "operatingSectorJunction"
            ("enterpriseId", "sectorId")
        VALUES
            ($1, $2)
    `;

    let sqlParams = [
        req.user.id,
        sector
    ];

    await pool.query(sqlText, sqlParams)
    }

    for (let point of req.body.paintPointsId) {

        let sqlText = `
            INSERT INTO "painPointsJunction"
                ("enterpriseId", "painPointId")
            VALUES
                ($1, $2)
        `;
    
        let sqlParams = [
            req.user.id,
            point
        ];
    
        await pool.query(sqlText, sqlParams)
    }

    for (let tech of req.body.technologiesId) {

        let sqlText = `
            INSERT INTO "technologiesJunction"
                ("enterpriseId", "technologyId")
            VALUES
                ($1, $2)
        `;
    
        let sqlParams = [
            req.user.id,
            tech
        ];
    
        await pool.query(sqlText, sqlParams)
    }

    res.sendStatus(200);

});

router.put('/:id', (req, res) => {
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