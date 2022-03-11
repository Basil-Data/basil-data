
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

-- database name: basil_data

DROP TABLE "user";
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "enterpriseName" VARCHAR (255),
    "email" VARCHAR (255) NOT NULL,
    "logoUrl" VARCHAR (1024),
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "authLevel" VARCHAR (255) DEFAULT 'guest'
);

DROP TABLE "answers";
CREATE TABLE "answers" (
    "id" SERIAL PRIMARY KEY,
    "enterpriseId" INTEGER DEFAULT NULL,
    "enterpriseSize1" INTEGER DEFAULT NULL,
    "dateFounded1" DATE DEFAULT NULL,
    "missionStatement1" VARCHAR (1024) DEFAULT NULL,
    "understandProblem1" INTEGER DEFAULT NULL,
    "yearsCollectiveExperience1" INTEGER DEFAULT NULL,
    "percentageBIPOC1" INTEGER DEFAULT NULL,
    "percentageFemale1" INTEGER DEFAULT NULL,
    "investorIntroduction1" VARCHAR (1024) DEFAULT NULL,
    "problemBeingSolved2" VARCHAR (1024) DEFAULT NULL,
    "costOfProblem2" VARCHAR (1024) DEFAULT NULL,
    "howTheySolve2" VARCHAR (1024) DEFAULT NULL,
    "whoBenefits2" VARCHAR (1024) DEFAULT NULL,
    "stakeholderSegments2" VARCHAR (1024) DEFAULT NULL,
    "organizationLocation2" VARCHAR (1024) DEFAULT NULL,
    "targetPopulationLocation2" VARCHAR (1024) DEFAULT NULL,
    "specificChanges2" VARCHAR (1024) DEFAULT NULL,
    "measuredOutcome2" BOOLEAN DEFAULT NULL,
	"payingCustomerProfile3" VARCHAR (1024) DEFAULT NULL,
	"mainCompetitors3" VARCHAR (1024) DEFAULT NULL,
	"differFromCompetitors3" VARCHAR (1024) DEFAULT NULL,
	"testimonial3" VARCHAR (1024) DEFAULT NULL,
	"businessModel3" VARCHAR (1024) DEFAULT NULL,
	"fundingReceived4" INTEGER DEFAULT NULL,
	"customerGrowth4" INTEGER DEFAULT NULL,
	"generatingRevenue4" BOOLEAN DEFAULT NULL,
	"averageGrowth4" INTEGER DEFAULT NULL,
	"makingProfit4" BOOLEAN DEFAULT NULL,
	"netProfitMargin4" INTEGER DEFAULT NULL,
	"customerAcquisitionCost4" INTEGER DEFAULT NULL,
	"marketingExpenses4" INTEGER DEFAULT NULL,
	"newCustomers4" INTEGER DEFAULT NULL,
	"addressableMarket5" INTEGER DEFAULT NULL,
	"serviceableMarket5" INTEGER DEFAULT NULL,
	"obtainableMarket5" INTEGER DEFAULT NULL,
	"whyRealistic5" VARCHAR (1024) DEFAULT NULL,
	"raisingFunds7" VARCHAR (255) DEFAULT NULL,
	"targetAmount7" INTEGER DEFAULT NULL,
	"nextSteps7" VARCHAR (1024) DEFAULT NULL,
	"understandProblem7" INTEGER DEFAULT NULL
);

DROP TABLE "competitiveAdvantages";
CREATE TABLE "competitiveAdvantages" (
	"id" SERIAL PRIMARY KEY,
	"advantage" VARCHAR (255)
);
INSERT INTO "competitiveAdvantages"
	("advantage")
VALUES
	('Patent'), ('Brand License'), ('Regulation'), ('Trademark'), ('Copyrights'), ('Software'), ('Customer Lists'), ('Personal Accreditation');

DROP TABLE "competitiveAdvantagesJunction";
CREATE TABLE "competitiveAdvantagesJunction" (
	"id" SERIAL PRIMARY KEY,
	"enterpriseId" INTEGER,
	"advantageId" INTEGER
);

