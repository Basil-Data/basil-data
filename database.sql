
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

-- database name: basil_data

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "enterpriseName" VARCHAR (255),
    "email" VARCHAR (255) NOT NULL,
    "logoUrl" VARCHAR (1024),
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "authLevel" VARCHAR (255) DEFAULT 'guest'
);

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
    "problemBeingSolved2" VARCHAR (8000) DEFAULT NULL,
    "costOfProblem2" VARCHAR (1024) DEFAULT NULL,
    "howTheySolve2" VARCHAR (8000) DEFAULT NULL,
    "whoBenefits2" VARCHAR (1024) DEFAULT NULL,
	"elaborateOnIndicators2" VARCHAR (8000) DEFAULT NULL,
    "organizationLocation2" VARCHAR (1024) DEFAULT NULL,
	"focusedEfforts2" VARCHAR (1024) DEFAULT NULL,
    "specificChanges2" VARCHAR (1024) DEFAULT NULL,
    "measuredOutcome2" VARCHAR (1024) DEFAULT NULL,
    "secondarySDG2" VARCHAR (1024) DEFAULT NULL,
    "impactLevel2" VARCHAR (1024) DEFAULT NULL,
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

CREATE TABLE "competitiveAdvantages" (
	"id" SERIAL PRIMARY KEY,
	"advantage" VARCHAR (255)
);
INSERT INTO "competitiveAdvantages"
	("advantage")
VALUES
	('Patent'), ('Brand License'), ('Regulation'), ('Trademark'), ('Copyrights'), ('Software'), ('Customer Lists'), ('Personal Accreditation');

CREATE TABLE "competitiveAdvantagesJunction" (
	"id" SERIAL PRIMARY KEY,
	"enterpriseId" INTEGER,
	"advantageId" INTEGER
);

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

CREATE TABLE "impactTableJunction" (
	"id" SERIAL PRIMARY KEY,
	"enterpriseId" INTEGER,
	"impactSectorId" INTEGER
);


CREATE TABLE "indicators" (
	"id" SERIAL PRIMARY KEY,
	"sdgId" INTEGER,
	"indicator" VARCHAR (255)
);

INSERT INTO "indicators"
	("sdgId", "indicator")
