
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
    "problemBeingSolved2" VARCHAR (500) DEFAULT NULL,
    "costOfProblem2" VARCHAR (500) DEFAULT NULL,
    "howTheySolve2" VARCHAR (500) DEFAULT NULL,
    "whoBenefits2" VARCHAR (500) DEFAULT NULL,
	"elaborateOnIndicators2" VARCHAR (500) DEFAULT NULL,
    "organizationLocation2" VARCHAR (500) DEFAULT NULL,
	"focusedEfforts2" VARCHAR (500) DEFAULT NULL,
    "specificChanges2" VARCHAR (500) DEFAULT NULL,
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
	"generatingRevenue4" VARCHAR(10) DEFAULT NULL,
	"averageGrowth4" INTEGER DEFAULT NULL,
	"makingProfit4" BOOLEAN DEFAULT NULL,
	"netProfitMargin4" INTEGER DEFAULT NULL,
	"customerAcquisitionCost4" INTEGER DEFAULT NULL,
	"marketingExpenses4" INTEGER DEFAULT NULL,
	"newCustomers4" INTEGER DEFAULT NULL,
	"addressableMarket5" INTEGER DEFAULT NULL,
	"serviceableMarket5" INTEGER DEFAULT NULL,
	"obtainableMarket5" INTEGER DEFAULT NULL,
	"riskPrep6" VARCHAR (1024) DEFAULT NULL,
	"barrierPlan6" VARCHAR (1024) DEFAULT NULL,
	"externalGrowth6" VARCHAR (1024) DEFAULT NULL,
	"whyRealistic5" VARCHAR (1024) DEFAULT NULL,
	"industryPerspectiveOne5" VARCHAR (50) DEFAULT NULL,
	"industryPerspectiveTwo5" VARCHAR (50) DEFAULT NULL,
	"industryPerspectiveThree5" VARCHAR (50) DEFAULT NULL,
	"raisingFunds7" VARCHAR (255) DEFAULT NULL,
	"targetAmount7" INTEGER DEFAULT NULL,
	"nextSteps7" VARCHAR (1024) DEFAULT NULL,
	"understandProblem7" INTEGER DEFAULT NULL
);

CREATE TABLE "competitiveAdvantages" (
	"id" SERIAL PRIMARY KEY,
	"advantage" VARCHAR (255),
	"advantageLogo" VARCHAR (1000)
);

INSERT INTO "competitiveAdvantages"
	("advantage", "advantageLogo")
VALUES
	('Patent', '/images/CompetitiveAdvantages/patent.png'), 
	('Brand License', '/images/CompetitiveAdvantages/brandlicense.png'), 
	('Regulation', '/images/CompetitiveAdvantages/regulation.png'), 
	('Trademark', '/images/CompetitiveAdvantages/trademark.png'), 
	('Copyrights', '/images/CompetitiveAdvantages/copyrights.png'), 
	('Software', '/images/CompetitiveAdvantages/software.png'), 
	('Customer Lists', '/images/CompetitiveAdvantages/customerlists.png'), 
	('Personal Accreditation', '/images/CompetitiveAdvantages/personalaccreditation.png');

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
	"indicator" VARCHAR (1000),
	"targetNumber" VARCHAR (1000),
	"target" VARCHAR (1000)
);

INSERT INTO "indicators"
	("sdgId", "indicator", "targetNumber", "target")