DROP TABLE "impactSectors";
CREATE TABLE "impactSectors" (
	"id" SERIAL PRIMARY KEY,
	"impactSector" VARCHAR (255)
);

INSERT INTO "impactSectors"
	("impactSector")
VALUES
	('Animal'), 
	('Arts & Culture'), 
	('Environment'), 
	('Community Improvement'), 
	('Education'), 
	('Health'), 
	('Human Services'), 
	('Religious'),
	('Social Advocacy'),
	('Youth Development');

DROP TABLE "impactTableJunction";
CREATE TABLE "impactTableJunction" (
	"id" SERIAL PRIMARY KEY,
	"enterpriseId" INTEGER,
	"impactSectorId" INTEGER
);

DROP TABLE "supportiveCharacteristics";
CREATE TABLE "supportiveCharacteristics" (
	"id" SERIAL PRIMARY KEY,
	"characteristic" VARCHAR (255)
);
INSERT INTO "supportiveCharacteristics"
	("characteristic")
VALUES
	('Research-backed'), 
	('Proven outside of Target Market'), 
	('Internal Measurement shows effectiveness'), 
	('None of the above - Innovative approach');

DROP TABLE "supportiveCharacteristicsJunction";
CREATE TABLE "supportiveCharacteristicsJunction" (
	"id" SERIAL PRIMARY KEY,
	"enterpriseId" INTEGER,
	"characteristicId" INTEGER
);

DROP TABLE "sdg";
CREATE TABLE "sdg" (
	"id" SERIAL PRIMARY KEY,
	"sdg" VARCHAR (255),
	"icon" VARCHAR (1024)
);
INSERT INTO "sdg"
	("sdg", "icon")
VALUES
	('No Poverty', 'public/images/SDGs/E-WEB-Goal-01.png'),
	('Zero Hunger', 'public/images/SDGs/E-WEB-Goal-02.png'),
	('Good Health and Well-being', 'public/images/SDGs/E-WEB-Goal-03.png'),
	('Quality Education', 'public/images/SDGs/E-WEB-Goal-04.png'),
	('Gender Equality', 'public/images/SDGs/E-WEB-Goal-05.png'),
	('Clean Water and Sanitation', 'public/images/SDGs/E-WEB-Goal-06.png'),
	('Affordable and Clean Energy', 'public/images/SDGs/E-WEB-Goal-07.png'),
	('Decent Work and Economic Growth', 'public/images/SDGs/E-WEB-Goal-08.png'),
	('Industry, Innovation and Infrastructure', 'public/images/SDGs/E-WEB-Goal-09.png'),
	('Reduced Inequality', 'public/images/SDGs/E-WEB-Goal-10.png'),
	('Sustainable Cities and Communities', 'public/images/SDGs/E-WEB-Goal-11.png'),
	('Responsible Consumption and Production', 'public/images/SDGs/E-WEB-Goal-12.png'),
	('Climate Action', 'public/images/SDGs/E-WEB-Goal-13.png'),
	('Life Below Water', 'public/images/SDGs/E-WEB-Goal-14.png'),
	('Life on Land', 'public/images/SDGs/E-WEB-Goal-15.png'),
	('Peace, Justice and Strong Institutions', 'public/images/SDGs/E-WEB-Goal-16.png'),
	('Partnerships for the Goals', 'public/images/SDGs/E-WEB-Goal-17.png')
;

DROP TABLE "sdgJunction";
CREATE TABLE "sdgJunction" (
	"id" SERIAL PRIMARY KEY,
	"enterpriseId" INTEGER,
	"sdgId" INTEGER
);

DROP TABLE "stakeholderSegments";
CREATE TABLE "stakeholderSegments" (
	"id" SERIAL PRIMARY KEY,
	"segment" VARCHAR (255)
);
INSERT INTO "stakeholderSegments"
	("segment")
VALUES
	('Age'), ('Gender/Gender Identity'), ('Race'), ('Income'), ('Region'), ('Ethnicity'), ('Sexual Preference');
	
DROP TABLE "stakeholderSegmentsJunction";
CREATE TABLE "stakeholderSegmentsJunction" (
	"id" SERIAL PRIMARY KEY,
	"enterpriseId" INTEGER,
	"segmentId" INTEGER
);