VALUES
	(1, 'Poverty Levels'),
	(1, 'Change In Poverty'),
	(1, 'Access To Resources'),
	(2, 'Nourishment / Undernourishment'),
	(2, 'Food security level'),
	(2, 'Food production indicators'),
	(2, 'Animal protection'),
	(2, 'Cost of Food'),
	(3, 'Mortality rate and ratios'),
	(3, 'Disease rate'),
	(3, 'Access to healthcare/treatment'),
	(3, 'Consumption measures'),
	(3, 'Birth rate'),
	(3, 'Healthcare coverage'),
	(3, 'Vaccination levels'),
	(3, 'Emergency preparedness'),
	(4, 'Education Level'),
	(4, 'Completion rates'),
	(4, 'Participation rates'),
	(4, 'Enrollment rates'),
	(4, 'Developmental tracks'),
	(4, 'Parity indicators'),
	(4, 'Access to appropriate education'),
	(4, 'Teacher qualifications'),
	(5, 'Legal frameworks for gender equality'),
	(5, 'Gender based violence rates'),
	(5, 'Youth marriage rate'),
	(5, 'Unpaid or underpaid work'),
	(5, 'Leadership roles (government)'),
	(5, 'Leadership roles (private industry)'),
	(5, 'Decision making opportunities'),
	(5, 'Ownership of land or business'),
	(6, 'Access to safe drinking water'),
	(6, 'Access to safe sanitation services'),
	(6, 'Ambient quality of bodies of water'),
	(6, 'Change in water use'),
	(6, 'Degree of integrated water resources'),
	(6, 'Change in water-related ecosystems'),
	(6, 'Government policy changes'),
	(7, 'Access to electricity'),
	(7, 'Access to clean fuel'),
	(7, 'Renewable energy proportion of total energy use'),
	(7, 'Total energy use'),
	(7, 'Spending on clean energy'),
	(7, 'Renewable energy capacity change'),
	(8, 'GDP per capita growth rate'),
	(8, 'GDP per capita growth rate per employed person'),
	(8, 'Employment rate / Unemployment rates'),
	(8, 'Hourly earnings'),
	(8, 'Access to financial services'),
	(8, 'Material footprint (waste)'),
	(8, 'Material consumption'),
	(8, 'Youth participation (school, employment, training)'),
	(8, 'Child labor'),
	(8, 'Occupational injuries'),
	(8, 'Labor rights compliance'),
	(8, 'Bank account rates'),
	(8, 'Access to aid for trade support'),
	(8, 'Employment strategies'),
	(9, 'Access to mode of transportation'),
	(9, 'Road access'),
	(9, 'Manufacturing Employment'),
	(9, 'Manufacturing value as proportion of GDP'),
	(9, 'Small-scale industry development'),
	(9, 'Emissions per unit of value added'),
	(9, 'R&D expenditures'),
	(9, 'Government expenditures to infrastructure'),
	(9, 'Mobile network access'),
	(9, 'Technology growth'),
	(10, 'Income growth'),
	(10, 'Household expenditures'),
	(10, 'Low-income population'),
	(10, 'Discrimination rates'),
	(10, 'Labour share of GDP'),
	(10, 'Fiscal policy measures'),
	(10, 'Financial wellness indicators'),
	(10, 'Migration rates'),
	(10, 'Migration policies'),
	(10, 'Refugee proportions'),
	(10, 'Access to resources'),
	(11, 'Inadequate housing proportion'),
	(11, 'Disaster deaths'),
	(11, 'Economic loss due to disaster'),
	(11, 'Waste management indicators'),
	(11, 'Levels of pollution (particulate matter)'),
	(11, 'Disaster risk reduction strategies implemented'),
	(11, 'Development plans for population dynamics'),
	(12, 'Sustainable policy instruments'),
	(12, 'Material footprint (waste)'),
	(12, 'Material consumption'),
	(12, 'Food waste index'),
	(12, 'Environmental agreements enacted'),
	(12, 'Hazardous waste generated'),
	(12, 'Recycling rate'),
	(12, 'Published sustainability reports'),
	(12, 'Sustainability accounting tools implementation'),
	(12, 'Renewable energy capacity'),
	(12, 'Change to fossil fuel subsidies'),
	(13, 'Deaths due to disasters'),
	(13, 'Risk reduction strategies'),
	(13, 'Total greenhouse gas emissions'),
	(13, 'Spending in relation to climate change mitigation'),
	(14, 'Plastic debris density'),
	(14, 'Eutrophication rates'),
	(14, 'Marine Acidity levels'),
	(14, 'Fish stocks'),
	(14, 'Protected areas'),
	(14, 'Government policy implementation'),
	(14, 'Sustainable fisheries proportion'),
	(14, 'Budget allocation'),
	(14, 'Protection policies'),
	(15, 'Forest area'),
	(15, 'Protected ecosystem proportion'),
	(15, 'Sustainable forest management progress'),
	(15, 'Degraded land proportions'),
	(15, 'Actions to protect natural habitats and biodiversity'),
	(15, 'Protection policies enacted'),
	(15, 'Spending on ecosystem conservation'),
	(16, 'Intentional homicide rates'),
	(16, 'Conflict related deaths'),
	(16, 'Violence rates'),
	(16, 'Proportion who feel safe walking'),
	(16, 'Child abuse rates'),
	(16, 'Human trafficking proportion'),
	(16, 'Sexual abuse rates'),
	(16, 'Reporting violence by victim'),
	(16, 'Unsentenced Detainees'),
	(16, 'Seized illicit arms'),
	(16, 'Paid bribes'),
	(16, 'Government expenditures'),
	(16, 'Voting Rights'),
	(17, 'Government Revenue'),
	(17, 'GDP'),
	(17, 'Development assistance commitment levels'),
	(17, 'Foreign direct investment'),
	(17, 'Debt service'),
	(17, 'Developing country investment levels'),
	(17, 'Tariff policies'),
	(17, 'Proportion of internet use'),
	(17, 'Share of global exports'),
	(17, 'Policies in favor or sustainable development'),
	(17, 'Spending and policies on statistical measurement strategies');
		

CREATE TABLE "indicatorsJunction" (
	"id" SERIAL PRIMARY KEY,
	"enterpriseId" INTEGER,
	"indicatorId" INTEGER
);

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

CREATE TABLE "supportiveCharacteristicsJunction" (
	"id" SERIAL PRIMARY KEY,
	"enterpriseId" INTEGER,
	"characteristicId" INTEGER
);

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

CREATE TABLE "sdgJunction" (
	"id" SERIAL PRIMARY KEY,
	"enterpriseId" INTEGER,
	"sdgId" INTEGER
);

CREATE TABLE "stakeholderSegments" (
	"id" SERIAL PRIMARY KEY,
	"segment" VARCHAR (255)
);
INSERT INTO "stakeholderSegments"
	("segment")
VALUES
	('Age'), ('Gender/Gender Identity'), ('Race'), ('Income'), ('Region'), ('Ethnicity'), ('Sexual Preference');
	
