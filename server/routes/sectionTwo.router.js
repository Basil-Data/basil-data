const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.get('/impactSectors', (req, res) => {
    console.log('GET Impact Sectors');

    const queryText = `SELECT * FROM "impactSectors"`

    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
            console.log('result is:', result.rows);
        })
        .catch((error) => {
            res.sendStatus(500);
        })
})

module.exports = router;