DROP TABLE "operatingSector";
CREATE TABLE "operatingSector" (
	"id" SERIAL PRIMARY KEY,
	"sector" VARCHAR (255)
);
INSERT INTO "operatingSector"
	("sector")
VALUES
	('Consumer Goods'),
	('Extractives & Minerals Processing'),
	('Financials'),
	('Food & Beverage'),
	('Health Care'),
	('Infrastructure'),
	('Renewable Resources & Alternative Energy'),
	('Resource Transformation'),
	('Services'),
	('Technology & Communications'),
	('Transportation');
	
DROP TABLE "operatingSectorJunction";
CREATE TABLE "operatingSectorJunction" (
	"id" SERIAL PRIMARY KEY,
	"enterpriseId" INTEGER,
	"sectorId" INTEGER
);

DROP TABLE "painPoints";
CREATE TABLE "painPoints" (
	"id" SERIAL PRIMARY KEY,
	"painPoint" VARCHAR (255)
);
INSERT INTO "painPoints"
	("painPoint")
VALUES
	('Financial - areas where your customers are spending too much. money'),
	('Productivity - areas where your customer wants to be more efficient or productive'),
	('Process - areas where you could provide more convenient processes for your customers'),
	('Support - areas where customers are not receiving the support they need');
	
DROP TABLE "painPointsJunction";
CREATE TABLE "painPointsJunction" (
	"id" SERIAL PRIMARY KEY,
	"enterpriseId" INTEGER,
	"painPointId" INTEGER
);

DROP TABLE "technologies";
CREATE TABLE "technologies" (
	"id" SERIAL PRIMARY KEY,
	"technology" VARCHAR (255)
);
INSERT INTO "technologies"
	("technology")
VALUES
	('Hardware'), ('Mobile Application'), ('Web Application'), ('Marketplace'), ('Software'), ('Ad Publishing'), ('Anonymizer'), ('Appilcation Development and Testing'), ('Backup and Recovery'), ('Business Intelligence'), ('Cloud Broker'), ('Cloud Carrier'), ('Cloud Service Provider'), ('Cloud Storage'), ('Collaboration'),
	('Content Delivery Network (CDN)'), ('Content Management'), ('Customer Relationship Management (CRM)'), ('Database Management'), ('E-Commerce'), ('Education Tech'),	('Enterprise Resource Planning (ERP)'), ('Financial Services'), ('Games'), ('Healthcare'), ('Hosting Services'), ('Human Resources'), ('IT Service Management'), ('Legal'), ('Marketing & Sales'), ('Media'), ('Office Productivity'), ('P2P'), ('Search'), ('Security'), ('Service Management'), ('Shopping'), ('Social Networking'), ('Software Repository'), ('Travel Tech'), ('Web Content'), ('Not a Technology Based Solution');
	
DROP TABLE "technologiesJunction";
CREATE TABLE "technologiesJunction" (
	"id" SERIAL PRIMARY KEY,
	"enterpriseId" INTEGER,
	"technologyId" INTEGER
);

DROP TABLE "developmentStage";
CREATE TABLE "developmentStage" (
	"id" SERIAL PRIMARY KEY,
	"stage" VARCHAR (255)
);
INSERT INTO "developmentStage"
	("stage")
VALUES
	('Concept & Research'),
	('Initial Prototype'),
	('Valdiation'),
	('Refinement'),
	('Scaling'),
	('Established Loyal Customer Base');
	
DROP TABLE "developmentStageJunction";
CREATE TABLE "developmentStageJunction" (
	"id" SERIAL PRIMARY KEY,
	"enterpriseId" INTEGER,
	"developmentStageId" INTEGER
);

DROP TABLE "investmentStage";
CREATE TABLE "investmentStage" (
	"id" SERIAL PRIMARY KEY,
	"stage" VARCHAR (255)
);
INSERT INTO "investmentStage"
	("stage")
VALUES
	('Bootstrap'),
	('Family & Friends'),
	('Seed'),
	('Series A'),
	('Series B'),
	('Series C');
	