CREATE TABLE "stakeholderSegmentsJunction" (
	"id" SERIAL PRIMARY KEY,
	"enterpriseId" INTEGER,
	"segmentId" INTEGER
);

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
	
CREATE TABLE "operatingSectorJunction" (
	"id" SERIAL PRIMARY KEY,
	"enterpriseId" INTEGER,
	"sectorId" INTEGER
);

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
	
CREATE TABLE "painPointsJunction" (
	"id" SERIAL PRIMARY KEY,
	"enterpriseId" INTEGER,
	"painPointId" INTEGER
);

CREATE TABLE "technologies" (
	"id" SERIAL PRIMARY KEY,
	"technology" VARCHAR (255)
);
INSERT INTO "technologies"
	("technology")
VALUES
	('Hardware'), ('Mobile Application'), ('Web Application'), ('Marketplace'), ('Software'), ('Ad Publishing'), ('Anonymizer'), ('Appilcation Development and Testing'), ('Backup and Recovery'), ('Business Intelligence'), ('Cloud Broker'), ('Cloud Carrier'), ('Cloud Service Provider'), ('Cloud Storage'), ('Collaboration'),
	('Content Delivery Network (CDN)'), ('Content Management'), ('Customer Relationship Management (CRM)'), ('Database Management'), ('E-Commerce'), ('Education Tech'),	('Enterprise Resource Planning (ERP)'), ('Financial Services'), ('Games'), ('Healthcare'), ('Hosting Services'), ('Human Resources'), ('IT Service Management'), ('Legal'), ('Marketing & Sales'), ('Media'), ('Office Productivity'), ('P2P'), ('Search'), ('Security'), ('Service Management'), ('Shopping'), ('Social Networking'), ('Software Repository'), ('Travel Tech'), ('Web Content'), ('Not a Technology Based Solution');
	
CREATE TABLE "technologiesJunction" (
	"id" SERIAL PRIMARY KEY,
	"enterpriseId" INTEGER,
	"technologyId" INTEGER
);

CREATE TABLE "developmentStage" (
	"id" SERIAL PRIMARY KEY,
	"stage" VARCHAR (255)
);
INSERT INTO "developmentStage"
	("stage")
VALUES
	('Concept & Research'),
	('Initial Prototype'),
	('Validation'),
	('Refinement'),
	('Scaling'),
	('Established Loyal Customer Base');
	
CREATE TABLE "developmentStageJunction" (
	"id" SERIAL PRIMARY KEY,
	"enterpriseId" INTEGER,
	"developmentStageId" INTEGER
);

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
	
CREATE TABLE "investmentStageJunction" (
	"id" SERIAL PRIMARY KEY,
	"enterpriseId" INTEGER,
	"investmentStageId" INTEGER
);

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
	
CREATE TABLE "progressIndicatorsJunction" (
	"id" SERIAL PRIMARY KEY,
	"enterpriseId" INTEGER,
	"indicatorId" INTEGER
);

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
	
CREATE TABLE "anticipatedRisksJunction" (
	"id" SERIAL PRIMARY KEY,
	"enterpriseId" INTEGER,
	"riskId" INTEGER
);

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
	
CREATE TABLE "startupBarriersJunction" (
	"id" SERIAL PRIMARY KEY,
	"enterpriseId" INTEGER,
	"barrierId" INTEGER
);

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
	
CREATE TABLE "growthFactorsJunction" (
	"id" SERIAL PRIMARY KEY,
	"enterpriseId" INTEGER,
	"factorId" INTEGER
);

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
	
CREATE TABLE "investmentVehiclesJunction" (
	"id" SERIAL PRIMARY KEY,
	"enterpriseId" INTEGER,
	"investmentVehicleId" INTEGER
);

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
	
CREATE TABLE "fundingUseJunction" (
	"id" SERIAL PRIMARY KEY,
	"enterpriseId" INTEGER,
	"fundingUseId" INTEGER
);

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
	
CREATE TABLE "helpMoveForwardJunction" (
	"id" SERIAL PRIMARY KEY,
	"enterpriseId" INTEGER,
	"assistanceId" INTEGER
);

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
	
CREATE TABLE "societalImpactJunction" (
	"id" SERIAL PRIMARY KEY,
	"enterpriseId" INTEGER,
	"societalImpactId" INTEGER
);

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
	
CREATE TABLE "environmentalImpactJunction" (
	"id" SERIAL PRIMARY KEY,
	"enterpriseId" INTEGER,
	"environmentalImpactId" INTEGER
);

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
	
CREATE TABLE "economicImpactJunction" (
	"id" SERIAL PRIMARY KEY,
	"enterpriseId" INTEGER,
	"economicImpactId" INTEGER
);

