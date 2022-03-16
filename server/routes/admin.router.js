const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req,res) => {

    if (req.user.authLevel === 'admin') {
    
        let sqlText = `
            SELECT
                "user"."id",
                "user"."enterpriseName",
                "user"."logoUrl"
            FROM "user"
            WHERE "user"."authLevel" = 'guest';
        `;

        pool
            .query(sqlText)
            .then(results => res.send(results.rows))
            .catch(error => console.log('error getting admin', error))
    }
})

module.exports = router;