DROP TABLE "investmentStageJunction";
CREATE TABLE "investmentStageJunction" (
	"id" SERIAL PRIMARY KEY,
	"enterpriseId" INTEGER,
	"investmentStageId" INTEGER
);

DROP TABLE "progressIndicators";
CREATE TABLE "progressIndicators" (
	"id" SERIAL PRIMARY KEY,
	"indicator" VARCHAR (255)
);
INSERT INTO "progressIndicators"
	("indicator")
VALUES
	('Leads Generated/Converted'),
	('Website Traffic Volume'),
	('Social Media Interaction'),
	('Cash Flow Forecasts'),
	('Customer Acquisition'),
	('None of the above');
	
DROP TABLE "progressIndicatorsJunction";
CREATE TABLE "progressIndicatorsJunction" (
	"id" SERIAL PRIMARY KEY,
	"enterpriseId" INTEGER,
	"indicatorId" INTEGER
);

DROP TABLE "anticipatedRisks";
CREATE TABLE "anticipatedRisks" (
	"id" SERIAL PRIMARY KEY,
	"risk" VARCHAR (255)
);
INSERT INTO "anticipatedRisks"
	("risk")
VALUES
	('Evidence Risk - insufficient high-quality data exists'),
	('External Risk - external factors disrupt ability to deliver impact'),
	('Stakeholder Participation Risk - misunderstanding of stakeholder experiences/expectations'),
	('Drop-off Risk - the positive impact does not endure or the negative impact is no longer mitigated'),
	('Efficiency Risk - impact could be achieved with fewer resourcces or at a lower cost'),
	('Execution Risk - activities are not delivered as planned and do not result in desired outcomes'),
	('Alignement Risk - impact is not aligned into the enterprise model'),
	('Endurance Risk - required activities are not delivered for a long enough period'),
	('Unexpected Impact Risk - significant unexpected impact is experienced by stakeholders'),
	('None at this stage');
	
DROP TABLE "anticipatedRisksJunction";
CREATE TABLE "anticipatedRisksJunction" (
	"id" SERIAL PRIMARY KEY,
	"enterpriseId" INTEGER,
	"riskId" INTEGER
);

DROP TABLE "startupBarriers";
CREATE TABLE "startupBarriers" (
	"id" SERIAL PRIMARY KEY,
	"barrier" VARCHAR (255)
);
INSERT INTO "startupBarriers"
	("barrier")
VALUES
	('Captial Requirements'),
	('Technical Knowledge Base'),
	('Customer Cost of Switching'),
	('Educating Your Market'),
	('Access to Materials'),
	('Access to Distribution Channels'),
	('Patents'),
	('Government Regulations'),
	('Economies of Scale'),
	('Product Differentiation');
	
DROP TABLE "startupBarriersJunction";
CREATE TABLE "startupBarriersJunction" (
	"id" SERIAL PRIMARY KEY,
	"enterpriseId" INTEGER,
	"barrierId" INTEGER
);

DROP TABLE "growthFactors";
CREATE TABLE "growthFactors" (
	"id" SERIAL PRIMARY KEY,
	"factor" VARCHAR (255)
);
INSERT INTO "growthFactors"
	("factor")
VALUES
	('Seasonal trends'),
	('Close proximity to industry fluctations'),
	('Commodity price/availability fluctuations'),
	('Economic cycle'),
	('Competition'),
	('Laws and Regulations'),
	('Customer Taste & Preference'),
	('Natural Disasters'),
	('Technological Evolution'),
	('International Markets & Foreign Exchange Markets'),
	('Political/Social Momentum');
	
DROP TABLE "growthFactorsJunction";
CREATE TABLE "growthFactorsJunction" (
	"id" SERIAL PRIMARY KEY,
	"enterpriseId" INTEGER,
	"factorId" INTEGER
);

DROP TABLE "investmentVehicles";
CREATE TABLE "investmentVehicles" (
	"id" SERIAL PRIMARY KEY,
	"investmentVehicle" VARCHAR (255)
);
INSERT INTO "investmentVehicles"
	("investmentVehicle")