VALUES	
	(1,
	'Proportion of population below the international poverty line, by sex, age, employment status and geographical location (urban/rural)',
	'1.1', 
	'By 2030, eradicate extreme poverty for all people everywhere, currently measured as people living on less than $1.25 a day.'),
	(1, 
	'Proportion of population living below the national poverty line, by sex and age', 
	'1.2', 
	'By 2030, reduce at least by half the proportion of men, women and children of all ages living in poverty in all its dimensions according to national definitions.'),
	(1, 
	'Proportion of men, women and children of all ages living in poverty in all its dimensions according to national definitions', 
	'1.2',
	'By 2030, reduce at least by half the proportion of men, women and children of all ages living in poverty in all its dimensions according to national definitions'),
	(1, 
	'Proportion of population covered by social protection floors/systems, by sex, distinguishing children, unemployed persons, older persons, persons with disabilities, pregnant women, newborns, work-injury victims and the poor and the vulnerable', 
	'1.3',
	'Implement nationally appropriate social protection systems and measures for all, including floors, and by 2030 achieve substantial coverage of the poor and the vulnerable'),
	(1, 
	'Proportion of population living in households with access to basic services', 
	'1.4',
	'By 2030, ensure that all men and women, in particular the poor and the vulnerable, have equal rights to economic resources, as well as access to basic services, ownership and control over land and other forms of property, inheritance, natural resources, appropriate new technology and financial services, including microfinance'),
	(1, 
	'Proportion of total adult population with secure tenure rights to land, with legally recognized documentation and who perceive their rights to land as secure, by sex and by type of tenure', 
	'1.4',
	'By 2030, ensure that all men and women, in particular the poor and the vulnerable, have equal rights to economic resources, as well as access to basic services, ownership and control over land and other forms of property, inheritance, natural resources, appropriate new technology and financial services, including microfinance'),
	(1, 
	'Number of deaths, missing persons and persons affected by disaster per 100,000 people', 
	'1.5',
	'By 2030, build the resilience of the poor and those in vulnerable situations and reduce their exposure and vulnerability to climate-related extreme events and other economic, social and environmental shocks and disasters'),
	(1, 
	'Direct disaster economic loss in relation to global gross domestic product (GDP)',  
	'1.5',
	'By 2030, build the resilience of the poor and those in vulnerable situations and reduce their exposure and vulnerability to climate-related extreme events and other economic, social and environmental shocks and disasters'),
	(1, 
	'Number of countries with national and local disaster risk reduction strategies', 
	'1.5',
	'By 2030, build the resilience of the poor and those in vulnerable situations and reduce their exposure and vulnerability to climate-related extreme events and other economic, social and environmental shocks and disasters'),
	(1, 
	'Proportion of local governments that adopt and implement local disaster risk reduction strategies', 
	'1.5',
	'By 2030, build the resilience of the poor and those in vulnerable situations and reduce their exposure and vulnerability to climate-related extreme events and other economic, social and environmental shocks and disasters'),
	(2, 
	'Prevalence of undernourishment', 
	'2.1', 
	'By 2030, end hunger and ensure access by all people, in particular the poor and people in vulnerable situations, including infants, to safe, nutritious and sufficient food all year round'),
	(2, 
	'Prevalence of moderate or severe food insecurity in the population, based on the Food Insecurity Experience Scale (FIES)', 
	'2.1', 
	'By 2030, end hunger and ensure access by all people, in particular the poor and people in vulnerable situations, including infants, to safe, nutritious and sufficient food all year round'),
	(2, 
	'Prevalence of stunting (height for age <-2 standard deviation from the median of the World Health Organization (WHO) Child Growth Standards) among children under 5 years of age', 
	'2.2', 
	'By 2030, end all forms of malnutrition, including achieving, by 2025, the internationally agreed targets on stunting and wasting in children under 5 years of age, and address the nutritional needs of adolescent girls, pregnant and lactating women and older persons'),
	(2, 
	'Prevalence of malnutrition (weight for height >+2 or <-2 standard deviation from the median of the WHO Child Growth Standards) among children under 5 years of age, by type (wasting and overweight)', 
	'2.2', 
	'By 2030, end all forms of malnutrition, including achieving, by 2025, the internationally agreed targets on stunting and wasting in children under 5 years of age, and address the nutritional needs of adolescent girls, pregnant and lactating women and older persons'),
	(2, 
	'Prevalence of anaemia in women aged 15 to 49 years, by pregnancy status (percentage)', 
	'2.2', 
	'By 2030, end all forms of malnutrition, including achieving, by 2025, the internationally agreed targets on stunting and wasting in children under 5 years of age, and address the nutritional needs of adolescent girls, pregnant and lactating women and older persons'),
	(2, 
	'Volume of production per labour unit by classes of farming/pastoral/forestry enterprise size', 
	'2.3',
	'By 2030, double the agricultural productivity and incomes of small-scale food producers, in particular women, indigenous peoples, family farmers, pastoralists and fishers, including through secure and equal access to land, other productive resources and inputs, knowledge, financial services, markets and opportunities for value addition and non-farm employment'),
	(2, 
	'Average income of small-scale food producers, by sex and indigenous status', 
	'2.3', 
	'By 2030, double the agricultural productivity and incomes of small-scale food producers, in particular women, indigenous peoples, family farmers, pastoralists and fishers, including through secure and equal access to land, other productive resources and inputs, knowledge, financial services, markets and opportunities for value addition and non-farm employment'),
	(2, 
	'Proportion of agricultural area under productive and sustainable agriculture', 
	'2.4', 
	'By 2030, ensure sustainable food production systems and implement resilient agricultural practices that increase productivity and production, that help maintain ecosystems, that strengthen capacity for adaptation to climate change, extreme weather, drought, flooding and other disasters and that progressively improve land and soil quality'),
	(2, 
	'Number of (a) plant and (b) animal genetic resources for food and agriculture secured in either medium- or long-term conservation facilities', 
	'2.5', 
	'By 2020, maintain the genetic diversity of seeds, cultivated plants and farmed and domesticated animals and their related wild species, including through soundly managed and diversified seed and plant banks at the national, regional and international levels, and promote access to and fair and equitable sharing of benefits arising from the utilization of genetic resources and associated traditional knowledge, as internationally agreed'),
	(2, 
	'Proportion of local breeds classified as being at risk, not-at-risk or at unknown level of risk of extinction', 
	'2.5', 
	'By 2020, maintain the genetic diversity of seeds, cultivated plants and farmed and domesticated animals and their related wild species, including through soundly managed and diversified seed and plant banks at the national, regional and international levels, and promote access to and fair and equitable sharing of benefits arising from the utilization of genetic resources and associated traditional knowledge, as internationally agreed'),
	(3, 
	'Maternal mortality ratio', 
	'3.1', 
	'By 2030, reduce the global maternal mortality ratio to less than 70 per 100,000 live births'),
	(3, 
	'Proportion of births attended by skilled health personnel', 
	'3.1', 
	'By 2030, reduce the global maternal mortality ratio to less than 70 per 100,000 live births'),
	(3, 
	'Under-five mortality rate', 
	'3.2', 
	'By 2030, end preventable deaths of newborns and children under 5 years of age, with all countries aiming to reduce neonatal mortality to at least as low as 12 per 1,000 live births and under-5 mortality to at least as low as 25 per 1,000 live births'),
	(3, 
	'Neonatal mortality rate', 
	'3.2', 
	'By 2030, end preventable deaths of newborns and children under 5 years of age, with all countries aiming to reduce neonatal mortality to at least as low as 12 per 1,000 live births and under-5 mortality to at least as low as 25 per 1,000 live births'),
	(3, 
	'Number of new HIV infections per 1,000 uninfected population, by sex, age and key populations', 
	'3.3', 
	'By 2030, end the epidemics of AIDS, tuberculosis, malaria and neglected tropical diseases and combat hepatitis, water-borne diseases and other communicable diseases'),
	(3, 
	'Tuberculosis incidence per 1,000 population', 
	'3.3', 
	'By 2030, end the epidemics of AIDS, tuberculosis, malaria and neglected tropical diseases and combat hepatitis, water-borne diseases and other communicable diseases'),
	(3, 
	'Malaria incidence per 1,000 population', 
	'3.3', 
	'By 2030, end the epidemics of AIDS, tuberculosis, malaria and neglected tropical diseases and combat hepatitis, water-borne diseases and other communicable diseases'),
	(3, 
	'Hepatitis B incidence per 100,000 population', 
	'3.3', 
	'By 2030, end the epidemics of AIDS, tuberculosis, malaria and neglected tropical diseases and combat hepatitis, water-borne diseases and other communicable diseases'),
	(3, 
	'Number of people requiring interventions against neglected tropical diseases', 
	'3.3', 
	'By 2030, end the epidemics of AIDS, tuberculosis, malaria and neglected tropical diseases and combat hepatitis, water-borne diseases and other communicable diseases'),
	(3, 
	'Mortality rate attributed to cardiovascular disease, cancer, diabetes or chronic respiratory disease',
	'3.4',
	'By 2030, reduce by one third premature mortality from non-communicable diseases through prevention and treatment and promote mental health and well-being'),
	(3, 
	'Suicide mortality rate', 
	'3.4', 
	'By 2030, reduce by one third premature mortality from non-communicable diseases through prevention and treatment and promote mental health and well-being'),
	(3, 
	'Coverage of treatment interventions (pharmacological, psychosocial and rehabilitation and aftercare services) for substance use disorders', 
	'3.5', 
	'Strengthen the prevention and treatment of substance abuse, including narcotic drug abuse and harmful use of alcohol'),
	(3, 
	'Harmful use of alcohol, defined according to the national context as alcohol per capita consumption (aged 15 years and older) within a calendar year in litres of pure alcohol', 
	'3.5', 
	'Coverage of treatment interventions (pharmacological, psychosocial and rehabilitation and aftercare services) for substance use disorders'),
	(3, 
	'Death rate due to road traffic injuries', 	
	'3.6', 
	'By 2020, halve the number of global deaths and injuries from road traffic accidents'),
	(3, 
	'Proportion of women of reproductive age (aged 15-49 years) who have their need for family planning satisfied with modern methods', 
	'3.7', 
	'By 2030, ensure universal access to sexual and reproductive health-care services, including for family planning, information and education, and the integration of reproductive health into national strategies and programmes'),
	(3, 
	'Adolescent birth rate (aged 10-14 years; aged 15-19 years) per 1,000 women in that age group', 
	'3.7', 
	'By 2030, ensure universal access to sexual and reproductive health-care services, including for family planning, information and education, and the integration of reproductive health into national strategies and programmes'),
	(3, 
	'Coverage of essential health services (defined as the average coverage of essential services based on tracer interventions that include reproductive, maternal, newborn and child health, infectious diseases, non-communicable diseases and service capacity and access, among the general and the most disadvantaged population)', 
	'3.8', 
	'Achieve universal health coverage, including financial risk protection, access to quality essential health-care services and access to safe, effective, quality and affordable essential medicines and vaccines for all'),
	(3, 
	'Proportion of population with large household expenditures on health as a share of total household expenditure or income', 
	'3.8', 
	'Achieve universal health coverage, including financial risk protection, access to quality essential health-care services and access to safe, effective, quality and affordable essential medicines and vaccines for all'),
	(3, 
	'Mortality rate attributed to household and ambient air pollution', 
	'3.9', 
	'By 2030, substantially reduce the number of deaths and illnesses from hazardous chemicals and air, water and soil pollution and contamination'),
	(3, 
	'Mortality rate attributed to unsafe water, unsafe sanitation and lack of hygiene (exposure to unsafe Water, Sanitation and Hygiene for All (WASH) services)', 
	'3.9', 
	'By 2030, substantially reduce the number of deaths and illnesses from hazardous chemicals and air, water and soil pollution and contamination'),
	(3, 
	'Mortality rate attributed to unintentional poisoning', 
	'3.9', 
	'By 2030, substantially reduce the number of deaths and illnesses from hazardous chemicals and air, water and soil pollution and contamination'),
	(4, 
	'Proportion of children and young people: (a) in grades 2/3; (b) at the end of primary; and (c) at the end of lower secondary achieving at least a minimum proficiency level in (i) reading and (ii) mathematics, by sex',
	'4.1',
	'By 2030, ensure that all girls and boys complete free, equitable and quality primary and secondary education leading to relevant and effective learning outcomes'),
	(4, 
	'Completion rate (primary education, lower secondary education, upper secondary education)',
	'4.1',
	'By 2030, ensure that all girls and boys complete free, equitable and quality primary and secondary education leading to relevant and effective learning outcomes'),
	(4, 
	'Proportion of children aged 24–59 months who are developmentally on track in health, learning and psychosocial well-being, by sex',
	'4.2',
	'By 2030, ensure that all girls and boys have access to quality early childhood development, care and pre-primary education so that they are ready for primary education'),
	(4, 
	'Participation rate in organized learning (one year before the official primary entry age), by sex',
	'4.2',
	'By 2030, ensure that all girls and boys have access to quality early childhood development, care and pre-primary education so that they are ready for primary education'),
	(4, 
	'Participation rate of youth and adults in formal and non-formal education and training in the previous 12 months, by sex',
	'4.3',
	'By 2030, ensure equal access for all women and men to affordable and quality technical, vocational and tertiary education, including university'),
	(4, 
	'Proportion of youth and adults with information and communications technology (ICT) skills, by type of skill',
	'4.4',
	'By 2030, substantially increase the number of youth and adults who have relevant skills, including technical and vocational skills, for employment, decent jobs and entrepreneurship'),
	(4, 
	'Parity indices (female/male, rural/urban, bottom/top wealth quintile and others such as disability status, indigenous peoples and conflict-affected, as data become available) for all education indicators on this list that can be disaggregated',
	'4.5',
	'By 2030, eliminate gender disparities in education and ensure equal access to all levels of education and vocational training for the vulnerable, including persons with disabilities, indigenous peoples and children in vulnerable situations'),
	(4, 
	'Percentage of population in a given age group achieving at least a fixed level of proficiency in functional (a) literacy and (b) numeracy skills, by sex',
	'4.6',
	'By 2030, ensure that all youth and a substantial proportion of adults, both men and women, achieve literacy and numeracy'),
	(4, 
	'Extent to which (i) global citizenship education and (ii) education for sustainable development, including gender equality and human rights, are mainstreamed at all levels in: (a) national education policies, (b) curricula, (c) teacher education and (d) student assessment',
	'4.7',
	'By 2030, ensure that all learners acquire the knowledge and skills needed to promote sustainable development, including, among others, through education for sustainable development and sustainable lifestyles, human rights, gender equality, promotion of a culture of peace and non-violence, global citizenship and appreciation of cultural diversity and of culture’s contribution to sustainable development'),
	(5, 
	'Whether or not legal frameworks are in place to promote, enforce and monitor equality and non‑discrimination on the basis of sex',
	'5.1',
	'End all forms of discrimination against all women and girls everywhere'),
	(5, 
	'Proportion of ever-partnered women and girls aged 15 years and older subjected to physical, sexual or psychological violence by a current or former intimate partner in the previous 12 months, by form of violence and by age',
	'5.2',
	'Eliminate all forms of violence against all women and girls in the public and private spheres, including trafficking and sexual and other types of exploitation'),
	(5, 
	'Proportion of women and girls aged 15 years and older subjected to sexual violence by persons other than an intimate partner in the previous 12 months, by age and place of occurrence',
	'5.2',
	'Eliminate all forms of violence against all women and girls in the public and private spheres, including trafficking and sexual and other types of exploitation'),
	(5, 
	'Proportion of women aged 20-24 years who were married or in a union before age 15 and before age 18',
	'5.3',
	'Eliminate all harmful practices, such as child, early and forced marriage and female genital mutilation'),
	(5, 
	'Proportion of girls and women aged 15-49 years who have undergone female genital mutilation/cutting, by age',
	'5.3',
	'Eliminate all harmful practices, such as child, early and forced marriage and female genital mutilation'),
	(5, 
	'Proportion of time spent on unpaid domestic and care work, by sex, age and location',
	'5.4',
	'Recognize and value unpaid care and domestic work through the provision of public services, infrastructure and social protection policies and the promotion of shared responsibility within the household and the family as nationally appropriate'),
	(5, 
	'Proportion of seats held by women in (a) national parliaments and (b) local governments',
	'5.5',
	'Ensure women’s full and effective participation and equal opportunities for leadership at all levels of decision-making in political, economic and public life'),
	(5, 
	'Proportion of women in managerial positions',
	'5.5',
	'Ensure women’s full and effective participation and equal opportunities for leadership at all levels of decision-making in political, economic and public life'),
	(5, 
	'Proportion of women aged 15-49 years who make their own informed decisions regarding sexual relations, contraceptive use and reproductive health care',
	'5.6',
	'Ensure universal access to sexual and reproductive health and reproductive rights as agreed in accordance with the Programme of Action of the International Conference on Population and Development and the Beijing Platform for Action and the outcome documents of their review conferences'),
	(5, 
	'Number of countries with laws and regulations that guarantee women aged 15-49 years access to sexual and reproductive health care, information and education',
	'5.6',
	'Ensure universal access to sexual and reproductive health and reproductive rights as agreed in accordance with the Programme of Action of the International Conference on Population and Development and the Beijing Platform for Action and the outcome documents of their review conferences'),
	(6, 
	'Proportion of population using safely managed drinking water services',
	'6.1',
	'By 2030, achieve universal and equitable access to safe and affordable drinking water for all'),
	(6, 
	'Proportion of population using safely managed sanitation services, including a hand-washing facility with soap and water',
	'6.2',
	'By 2030, achieve access to adequate and equitable sanitation and hygiene for all and end open defecation, paying special attention to the needs of women and girls and those in vulnerable situations'),
	(6, 
	'Proportion of domestic and industrial wastewater flows safely treated',
	'6.3',
	'By 2030, improve water quality by reducing pollution, eliminating dumping and minimizing release of hazardous chemicals and materials, halving the proportion of untreated wastewater and substantially increasing recycling and safe reuse globally'),
	(6, 
	'Proportion of bodies of water with good ambient water quality',
	'6.3',
	'By 2030, improve water quality by reducing pollution, eliminating dumping and minimizing release of hazardous chemicals and materials, halving the proportion of untreated wastewater and substantially increasing recycling and safe reuse globally'),
	(6, 
	'Change in water-use efficiency over time',
	'6.4',
	'By 2030, substantially increase water-use efficiency across all sectors and ensure sustainable withdrawals and supply of freshwater to address water scarcity and substantially reduce the number of people suffering from water scarcity'),
	(6, 
	'Level of water stress: freshwater withdrawal as a proportion of available freshwater resources',
	'6.4',
	'By 2030, substantially increase water-use efficiency across all sectors and ensure sustainable withdrawals and supply of freshwater to address water scarcity and substantially reduce the number of people suffering from water scarcity'),
	(6, 
	'Degree of integrated water resources management implementation (0-100)',
	'6.5',
	'By 2030, implement integrated water resources management at all levels, including through transboundary cooperation as appropriate'),
	(6, 
	'Proportion of transboundary basin area with an operational arrangement for water cooperation',
	'6.5',
	'By 2030, implement integrated water resources management at all levels, including through transboundary cooperation as appropriate'),
	(6, 
	'Change in the extent of water-related ecosystems over time',
	'6.6',
	'By 2020, protect and restore water-related ecosystems, including mountains, forests, wetlands, rivers, aquifers and lakes'),
	(7, 
	'Proportion of population with access to electricity',
	'7.1',
	'By 2030, ensure universal access to affordable, reliable and modern energy services'),
	(7, 
	'Proportion of population with primary reliance on clean fuels and technology',
	'7.1',
	'By 2030, ensure universal access to affordable, reliable and modern energy services'),
	(7, 
	'Renewable energy share in the total final energy consumption',
	'7.2',
	'By 2030, increase substantially the share of renewable energy in the global energy mix'),
	(7, 
	'Energy intensity measured in terms of primary energy and GDP',
	'7.3',
	'By 2030, double the global rate of improvement in energy efficiency'),
	(8,
	'Annual growth rate of real GDP per capita', 
	'8.1', 
	'Sustain per capita economic growth in accordance with national circumstances and, in particular, at least 7 per cent gross domestic product growth per annum in the least developed countries.'),
	(8, 
	'Annual growth rate of real GDP per employed person', 
	'8.2', 
	'Achieve higher levels of economic productivity through diversification, technological upgrading and innovation, including through a focus on high-value added and labour-intensive sectors.'),
	(8, 
	'Proportion of informal employment in non‑agriculture employment, by sex', 
	'8.3', 
	'Promote development-oriented policies that support productive activities, decent job creation, entrepreneurship, creativity and innovation, and encourage the formalization and growth of micro-, small- and medium-sized enterprises, including through access to financial services.'),
	(8,
	'Material footprint, material footprint per capita, and material footprint per GDP', 
	'8.4', 
	'Improve progressively, through 2030, global resource efficiency in consumption and production and endeavour to decouple economic growth from environmental degradation, in accordance with the 10-year framework of programmes on sustainable consumption and production, with developed countries taking the lead.'),
	(8, 
	'Domestic material consumption, domestic material consumption per capita, and domestic material consumption per GDP', 
	'8.4', 
	'Improve progressively, through 2030, global resource efficiency in consumption and production and endeavour to decouple economic growth from environmental degradation, in accordance with the 10-year framework of programmes on sustainable consumption and production, with developed countries taking the lead.'),
	(8, 
	'Average hourly earnings of female and male employees, by occupation, age and persons with disabilities', 
	'8.5',
	'By 2030, achieve full and productive employment and decent work for all women and men, including for young people and persons with disabilities, and equal pay for work of equal value.'),
	(8, 
	'Unemployment rate, by sex, age and persons with disabilities', 
	'8.5',
	'By 2030, achieve full and productive employment and decent work for all women and men, including for young people and persons with disabilities, and equal pay for work of equal value'),
	(8, 
	'Proportion of youth (aged 15-24 years) not in education, employment or training.', 
	'8.6', 
	'By 2020, substantially reduce the proportion of youth not in employment, education or training.'),
	(8, 
	'Proportion and number of children aged 5‑17 years engaged in child labour, by sex and age', 
	'8.7',
	'Take immediate and effective measures to eradicate forced labour, end modern slavery and human trafficking and secure the prohibition and elimination of the worst forms of child labour, including recruitment and use of child soldiers, and by 2025 end child labour in all its forms.' ),
	(8, 
	'Fatal and non-fatal occupational injuries per 100,000 workers, by sex and migrant status', 
	'8.8', 
	'Protect labour rights and promote safe and secure working environments for all workers, including migrant workers, in particular women migrants, and those in precarious employment.'),
	(8, 
	'Level of national compliance with labour rights (freedom of association and collective bargaining) based on International Labour Organization (ILO) textual sources and national legislation, by sex and migrant status', 
	'8.8', 
	'Protect labour rights and promote safe and secure working environments for all workers, including migrant workers, in particular women migrants, and those in precarious employment.'),
	(8, 
	'Tourism direct GDP as a proportion of total GDP and in growth rate', 
	'8.9',
	'By 2030, devise and implement policies to promote sustainable tourism that creates jobs and promotes local culture and products'),
	(8, 
	'Number of commercial bank branches and automated teller machines (ATMs) per 100,000 adults', 
	'8.10', 
	'Strengthen the capacity of domestic financial institutions to encourage and expand access to banking, insurance and financial services for all'),
	(8, 
	'Proportion of adults (15 years and older) with an account at a bank or other financial institution or with a mobile-money-service provider', 
	'8.10',
	'Strengthen the capacity of domestic financial institutions to encourage and expand access to banking, insurance and financial services for all'),
	(9, 
	'Proportion of the rural population who live within 2 km of an all-season road', 
	'9.1',
	'Develop quality, reliable, sustainable and resilient infrastructure, including regional and transborder infrastructure, to support economic development and human well-being, with a focus on affordable and equitable access for all'),
	(9, 
	'Passenger and freight volumes, by mode of transport', 
	'9.1',
	'Develop quality, reliable, sustainable and resilient infrastructure, including regional and transborder infrastructure, to support economic development and human well-being, with a focus on affordable and equitable access for all'),
	(9, 
	'Manufacturing value added as a proportion of GDP and per capita', 
	'9.2',
	'Promote inclusive and sustainable industrialization and, by 2030, significantly raise industry’s share of employment and gross domestic product, in line with national circumstances, and double its share in least developed countries'),
	(9, 
	'Manufacturing employment as a proportion of total employment', 
	'9.2',
	'Promote inclusive and sustainable industrialization and, by 2030, significantly raise industry’s share of employment and gross domestic product, in line with national circumstances, and double its share in least developed countries'),
	(9, 
	'Proportion of small-scale industries in total industry value added', 
	'9.3',
	'Increase the access of small-scale industrial and other enterprises, in particular in developing countries, to financial services, including affordable credit, and their integration into value chains and markets'),
	(9, 
	'Proportion of small-scale industries with a loan or line of credit', 
	'9.3',
	'Increase the access of small-scale industrial and other enterprises, in particular in developing countries, to financial services, including affordable credit, and their integration into value chains and markets'),
	(9, 
	'CO2 emission per unit of value added', 
	'9.4',
	'By 2030, upgrade infrastructure and retrofit industries to make them sustainable, with increased resource-use efficiency and greater adoption of clean and environmentally sound technologies and industrial processes, with all countries taking action in accordance with their respective capabilities'),
	(9, 
	'Research and development expenditure as a proportion of GDP', 
	'9.5',
	'Enhance scientific research, upgrade the technological capabilities of industrial sectors in all countries, in particular developing countries, including, by 2030, encouraging innovation and substantially increasing the number of research and development workers per 1 million people and public and private research and development spending'),
	(9, 
	'Researchers (in full-time equivalent) per million inhabitants', 
	'9.5',
	'Enhance scientific research, upgrade the technological capabilities of industrial sectors in all countries, in particular developing countries, including, by 2030, encouraging innovation and substantially increasing the number of research and development workers per 1 million people and public and private research and development spending'),
	(10, 
	'Growth rates of household expenditure or income per capita among the bottom 40 per cent of the population and the total population', 
	'10.1',
	'By 2030, progressively achieve and sustain income growth of the bottom 40 per cent of the population at a rate higher than the national average'),
	(10, 
	'Proportion of people living below 50 per cent of median income, by age, sex and persons with disabilities', 
	'10.2',
	'By 2030, empower and promote the social, economic and political inclusion of all, irrespective of age, sex, disability, race, ethnicity, origin, religion or economic or other status'),
	(10, 
	'Proportion of the population reporting having personally felt discriminated against or harassed within the previous 12 months on the basis of a ground of discrimination prohibited under international human rights law', 
	'10.3',
	'Ensure equal opportunity and reduce inequalities of outcome, including by eliminating discriminatory laws, policies and practices and promoting appropriate legislation, policies and action in this regard'),
	(10, 
	'Labour share of GDP', 
	'10.4',
	'Adopt policies, especially fiscal, wage and social protection policies, and progressively achieve greater equality'),
	(10, 
	'Redistributive impact of fiscal policy', 
	'10.4',
	'Adopt policies, especially fiscal, wage and social protection policies, and progressively achieve greater equality'),
	(10, 
	'Financial Soundness Indicators', 
	'10.5',
	'Improve the regulation and monitoring of global financial markets and institutions and strengthen the implementation of such regulations'),
	(10, 
	'Proportion of members and voting rights of developing countries in international organizations', 
	'10.6',
	'Ensure enhanced representation and voice for developing countries in decision-making in global international economic and financial institutions in order to deliver more effective, credible, accountable and legitimate institutions'),
	(10, 
	'Recruitment cost borne by employee as a proportion of yearly income earned in country of destination', 
	'10.7',
	'EFacilitate orderly, safe, regular and responsible migration and mobility of people, including through the implementation of planned and well-managed migration policies'),
	(10, 
	'Number of countries with migration policies that facilitate orderly, safe, regular and responsible migration and mobility of people', 
	'10.7',
	'Facilitate orderly, safe, regular and responsible migration and mobility of people, including through the implementation of planned and well-managed migration policies'),
	(10, 
	'Number of people who died or disappeared in the process of migration towards an international destination', 
	'10.7',
	'Facilitate orderly, safe, regular and responsible migration and mobility of people, including through the implementation of planned and well-managed migration policies'),
	(10, 
	'Proportion of the population who are refugees, by country of origin', 
	'10.7',
	'Facilitate orderly, safe, regular and responsible migration and mobility of people, including through the implementation of planned and well-managed migration policies'),
	(11, 
	'Proportion of urban population living in slums, informal settlements or inadequate housing', 
	'11.1',
	'By 2030, ensure access for all to adequate, safe and affordable housing and basic services and upgrade slums'),
	(11, 
	'Proportion of population that has convenient access to public transport, by sex, age and persons with disabilities', 
	'11.2',
	'By 2030, provide access to safe, affordable, accessible and sustainable transport systems for all, improving road safety, notably by expanding public transport, with special attention to the needs of those in vulnerable situations, women, children, persons with disabilities and older persons'),
	(11, 
	'Ratio of land consumption rate to population growth rate', 
	'11.3',
	'By 2030, enhance inclusive and sustainable urbanization and capacity for participatory, integrated and sustainable human settlement planning and management in all countries'),
	(11, 
	'Proportion of cities with a direct participation structure of civil society in urban planning and management that operate regularly and democratically', 
	'11.3',
	'By 2030, enhance inclusive and sustainable urbanization and capacity for participatory, integrated and sustainable human settlement planning and management in all countries'),
	(11, 
	'Total per capita expenditure on the preservation, protection and conservation of all cultural and natural heritage, by source of funding (public, private), type of heritage (cultural, natural) and level of government (national, regional, and local/municipal)', 
	'11.4',
	'Strengthen efforts to protect and safeguard the world’s cultural and natural heritage'),
	(11, 
	'Number of deaths, missing persons and directly affected persons attributed to disasters per 100,000 population', 
	'11.5',
	'By 2030, significantly reduce the number of deaths and the number of people affected and substantially decrease the direct economic losses relative to global gross domestic product caused by disasters, including water-related disasters, with a focus on protecting the poor and people in vulnerable situations'),
	(11, 
	'Direct economic loss in relation to global GDP, damage to critical infrastructure and number of disruptions to basic services, attributed to disasters', 
	'11.5',
	'By 2030, significantly reduce the number of deaths and the number of people affected and substantially decrease the direct economic losses relative to global gross domestic product caused by disasters, including water-related disasters, with a focus on protecting the poor and people in vulnerable situations'),
	(11, 
	'Proportion of urban solid waste regularly collected and with adequate final discharge out of total urban solid waste generated, by cities', 
	'11.6',
	'By 2030, reduce the adverse per capita environmental impact of cities, including by paying special attention to air quality and municipal and other waste management'),
	(11, 
	'Annual mean levels of fine particulate matter (e.g. PM2.5 and PM10) in cities (population weighted)', 
	'11.6',
	'By 2030, reduce the adverse per capita environmental impact of cities, including by paying special attention to air quality and municipal and other waste management'),
	(11, 
	'Average share of the built-up area of cities that is open space for public use for all, by sex, age and persons with disabilities', 
	'11.7',
	'By 2030, provide universal access to safe, inclusive and accessible, green and public spaces, in particular for women and children, older persons and persons with disabilities'),
	(11, 
	'Proportion of persons victim of physical or sexual harassment, by sex, age, disability status and place of occurrence, in the previous 12 months', 
	'11.7',
	'By 2030, provide universal access to safe, inclusive and accessible, green and public spaces, in particular for women and children, older persons and persons with disabilities'),
	(12, 
	'Number of countries developing, adopting or implementing policy instruments aimed at supporting the shift to sustainable consumption and production', 
	'12.1',
	'Implement the 10-year framework of programmes on sustainable consumption and production, all countries taking action, with developed countries taking the lead, taking into account the development and capabilities of developing countries'),
	(12, 
	'Material footprint, material footprint per capita, and material footprint per GDP', 
	'12.2',
	'By 2030, achieve the sustainable management and efficient use of natural resources'),
	(12, 
	'Domestic material consumption, domestic material consumption per capita, and domestic material consumption per GDP', 
	'12.2',
	'By 2030, achieve the sustainable management and efficient use of natural resources'),
	(12, 
	'(a) Food loss index and (b) food waste index', 
	'12.3',
	'By 2030, halve per capita global food waste at the retail and consumer levels and reduce food losses along production and supply chains, including post-harvest losses'),
	(12, 
	'Number of parties to international multilateral environmental agreements on hazardous waste, and other chemicals that meet their commitments and obligations in transmitting information as required by each relevant agreement', 
	'12.4',
	'By 2020, achieve the environmentally sound management of chemicals and all wastes throughout their life cycle, in accordance with agreed international frameworks, and significantly reduce their release to air, water and soil in order to minimize their adverse impacts on human health and the environment'),
	(12, 
	'(a) Hazardous waste generated per capita; and (b) proportion of hazardous waste treated, by type of treatment', 
	'12.4',
	'By 2020, achieve the environmentally sound management of chemicals and all wastes throughout their life cycle, in accordance with agreed international frameworks, and significantly reduce their release to air, water and soil in order to minimize their adverse impacts on human health and the environment'),
	(12, 
	'National recycling rate, tons of material recycled', 
	'12.5',
	'By 2030, substantially reduce waste generation through prevention, reduction, recycling and reuse'),
	(12, 
	'Number of companies publishing sustainability reports', 
	'12.6',
	'Encourage companies, especially large and transnational companies, to adopt sustainable practices and to integrate sustainability information into their reporting cycle'),
	(12, 
	'Degree of sustainable public procurement policies and action plan implementation', 
	'12.7',
	'Promote public procurement practices that are sustainable, in accordance with national policies and priorities'),
	(12, 
	'Extent to which (i) global citizenship education and (ii) education for sustainable development are mainstreamed in (a) national education policies; (b) curricula; (c) teacher education; and (d) student assessment', 
	'12.8',
	'By 2030, ensure that people everywhere have the relevant information and awareness for sustainable development and lifestyles in harmony with nature'),
	(13,
	'Number of deaths, missing persons and directly affected persons attributed to disasters per 100,000 population',
	'13.1',
	'Strengthen resilience and adaptive capacity to climate-related hazards and natural disasters in all countries'),
	(13,
	'Number of countries that adopt and implement national disaster risk reduction strategies in line with the Sendai Framework for Disaster Risk Reduction 2015–2030',
	'13.1',
	'Strengthen resilience and adaptive capacity to climate-related hazards and natural disasters in all countries'),
	(13,
	'Proportion of local governments that adopt and implement local disaster risk reduction strategies in line with national disaster risk reduction strategies',
	'13.1',
	'Strengthen resilience and adaptive capacity to climate-related hazards and natural disasters in all countries'),
	(13,
	'Number of countries with nationally determined contributions, long-term strategies, national adaptation plans and adaptation communications, as reported to the secretariat of the United Nations Framework Convention on Climate Change',
	'13.2',
	'Integrate climate change measures into national policies, strategies and planning'),
	(13,
	'Total greenhouse gas emissions per year',
	'13.2',
	'Integrate climate change measures into national policies, strategies and planning'),
	(13,
	'Extent to which (i) global citizenship education and (ii) education for sustainable development are mainstreamed in (a) national education policies; (b) curricula; (c) teacher education; and (d) student assessment',
	'13.3',
	'Improve education, awareness-raising and human and institutional capacity on climate change mitigation, adaptation, impact reduction and early warning'),
	(13,
	'Number of countries that have communicated the strengthening of institutional, systemic and individual capacity-building to implement adaptation, mitigation and technology transfer, and development actions',
	'13.3',
	'Improve education, awareness-raising and human and institutional capacity on climate change mitigation, adaptation, impact reduction and early warning'),
    (14, 
	'(a) Index of coastal eutrophication; and (b) plastic debris density', 
	'14.1', 
	'By 2025, prevent and significantly reduce marine pollution of all kinds, in particular from land-based activities, including marine debris and nutrient pollution'),
	(14, 
	'Number of countries using ecosystem-based approaches to managing marine areas', 
	'14.2', 
	'By 2020, sustainably manage and protect marine and coastal ecosystems to avoid significant adverse impacts, including by strengthening their resilience, and take action for their restoration in order to achieve healthy and productive oceans'),
	(14, 
	'Average marine acidity (pH) measured at agreed suite of representative sampling stations', 
	'14.3', 
	'Minimize and address the impacts of ocean acidification, including through enhanced scientific cooperation at all levels'),
	(14, 
	'Proportion of fish stocks within biologically sustainable levels', 
	'14.4', 
	'By 2020, effectively regulate harvesting and end overfishing, illegal, unreported and unregulated fishing and destructive fishing practices and implement science-based management plans, in order to restore fish stocks in the shortest time feasible, at least to levels that can produce maximum sustainable yield as determined by their biological characteristics'),
	(14, 
	'Coverage of protected areas in relation to marine areas', 
	'14.5', 
	'By 2020, conserve at least 10 per cent of coastal and marine areas, consistent with national and international law and based on the best available scientific information'),
	(14, 
	'Degree of implementation of international instruments aiming to combat illegal, unreported and unregulated fishing', 
	'14.6', 
	'By 2020, prohibit certain forms of fisheries subsidies which contribute to overcapacity and overfishing, eliminate subsidies that contribute to illegal, unreported and unregulated fishing and refrain from introducing new such subsidies, recognizing that appropriate and effective special and differential treatment for developing and least developed countries should be an integral part of the World Trade Organization fisheries subsidies negotiation'),
	(14, 
	'Sustainable fisheries as a proportion of GDP in small island developing States, least developed countries and all countries', 
	'14.7', 
	'By 2030, increase the economic benefits to Small Island developing States and least developed countries from the sustainable use of marine resources, including through sustainable management of fisheries, aquaculture and tourism'),
	(15, 
	'Forest area as a proportion of total land area', 
	'15.1', 
	'By 2020, ensure the conservation, restoration and sustainable use of terrestrial and inland freshwater ecosystems and their services, in particular forests, wetlands, mountains and drylands, in line with obligations under international agreements'),
	(15, 
	'Proportion of important sites for terrestrial and freshwater biodiversity that are covered by protected areas, by ecosystem type', 
	'15.1', 
	'By 2020, ensure the conservation, restoration and sustainable use of terrestrial and inland freshwater ecosystems and their services, in particular forests, wetlands, mountains and drylands, in line with obligations under international agreements'),
	(15, 
	'Progress towards sustainable forest management', 
	'15.2', 
	'By 2020, promote the implementation of sustainable management of all types of forests, halt deforestation, restore degraded forests and substantially increase afforestation and reforestation globally'),
	(15, 
	'Proportion of land that is degraded over total land area', 
	'15.3', 
	'By 2030, combat desertification, restore degraded land and soil, including land affected by desertification, drought and floods, and strive to achieve a land degradation-neutral world'),
	(15, 
	'Coverage by protected areas of important sites for mountain biodiversity', 
	'15.4', 
	'By 2030, ensure the conservation of mountain ecosystems, including their biodiversity, in order to enhance their capacity to provide benefits that are essential for sustainable development'),
	(15, 
	'Mountain Green Cover Index', 
	'15.4', 
	'By 2030, ensure the conservation of mountain ecosystems, including their biodiversity, in order to enhance their capacity to provide benefits that are essential for sustainable development'),
	(15, 
	'Red List Index', 
	'15.5', 
	'Take urgent and significant action to reduce the degradation of natural habitats, halt the loss of biodiversity and, by 2020, protect and prevent the extinction of threatened species'),
	(15, 
	'Number of countries that have adopted legislative, administrative and policy frameworks to ensure fair and equitable sharing of benefits', 
	'15.6', 
	'Promote fair and equitable sharing of the benefits arising from the utilization of genetic resources and promote appropriate access to such resources, as internationally agreed'),
	(15, 
	'Proportion of traded wildlife that was poached or illicitly trafficked', 
	'15.7', 
	'Take urgent action to end poaching and trafficking of protected species of flora and fauna and address both demand and supply of illegal wildlife products'),
	(15, 
	'Proportion of countries adopting relevant national legislation and adequately resourcing the prevention or control of invasive alien species', 
	'15.8', 
	'By 2020, introduce measures to prevent the introduction and significantly reduce the impact of invasive alien species on land and water ecosystems and control or eradicate the priority species'),
	(15, 
	'(a) Number of countries that have established national targets in accordance with or similar to Aichi Biodiversity Target 2 of the Strategic Plan for Biodiversity 2011–2020 in their national biodiversity strategy and action plans and the progress reported towards these targets; and (b) integration of biodiversity into national accounting and reporting systems, defined as implementation of the System of Environmental-Economic Accounting', 
	'15.9', 
	'By 2020, integrate ecosystem and biodiversity values into national and local planning, development processes, poverty reduction strategies and accounts'),
	(16,
	'Number of victims of intentional homicide per 100,000 population, by sex and age', 
	'16.1', 
	'Significantly reduce all forms of violence and related death rates everywhere'),
	(16,
	'Conflict-related deaths per 100,000 population, by sex, age and cause', 
	'16.1', 
	'Significantly reduce all forms of violence and related death rates everywhere'),
	(16,
	'Proportion of population subjected to (a) physical violence, (b) psychological violence and (c) sexual violence in the previous 12 months', 
	'16.1', 
	'Significantly reduce all forms of violence and related death rates everywhere'),
	(16,
	'Proportion of population that feel safe walking alone around the area they live', 
	'16.1', 
	'Significantly reduce all forms of violence and related death rates everywhere'),
	(16,
	'Proportion of children aged 1–17 years who experienced any physical punishment and/or psychological aggression by caregivers in the past month', 
	'16.2', 
	'End abuse, exploitation, trafficking and all forms of violence against and torture of children'),
	(16,
	'Number of victims of human trafficking per 100,000 population, by sex, age and form of exploitation', 
	'16.2', 
	'End abuse, exploitation, trafficking and all forms of violence against and torture of children'),
	(16,
	'Proportion of young women and men aged 18–29 years who experienced sexual violence by age 18', 
	'16.2', 
	'End abuse, exploitation, trafficking and all forms of violence against and torture of children'),
	(16,
	'Proportion of victims of violence in the previous 12 months who reported their victimization to competent authorities or other officially recognized conflict resolution mechanisms', 
	'16.3', 
	'Promote the rule of law at the national and international levels and ensure equal access to justice for all'),
	(16,
	'Unsentenced detainees as a proportion of overall prison population', 
	'16.3', 
	'Promote the rule of law at the national and international levels and ensure equal access to justice for all'),
	(16,
	'Proportion of the population who have experienced a dispute in the past two years and who accessed a formal or informal dispute resolution mechanism, by type of mechanism', 
	'16.3', 
	'Promote the rule of law at the national and international levels and ensure equal access to justice for all'),
	(16,
	'Total value of inward and outward illicit financial flows (in current United States dollars)', 
	'16.4', 
	'By 2030, significantly reduce illicit financial and arms flows, strengthen the recovery and return of stolen assets and combat all forms of organized crime'),
	(16,
	'Proportion of seized, found or surrendered arms whose illicit origin or context has been traced or established by a competent authority in line with international instruments', 
	'16.4', 
	'By 2030, significantly reduce illicit financial and arms flows, strengthen the recovery and return of stolen assets and combat all forms of organized crime'),
	(16,
	'Proportion of persons who had at least one contact with a public official and who paid a bribe to a public official, or were asked for a bribe by those public officials, during the previous 12 months', 
	'16.5', 
	'Substantially reduce corruption and bribery in all their forms'),
	(16,
	'Proportion of businesses that had at least one contact with a public official and that paid a bribe to a public official, or were asked for a bribe by those public officials during the previous 12 months', 
	'16.5', 
	'Substantially reduce corruption and bribery in all their forms'),
	(16,
	'Primary government expenditures as a proportion of original approved budget, by sector (or by budget codes or similar)', 
	'16.6', 
	'Develop effective, accountable and transparent institutions at all levels'),
	(16,
	'Proportion of population satisfied with their last experience of public services', 
	'16.6', 
	'Develop effective, accountable and transparent institutions at all levels'),
	(16,
	'Proportions of positions in national and local institutions, including (a) the legislatures; (b) the public service; and (c) the judiciary, compared to national distributions, by sex, age, persons with disabilities and population groups', 
	'16.7', 
	'Ensure responsive, inclusive, participatory and representative decision-making at all levels'),
	(16,
	'Proportion of population who believe decision-making is inclusive and responsive, by sex, age, disability and population group', 
	'16.7', 
	'Ensure responsive, inclusive, participatory and representative decision-making at all levels'),
	(16,
	'Proportion of members and voting rights of developing countries in international organizations', 
	'16.8', 
	'Broaden and strengthen the participation of developing countries in the institutions of global governance'),
	(16,
	'Proportion of children under 5 years of age whose births have been registered with a civil authority, by age', 
	'16.9', 
	'By 2030, provide legal identity for all, including birth registration'),
	(16,
	'Number of verified cases of killing, kidnapping, enforced disappearance, arbitrary detention and torture of journalists, associated media personnel, trade unionists and human rights advocates in the previous 12 months', 
	'16.10', 
	'Ensure public access to information and protect fundamental freedoms, in accordance with national legislation and international agreements'),
	(16,
	'Number of countries that adopt and implement constitutional, statutory and/or policy guarantees for public access to information', 
	'16.10', 
	'Ensure public access to information and protect fundamental freedoms, in accordance with national legislation and international agreements'),
	(17, 
	'Total government revenue as a proportion of GDP, by source', 
	'17.1', 
	'Strengthen domestic resource mobilization, including through international support to developing countries, to improve domestic capacity for tax and other revenue collection'),
	(17, 
	'Proportion of domestic budget funded by domestic taxes', 
	'17.2', 
	'Strengthen domestic resource mobilization, including through international support to developing countries, to improve domestic capacity for tax and other revenue collection'),
	(17, 
	'Net official development assistance, total and to least developed countries, as a proportion of the Organization for Economic Cooperation and Development (OECD) Development Assistance Committee donors’ gross national income (GNI)', 
	'17.2', 
	'Developed countries to implement fully their official development assistance commitments, including the commitment by many developed countries to achieve the target of 0.7 per cent of ODA/GNI to developing countries and 0.15 to 0.20 per cent of ODA/GNI to least developed countries; ODA providers are encouraged to consider setting a target to provide at least 0.20 per cent of ODA/GNI to least developed countries'),
	(17, 
	'Foreign direct investment, official development assistance and South-South cooperation as a proportion of gross national income', 
	'17.3', 
	'Mobilize additional financial resources for developing countries from multiple sources'),
	(17, 
	'Volume of remittances (in United States dollars) as a proportion of total GDP', 
	'17.3', 
	'Mobilize additional financial resources for developing countries from multiple sources'),
	(17, 
	'Debt service as a proportion of exports of goods and services', 
	'17.4', 
	'Assist developing countries in attaining long-term debt sustainability through coordinated policies aimed at fostering debt financing, debt relief and debt restructuring, as appropriate, and address the external debt of highly indebted poor countries to reduce debt distress'),
	(17, 
	'Number of countries that adopt and implement investment promotion regimes for developing countries, including the least developed countries', 
	'17.5', 
	'Adopt and implement investment promotion regimes for least developed countries'),
	(17, 
	'Fixed Internet broadband subscriptions per 100 inhabitants, by speed', 
	'17.6', 
	'Enhance North-South, South-South and triangular regional and international cooperation on and access to science, technology and innovation and enhance knowledge sharing on mutually agreed terms, including through improved coordination among existing mechanisms, in particular at the United Nations level, and through a global technology facilitation mechanism'),
	(17, 
	'Total amount of funding for developing countries to promote the development, transfer, dissemination and diffusion of environmentally sound technologies', 
	'17.7', 
	'Promote the development, transfer, dissemination and diffusion of environmentally sound technologies to developing countries on favourable terms, including on concessional and preferential terms, as mutually agreed'),
	(17, 
	'Proportion of individuals using the Internet', 
	'17.8', 
	'Fully operationalize the technology bank and science, technology and innovation capacity-building mechanism for least developed countries by 2017 and enhance the use of enabling technology, in particular information and communications technology'),
	(17, 
	'Dollar value of financial and technical assistance (including through North-South, South‑South and triangular cooperation) committed to developing countries', 
	'17.9', 
	'Enhance international support for implementing effective and targeted capacity-building in developing countries to support national plans to implement all the sustainable development goals, including through North-South, South-South and triangular cooperation'),
	(17, 
	'Worldwide weighted tariff-average', 
	'17.10', 
	'Promote a universal, rules-based, open, non-discriminatory and equitable multilateral trading system under the World Trade Organization, including through the conclusion of negotiations under its Doha Development Agenda'),
	(17, 
	'Developing countries’ and least developed countries’ share of global exports', 
	'17.11', 
	'Significantly increase the exports of developing countries, in particular with a view to doubling the least developed countries’ share of global exports by 2020'),
	(17, 
	'Weighted average tariffs faced by developing countries, least developed countries and small island developing States', 
	'17.12', 
	'Realize timely implementation of duty-free and quota-free market access on a lasting basis for all least developed countries, consistent with World Trade Organization decisions, including by ensuring that preferential rules of origin applicable to imports from least developed countries are transparent and simple, and contribute to facilitating market access'),
	(17, 
	'Macroeconomic Dashboard', 
	'17.13', 
	'Enhance global macroeconomic stability, including through policy coordination and policy coherence'),
	(17, 
	'Number of countries with mechanisms in place to enhance policy coherence of sustainable development', 
	'17.14', 
	'Enhance policy coherence for sustainable development'),
	(17, 
	'Extent of use of country-owned results frameworks and planning tools by providers of development cooperation', 
	'17.15', 
	'Respect each country’s policy space and leadership to establish and implement policies for poverty eradication and sustainable development Multi-stakeholder partnerships'),
	(17, 
	'Number of countries reporting progress in multi-stakeholder development effectiveness monitoring frameworks that support the achievement of the sustainable development goals', 
	'17.16', 
	'Enhance the global partnership for sustainable development, complemented by multi-stakeholder partnerships that mobilize and share knowledge, expertise, technology and financial resources, to support the achievement of the sustainable development goals in all countries, in particular developing countries'),
	(17, 
	'Amount in United States dollars committed to public-private partnerships for infrastructure', 
	'17.17', 
	'Encourage and promote effective public, public-private and civil society partnerships, building on the experience and resourcing strategies of partnerships Data, monitoring and accountability'),
	(17, 
	'Statistical capacity indicator for Sustainable Development Goal monitoring', 
	'17.18', 
	'By 2020, enhance capacity-building support to developing countries, including for least developed countries and small island developing States, to increase significantly the availability of high-quality, timely and reliable data disaggregated by income, gender, age, race, ethnicity, migratory status, disability, geographic location and other characteristics relevant in national contexts'),
	(17, 
	'Number of countries that have national statistical legislation that complies with the Fundamental Principles of Official Statistics', 
	'17.18', 
	'By 2020, enhance capacity-building support to developing countries, including for least developed countries and small island developing States, to increase significantly the availability of high-quality, timely and reliable data disaggregated by income, gender, age, race, ethnicity, migratory status, disability, geographic location and other characteristics relevant in national contexts'),
	(17, 
	'Number of countries with a national statistical plan that is fully funded and under implementation, by source of funding', 
	'17.18', 
	'By 2020, enhance capacity-building support to developing countries, including for least developed countries and small island developing States, to increase significantly the availability of high-quality, timely and reliable data disaggregated by income, gender, age, race, ethnicity, migratory status, disability, geographic location and other characteristics relevant in national contexts'),
	(17, 
	'Dollar value of all resources made available to strengthen statistical capacity in developing countrie', 
	'17.19', 
	'By 2030, build on existing initiatives to develop measurements of progress on sustainable development that complement gross domestic product, and support statistical capacity-building in developing countries'),
	(17, 
	'Proportion of countries that (a) have conducted at least one population and housing census in the last 10 years; and (b) have achieved 100 per cent birth registration and 80 per cent death registration', 
	'17.19', 
	'By 2030, build on existing initiatives to develop measurements of progress on sustainable development that complement gross domestic product, and support statistical capacity-building in developing countries');

		

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
	('No Poverty', '/images/SDGs/E-WEB-Goal-01.png'),
	('Zero Hunger', '/images/SDGs/E-WEB-Goal-02.png'),
	('Good Health and Well-being', '/images/SDGs/E-WEB-Goal-03.png'),
	('Quality Education', '/images/SDGs/E-WEB-Goal-04.png'),
	('Gender Equality', '/images/SDGs/E-WEB-Goal-05.png'),
	('Clean Water and Sanitation', '/images/SDGs/E-WEB-Goal-06.png'),
	('Affordable and Clean Energy', '/images/SDGs/E-WEB-Goal-07.png'),
	('Decent Work and Economic Growth', '/images/SDGs/E-WEB-Goal-08.png'),
	('Industry, Innovation and Infrastructure', '/images/SDGs/E-WEB-Goal-09.png'),
	('Reduced Inequality', '/images/SDGs/E-WEB-Goal-10.png'),
	('Sustainable Cities and Communities', '/images/SDGs/E-WEB-Goal-11.png'),
	('Responsible Consumption and Production', '/images/SDGs/E-WEB-Goal-12.png'),
	('Climate Action', '/images/SDGs/E-WEB-Goal-13.png'),
	('Life Below Water', '/images/SDGs/E-WEB-Goal-14.png'),
	('Life on Land', '/images/SDGs/E-WEB-Goal-15.png'),
	('Peace, Justice and Strong Institutions', '/images/SDGs/E-WEB-Goal-16.png'),
	('Partnerships for the Goals', '/images/SDGs/E-WEB-Goal-17.png')
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
	('Efficiency Risk - impact could be achieved with fewer resources or at a lower cost'),
	('Execution Risk - activities are not delivered as planned and do not result in desired outcomes'),
	('Alignment Risk - impact is not aligned into the enterprise model'),
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