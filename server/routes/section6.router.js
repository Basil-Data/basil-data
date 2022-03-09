const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    pool.query(`
        SELECT * FROM "anticipatedRisks";
    `).then(dbRes => {
        res.send(dbRes.rows)
    }).catch(err => {
        console.error('err in get section6:', err);
        res.sendStatus(500);
    })
});

module.exports = router;