VALUES
	('Debt'),
	('Equity'),
	('Convertible Debt'),
	('Convertible Equity'),
	('Grant'),
	('Government Funding'),
	('Incubator/Accelerator Funding'),
	('Angel Investment'),
	('Open to all offers');
	
DROP TABLE "investmentVehiclesJunction";
CREATE TABLE "investmentVehiclesJunction" (
	"id" SERIAL PRIMARY KEY,
	"enterpriseId" INTEGER,
	"investmentVehicleId" INTEGER
);

DROP TABLE "fundingUse";
CREATE TABLE "fundingUse" (
	"id" SERIAL PRIMARY KEY,
	"fundingUse" VARCHAR (255)
);
INSERT INTO "fundingUse"
	("fundingUse")
VALUES
	('Operating expenses'),
	('Asset Management'),
	('Inventory Development'),
	('Long-Term Expenditures'),
	('Supplies & Materials'),
	('Market Research'),
	('Liquidity Management'),
	('Product Development'),
	('Team Scaling'),
	('Sales & Marketing'),
	('Market Expansion');
	
DROP TABLE "fundingUseJunction";
CREATE TABLE "fundingUseJunction" (
	"id" SERIAL PRIMARY KEY,
	"enterpriseId" INTEGER,
	"fundingUseId" INTEGER
);

DROP TABLE "helpMoveForward";
CREATE TABLE "helpMoveForward" (
	"id" SERIAL PRIMARY KEY,
	"assistance" VARCHAR (255)
);
INSERT INTO "helpMoveForward"
	("assistance")
VALUES
	('Data Measurement Techniques'),
	('Develop Impact Research'),
	('Data Analysis and Visualization'),
	('Theory of Change and Strategy Development'),
	('Networking with others in the social impact/investing space');
	
DROP TABLE "helpMoveForwardJunction";
CREATE TABLE "societalImpactJunction" (
	"id" SERIAL PRIMARY KEY,
	"enterpriseId" INTEGER,
	"assistanceId" INTEGER
);

DROP TABLE "societalImpact";
CREATE TABLE "societalImpact" (
	"id" SERIAL PRIMARY KEY,
	"societalImpact" VARCHAR (255)
);
INSERT INTO "societalImpact"
	("societalImpact")
VALUES
	('Currently not considering/May cause harm'),
	('Actively avoiding harm with internal policies'),
	('Our product or service benefits the individual or community stakeholder social wellbeing'),
	('Our product or service directly contributes to a solution to a social problem');
	
DROP TABLE "societalImpactJunction";
CREATE TABLE "societalImpactJunction" (
	"id" SERIAL PRIMARY KEY,
	"enterpriseId" INTEGER,
	"societalImpactId" INTEGER
);

DROP TABLE "environmentalImpact";
CREATE TABLE "environmentalImpact" (
	"id" SERIAL PRIMARY KEY,
	"impact" VARCHAR (255)
);
INSERT INTO "environmentalImpact"
	("impact")
VALUES
	('Currently not considering/May cause harm'),
	('Actively avoiding harm with internal policies'),
	('Our product or service benefits the environment'),
	('Our product or service directly contributes to a solution to an environmental problem');
	
DROP TABLE "environmentalImpactJunction";
CREATE TABLE "environmentalImpactJunction" (
	"id" SERIAL PRIMARY KEY,
	"enterpriseId" INTEGER,
	"environmentalImpactId" INTEGER
);

DROP TABLE "economicImpact";
CREATE TABLE "economicImpact" (
	"id" SERIAL PRIMARY KEY,
	"impact" VARCHAR (255)
);
INSERT INTO "economicImpact"
	("impact")
VALUES
	('Currently not considering/May cause harm'),
	('Actively avoiding harm with internal policies'),
	('Our product or service benefits the individual or community stakeholder economically'),
	('Our product or service directly contributes to a solution to economic and wealth problems');
	
DROP TABLE "economicImpactJunction";
CREATE TABLE "economicImpactJunction" (
	"id" SERIAL PRIMARY KEY,
	"enterpriseId" INTEGER,
	"economicImpactId" INTEGER
);