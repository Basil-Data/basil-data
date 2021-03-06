const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, async (req,res) => {
    
	let sqlText = `
	SELECT 
		"user"."enterpriseName",
		"user"."logoUrl",
		"answers".*,
		ARRAY_AGG(DISTINCT("anticipatedRisksJunction"."riskId")) AS "anticipatedRisks",
		ARRAY_AGG(DISTINCT("competitiveAdvantagesJunction"."advantageId")) AS "competitiveAdvantages",
		ARRAY_AGG(DISTINCT("developmentStage"."stage")) AS "developmentStage",
		ARRAY_AGG(DISTINCT("economicImpact"."impact")) AS "economicImpact",
		ARRAY_AGG(DISTINCT("environmentalImpact"."impact")) AS "environmentalImpact",
		ARRAY_AGG(DISTINCT("fundingUse"."fundingUse")) AS "fundingUse",
		ARRAY_AGG(DISTINCT("growthFactorsJunction"."factorId")) AS "growthFactors",
		ARRAY_AGG(DISTINCT("helpMoveForward"."assistance")) AS "helpMoveForward",
		ARRAY_AGG(DISTINCT("impactSectors"."impactSector")) AS "impactSectors",
		ARRAY_AGG(DISTINCT("indicators"."indicator")) AS "indicators",
		ARRAY_AGG(DISTINCT("investmentStage"."stage")) AS "investmentStage",
		ARRAY_AGG(DISTINCT("investmentVehicles"."investmentVehicle")) AS "investmentVehicles",
		ARRAY_AGG(DISTINCT("operatingSector"."sector")) AS "operatingSector",
		ARRAY_AGG(DISTINCT("painPoints"."painPoint")) AS "painPoints",
		ARRAY_AGG(DISTINCT("progressIndicators"."indicator")) AS "progressIndicators",
		"sdg"."sdg",
		"sdg"."icon",
		ARRAY_AGG(DISTINCT("societalImpact"."societalImpact")) AS "societalImpact",
		ARRAY_AGG(DISTINCT("stakeholderSegments"."segment")) AS "societalImpact",
		ARRAY_AGG(DISTINCT("startupBarriersJunction"."barrierId")) AS "startupBarriers",
		ARRAY_AGG(DISTINCT("supportiveCharacteristics"."characteristic")) AS "supportiveCharacteristics",
		ARRAY_AGG(DISTINCT("technologies"."technology")) AS "technologies"
	FROM "answers"
	LEFT JOIN "user"
		ON "answers"."enterpriseId" = "user"."id"
	LEFT JOIN "anticipatedRisksJunction" 
		ON "user"."id" = "anticipatedRisksJunction"."enterpriseId"
	LEFT JOIN "anticipatedRisks"
		ON "anticipatedRisksJunction"."riskId" = "anticipatedRisks"."id"
	LEFT JOIN "competitiveAdvantagesJunction" 
		ON "user"."id" = "competitiveAdvantagesJunction"."enterpriseId"
	LEFT JOIN "competitiveAdvantages"
		ON "competitiveAdvantagesJunction"."advantageId" = "competitiveAdvantages"."id"
	LEFT JOIN "developmentStageJunction" 
		ON "user"."id" = "developmentStageJunction"."enterpriseId"
	LEFT JOIN "developmentStage"
		ON "developmentStageJunction"."developmentStageId" = "developmentStage"."id"
	LEFT JOIN "economicImpactJunction" 
		ON "user"."id" = "economicImpactJunction"."enterpriseId"
	LEFT JOIN "economicImpact"
		ON "economicImpactJunction"."economicImpactId" = "economicImpact"."id"
	LEFT JOIN "environmentalImpactJunction" 
		ON "user"."id" = "environmentalImpactJunction"."enterpriseId"
	LEFT JOIN "environmentalImpact"
		ON "environmentalImpactJunction"."environmentalImpactId" = "environmentalImpact"."id"
	LEFT JOIN "fundingUseJunction" 
		ON "user"."id" = "fundingUseJunction"."enterpriseId"
	LEFT JOIN "fundingUse"
		ON "fundingUseJunction"."fundingUseId" = "fundingUse"."id"
	LEFT JOIN "growthFactorsJunction" 
		ON "user"."id" = "growthFactorsJunction"."enterpriseId"
	LEFT JOIN "growthFactors"
		ON "growthFactorsJunction"."factorId" = "growthFactors"."id"
	LEFT JOIN "helpMoveForwardJunction" 
		ON "user"."id" = "helpMoveForwardJunction"."enterpriseId"
	LEFT JOIN "helpMoveForward"
		ON "helpMoveForwardJunction"."assistanceId" = "helpMoveForward"."id"
	LEFT JOIN "impactTableJunction" 
		ON "user"."id" = "impactTableJunction"."enterpriseId"
	LEFT JOIN "impactSectors"
		ON "impactTableJunction"."impactSectorId" = "impactSectors"."id"
	LEFT JOIN "indicatorsJunction" 
		ON "user"."id" = "indicatorsJunction"."enterpriseId"
	LEFT JOIN "indicators"
		ON "indicatorsJunction"."indicatorId" = "indicators"."id"
	LEFT JOIN "investmentStageJunction" 
		ON "user"."id" = "investmentStageJunction"."enterpriseId"
	LEFT JOIN "investmentStage"
		ON "investmentStageJunction"."investmentStageId" = "investmentStage"."id"
	LEFT JOIN "investmentVehiclesJunction" 
		ON "user"."id" = "investmentVehiclesJunction"."enterpriseId"
	LEFT JOIN "investmentVehicles"
		ON "investmentVehiclesJunction"."investmentVehicleId" = "investmentVehicles"."id"
	LEFT JOIN "operatingSectorJunction" 
		ON "user"."id" = "operatingSectorJunction"."enterpriseId"
	LEFT JOIN "operatingSector"
		ON "operatingSectorJunction"."sectorId" = "operatingSector"."id"
	LEFT JOIN "painPointsJunction" 
		ON "user"."id" = "painPointsJunction"."enterpriseId"
	LEFT JOIN "painPoints"
		ON "painPointsJunction"."painPointId" = "painPoints"."id"
	LEFT JOIN "progressIndicatorsJunction" 
		ON "user"."id" = "progressIndicatorsJunction"."enterpriseId"
	LEFT JOIN "progressIndicators"
		ON "progressIndicatorsJunction"."indicatorId" = "progressIndicators"."id"
	LEFT JOIN "sdgJunction" 
		ON "user"."id" = "sdgJunction"."enterpriseId"
	LEFT JOIN "sdg"
		ON "sdgJunction"."sdgId" = "sdg"."id"
	LEFT JOIN "societalImpactJunction" 
		ON "user"."id" = "societalImpactJunction"."enterpriseId"
	LEFT JOIN "societalImpact"
		ON "societalImpactJunction"."societalImpactId" = "societalImpact"."id"
	LEFT JOIN "stakeholderSegmentsJunction" 
		ON "user"."id" = "stakeholderSegmentsJunction"."enterpriseId"
	LEFT JOIN "stakeholderSegments"
		ON "stakeholderSegmentsJunction"."segmentId" = "stakeholderSegments"."id"
	LEFT JOIN "startupBarriersJunction" 
		ON "user"."id" = "startupBarriersJunction"."enterpriseId"
	LEFT JOIN "startupBarriers"
		ON "startupBarriersJunction"."barrierId" = "startupBarriers"."id"
	LEFT JOIN "supportiveCharacteristicsJunction" 
		ON "user"."id" = "supportiveCharacteristicsJunction"."enterpriseId"
	LEFT JOIN "supportiveCharacteristics"
		ON "supportiveCharacteristicsJunction"."characteristicId" = "supportiveCharacteristics"."id"	
	LEFT JOIN "technologiesJunction" 
		ON "user"."id" = "technologiesJunction"."enterpriseId"
	LEFT JOIN "technologies"
		ON "technologiesJunction"."technologyId" = "technologies"."id"
	WHERE "user"."id" = $1
	GROUP BY
		"answers"."id",
		"user"."enterpriseName",
		"user"."logoUrl",
		"sdg"."sdg",
		"sdg"."icon";
		`;

	const sqlText2 = `
		SELECT
			"indicators"."id",
			"indicators"."targetNumber",
			"indicators"."target"
		FROM "indicators"
		LEFT JOIN "indicatorsJunction"
			ON "indicatorsJunction"."indicatorId" = "indicators"."id"
		LEFT JOIN "user"
			ON "user"."id" = "indicatorsJunction"."enterpriseId"
		WHERE "user"."id" = $1;
	`;

    const overallAnswers = await pool.query(sqlText, [req.user.id])
	const indicatorAnswers = await pool.query(sqlText2, [req.user.id])
	
	const results = {
		...overallAnswers.rows[0],
		indicatorAnswers: indicatorAnswers.rows
	}

	res.send(results);
})

module.exports = router;
