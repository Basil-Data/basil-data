--
-- PostgreSQL database dump
--

-- Dumped from database version 14.2
-- Dumped by pg_dump version 14.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: answers; Type: TABLE; Schema: public; Owner: sabrinac
--

CREATE TABLE public.answers (
    id integer NOT NULL,
    "enterpriseId" integer,
    "enterpriseSize1" integer,
    "dateFounded1" date,
    "missionStatement1" character varying(1024) DEFAULT NULL::character varying,
    "understandProblem1" integer,
    "yearsCollectiveExperience1" integer,
    "percentageBIPOC1" integer,
    "percentageFemale1" integer,
    "investorIntroduction1" character varying(1024) DEFAULT NULL::character varying,
    "problemBeingSolved2" character varying(500) DEFAULT NULL::character varying,
    "costOfProblem2" character varying(500) DEFAULT NULL::character varying,
    "howTheySolve2" character varying(500) DEFAULT NULL::character varying,
    "whoBenefits2" character varying(500) DEFAULT NULL::character varying,
    "elaborateOnIndicators2" character varying(500) DEFAULT NULL::character varying,
    "organizationLocation2" character varying(500) DEFAULT NULL::character varying,
    "focusedEfforts2" character varying(500) DEFAULT NULL::character varying,
    "specificChanges2" character varying(500) DEFAULT NULL::character varying,
    "measuredOutcome2" character varying(1024) DEFAULT NULL::character varying,
    "secondarySDG2" character varying(1024) DEFAULT NULL::character varying,
    "impactLevel2" character varying(1024) DEFAULT NULL::character varying,
    "payingCustomerProfile3" character varying(1024) DEFAULT NULL::character varying,
    "mainCompetitors3" character varying(1024) DEFAULT NULL::character varying,
    "differFromCompetitors3" character varying(1024) DEFAULT NULL::character varying,
    testimonial3 character varying(1024) DEFAULT NULL::character varying,
    "businessModel3" character varying(1024) DEFAULT NULL::character varying,
    "fundingReceived4" integer,
    "customerGrowth4" integer,
    "generatingRevenue4" character varying(10) DEFAULT NULL::character varying,
    "averageGrowth4" integer,
    "makingProfit4" boolean,
    "netProfitMargin4" integer,
    "customerAcquisitionCost4" integer,
    "marketingExpenses4" integer,
    "newCustomers4" integer,
    "addressableMarket5" integer,
    "serviceableMarket5" integer,
    "obtainableMarket5" integer,
    "riskPrep6" character varying(1024) DEFAULT NULL::character varying,
    "barrierPlan6" character varying(1024) DEFAULT NULL::character varying,
    "externalGrowth6" character varying(1024) DEFAULT NULL::character varying,
    "whyRealistic5" character varying(1024) DEFAULT NULL::character varying,
    "industryPerspectiveOne5" character varying(250) DEFAULT NULL::character varying,
    "industryPerspectiveTwo5" character varying(250) DEFAULT NULL::character varying,
    "industryPerspectiveThree5" character varying(250) DEFAULT NULL::character varying,
    "raisingFunds7" character varying(255) DEFAULT NULL::character varying,
    "targetAmount7" integer,
    "nextSteps7" character varying(1024) DEFAULT NULL::character varying,
    "understandProblem7" integer,
    admin1 character varying(3000),
    admin2 character varying(3000),
    admin3 character varying(3000),
    admin4 character varying(3000),
    admin5 character varying(3000),
    admin6 character varying(3000),
    admin7 character varying(3000),
    "progressExplanationOne4" character varying(512) DEFAULT NULL::character varying,
    "progressExplanationTwo4" character varying(512) DEFAULT NULL::character varying
);


ALTER TABLE public.answers OWNER TO sabrinac;

--
-- Name: answers_id_seq; Type: SEQUENCE; Schema: public; Owner: sabrinac
--

CREATE SEQUENCE public.answers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.answers_id_seq OWNER TO sabrinac;

--
-- Name: answers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sabrinac
--

ALTER SEQUENCE public.answers_id_seq OWNED BY public.answers.id;


--
-- Name: anticipatedRisks; Type: TABLE; Schema: public; Owner: sabrinac
--

CREATE TABLE public."anticipatedRisks" (
    id integer NOT NULL,
    risk character varying(255)
);


ALTER TABLE public."anticipatedRisks" OWNER TO sabrinac;

--
-- Name: anticipatedRisksJunction; Type: TABLE; Schema: public; Owner: sabrinac
--

CREATE TABLE public."anticipatedRisksJunction" (
    id integer NOT NULL,
    "enterpriseId" integer,
    "riskId" integer
);


ALTER TABLE public."anticipatedRisksJunction" OWNER TO sabrinac;

--
-- Name: anticipatedRisksJunction_id_seq; Type: SEQUENCE; Schema: public; Owner: sabrinac
--

CREATE SEQUENCE public."anticipatedRisksJunction_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."anticipatedRisksJunction_id_seq" OWNER TO sabrinac;

--
-- Name: anticipatedRisksJunction_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sabrinac
--

ALTER SEQUENCE public."anticipatedRisksJunction_id_seq" OWNED BY public."anticipatedRisksJunction".id;


--
-- Name: anticipatedRisks_id_seq; Type: SEQUENCE; Schema: public; Owner: sabrinac
--

CREATE SEQUENCE public."anticipatedRisks_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."anticipatedRisks_id_seq" OWNER TO sabrinac;

--
-- Name: anticipatedRisks_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sabrinac
--

ALTER SEQUENCE public."anticipatedRisks_id_seq" OWNED BY public."anticipatedRisks".id;


--
-- Name: competitiveAdvantages; Type: TABLE; Schema: public; Owner: sabrinac
--

CREATE TABLE public."competitiveAdvantages" (
    id integer NOT NULL,
    advantage character varying(255),
    "advantageLogo" character varying(1000)
);


ALTER TABLE public."competitiveAdvantages" OWNER TO sabrinac;

--
-- Name: competitiveAdvantagesJunction; Type: TABLE; Schema: public; Owner: sabrinac
--

CREATE TABLE public."competitiveAdvantagesJunction" (
    id integer NOT NULL,
    "enterpriseId" integer,
    "advantageId" integer
);


ALTER TABLE public."competitiveAdvantagesJunction" OWNER TO sabrinac;

--
-- Name: competitiveAdvantagesJunction_id_seq; Type: SEQUENCE; Schema: public; Owner: sabrinac
--

CREATE SEQUENCE public."competitiveAdvantagesJunction_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."competitiveAdvantagesJunction_id_seq" OWNER TO sabrinac;

--
-- Name: competitiveAdvantagesJunction_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sabrinac
--

ALTER SEQUENCE public."competitiveAdvantagesJunction_id_seq" OWNED BY public."competitiveAdvantagesJunction".id;


--
-- Name: competitiveAdvantages_id_seq; Type: SEQUENCE; Schema: public; Owner: sabrinac
--

CREATE SEQUENCE public."competitiveAdvantages_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."competitiveAdvantages_id_seq" OWNER TO sabrinac;

--
-- Name: competitiveAdvantages_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sabrinac
--

ALTER SEQUENCE public."competitiveAdvantages_id_seq" OWNED BY public."competitiveAdvantages".id;


--
-- Name: developmentStage; Type: TABLE; Schema: public; Owner: sabrinac
--

CREATE TABLE public."developmentStage" (
    id integer NOT NULL,
    stage character varying(255)
);


ALTER TABLE public."developmentStage" OWNER TO sabrinac;

--
-- Name: developmentStageJunction; Type: TABLE; Schema: public; Owner: sabrinac
--

CREATE TABLE public."developmentStageJunction" (
    id integer NOT NULL,
    "enterpriseId" integer,
    "developmentStageId" integer
);


ALTER TABLE public."developmentStageJunction" OWNER TO sabrinac;

--
-- Name: developmentStageJunction_id_seq; Type: SEQUENCE; Schema: public; Owner: sabrinac
--

CREATE SEQUENCE public."developmentStageJunction_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."developmentStageJunction_id_seq" OWNER TO sabrinac;

--
-- Name: developmentStageJunction_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sabrinac
--

ALTER SEQUENCE public."developmentStageJunction_id_seq" OWNED BY public."developmentStageJunction".id;


--
-- Name: developmentStage_id_seq; Type: SEQUENCE; Schema: public; Owner: sabrinac
--

CREATE SEQUENCE public."developmentStage_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."developmentStage_id_seq" OWNER TO sabrinac;

--
-- Name: developmentStage_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sabrinac
--

ALTER SEQUENCE public."developmentStage_id_seq" OWNED BY public."developmentStage".id;


--
-- Name: economicImpact; Type: TABLE; Schema: public; Owner: sabrinac
--

CREATE TABLE public."economicImpact" (
    id integer NOT NULL,
    impact character varying(255)
);


ALTER TABLE public."economicImpact" OWNER TO sabrinac;

--
-- Name: economicImpactJunction; Type: TABLE; Schema: public; Owner: sabrinac
--

CREATE TABLE public."economicImpactJunction" (
    id integer NOT NULL,
    "enterpriseId" integer,
    "economicImpactId" integer
);


ALTER TABLE public."economicImpactJunction" OWNER TO sabrinac;

--
-- Name: economicImpactJunction_id_seq; Type: SEQUENCE; Schema: public; Owner: sabrinac
--

CREATE SEQUENCE public."economicImpactJunction_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."economicImpactJunction_id_seq" OWNER TO sabrinac;

--
-- Name: economicImpactJunction_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sabrinac
--

ALTER SEQUENCE public."economicImpactJunction_id_seq" OWNED BY public."economicImpactJunction".id;


--
-- Name: economicImpact_id_seq; Type: SEQUENCE; Schema: public; Owner: sabrinac
--

CREATE SEQUENCE public."economicImpact_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."economicImpact_id_seq" OWNER TO sabrinac;

--
-- Name: economicImpact_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sabrinac
--

ALTER SEQUENCE public."economicImpact_id_seq" OWNED BY public."economicImpact".id;


--
-- Name: environmentalImpact; Type: TABLE; Schema: public; Owner: sabrinac
--

CREATE TABLE public."environmentalImpact" (
    id integer NOT NULL,
    impact character varying(255)
);


ALTER TABLE public."environmentalImpact" OWNER TO sabrinac;

--
-- Name: environmentalImpactJunction; Type: TABLE; Schema: public; Owner: sabrinac
--

CREATE TABLE public."environmentalImpactJunction" (
    id integer NOT NULL,
    "enterpriseId" integer,
    "environmentalImpactId" integer
);


ALTER TABLE public."environmentalImpactJunction" OWNER TO sabrinac;

--
-- Name: environmentalImpactJunction_id_seq; Type: SEQUENCE; Schema: public; Owner: sabrinac
--

CREATE SEQUENCE public."environmentalImpactJunction_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."environmentalImpactJunction_id_seq" OWNER TO sabrinac;

--
-- Name: environmentalImpactJunction_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sabrinac
--

ALTER SEQUENCE public."environmentalImpactJunction_id_seq" OWNED BY public."environmentalImpactJunction".id;


--
-- Name: environmentalImpact_id_seq; Type: SEQUENCE; Schema: public; Owner: sabrinac
--

CREATE SEQUENCE public."environmentalImpact_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."environmentalImpact_id_seq" OWNER TO sabrinac;

--
-- Name: environmentalImpact_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sabrinac
--

ALTER SEQUENCE public."environmentalImpact_id_seq" OWNED BY public."environmentalImpact".id;


--
-- Name: fundingUse; Type: TABLE; Schema: public; Owner: sabrinac
--

CREATE TABLE public."fundingUse" (
    id integer NOT NULL,
    "fundingUse" character varying(255)
);


ALTER TABLE public."fundingUse" OWNER TO sabrinac;

--
-- Name: fundingUseJunction; Type: TABLE; Schema: public; Owner: sabrinac
--

CREATE TABLE public."fundingUseJunction" (
    id integer NOT NULL,
    "enterpriseId" integer,
    "fundingUseId" integer
);


ALTER TABLE public."fundingUseJunction" OWNER TO sabrinac;

--
-- Name: fundingUseJunction_id_seq; Type: SEQUENCE; Schema: public; Owner: sabrinac
--

CREATE SEQUENCE public."fundingUseJunction_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."fundingUseJunction_id_seq" OWNER TO sabrinac;

--
-- Name: fundingUseJunction_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sabrinac
--

ALTER SEQUENCE public."fundingUseJunction_id_seq" OWNED BY public."fundingUseJunction".id;


--
-- Name: fundingUse_id_seq; Type: SEQUENCE; Schema: public; Owner: sabrinac
--

CREATE SEQUENCE public."fundingUse_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."fundingUse_id_seq" OWNER TO sabrinac;

--
-- Name: fundingUse_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sabrinac
--

ALTER SEQUENCE public."fundingUse_id_seq" OWNED BY public."fundingUse".id;


--
-- Name: growthFactors; Type: TABLE; Schema: public; Owner: sabrinac
--

CREATE TABLE public."growthFactors" (
    id integer NOT NULL,
    factor character varying(255)
);


ALTER TABLE public."growthFactors" OWNER TO sabrinac;

--
-- Name: growthFactorsJunction; Type: TABLE; Schema: public; Owner: sabrinac
--

CREATE TABLE public."growthFactorsJunction" (
    id integer NOT NULL,
    "enterpriseId" integer,
    "factorId" integer
);


ALTER TABLE public."growthFactorsJunction" OWNER TO sabrinac;

--
-- Name: growthFactorsJunction_id_seq; Type: SEQUENCE; Schema: public; Owner: sabrinac
--

CREATE SEQUENCE public."growthFactorsJunction_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."growthFactorsJunction_id_seq" OWNER TO sabrinac;

--
-- Name: growthFactorsJunction_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sabrinac
--

ALTER SEQUENCE public."growthFactorsJunction_id_seq" OWNED BY public."growthFactorsJunction".id;


--
-- Name: growthFactors_id_seq; Type: SEQUENCE; Schema: public; Owner: sabrinac
--

CREATE SEQUENCE public."growthFactors_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."growthFactors_id_seq" OWNER TO sabrinac;

--
-- Name: growthFactors_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sabrinac
--

ALTER SEQUENCE public."growthFactors_id_seq" OWNED BY public."growthFactors".id;


--
-- Name: helpMoveForward; Type: TABLE; Schema: public; Owner: sabrinac
--

CREATE TABLE public."helpMoveForward" (
    id integer NOT NULL,
    assistance character varying(255)
);


ALTER TABLE public."helpMoveForward" OWNER TO sabrinac;

--
-- Name: helpMoveForwardJunction; Type: TABLE; Schema: public; Owner: sabrinac
--

CREATE TABLE public."helpMoveForwardJunction" (
    id integer NOT NULL,
    "enterpriseId" integer,
    "assistanceId" integer
);


ALTER TABLE public."helpMoveForwardJunction" OWNER TO sabrinac;

--
-- Name: helpMoveForwardJunction_id_seq; Type: SEQUENCE; Schema: public; Owner: sabrinac
--

CREATE SEQUENCE public."helpMoveForwardJunction_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."helpMoveForwardJunction_id_seq" OWNER TO sabrinac;

--
-- Name: helpMoveForwardJunction_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sabrinac
--

ALTER SEQUENCE public."helpMoveForwardJunction_id_seq" OWNED BY public."helpMoveForwardJunction".id;


--
-- Name: helpMoveForward_id_seq; Type: SEQUENCE; Schema: public; Owner: sabrinac
--

CREATE SEQUENCE public."helpMoveForward_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."helpMoveForward_id_seq" OWNER TO sabrinac;

--
-- Name: helpMoveForward_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sabrinac
--

ALTER SEQUENCE public."helpMoveForward_id_seq" OWNED BY public."helpMoveForward".id;


--
-- Name: impactSectors; Type: TABLE; Schema: public; Owner: sabrinac
--

CREATE TABLE public."impactSectors" (
    id integer NOT NULL,
    "impactSector" character varying(255)
);


ALTER TABLE public."impactSectors" OWNER TO sabrinac;

--
-- Name: impactSectors_id_seq; Type: SEQUENCE; Schema: public; Owner: sabrinac
--

CREATE SEQUENCE public."impactSectors_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."impactSectors_id_seq" OWNER TO sabrinac;

--
-- Name: impactSectors_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sabrinac
--

ALTER SEQUENCE public."impactSectors_id_seq" OWNED BY public."impactSectors".id;


--
-- Name: impactTableJunction; Type: TABLE; Schema: public; Owner: sabrinac
--

CREATE TABLE public."impactTableJunction" (
    id integer NOT NULL,
    "enterpriseId" integer,
    "impactSectorId" integer
);


ALTER TABLE public."impactTableJunction" OWNER TO sabrinac;

--
-- Name: impactTableJunction_id_seq; Type: SEQUENCE; Schema: public; Owner: sabrinac
--

CREATE SEQUENCE public."impactTableJunction_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."impactTableJunction_id_seq" OWNER TO sabrinac;

--
-- Name: impactTableJunction_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sabrinac
--

ALTER SEQUENCE public."impactTableJunction_id_seq" OWNED BY public."impactTableJunction".id;


--
-- Name: indicators; Type: TABLE; Schema: public; Owner: sabrinac
--

CREATE TABLE public.indicators (
    id integer NOT NULL,
    "sdgId" integer,
    indicator character varying(1000),
    "targetNumber" character varying(1000),
    target character varying(1000)
);


ALTER TABLE public.indicators OWNER TO sabrinac;

--
-- Name: indicatorsJunction; Type: TABLE; Schema: public; Owner: sabrinac
--

CREATE TABLE public."indicatorsJunction" (
    id integer NOT NULL,
    "enterpriseId" integer,
    "indicatorId" integer
);


ALTER TABLE public."indicatorsJunction" OWNER TO sabrinac;

--
-- Name: indicatorsJunction_id_seq; Type: SEQUENCE; Schema: public; Owner: sabrinac
--

CREATE SEQUENCE public."indicatorsJunction_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."indicatorsJunction_id_seq" OWNER TO sabrinac;

--
-- Name: indicatorsJunction_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sabrinac
--

ALTER SEQUENCE public."indicatorsJunction_id_seq" OWNED BY public."indicatorsJunction".id;


--
-- Name: indicators_id_seq; Type: SEQUENCE; Schema: public; Owner: sabrinac
--

CREATE SEQUENCE public.indicators_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.indicators_id_seq OWNER TO sabrinac;

--
-- Name: indicators_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sabrinac
--

ALTER SEQUENCE public.indicators_id_seq OWNED BY public.indicators.id;


--
-- Name: investmentStage; Type: TABLE; Schema: public; Owner: sabrinac
--

CREATE TABLE public."investmentStage" (
    id integer NOT NULL,
    stage character varying(255)
);


ALTER TABLE public."investmentStage" OWNER TO sabrinac;

--
-- Name: investmentStageJunction; Type: TABLE; Schema: public; Owner: sabrinac
--

CREATE TABLE public."investmentStageJunction" (
    id integer NOT NULL,
    "enterpriseId" integer,
    "investmentStageId" integer
);


ALTER TABLE public."investmentStageJunction" OWNER TO sabrinac;

--
-- Name: investmentStageJunction_id_seq; Type: SEQUENCE; Schema: public; Owner: sabrinac
--

CREATE SEQUENCE public."investmentStageJunction_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."investmentStageJunction_id_seq" OWNER TO sabrinac;

--
-- Name: investmentStageJunction_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sabrinac
--

ALTER SEQUENCE public."investmentStageJunction_id_seq" OWNED BY public."investmentStageJunction".id;


--
-- Name: investmentStage_id_seq; Type: SEQUENCE; Schema: public; Owner: sabrinac
--

CREATE SEQUENCE public."investmentStage_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."investmentStage_id_seq" OWNER TO sabrinac;

--
-- Name: investmentStage_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sabrinac
--

ALTER SEQUENCE public."investmentStage_id_seq" OWNED BY public."investmentStage".id;


--
-- Name: investmentVehicles; Type: TABLE; Schema: public; Owner: sabrinac
--

CREATE TABLE public."investmentVehicles" (
    id integer NOT NULL,
    "investmentVehicle" character varying(255)
);


ALTER TABLE public."investmentVehicles" OWNER TO sabrinac;

--
-- Name: investmentVehiclesJunction; Type: TABLE; Schema: public; Owner: sabrinac
--

CREATE TABLE public."investmentVehiclesJunction" (
    id integer NOT NULL,
    "enterpriseId" integer,
    "investmentVehicleId" integer
);


ALTER TABLE public."investmentVehiclesJunction" OWNER TO sabrinac;

--
-- Name: investmentVehiclesJunction_id_seq; Type: SEQUENCE; Schema: public; Owner: sabrinac
--

CREATE SEQUENCE public."investmentVehiclesJunction_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."investmentVehiclesJunction_id_seq" OWNER TO sabrinac;

--
-- Name: investmentVehiclesJunction_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sabrinac
--

ALTER SEQUENCE public."investmentVehiclesJunction_id_seq" OWNED BY public."investmentVehiclesJunction".id;


--
-- Name: investmentVehicles_id_seq; Type: SEQUENCE; Schema: public; Owner: sabrinac
--

CREATE SEQUENCE public."investmentVehicles_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."investmentVehicles_id_seq" OWNER TO sabrinac;

--
-- Name: investmentVehicles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sabrinac
--

ALTER SEQUENCE public."investmentVehicles_id_seq" OWNED BY public."investmentVehicles".id;


--
-- Name: operatingSector; Type: TABLE; Schema: public; Owner: sabrinac
--

CREATE TABLE public."operatingSector" (
    id integer NOT NULL,
    sector character varying(255)
);


ALTER TABLE public."operatingSector" OWNER TO sabrinac;

--
-- Name: operatingSectorJunction; Type: TABLE; Schema: public; Owner: sabrinac
--

CREATE TABLE public."operatingSectorJunction" (
    id integer NOT NULL,
    "enterpriseId" integer,
    "sectorId" integer
);


ALTER TABLE public."operatingSectorJunction" OWNER TO sabrinac;

--
-- Name: operatingSectorJunction_id_seq; Type: SEQUENCE; Schema: public; Owner: sabrinac
--

CREATE SEQUENCE public."operatingSectorJunction_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."operatingSectorJunction_id_seq" OWNER TO sabrinac;

--
-- Name: operatingSectorJunction_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sabrinac
--

ALTER SEQUENCE public."operatingSectorJunction_id_seq" OWNED BY public."operatingSectorJunction".id;


--
-- Name: operatingSector_id_seq; Type: SEQUENCE; Schema: public; Owner: sabrinac
--

CREATE SEQUENCE public."operatingSector_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."operatingSector_id_seq" OWNER TO sabrinac;

--
-- Name: operatingSector_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sabrinac
--

ALTER SEQUENCE public."operatingSector_id_seq" OWNED BY public."operatingSector".id;


--
-- Name: painPoints; Type: TABLE; Schema: public; Owner: sabrinac
--

CREATE TABLE public."painPoints" (
    id integer NOT NULL,
    "painPoint" character varying(255)
);


ALTER TABLE public."painPoints" OWNER TO sabrinac;

--
-- Name: painPointsJunction; Type: TABLE; Schema: public; Owner: sabrinac
--

CREATE TABLE public."painPointsJunction" (
    id integer NOT NULL,
    "enterpriseId" integer,
    "painPointId" integer
);


ALTER TABLE public."painPointsJunction" OWNER TO sabrinac;

--
-- Name: painPointsJunction_id_seq; Type: SEQUENCE; Schema: public; Owner: sabrinac
--

CREATE SEQUENCE public."painPointsJunction_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."painPointsJunction_id_seq" OWNER TO sabrinac;

--
-- Name: painPointsJunction_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sabrinac
--

ALTER SEQUENCE public."painPointsJunction_id_seq" OWNED BY public."painPointsJunction".id;


--
-- Name: painPoints_id_seq; Type: SEQUENCE; Schema: public; Owner: sabrinac
--

CREATE SEQUENCE public."painPoints_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."painPoints_id_seq" OWNER TO sabrinac;

--
-- Name: painPoints_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sabrinac
--

ALTER SEQUENCE public."painPoints_id_seq" OWNED BY public."painPoints".id;


--
-- Name: progressIndicators; Type: TABLE; Schema: public; Owner: sabrinac
--

CREATE TABLE public."progressIndicators" (
    id integer NOT NULL,
    indicator character varying(255)
);


ALTER TABLE public."progressIndicators" OWNER TO sabrinac;

--
-- Name: progressIndicatorsJunction; Type: TABLE; Schema: public; Owner: sabrinac
--

CREATE TABLE public."progressIndicatorsJunction" (
    id integer NOT NULL,
    "enterpriseId" integer,
    "indicatorId" integer
);


ALTER TABLE public."progressIndicatorsJunction" OWNER TO sabrinac;

--
-- Name: progressIndicatorsJunction_id_seq; Type: SEQUENCE; Schema: public; Owner: sabrinac
--

CREATE SEQUENCE public."progressIndicatorsJunction_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."progressIndicatorsJunction_id_seq" OWNER TO sabrinac;

--
-- Name: progressIndicatorsJunction_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sabrinac
--

ALTER SEQUENCE public."progressIndicatorsJunction_id_seq" OWNED BY public."progressIndicatorsJunction".id;


--
-- Name: progressIndicators_id_seq; Type: SEQUENCE; Schema: public; Owner: sabrinac
--

CREATE SEQUENCE public."progressIndicators_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."progressIndicators_id_seq" OWNER TO sabrinac;

--
-- Name: progressIndicators_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sabrinac
--

ALTER SEQUENCE public."progressIndicators_id_seq" OWNED BY public."progressIndicators".id;


--
-- Name: sdg; Type: TABLE; Schema: public; Owner: sabrinac
--

CREATE TABLE public.sdg (
    id integer NOT NULL,
    sdg character varying(255),
    icon character varying(1024)
);


ALTER TABLE public.sdg OWNER TO sabrinac;

--
-- Name: sdgJunction; Type: TABLE; Schema: public; Owner: sabrinac
--

CREATE TABLE public."sdgJunction" (
    id integer NOT NULL,
    "enterpriseId" integer,
    "sdgId" integer
);


ALTER TABLE public."sdgJunction" OWNER TO sabrinac;

--
-- Name: sdgJunction_id_seq; Type: SEQUENCE; Schema: public; Owner: sabrinac
--

CREATE SEQUENCE public."sdgJunction_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."sdgJunction_id_seq" OWNER TO sabrinac;

--
-- Name: sdgJunction_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sabrinac
--

ALTER SEQUENCE public."sdgJunction_id_seq" OWNED BY public."sdgJunction".id;


--
-- Name: sdg_id_seq; Type: SEQUENCE; Schema: public; Owner: sabrinac
--

CREATE SEQUENCE public.sdg_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sdg_id_seq OWNER TO sabrinac;

--
-- Name: sdg_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sabrinac
--

ALTER SEQUENCE public.sdg_id_seq OWNED BY public.sdg.id;


--
-- Name: societalImpact; Type: TABLE; Schema: public; Owner: sabrinac
--

CREATE TABLE public."societalImpact" (
    id integer NOT NULL,
    "societalImpact" character varying(255)
);


ALTER TABLE public."societalImpact" OWNER TO sabrinac;

--
-- Name: societalImpactJunction; Type: TABLE; Schema: public; Owner: sabrinac
--

CREATE TABLE public."societalImpactJunction" (
    id integer NOT NULL,
    "enterpriseId" integer,
    "societalImpactId" integer
);


ALTER TABLE public."societalImpactJunction" OWNER TO sabrinac;

--
-- Name: societalImpactJunction_id_seq; Type: SEQUENCE; Schema: public; Owner: sabrinac
--

CREATE SEQUENCE public."societalImpactJunction_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."societalImpactJunction_id_seq" OWNER TO sabrinac;

--
-- Name: societalImpactJunction_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sabrinac
--

ALTER SEQUENCE public."societalImpactJunction_id_seq" OWNED BY public."societalImpactJunction".id;


--
-- Name: societalImpact_id_seq; Type: SEQUENCE; Schema: public; Owner: sabrinac
--

CREATE SEQUENCE public."societalImpact_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."societalImpact_id_seq" OWNER TO sabrinac;

--
-- Name: societalImpact_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sabrinac
--

ALTER SEQUENCE public."societalImpact_id_seq" OWNED BY public."societalImpact".id;


--
-- Name: stakeholderSegments; Type: TABLE; Schema: public; Owner: sabrinac
--

CREATE TABLE public."stakeholderSegments" (
    id integer NOT NULL,
    segment character varying(255)
);


ALTER TABLE public."stakeholderSegments" OWNER TO sabrinac;

--
-- Name: stakeholderSegmentsJunction; Type: TABLE; Schema: public; Owner: sabrinac
--

CREATE TABLE public."stakeholderSegmentsJunction" (
    id integer NOT NULL,
    "enterpriseId" integer,
    "segmentId" integer
);


ALTER TABLE public."stakeholderSegmentsJunction" OWNER TO sabrinac;

--
-- Name: stakeholderSegmentsJunction_id_seq; Type: SEQUENCE; Schema: public; Owner: sabrinac
--

CREATE SEQUENCE public."stakeholderSegmentsJunction_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."stakeholderSegmentsJunction_id_seq" OWNER TO sabrinac;

--
-- Name: stakeholderSegmentsJunction_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sabrinac
--

ALTER SEQUENCE public."stakeholderSegmentsJunction_id_seq" OWNED BY public."stakeholderSegmentsJunction".id;


--
-- Name: stakeholderSegments_id_seq; Type: SEQUENCE; Schema: public; Owner: sabrinac
--

CREATE SEQUENCE public."stakeholderSegments_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."stakeholderSegments_id_seq" OWNER TO sabrinac;

--
-- Name: stakeholderSegments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sabrinac
--

ALTER SEQUENCE public."stakeholderSegments_id_seq" OWNED BY public."stakeholderSegments".id;


--
-- Name: startupBarriers; Type: TABLE; Schema: public; Owner: sabrinac
--

CREATE TABLE public."startupBarriers" (
    id integer NOT NULL,
    barrier character varying(255)
);


ALTER TABLE public."startupBarriers" OWNER TO sabrinac;

--
-- Name: startupBarriersJunction; Type: TABLE; Schema: public; Owner: sabrinac
--

CREATE TABLE public."startupBarriersJunction" (
    id integer NOT NULL,
    "enterpriseId" integer,
    "barrierId" integer
);


ALTER TABLE public."startupBarriersJunction" OWNER TO sabrinac;

--
-- Name: startupBarriersJunction_id_seq; Type: SEQUENCE; Schema: public; Owner: sabrinac
--

CREATE SEQUENCE public."startupBarriersJunction_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."startupBarriersJunction_id_seq" OWNER TO sabrinac;

--
-- Name: startupBarriersJunction_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sabrinac
--

ALTER SEQUENCE public."startupBarriersJunction_id_seq" OWNED BY public."startupBarriersJunction".id;


--
-- Name: startupBarriers_id_seq; Type: SEQUENCE; Schema: public; Owner: sabrinac
--

CREATE SEQUENCE public."startupBarriers_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."startupBarriers_id_seq" OWNER TO sabrinac;

--
-- Name: startupBarriers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sabrinac
--

ALTER SEQUENCE public."startupBarriers_id_seq" OWNED BY public."startupBarriers".id;


--
-- Name: supportiveCharacteristics; Type: TABLE; Schema: public; Owner: sabrinac
--

CREATE TABLE public."supportiveCharacteristics" (
    id integer NOT NULL,
    characteristic character varying(255)
);


ALTER TABLE public."supportiveCharacteristics" OWNER TO sabrinac;

--
-- Name: supportiveCharacteristicsJunction; Type: TABLE; Schema: public; Owner: sabrinac
--

CREATE TABLE public."supportiveCharacteristicsJunction" (
    id integer NOT NULL,
    "enterpriseId" integer,
    "characteristicId" integer
);


ALTER TABLE public."supportiveCharacteristicsJunction" OWNER TO sabrinac;

--
-- Name: supportiveCharacteristicsJunction_id_seq; Type: SEQUENCE; Schema: public; Owner: sabrinac
--

CREATE SEQUENCE public."supportiveCharacteristicsJunction_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."supportiveCharacteristicsJunction_id_seq" OWNER TO sabrinac;

--
-- Name: supportiveCharacteristicsJunction_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sabrinac
--

ALTER SEQUENCE public."supportiveCharacteristicsJunction_id_seq" OWNED BY public."supportiveCharacteristicsJunction".id;


--
-- Name: supportiveCharacteristics_id_seq; Type: SEQUENCE; Schema: public; Owner: sabrinac
--

CREATE SEQUENCE public."supportiveCharacteristics_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."supportiveCharacteristics_id_seq" OWNER TO sabrinac;

--
-- Name: supportiveCharacteristics_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sabrinac
--

ALTER SEQUENCE public."supportiveCharacteristics_id_seq" OWNED BY public."supportiveCharacteristics".id;


--
-- Name: technologies; Type: TABLE; Schema: public; Owner: sabrinac
--

CREATE TABLE public.technologies (
    id integer NOT NULL,
    technology character varying(255)
);


ALTER TABLE public.technologies OWNER TO sabrinac;

--
-- Name: technologiesJunction; Type: TABLE; Schema: public; Owner: sabrinac
--

CREATE TABLE public."technologiesJunction" (
    id integer NOT NULL,
    "enterpriseId" integer,
    "technologyId" integer
);


ALTER TABLE public."technologiesJunction" OWNER TO sabrinac;

--
-- Name: technologiesJunction_id_seq; Type: SEQUENCE; Schema: public; Owner: sabrinac
--

CREATE SEQUENCE public."technologiesJunction_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."technologiesJunction_id_seq" OWNER TO sabrinac;

--
-- Name: technologiesJunction_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sabrinac
--

ALTER SEQUENCE public."technologiesJunction_id_seq" OWNED BY public."technologiesJunction".id;


--
-- Name: technologies_id_seq; Type: SEQUENCE; Schema: public; Owner: sabrinac
--

CREATE SEQUENCE public.technologies_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.technologies_id_seq OWNER TO sabrinac;

--
-- Name: technologies_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sabrinac
--

ALTER SEQUENCE public.technologies_id_seq OWNED BY public.technologies.id;


--
-- Name: user; Type: TABLE; Schema: public; Owner: sabrinac
--

CREATE TABLE public."user" (
    id integer NOT NULL,
    "enterpriseName" character varying(255),
    email character varying(255) NOT NULL,
    "logoUrl" character varying(1024),
    username character varying(80) NOT NULL,
    password character varying(1000) NOT NULL,
    "authLevel" character varying(255) DEFAULT 'guest'::character varying
);


ALTER TABLE public."user" OWNER TO sabrinac;

--
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: sabrinac
--

CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_id_seq OWNER TO sabrinac;

--
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: sabrinac
--

ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;


--
-- Name: answers id; Type: DEFAULT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public.answers ALTER COLUMN id SET DEFAULT nextval('public.answers_id_seq'::regclass);


--
-- Name: anticipatedRisks id; Type: DEFAULT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."anticipatedRisks" ALTER COLUMN id SET DEFAULT nextval('public."anticipatedRisks_id_seq"'::regclass);


--
-- Name: anticipatedRisksJunction id; Type: DEFAULT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."anticipatedRisksJunction" ALTER COLUMN id SET DEFAULT nextval('public."anticipatedRisksJunction_id_seq"'::regclass);


--
-- Name: competitiveAdvantages id; Type: DEFAULT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."competitiveAdvantages" ALTER COLUMN id SET DEFAULT nextval('public."competitiveAdvantages_id_seq"'::regclass);


--
-- Name: competitiveAdvantagesJunction id; Type: DEFAULT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."competitiveAdvantagesJunction" ALTER COLUMN id SET DEFAULT nextval('public."competitiveAdvantagesJunction_id_seq"'::regclass);


--
-- Name: developmentStage id; Type: DEFAULT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."developmentStage" ALTER COLUMN id SET DEFAULT nextval('public."developmentStage_id_seq"'::regclass);


--
-- Name: developmentStageJunction id; Type: DEFAULT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."developmentStageJunction" ALTER COLUMN id SET DEFAULT nextval('public."developmentStageJunction_id_seq"'::regclass);


--
-- Name: economicImpact id; Type: DEFAULT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."economicImpact" ALTER COLUMN id SET DEFAULT nextval('public."economicImpact_id_seq"'::regclass);


--
-- Name: economicImpactJunction id; Type: DEFAULT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."economicImpactJunction" ALTER COLUMN id SET DEFAULT nextval('public."economicImpactJunction_id_seq"'::regclass);


--
-- Name: environmentalImpact id; Type: DEFAULT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."environmentalImpact" ALTER COLUMN id SET DEFAULT nextval('public."environmentalImpact_id_seq"'::regclass);


--
-- Name: environmentalImpactJunction id; Type: DEFAULT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."environmentalImpactJunction" ALTER COLUMN id SET DEFAULT nextval('public."environmentalImpactJunction_id_seq"'::regclass);


--
-- Name: fundingUse id; Type: DEFAULT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."fundingUse" ALTER COLUMN id SET DEFAULT nextval('public."fundingUse_id_seq"'::regclass);


--
-- Name: fundingUseJunction id; Type: DEFAULT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."fundingUseJunction" ALTER COLUMN id SET DEFAULT nextval('public."fundingUseJunction_id_seq"'::regclass);


--
-- Name: growthFactors id; Type: DEFAULT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."growthFactors" ALTER COLUMN id SET DEFAULT nextval('public."growthFactors_id_seq"'::regclass);


--
-- Name: growthFactorsJunction id; Type: DEFAULT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."growthFactorsJunction" ALTER COLUMN id SET DEFAULT nextval('public."growthFactorsJunction_id_seq"'::regclass);


--
-- Name: helpMoveForward id; Type: DEFAULT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."helpMoveForward" ALTER COLUMN id SET DEFAULT nextval('public."helpMoveForward_id_seq"'::regclass);


--
-- Name: helpMoveForwardJunction id; Type: DEFAULT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."helpMoveForwardJunction" ALTER COLUMN id SET DEFAULT nextval('public."helpMoveForwardJunction_id_seq"'::regclass);


--
-- Name: impactSectors id; Type: DEFAULT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."impactSectors" ALTER COLUMN id SET DEFAULT nextval('public."impactSectors_id_seq"'::regclass);


--
-- Name: impactTableJunction id; Type: DEFAULT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."impactTableJunction" ALTER COLUMN id SET DEFAULT nextval('public."impactTableJunction_id_seq"'::regclass);


--
-- Name: indicators id; Type: DEFAULT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public.indicators ALTER COLUMN id SET DEFAULT nextval('public.indicators_id_seq'::regclass);


--
-- Name: indicatorsJunction id; Type: DEFAULT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."indicatorsJunction" ALTER COLUMN id SET DEFAULT nextval('public."indicatorsJunction_id_seq"'::regclass);


--
-- Name: investmentStage id; Type: DEFAULT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."investmentStage" ALTER COLUMN id SET DEFAULT nextval('public."investmentStage_id_seq"'::regclass);


--
-- Name: investmentStageJunction id; Type: DEFAULT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."investmentStageJunction" ALTER COLUMN id SET DEFAULT nextval('public."investmentStageJunction_id_seq"'::regclass);


--
-- Name: investmentVehicles id; Type: DEFAULT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."investmentVehicles" ALTER COLUMN id SET DEFAULT nextval('public."investmentVehicles_id_seq"'::regclass);


--
-- Name: investmentVehiclesJunction id; Type: DEFAULT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."investmentVehiclesJunction" ALTER COLUMN id SET DEFAULT nextval('public."investmentVehiclesJunction_id_seq"'::regclass);


--
-- Name: operatingSector id; Type: DEFAULT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."operatingSector" ALTER COLUMN id SET DEFAULT nextval('public."operatingSector_id_seq"'::regclass);


--
-- Name: operatingSectorJunction id; Type: DEFAULT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."operatingSectorJunction" ALTER COLUMN id SET DEFAULT nextval('public."operatingSectorJunction_id_seq"'::regclass);


--
-- Name: painPoints id; Type: DEFAULT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."painPoints" ALTER COLUMN id SET DEFAULT nextval('public."painPoints_id_seq"'::regclass);


--
-- Name: painPointsJunction id; Type: DEFAULT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."painPointsJunction" ALTER COLUMN id SET DEFAULT nextval('public."painPointsJunction_id_seq"'::regclass);


--
-- Name: progressIndicators id; Type: DEFAULT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."progressIndicators" ALTER COLUMN id SET DEFAULT nextval('public."progressIndicators_id_seq"'::regclass);


--
-- Name: progressIndicatorsJunction id; Type: DEFAULT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."progressIndicatorsJunction" ALTER COLUMN id SET DEFAULT nextval('public."progressIndicatorsJunction_id_seq"'::regclass);


--
-- Name: sdg id; Type: DEFAULT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public.sdg ALTER COLUMN id SET DEFAULT nextval('public.sdg_id_seq'::regclass);


--
-- Name: sdgJunction id; Type: DEFAULT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."sdgJunction" ALTER COLUMN id SET DEFAULT nextval('public."sdgJunction_id_seq"'::regclass);


--
-- Name: societalImpact id; Type: DEFAULT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."societalImpact" ALTER COLUMN id SET DEFAULT nextval('public."societalImpact_id_seq"'::regclass);


--
-- Name: societalImpactJunction id; Type: DEFAULT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."societalImpactJunction" ALTER COLUMN id SET DEFAULT nextval('public."societalImpactJunction_id_seq"'::regclass);


--
-- Name: stakeholderSegments id; Type: DEFAULT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."stakeholderSegments" ALTER COLUMN id SET DEFAULT nextval('public."stakeholderSegments_id_seq"'::regclass);


--
-- Name: stakeholderSegmentsJunction id; Type: DEFAULT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."stakeholderSegmentsJunction" ALTER COLUMN id SET DEFAULT nextval('public."stakeholderSegmentsJunction_id_seq"'::regclass);


--
-- Name: startupBarriers id; Type: DEFAULT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."startupBarriers" ALTER COLUMN id SET DEFAULT nextval('public."startupBarriers_id_seq"'::regclass);


--
-- Name: startupBarriersJunction id; Type: DEFAULT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."startupBarriersJunction" ALTER COLUMN id SET DEFAULT nextval('public."startupBarriersJunction_id_seq"'::regclass);


--
-- Name: supportiveCharacteristics id; Type: DEFAULT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."supportiveCharacteristics" ALTER COLUMN id SET DEFAULT nextval('public."supportiveCharacteristics_id_seq"'::regclass);


--
-- Name: supportiveCharacteristicsJunction id; Type: DEFAULT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."supportiveCharacteristicsJunction" ALTER COLUMN id SET DEFAULT nextval('public."supportiveCharacteristicsJunction_id_seq"'::regclass);


--
-- Name: technologies id; Type: DEFAULT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public.technologies ALTER COLUMN id SET DEFAULT nextval('public.technologies_id_seq'::regclass);


--
-- Name: technologiesJunction id; Type: DEFAULT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."technologiesJunction" ALTER COLUMN id SET DEFAULT nextval('public."technologiesJunction_id_seq"'::regclass);


--
-- Name: user id; Type: DEFAULT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);


--
-- Data for Name: answers; Type: TABLE DATA; Schema: public; Owner: sabrinac
--

COPY public.answers (id, "enterpriseId", "enterpriseSize1", "dateFounded1", "missionStatement1", "understandProblem1", "yearsCollectiveExperience1", "percentageBIPOC1", "percentageFemale1", "investorIntroduction1", "problemBeingSolved2", "costOfProblem2", "howTheySolve2", "whoBenefits2", "elaborateOnIndicators2", "organizationLocation2", "focusedEfforts2", "specificChanges2", "measuredOutcome2", "secondarySDG2", "impactLevel2", "payingCustomerProfile3", "mainCompetitors3", "differFromCompetitors3", testimonial3, "businessModel3", "fundingReceived4", "customerGrowth4", "generatingRevenue4", "averageGrowth4", "makingProfit4", "netProfitMargin4", "customerAcquisitionCost4", "marketingExpenses4", "newCustomers4", "addressableMarket5", "serviceableMarket5", "obtainableMarket5", "riskPrep6", "barrierPlan6", "externalGrowth6", "whyRealistic5", "industryPerspectiveOne5", "industryPerspectiveTwo5", "industryPerspectiveThree5", "raisingFunds7", "targetAmount7", "nextSteps7", "understandProblem7", admin1, admin2, admin3, admin4, admin5, admin6, admin7, "progressExplanationOne4", "progressExplanationTwo4") FROM stdin;
1	1	34	2021-03-31	Our goal is to clean up the world's oceans by recycling and repurposing plastic into the things that ocean lover's need.	4	15	34	45	Under the See began humbly from a few people who loved the ocean, and would conduct trash pickup every week. Throwing our bags of plastic into the recycling bin didn't feel good enough - we wanted to assure that the plastic would be properly put back into use. That is when we began to process the plastic and create sunglasses and other useful tools for all ocean lovers.	We are trying to save marine life and clean up the oceans.	The cost of ocean trash is high on coastal societies.	Our product helps reuse and recycle the ocean plastic, giving it a new purpose and putting it to good use.	Individuals and communities along the coast benefit, as well as marine biology.	We measure the percentage of trash removed.	\N	Coastal cities around the world.	Less plastic.	Sometimes - not consistently	Clean Water and Sanitation	\N	The target user in our market appreciates a company that cares about the environment, and is happy to help via financial support or volunteer hours.	There are a few other plastic conversion websites also making sunglasses and other products.	We differ by our sheer volunteer force that collects the plastic.	"I love volunteering and supporting this company - they truly care!" - Stacy, California, USA	By leveraging our volunteers, we are able to put more of our resources into converting the plastic and donating money to marine life.	\N	\N	\N	\N	\N	\N	\N	\N	\N	20000000	12000000	1000000	This is risk planning	Planning for startup	IMpact risk planning		"Concerns about ocean debris (66%) loom largest, followed less acutely by the market’s ‘inability to create viable resources’ (35%) and the ‘inability to compare impact results with peers’ (34%)”\n- Global Impact Investing Network 2020 Annual Survey	“Environmental, social and governance (ESG) investments could become a $1 trillion category by 2030” - CNBC	“KPMG launches $1.5bn ESG initiatives... The move follows a similar $12bn, five-year strategy from PwC” - Environment Analyst global	yes	349373	Next we hope to expand and create jobs in many more countries by opening up productions in other coastal cities.	0	Basil Data Input will go here	Basil Data Input will go here	Basil Data Input will go here	Basil Data Input will go here	Basil Data Input will go here	Basil Data Input will go here	A new computation\n            paradigm has emerged in the last decade under several names: online aggregation in the database\n            community; progressive, incremental, or iterative visualization in other communities. It consists\n            of splitting long computations into a series of approximate results improving with time; in this\n            process, partial or approximate results are then rapidly returned to the user and can be interacted\n            with in a fluent and iterative fashion.	NULL	\N
\.


--
-- Data for Name: anticipatedRisks; Type: TABLE DATA; Schema: public; Owner: sabrinac
--

COPY public."anticipatedRisks" (id, risk) FROM stdin;
1	Evidence Risk - insufficient high-quality data exists
2	External Risk - external factors disrupt ability to deliver impact
3	Stakeholder Participation Risk - misunderstanding of stakeholder experiences/expectations
4	Drop-off Risk - the positive impact does not endure or the negative impact is no longer mitigated
5	Efficiency Risk - impact could be achieved with fewer resources or at a lower cost
6	Execution Risk - activities are not delivered as planned and do not result in desired outcomes
7	Alignment Risk - impact is not aligned into the enterprise model
8	Endurance Risk - required activities are not delivered for a long enough period
9	Unexpected Impact Risk - significant unexpected impact is experienced by stakeholders
10	None at this stage
\.


--
-- Data for Name: anticipatedRisksJunction; Type: TABLE DATA; Schema: public; Owner: sabrinac
--

COPY public."anticipatedRisksJunction" (id, "enterpriseId", "riskId") FROM stdin;
1	1	1
2	1	3
3	1	5
7	3	1
8	3	3
9	3	5
\.


--
-- Data for Name: competitiveAdvantages; Type: TABLE DATA; Schema: public; Owner: sabrinac
--

COPY public."competitiveAdvantages" (id, advantage, "advantageLogo") FROM stdin;
1	Patent	/images/CompetitiveAdvantages/patent.png
2	Brand License	/images/CompetitiveAdvantages/brandlicense.png
3	Regulation	/images/CompetitiveAdvantages/regulation.png
4	Trademark	/images/CompetitiveAdvantages/trademark.png
5	Copyrights	/images/CompetitiveAdvantages/copyrights.png
6	Software	/images/CompetitiveAdvantages/software.png
7	Customer Lists	/images/CompetitiveAdvantages/customerlists.png
8	Personal Accreditation	/images/CompetitiveAdvantages/personalaccreditation.png
\.


--
-- Data for Name: competitiveAdvantagesJunction; Type: TABLE DATA; Schema: public; Owner: sabrinac
--

COPY public."competitiveAdvantagesJunction" (id, "enterpriseId", "advantageId") FROM stdin;
65	1	1
66	1	3
67	1	5
68	1	7
53	3	1
54	3	3
55	3	5
56	3	7
\.


--
-- Data for Name: developmentStage; Type: TABLE DATA; Schema: public; Owner: sabrinac
--

COPY public."developmentStage" (id, stage) FROM stdin;
1	Concept & Research
2	Initial Prototype
3	Validation
4	Refinement
5	Scaling
6	Established Loyal Customer Base
\.


--
-- Data for Name: developmentStageJunction; Type: TABLE DATA; Schema: public; Owner: sabrinac
--

COPY public."developmentStageJunction" (id, "enterpriseId", "developmentStageId") FROM stdin;
14	1	4
16	3	4
\.


--
-- Data for Name: economicImpact; Type: TABLE DATA; Schema: public; Owner: sabrinac
--

COPY public."economicImpact" (id, impact) FROM stdin;
1	Currently not considering/May cause harm
2	Actively avoiding harm with internal policies
3	Our product or service benefits the individual or community stakeholder economically
4	Our product or service directly contributes to a solution to economic and wealth problems
\.


--
-- Data for Name: economicImpactJunction; Type: TABLE DATA; Schema: public; Owner: sabrinac
--

COPY public."economicImpactJunction" (id, "enterpriseId", "economicImpactId") FROM stdin;
22	1	2
23	3	4
\.


--
-- Data for Name: environmentalImpact; Type: TABLE DATA; Schema: public; Owner: sabrinac
--

COPY public."environmentalImpact" (id, impact) FROM stdin;
1	Currently not considering/May cause harm
2	Actively avoiding harm with internal policies
3	Our product or service benefits the environment
4	Our product or service directly contributes to a solution to an environmental problem
\.


--
-- Data for Name: environmentalImpactJunction; Type: TABLE DATA; Schema: public; Owner: sabrinac
--

COPY public."environmentalImpactJunction" (id, "enterpriseId", "environmentalImpactId") FROM stdin;
22	1	2
23	3	2
\.


--
-- Data for Name: fundingUse; Type: TABLE DATA; Schema: public; Owner: sabrinac
--

COPY public."fundingUse" (id, "fundingUse") FROM stdin;
1	Operating expenses
2	Asset Management
3	Inventory Development
4	Long-Term Expenditures
5	Supplies & Materials
6	Market Research
7	Liquidity Management
8	Product Development
9	Team Scaling
10	Sales & Marketing
11	Market Expansion
\.


--
-- Data for Name: fundingUseJunction; Type: TABLE DATA; Schema: public; Owner: sabrinac
--

COPY public."fundingUseJunction" (id, "enterpriseId", "fundingUseId") FROM stdin;
21	1	9
22	1	1
23	1	5
24	3	9
25	3	1
26	3	5
\.


--
-- Data for Name: growthFactors; Type: TABLE DATA; Schema: public; Owner: sabrinac
--

COPY public."growthFactors" (id, factor) FROM stdin;
1	Seasonal trends
2	Close proximity to industry fluctations
3	Commodity price/availability fluctuations
4	Economic cycle
5	Competition
6	Laws and Regulations
7	Customer Taste & Preference
8	Natural Disasters
9	Technological Evolution
10	International Markets & Foreign Exchange Markets
11	Political/Social Momentum
\.


--
-- Data for Name: growthFactorsJunction; Type: TABLE DATA; Schema: public; Owner: sabrinac
--

COPY public."growthFactorsJunction" (id, "enterpriseId", "factorId") FROM stdin;
1	1	5
2	1	8
5	3	5
6	3	8
\.


--
-- Data for Name: helpMoveForward; Type: TABLE DATA; Schema: public; Owner: sabrinac
--

COPY public."helpMoveForward" (id, assistance) FROM stdin;
1	Data Measurement Techniques
2	Develop Impact Research
3	Data Analysis and Visualization
4	Theory of Change and Strategy Development
5	Networking with others in the social impact/investing space
\.


--
-- Data for Name: helpMoveForwardJunction; Type: TABLE DATA; Schema: public; Owner: sabrinac
--

COPY public."helpMoveForwardJunction" (id, "enterpriseId", "assistanceId") FROM stdin;
16	1	3
17	3	3
\.


--
-- Data for Name: impactSectors; Type: TABLE DATA; Schema: public; Owner: sabrinac
--

COPY public."impactSectors" (id, "impactSector") FROM stdin;
1	Animal
2	Arts & Culture
3	Environment
4	Community Improvement
5	Education
6	Health
7	Human Services
8	Religious
9	Social Advocacy
10	Youth Development
\.


--
-- Data for Name: impactTableJunction; Type: TABLE DATA; Schema: public; Owner: sabrinac
--

COPY public."impactTableJunction" (id, "enterpriseId", "impactSectorId") FROM stdin;
22	3	3
23	3	1
24	3	6
30	1	1
29	1	6
28	1	3
\.


--
-- Data for Name: indicators; Type: TABLE DATA; Schema: public; Owner: sabrinac
--

COPY public.indicators (id, "sdgId", indicator, "targetNumber", target) FROM stdin;
1	1	Proportion of population below the international poverty line, by sex, age, employment status and geographical location (urban/rural)	1.1	By 2030, eradicate extreme poverty for all people everywhere, currently measured as people living on less than $1.25 a day.
2	1	Proportion of population living below the national poverty line, by sex and age	1.2	By 2030, reduce at least by half the proportion of men, women and children of all ages living in poverty in all its dimensions according to national definitions.
3	1	Proportion of men, women and children of all ages living in poverty in all its dimensions according to national definitions	1.2	By 2030, reduce at least by half the proportion of men, women and children of all ages living in poverty in all its dimensions according to national definitions
4	1	Proportion of population covered by social protection floors/systems, by sex, distinguishing children, unemployed persons, older persons, persons with disabilities, pregnant women, newborns, work-injury victims and the poor and the vulnerable	1.3	Implement nationally appropriate social protection systems and measures for all, including floors, and by 2030 achieve substantial coverage of the poor and the vulnerable
5	1	Proportion of population living in households with access to basic services	1.4	By 2030, ensure that all men and women, in particular the poor and the vulnerable, have equal rights to economic resources, as well as access to basic services, ownership and control over land and other forms of property, inheritance, natural resources, appropriate new technology and financial services, including microfinance
6	1	Proportion of total adult population with secure tenure rights to land, with legally recognized documentation and who perceive their rights to land as secure, by sex and by type of tenure	1.4	By 2030, ensure that all men and women, in particular the poor and the vulnerable, have equal rights to economic resources, as well as access to basic services, ownership and control over land and other forms of property, inheritance, natural resources, appropriate new technology and financial services, including microfinance
7	1	Number of deaths, missing persons and persons affected by disaster per 100,000 people	1.5	By 2030, build the resilience of the poor and those in vulnerable situations and reduce their exposure and vulnerability to climate-related extreme events and other economic, social and environmental shocks and disasters
8	1	Direct disaster economic loss in relation to global gross domestic product (GDP)	1.5	By 2030, build the resilience of the poor and those in vulnerable situations and reduce their exposure and vulnerability to climate-related extreme events and other economic, social and environmental shocks and disasters
9	1	Number of countries with national and local disaster risk reduction strategies	1.5	By 2030, build the resilience of the poor and those in vulnerable situations and reduce their exposure and vulnerability to climate-related extreme events and other economic, social and environmental shocks and disasters
10	1	Proportion of local governments that adopt and implement local disaster risk reduction strategies	1.5	By 2030, build the resilience of the poor and those in vulnerable situations and reduce their exposure and vulnerability to climate-related extreme events and other economic, social and environmental shocks and disasters
11	2	Prevalence of undernourishment	2.1	By 2030, end hunger and ensure access by all people, in particular the poor and people in vulnerable situations, including infants, to safe, nutritious and sufficient food all year round
12	2	Prevalence of moderate or severe food insecurity in the population, based on the Food Insecurity Experience Scale (FIES)	2.1	By 2030, end hunger and ensure access by all people, in particular the poor and people in vulnerable situations, including infants, to safe, nutritious and sufficient food all year round
13	2	Prevalence of stunting (height for age <-2 standard deviation from the median of the World Health Organization (WHO) Child Growth Standards) among children under 5 years of age	2.2	By 2030, end all forms of malnutrition, including achieving, by 2025, the internationally agreed targets on stunting and wasting in children under 5 years of age, and address the nutritional needs of adolescent girls, pregnant and lactating women and older persons
14	2	Prevalence of malnutrition (weight for height >+2 or <-2 standard deviation from the median of the WHO Child Growth Standards) among children under 5 years of age, by type (wasting and overweight)	2.2	By 2030, end all forms of malnutrition, including achieving, by 2025, the internationally agreed targets on stunting and wasting in children under 5 years of age, and address the nutritional needs of adolescent girls, pregnant and lactating women and older persons
15	2	Prevalence of anaemia in women aged 15 to 49 years, by pregnancy status (percentage)	2.2	By 2030, end all forms of malnutrition, including achieving, by 2025, the internationally agreed targets on stunting and wasting in children under 5 years of age, and address the nutritional needs of adolescent girls, pregnant and lactating women and older persons
16	2	Volume of production per labour unit by classes of farming/pastoral/forestry enterprise size	2.3	By 2030, double the agricultural productivity and incomes of small-scale food producers, in particular women, indigenous peoples, family farmers, pastoralists and fishers, including through secure and equal access to land, other productive resources and inputs, knowledge, financial services, markets and opportunities for value addition and non-farm employment
17	2	Average income of small-scale food producers, by sex and indigenous status	2.3	By 2030, double the agricultural productivity and incomes of small-scale food producers, in particular women, indigenous peoples, family farmers, pastoralists and fishers, including through secure and equal access to land, other productive resources and inputs, knowledge, financial services, markets and opportunities for value addition and non-farm employment
18	2	Proportion of agricultural area under productive and sustainable agriculture	2.4	By 2030, ensure sustainable food production systems and implement resilient agricultural practices that increase productivity and production, that help maintain ecosystems, that strengthen capacity for adaptation to climate change, extreme weather, drought, flooding and other disasters and that progressively improve land and soil quality
19	2	Number of (a) plant and (b) animal genetic resources for food and agriculture secured in either medium- or long-term conservation facilities	2.5	By 2020, maintain the genetic diversity of seeds, cultivated plants and farmed and domesticated animals and their related wild species, including through soundly managed and diversified seed and plant banks at the national, regional and international levels, and promote access to and fair and equitable sharing of benefits arising from the utilization of genetic resources and associated traditional knowledge, as internationally agreed
20	2	Proportion of local breeds classified as being at risk, not-at-risk or at unknown level of risk of extinction	2.5	By 2020, maintain the genetic diversity of seeds, cultivated plants and farmed and domesticated animals and their related wild species, including through soundly managed and diversified seed and plant banks at the national, regional and international levels, and promote access to and fair and equitable sharing of benefits arising from the utilization of genetic resources and associated traditional knowledge, as internationally agreed
21	3	Maternal mortality ratio	3.1	By 2030, reduce the global maternal mortality ratio to less than 70 per 100,000 live births
22	3	Proportion of births attended by skilled health personnel	3.1	By 2030, reduce the global maternal mortality ratio to less than 70 per 100,000 live births
23	3	Under-five mortality rate	3.2	By 2030, end preventable deaths of newborns and children under 5 years of age, with all countries aiming to reduce neonatal mortality to at least as low as 12 per 1,000 live births and under-5 mortality to at least as low as 25 per 1,000 live births
24	3	Neonatal mortality rate	3.2	By 2030, end preventable deaths of newborns and children under 5 years of age, with all countries aiming to reduce neonatal mortality to at least as low as 12 per 1,000 live births and under-5 mortality to at least as low as 25 per 1,000 live births
25	3	Number of new HIV infections per 1,000 uninfected population, by sex, age and key populations	3.3	By 2030, end the epidemics of AIDS, tuberculosis, malaria and neglected tropical diseases and combat hepatitis, water-borne diseases and other communicable diseases
26	3	Tuberculosis incidence per 1,000 population	3.3	By 2030, end the epidemics of AIDS, tuberculosis, malaria and neglected tropical diseases and combat hepatitis, water-borne diseases and other communicable diseases
27	3	Malaria incidence per 1,000 population	3.3	By 2030, end the epidemics of AIDS, tuberculosis, malaria and neglected tropical diseases and combat hepatitis, water-borne diseases and other communicable diseases
28	3	Hepatitis B incidence per 100,000 population	3.3	By 2030, end the epidemics of AIDS, tuberculosis, malaria and neglected tropical diseases and combat hepatitis, water-borne diseases and other communicable diseases
29	3	Number of people requiring interventions against neglected tropical diseases	3.3	By 2030, end the epidemics of AIDS, tuberculosis, malaria and neglected tropical diseases and combat hepatitis, water-borne diseases and other communicable diseases
30	3	Mortality rate attributed to cardiovascular disease, cancer, diabetes or chronic respiratory disease	3.4	By 2030, reduce by one third premature mortality from non-communicable diseases through prevention and treatment and promote mental health and well-being
31	3	Suicide mortality rate	3.4	By 2030, reduce by one third premature mortality from non-communicable diseases through prevention and treatment and promote mental health and well-being
32	3	Coverage of treatment interventions (pharmacological, psychosocial and rehabilitation and aftercare services) for substance use disorders	3.5	Strengthen the prevention and treatment of substance abuse, including narcotic drug abuse and harmful use of alcohol
33	3	Harmful use of alcohol, defined according to the national context as alcohol per capita consumption (aged 15 years and older) within a calendar year in litres of pure alcohol	3.5	Coverage of treatment interventions (pharmacological, psychosocial and rehabilitation and aftercare services) for substance use disorders
34	3	Death rate due to road traffic injuries	3.6	By 2020, halve the number of global deaths and injuries from road traffic accidents
35	3	Proportion of women of reproductive age (aged 15-49 years) who have their need for family planning satisfied with modern methods	3.7	By 2030, ensure universal access to sexual and reproductive health-care services, including for family planning, information and education, and the integration of reproductive health into national strategies and programmes
36	3	Adolescent birth rate (aged 10-14 years; aged 15-19 years) per 1,000 women in that age group	3.7	By 2030, ensure universal access to sexual and reproductive health-care services, including for family planning, information and education, and the integration of reproductive health into national strategies and programmes
37	3	Coverage of essential health services (defined as the average coverage of essential services based on tracer interventions that include reproductive, maternal, newborn and child health, infectious diseases, non-communicable diseases and service capacity and access, among the general and the most disadvantaged population)	3.8	Achieve universal health coverage, including financial risk protection, access to quality essential health-care services and access to safe, effective, quality and affordable essential medicines and vaccines for all
38	3	Proportion of population with large household expenditures on health as a share of total household expenditure or income	3.8	Achieve universal health coverage, including financial risk protection, access to quality essential health-care services and access to safe, effective, quality and affordable essential medicines and vaccines for all
39	3	Mortality rate attributed to household and ambient air pollution	3.9	By 2030, substantially reduce the number of deaths and illnesses from hazardous chemicals and air, water and soil pollution and contamination
40	3	Mortality rate attributed to unsafe water, unsafe sanitation and lack of hygiene (exposure to unsafe Water, Sanitation and Hygiene for All (WASH) services)	3.9	By 2030, substantially reduce the number of deaths and illnesses from hazardous chemicals and air, water and soil pollution and contamination
41	3	Mortality rate attributed to unintentional poisoning	3.9	By 2030, substantially reduce the number of deaths and illnesses from hazardous chemicals and air, water and soil pollution and contamination
42	4	Proportion of children and young people: (a) in grades 2/3; (b) at the end of primary; and (c) at the end of lower secondary achieving at least a minimum proficiency level in (i) reading and (ii) mathematics, by sex	4.1	By 2030, ensure that all girls and boys complete free, equitable and quality primary and secondary education leading to relevant and effective learning outcomes
43	4	Completion rate (primary education, lower secondary education, upper secondary education)	4.1	By 2030, ensure that all girls and boys complete free, equitable and quality primary and secondary education leading to relevant and effective learning outcomes
44	4	Proportion of children aged 24–59 months who are developmentally on track in health, learning and psychosocial well-being, by sex	4.2	By 2030, ensure that all girls and boys have access to quality early childhood development, care and pre-primary education so that they are ready for primary education
45	4	Participation rate in organized learning (one year before the official primary entry age), by sex	4.2	By 2030, ensure that all girls and boys have access to quality early childhood development, care and pre-primary education so that they are ready for primary education
46	4	Participation rate of youth and adults in formal and non-formal education and training in the previous 12 months, by sex	4.3	By 2030, ensure equal access for all women and men to affordable and quality technical, vocational and tertiary education, including university
47	4	Proportion of youth and adults with information and communications technology (ICT) skills, by type of skill	4.4	By 2030, substantially increase the number of youth and adults who have relevant skills, including technical and vocational skills, for employment, decent jobs and entrepreneurship
48	4	Parity indices (female/male, rural/urban, bottom/top wealth quintile and others such as disability status, indigenous peoples and conflict-affected, as data become available) for all education indicators on this list that can be disaggregated	4.5	By 2030, eliminate gender disparities in education and ensure equal access to all levels of education and vocational training for the vulnerable, including persons with disabilities, indigenous peoples and children in vulnerable situations
49	4	Percentage of population in a given age group achieving at least a fixed level of proficiency in functional (a) literacy and (b) numeracy skills, by sex	4.6	By 2030, ensure that all youth and a substantial proportion of adults, both men and women, achieve literacy and numeracy
50	4	Extent to which (i) global citizenship education and (ii) education for sustainable development, including gender equality and human rights, are mainstreamed at all levels in: (a) national education policies, (b) curricula, (c) teacher education and (d) student assessment	4.7	By 2030, ensure that all learners acquire the knowledge and skills needed to promote sustainable development, including, among others, through education for sustainable development and sustainable lifestyles, human rights, gender equality, promotion of a culture of peace and non-violence, global citizenship and appreciation of cultural diversity and of culture’s contribution to sustainable development
51	5	Whether or not legal frameworks are in place to promote, enforce and monitor equality and non‑discrimination on the basis of sex	5.1	End all forms of discrimination against all women and girls everywhere
52	5	Proportion of ever-partnered women and girls aged 15 years and older subjected to physical, sexual or psychological violence by a current or former intimate partner in the previous 12 months, by form of violence and by age	5.2	Eliminate all forms of violence against all women and girls in the public and private spheres, including trafficking and sexual and other types of exploitation
53	5	Proportion of women and girls aged 15 years and older subjected to sexual violence by persons other than an intimate partner in the previous 12 months, by age and place of occurrence	5.2	Eliminate all forms of violence against all women and girls in the public and private spheres, including trafficking and sexual and other types of exploitation
54	5	Proportion of women aged 20-24 years who were married or in a union before age 15 and before age 18	5.3	Eliminate all harmful practices, such as child, early and forced marriage and female genital mutilation
55	5	Proportion of girls and women aged 15-49 years who have undergone female genital mutilation/cutting, by age	5.3	Eliminate all harmful practices, such as child, early and forced marriage and female genital mutilation
56	5	Proportion of time spent on unpaid domestic and care work, by sex, age and location	5.4	Recognize and value unpaid care and domestic work through the provision of public services, infrastructure and social protection policies and the promotion of shared responsibility within the household and the family as nationally appropriate
57	5	Proportion of seats held by women in (a) national parliaments and (b) local governments	5.5	Ensure women’s full and effective participation and equal opportunities for leadership at all levels of decision-making in political, economic and public life
58	5	Proportion of women in managerial positions	5.5	Ensure women’s full and effective participation and equal opportunities for leadership at all levels of decision-making in political, economic and public life
59	5	Proportion of women aged 15-49 years who make their own informed decisions regarding sexual relations, contraceptive use and reproductive health care	5.6	Ensure universal access to sexual and reproductive health and reproductive rights as agreed in accordance with the Programme of Action of the International Conference on Population and Development and the Beijing Platform for Action and the outcome documents of their review conferences
60	5	Number of countries with laws and regulations that guarantee women aged 15-49 years access to sexual and reproductive health care, information and education	5.6	Ensure universal access to sexual and reproductive health and reproductive rights as agreed in accordance with the Programme of Action of the International Conference on Population and Development and the Beijing Platform for Action and the outcome documents of their review conferences
61	6	Proportion of population using safely managed drinking water services	6.1	By 2030, achieve universal and equitable access to safe and affordable drinking water for all
62	6	Proportion of population using safely managed sanitation services, including a hand-washing facility with soap and water	6.2	By 2030, achieve access to adequate and equitable sanitation and hygiene for all and end open defecation, paying special attention to the needs of women and girls and those in vulnerable situations
63	6	Proportion of domestic and industrial wastewater flows safely treated	6.3	By 2030, improve water quality by reducing pollution, eliminating dumping and minimizing release of hazardous chemicals and materials, halving the proportion of untreated wastewater and substantially increasing recycling and safe reuse globally
64	6	Proportion of bodies of water with good ambient water quality	6.3	By 2030, improve water quality by reducing pollution, eliminating dumping and minimizing release of hazardous chemicals and materials, halving the proportion of untreated wastewater and substantially increasing recycling and safe reuse globally
65	6	Change in water-use efficiency over time	6.4	By 2030, substantially increase water-use efficiency across all sectors and ensure sustainable withdrawals and supply of freshwater to address water scarcity and substantially reduce the number of people suffering from water scarcity
66	6	Level of water stress: freshwater withdrawal as a proportion of available freshwater resources	6.4	By 2030, substantially increase water-use efficiency across all sectors and ensure sustainable withdrawals and supply of freshwater to address water scarcity and substantially reduce the number of people suffering from water scarcity
67	6	Degree of integrated water resources management implementation (0-100)	6.5	By 2030, implement integrated water resources management at all levels, including through transboundary cooperation as appropriate
68	6	Proportion of transboundary basin area with an operational arrangement for water cooperation	6.5	By 2030, implement integrated water resources management at all levels, including through transboundary cooperation as appropriate
69	6	Change in the extent of water-related ecosystems over time	6.6	By 2020, protect and restore water-related ecosystems, including mountains, forests, wetlands, rivers, aquifers and lakes
70	7	Proportion of population with access to electricity	7.1	By 2030, ensure universal access to affordable, reliable and modern energy services
71	7	Proportion of population with primary reliance on clean fuels and technology	7.1	By 2030, ensure universal access to affordable, reliable and modern energy services
72	7	Renewable energy share in the total final energy consumption	7.2	By 2030, increase substantially the share of renewable energy in the global energy mix
73	7	Energy intensity measured in terms of primary energy and GDP	7.3	By 2030, double the global rate of improvement in energy efficiency
74	8	Annual growth rate of real GDP per capita	8.1	Sustain per capita economic growth in accordance with national circumstances and, in particular, at least 7 per cent gross domestic product growth per annum in the least developed countries.
75	8	Annual growth rate of real GDP per employed person	8.2	Achieve higher levels of economic productivity through diversification, technological upgrading and innovation, including through a focus on high-value added and labour-intensive sectors.
76	8	Proportion of informal employment in non‑agriculture employment, by sex	8.3	Promote development-oriented policies that support productive activities, decent job creation, entrepreneurship, creativity and innovation, and encourage the formalization and growth of micro-, small- and medium-sized enterprises, including through access to financial services.
77	8	Material footprint, material footprint per capita, and material footprint per GDP	8.4	Improve progressively, through 2030, global resource efficiency in consumption and production and endeavour to decouple economic growth from environmental degradation, in accordance with the 10-year framework of programmes on sustainable consumption and production, with developed countries taking the lead.
78	8	Domestic material consumption, domestic material consumption per capita, and domestic material consumption per GDP	8.4	Improve progressively, through 2030, global resource efficiency in consumption and production and endeavour to decouple economic growth from environmental degradation, in accordance with the 10-year framework of programmes on sustainable consumption and production, with developed countries taking the lead.
79	8	Average hourly earnings of female and male employees, by occupation, age and persons with disabilities	8.5	By 2030, achieve full and productive employment and decent work for all women and men, including for young people and persons with disabilities, and equal pay for work of equal value.
80	8	Unemployment rate, by sex, age and persons with disabilities	8.5	By 2030, achieve full and productive employment and decent work for all women and men, including for young people and persons with disabilities, and equal pay for work of equal value
81	8	Proportion of youth (aged 15-24 years) not in education, employment or training.	8.6	By 2020, substantially reduce the proportion of youth not in employment, education or training.
82	8	Proportion and number of children aged 5‑17 years engaged in child labour, by sex and age	8.7	Take immediate and effective measures to eradicate forced labour, end modern slavery and human trafficking and secure the prohibition and elimination of the worst forms of child labour, including recruitment and use of child soldiers, and by 2025 end child labour in all its forms.
83	8	Fatal and non-fatal occupational injuries per 100,000 workers, by sex and migrant status	8.8	Protect labour rights and promote safe and secure working environments for all workers, including migrant workers, in particular women migrants, and those in precarious employment.
84	8	Level of national compliance with labour rights (freedom of association and collective bargaining) based on International Labour Organization (ILO) textual sources and national legislation, by sex and migrant status	8.8	Protect labour rights and promote safe and secure working environments for all workers, including migrant workers, in particular women migrants, and those in precarious employment.
85	8	Tourism direct GDP as a proportion of total GDP and in growth rate	8.9	By 2030, devise and implement policies to promote sustainable tourism that creates jobs and promotes local culture and products
86	8	Number of commercial bank branches and automated teller machines (ATMs) per 100,000 adults	8.10	Strengthen the capacity of domestic financial institutions to encourage and expand access to banking, insurance and financial services for all
87	8	Proportion of adults (15 years and older) with an account at a bank or other financial institution or with a mobile-money-service provider	8.10	Strengthen the capacity of domestic financial institutions to encourage and expand access to banking, insurance and financial services for all
88	9	Proportion of the rural population who live within 2 km of an all-season road	9.1	Develop quality, reliable, sustainable and resilient infrastructure, including regional and transborder infrastructure, to support economic development and human well-being, with a focus on affordable and equitable access for all
89	9	Passenger and freight volumes, by mode of transport	9.1	Develop quality, reliable, sustainable and resilient infrastructure, including regional and transborder infrastructure, to support economic development and human well-being, with a focus on affordable and equitable access for all
90	9	Manufacturing value added as a proportion of GDP and per capita	9.2	Promote inclusive and sustainable industrialization and, by 2030, significantly raise industry’s share of employment and gross domestic product, in line with national circumstances, and double its share in least developed countries
91	9	Manufacturing employment as a proportion of total employment	9.2	Promote inclusive and sustainable industrialization and, by 2030, significantly raise industry’s share of employment and gross domestic product, in line with national circumstances, and double its share in least developed countries
92	9	Proportion of small-scale industries in total industry value added	9.3	Increase the access of small-scale industrial and other enterprises, in particular in developing countries, to financial services, including affordable credit, and their integration into value chains and markets
93	9	Proportion of small-scale industries with a loan or line of credit	9.3	Increase the access of small-scale industrial and other enterprises, in particular in developing countries, to financial services, including affordable credit, and their integration into value chains and markets
94	9	CO2 emission per unit of value added	9.4	By 2030, upgrade infrastructure and retrofit industries to make them sustainable, with increased resource-use efficiency and greater adoption of clean and environmentally sound technologies and industrial processes, with all countries taking action in accordance with their respective capabilities
95	9	Research and development expenditure as a proportion of GDP	9.5	Enhance scientific research, upgrade the technological capabilities of industrial sectors in all countries, in particular developing countries, including, by 2030, encouraging innovation and substantially increasing the number of research and development workers per 1 million people and public and private research and development spending
96	9	Researchers (in full-time equivalent) per million inhabitants	9.5	Enhance scientific research, upgrade the technological capabilities of industrial sectors in all countries, in particular developing countries, including, by 2030, encouraging innovation and substantially increasing the number of research and development workers per 1 million people and public and private research and development spending
97	10	Growth rates of household expenditure or income per capita among the bottom 40 per cent of the population and the total population	10.1	By 2030, progressively achieve and sustain income growth of the bottom 40 per cent of the population at a rate higher than the national average
98	10	Proportion of people living below 50 per cent of median income, by age, sex and persons with disabilities	10.2	By 2030, empower and promote the social, economic and political inclusion of all, irrespective of age, sex, disability, race, ethnicity, origin, religion or economic or other status
99	10	Proportion of the population reporting having personally felt discriminated against or harassed within the previous 12 months on the basis of a ground of discrimination prohibited under international human rights law	10.3	Ensure equal opportunity and reduce inequalities of outcome, including by eliminating discriminatory laws, policies and practices and promoting appropriate legislation, policies and action in this regard
100	10	Labour share of GDP	10.4	Adopt policies, especially fiscal, wage and social protection policies, and progressively achieve greater equality
101	10	Redistributive impact of fiscal policy	10.4	Adopt policies, especially fiscal, wage and social protection policies, and progressively achieve greater equality
102	10	Financial Soundness Indicators	10.5	Improve the regulation and monitoring of global financial markets and institutions and strengthen the implementation of such regulations
103	10	Proportion of members and voting rights of developing countries in international organizations	10.6	Ensure enhanced representation and voice for developing countries in decision-making in global international economic and financial institutions in order to deliver more effective, credible, accountable and legitimate institutions
104	10	Recruitment cost borne by employee as a proportion of yearly income earned in country of destination	10.7	EFacilitate orderly, safe, regular and responsible migration and mobility of people, including through the implementation of planned and well-managed migration policies
105	10	Number of countries with migration policies that facilitate orderly, safe, regular and responsible migration and mobility of people	10.7	Facilitate orderly, safe, regular and responsible migration and mobility of people, including through the implementation of planned and well-managed migration policies
106	10	Number of people who died or disappeared in the process of migration towards an international destination	10.7	Facilitate orderly, safe, regular and responsible migration and mobility of people, including through the implementation of planned and well-managed migration policies
107	10	Proportion of the population who are refugees, by country of origin	10.7	Facilitate orderly, safe, regular and responsible migration and mobility of people, including through the implementation of planned and well-managed migration policies
108	11	Proportion of urban population living in slums, informal settlements or inadequate housing	11.1	By 2030, ensure access for all to adequate, safe and affordable housing and basic services and upgrade slums
109	11	Proportion of population that has convenient access to public transport, by sex, age and persons with disabilities	11.2	By 2030, provide access to safe, affordable, accessible and sustainable transport systems for all, improving road safety, notably by expanding public transport, with special attention to the needs of those in vulnerable situations, women, children, persons with disabilities and older persons
110	11	Ratio of land consumption rate to population growth rate	11.3	By 2030, enhance inclusive and sustainable urbanization and capacity for participatory, integrated and sustainable human settlement planning and management in all countries
111	11	Proportion of cities with a direct participation structure of civil society in urban planning and management that operate regularly and democratically	11.3	By 2030, enhance inclusive and sustainable urbanization and capacity for participatory, integrated and sustainable human settlement planning and management in all countries
112	11	Total per capita expenditure on the preservation, protection and conservation of all cultural and natural heritage, by source of funding (public, private), type of heritage (cultural, natural) and level of government (national, regional, and local/municipal)	11.4	Strengthen efforts to protect and safeguard the world’s cultural and natural heritage
113	11	Number of deaths, missing persons and directly affected persons attributed to disasters per 100,000 population	11.5	By 2030, significantly reduce the number of deaths and the number of people affected and substantially decrease the direct economic losses relative to global gross domestic product caused by disasters, including water-related disasters, with a focus on protecting the poor and people in vulnerable situations
114	11	Direct economic loss in relation to global GDP, damage to critical infrastructure and number of disruptions to basic services, attributed to disasters	11.5	By 2030, significantly reduce the number of deaths and the number of people affected and substantially decrease the direct economic losses relative to global gross domestic product caused by disasters, including water-related disasters, with a focus on protecting the poor and people in vulnerable situations
115	11	Proportion of urban solid waste regularly collected and with adequate final discharge out of total urban solid waste generated, by cities	11.6	By 2030, reduce the adverse per capita environmental impact of cities, including by paying special attention to air quality and municipal and other waste management
116	11	Annual mean levels of fine particulate matter (e.g. PM2.5 and PM10) in cities (population weighted)	11.6	By 2030, reduce the adverse per capita environmental impact of cities, including by paying special attention to air quality and municipal and other waste management
117	11	Average share of the built-up area of cities that is open space for public use for all, by sex, age and persons with disabilities	11.7	By 2030, provide universal access to safe, inclusive and accessible, green and public spaces, in particular for women and children, older persons and persons with disabilities
118	11	Proportion of persons victim of physical or sexual harassment, by sex, age, disability status and place of occurrence, in the previous 12 months	11.7	By 2030, provide universal access to safe, inclusive and accessible, green and public spaces, in particular for women and children, older persons and persons with disabilities
119	12	Number of countries developing, adopting or implementing policy instruments aimed at supporting the shift to sustainable consumption and production	12.1	Implement the 10-year framework of programmes on sustainable consumption and production, all countries taking action, with developed countries taking the lead, taking into account the development and capabilities of developing countries
120	12	Material footprint, material footprint per capita, and material footprint per GDP	12.2	By 2030, achieve the sustainable management and efficient use of natural resources
121	12	Domestic material consumption, domestic material consumption per capita, and domestic material consumption per GDP	12.2	By 2030, achieve the sustainable management and efficient use of natural resources
122	12	(a) Food loss index and (b) food waste index	12.3	By 2030, halve per capita global food waste at the retail and consumer levels and reduce food losses along production and supply chains, including post-harvest losses
123	12	Number of parties to international multilateral environmental agreements on hazardous waste, and other chemicals that meet their commitments and obligations in transmitting information as required by each relevant agreement	12.4	By 2020, achieve the environmentally sound management of chemicals and all wastes throughout their life cycle, in accordance with agreed international frameworks, and significantly reduce their release to air, water and soil in order to minimize their adverse impacts on human health and the environment
124	12	(a) Hazardous waste generated per capita; and (b) proportion of hazardous waste treated, by type of treatment	12.4	By 2020, achieve the environmentally sound management of chemicals and all wastes throughout their life cycle, in accordance with agreed international frameworks, and significantly reduce their release to air, water and soil in order to minimize their adverse impacts on human health and the environment
125	12	National recycling rate, tons of material recycled	12.5	By 2030, substantially reduce waste generation through prevention, reduction, recycling and reuse
126	12	Number of companies publishing sustainability reports	12.6	Encourage companies, especially large and transnational companies, to adopt sustainable practices and to integrate sustainability information into their reporting cycle
127	12	Degree of sustainable public procurement policies and action plan implementation	12.7	Promote public procurement practices that are sustainable, in accordance with national policies and priorities
128	12	Extent to which (i) global citizenship education and (ii) education for sustainable development are mainstreamed in (a) national education policies; (b) curricula; (c) teacher education; and (d) student assessment	12.8	By 2030, ensure that people everywhere have the relevant information and awareness for sustainable development and lifestyles in harmony with nature
129	13	Number of deaths, missing persons and directly affected persons attributed to disasters per 100,000 population	13.1	Strengthen resilience and adaptive capacity to climate-related hazards and natural disasters in all countries
130	13	Number of countries that adopt and implement national disaster risk reduction strategies in line with the Sendai Framework for Disaster Risk Reduction 2015–2030	13.1	Strengthen resilience and adaptive capacity to climate-related hazards and natural disasters in all countries
131	13	Proportion of local governments that adopt and implement local disaster risk reduction strategies in line with national disaster risk reduction strategies	13.1	Strengthen resilience and adaptive capacity to climate-related hazards and natural disasters in all countries
132	13	Number of countries with nationally determined contributions, long-term strategies, national adaptation plans and adaptation communications, as reported to the secretariat of the United Nations Framework Convention on Climate Change	13.2	Integrate climate change measures into national policies, strategies and planning
133	13	Total greenhouse gas emissions per year	13.2	Integrate climate change measures into national policies, strategies and planning
134	13	Extent to which (i) global citizenship education and (ii) education for sustainable development are mainstreamed in (a) national education policies; (b) curricula; (c) teacher education; and (d) student assessment	13.3	Improve education, awareness-raising and human and institutional capacity on climate change mitigation, adaptation, impact reduction and early warning
135	13	Number of countries that have communicated the strengthening of institutional, systemic and individual capacity-building to implement adaptation, mitigation and technology transfer, and development actions	13.3	Improve education, awareness-raising and human and institutional capacity on climate change mitigation, adaptation, impact reduction and early warning
136	14	(a) Index of coastal eutrophication; and (b) plastic debris density	14.1	By 2025, prevent and significantly reduce marine pollution of all kinds, in particular from land-based activities, including marine debris and nutrient pollution
137	14	Number of countries using ecosystem-based approaches to managing marine areas	14.2	By 2020, sustainably manage and protect marine and coastal ecosystems to avoid significant adverse impacts, including by strengthening their resilience, and take action for their restoration in order to achieve healthy and productive oceans
138	14	Average marine acidity (pH) measured at agreed suite of representative sampling stations	14.3	Minimize and address the impacts of ocean acidification, including through enhanced scientific cooperation at all levels
139	14	Proportion of fish stocks within biologically sustainable levels	14.4	By 2020, effectively regulate harvesting and end overfishing, illegal, unreported and unregulated fishing and destructive fishing practices and implement science-based management plans, in order to restore fish stocks in the shortest time feasible, at least to levels that can produce maximum sustainable yield as determined by their biological characteristics
140	14	Coverage of protected areas in relation to marine areas	14.5	By 2020, conserve at least 10 per cent of coastal and marine areas, consistent with national and international law and based on the best available scientific information
141	14	Degree of implementation of international instruments aiming to combat illegal, unreported and unregulated fishing	14.6	By 2020, prohibit certain forms of fisheries subsidies which contribute to overcapacity and overfishing, eliminate subsidies that contribute to illegal, unreported and unregulated fishing and refrain from introducing new such subsidies, recognizing that appropriate and effective special and differential treatment for developing and least developed countries should be an integral part of the World Trade Organization fisheries subsidies negotiation
142	14	Sustainable fisheries as a proportion of GDP in small island developing States, least developed countries and all countries	14.7	By 2030, increase the economic benefits to Small Island developing States and least developed countries from the sustainable use of marine resources, including through sustainable management of fisheries, aquaculture and tourism
143	15	Forest area as a proportion of total land area	15.1	By 2020, ensure the conservation, restoration and sustainable use of terrestrial and inland freshwater ecosystems and their services, in particular forests, wetlands, mountains and drylands, in line with obligations under international agreements
144	15	Proportion of important sites for terrestrial and freshwater biodiversity that are covered by protected areas, by ecosystem type	15.1	By 2020, ensure the conservation, restoration and sustainable use of terrestrial and inland freshwater ecosystems and their services, in particular forests, wetlands, mountains and drylands, in line with obligations under international agreements
145	15	Progress towards sustainable forest management	15.2	By 2020, promote the implementation of sustainable management of all types of forests, halt deforestation, restore degraded forests and substantially increase afforestation and reforestation globally
146	15	Proportion of land that is degraded over total land area	15.3	By 2030, combat desertification, restore degraded land and soil, including land affected by desertification, drought and floods, and strive to achieve a land degradation-neutral world
147	15	Coverage by protected areas of important sites for mountain biodiversity	15.4	By 2030, ensure the conservation of mountain ecosystems, including their biodiversity, in order to enhance their capacity to provide benefits that are essential for sustainable development
148	15	Mountain Green Cover Index	15.4	By 2030, ensure the conservation of mountain ecosystems, including their biodiversity, in order to enhance their capacity to provide benefits that are essential for sustainable development
149	15	Red List Index	15.5	Take urgent and significant action to reduce the degradation of natural habitats, halt the loss of biodiversity and, by 2020, protect and prevent the extinction of threatened species
150	15	Number of countries that have adopted legislative, administrative and policy frameworks to ensure fair and equitable sharing of benefits	15.6	Promote fair and equitable sharing of the benefits arising from the utilization of genetic resources and promote appropriate access to such resources, as internationally agreed
151	15	Proportion of traded wildlife that was poached or illicitly trafficked	15.7	Take urgent action to end poaching and trafficking of protected species of flora and fauna and address both demand and supply of illegal wildlife products
152	15	Proportion of countries adopting relevant national legislation and adequately resourcing the prevention or control of invasive alien species	15.8	By 2020, introduce measures to prevent the introduction and significantly reduce the impact of invasive alien species on land and water ecosystems and control or eradicate the priority species
153	15	(a) Number of countries that have established national targets in accordance with or similar to Aichi Biodiversity Target 2 of the Strategic Plan for Biodiversity 2011–2020 in their national biodiversity strategy and action plans and the progress reported towards these targets; and (b) integration of biodiversity into national accounting and reporting systems, defined as implementation of the System of Environmental-Economic Accounting	15.9	By 2020, integrate ecosystem and biodiversity values into national and local planning, development processes, poverty reduction strategies and accounts
154	16	Number of victims of intentional homicide per 100,000 population, by sex and age	16.1	Significantly reduce all forms of violence and related death rates everywhere
155	16	Conflict-related deaths per 100,000 population, by sex, age and cause	16.1	Significantly reduce all forms of violence and related death rates everywhere
156	16	Proportion of population subjected to (a) physical violence, (b) psychological violence and (c) sexual violence in the previous 12 months	16.1	Significantly reduce all forms of violence and related death rates everywhere
157	16	Proportion of population that feel safe walking alone around the area they live	16.1	Significantly reduce all forms of violence and related death rates everywhere
158	16	Proportion of children aged 1–17 years who experienced any physical punishment and/or psychological aggression by caregivers in the past month	16.2	End abuse, exploitation, trafficking and all forms of violence against and torture of children
159	16	Number of victims of human trafficking per 100,000 population, by sex, age and form of exploitation	16.2	End abuse, exploitation, trafficking and all forms of violence against and torture of children
160	16	Proportion of young women and men aged 18–29 years who experienced sexual violence by age 18	16.2	End abuse, exploitation, trafficking and all forms of violence against and torture of children
161	16	Proportion of victims of violence in the previous 12 months who reported their victimization to competent authorities or other officially recognized conflict resolution mechanisms	16.3	Promote the rule of law at the national and international levels and ensure equal access to justice for all
162	16	Unsentenced detainees as a proportion of overall prison population	16.3	Promote the rule of law at the national and international levels and ensure equal access to justice for all
163	16	Proportion of the population who have experienced a dispute in the past two years and who accessed a formal or informal dispute resolution mechanism, by type of mechanism	16.3	Promote the rule of law at the national and international levels and ensure equal access to justice for all
164	16	Total value of inward and outward illicit financial flows (in current United States dollars)	16.4	By 2030, significantly reduce illicit financial and arms flows, strengthen the recovery and return of stolen assets and combat all forms of organized crime
165	16	Proportion of seized, found or surrendered arms whose illicit origin or context has been traced or established by a competent authority in line with international instruments	16.4	By 2030, significantly reduce illicit financial and arms flows, strengthen the recovery and return of stolen assets and combat all forms of organized crime
166	16	Proportion of persons who had at least one contact with a public official and who paid a bribe to a public official, or were asked for a bribe by those public officials, during the previous 12 months	16.5	Substantially reduce corruption and bribery in all their forms
167	16	Proportion of businesses that had at least one contact with a public official and that paid a bribe to a public official, or were asked for a bribe by those public officials during the previous 12 months	16.5	Substantially reduce corruption and bribery in all their forms
168	16	Primary government expenditures as a proportion of original approved budget, by sector (or by budget codes or similar)	16.6	Develop effective, accountable and transparent institutions at all levels
169	16	Proportion of population satisfied with their last experience of public services	16.6	Develop effective, accountable and transparent institutions at all levels
170	16	Proportions of positions in national and local institutions, including (a) the legislatures; (b) the public service; and (c) the judiciary, compared to national distributions, by sex, age, persons with disabilities and population groups	16.7	Ensure responsive, inclusive, participatory and representative decision-making at all levels
171	16	Proportion of population who believe decision-making is inclusive and responsive, by sex, age, disability and population group	16.7	Ensure responsive, inclusive, participatory and representative decision-making at all levels
172	16	Proportion of members and voting rights of developing countries in international organizations	16.8	Broaden and strengthen the participation of developing countries in the institutions of global governance
173	16	Proportion of children under 5 years of age whose births have been registered with a civil authority, by age	16.9	By 2030, provide legal identity for all, including birth registration
174	16	Number of verified cases of killing, kidnapping, enforced disappearance, arbitrary detention and torture of journalists, associated media personnel, trade unionists and human rights advocates in the previous 12 months	16.10	Ensure public access to information and protect fundamental freedoms, in accordance with national legislation and international agreements
175	16	Number of countries that adopt and implement constitutional, statutory and/or policy guarantees for public access to information	16.10	Ensure public access to information and protect fundamental freedoms, in accordance with national legislation and international agreements
176	17	Total government revenue as a proportion of GDP, by source	17.1	Strengthen domestic resource mobilization, including through international support to developing countries, to improve domestic capacity for tax and other revenue collection
177	17	Proportion of domestic budget funded by domestic taxes	17.2	Strengthen domestic resource mobilization, including through international support to developing countries, to improve domestic capacity for tax and other revenue collection
178	17	Net official development assistance, total and to least developed countries, as a proportion of the Organization for Economic Cooperation and Development (OECD) Development Assistance Committee donors’ gross national income (GNI)	17.2	Developed countries to implement fully their official development assistance commitments, including the commitment by many developed countries to achieve the target of 0.7 per cent of ODA/GNI to developing countries and 0.15 to 0.20 per cent of ODA/GNI to least developed countries; ODA providers are encouraged to consider setting a target to provide at least 0.20 per cent of ODA/GNI to least developed countries
179	17	Foreign direct investment, official development assistance and South-South cooperation as a proportion of gross national income	17.3	Mobilize additional financial resources for developing countries from multiple sources
180	17	Volume of remittances (in United States dollars) as a proportion of total GDP	17.3	Mobilize additional financial resources for developing countries from multiple sources
181	17	Debt service as a proportion of exports of goods and services	17.4	Assist developing countries in attaining long-term debt sustainability through coordinated policies aimed at fostering debt financing, debt relief and debt restructuring, as appropriate, and address the external debt of highly indebted poor countries to reduce debt distress
182	17	Number of countries that adopt and implement investment promotion regimes for developing countries, including the least developed countries	17.5	Adopt and implement investment promotion regimes for least developed countries
183	17	Fixed Internet broadband subscriptions per 100 inhabitants, by speed	17.6	Enhance North-South, South-South and triangular regional and international cooperation on and access to science, technology and innovation and enhance knowledge sharing on mutually agreed terms, including through improved coordination among existing mechanisms, in particular at the United Nations level, and through a global technology facilitation mechanism
184	17	Total amount of funding for developing countries to promote the development, transfer, dissemination and diffusion of environmentally sound technologies	17.7	Promote the development, transfer, dissemination and diffusion of environmentally sound technologies to developing countries on favourable terms, including on concessional and preferential terms, as mutually agreed
185	17	Proportion of individuals using the Internet	17.8	Fully operationalize the technology bank and science, technology and innovation capacity-building mechanism for least developed countries by 2017 and enhance the use of enabling technology, in particular information and communications technology
186	17	Dollar value of financial and technical assistance (including through North-South, South‑South and triangular cooperation) committed to developing countries	17.9	Enhance international support for implementing effective and targeted capacity-building in developing countries to support national plans to implement all the sustainable development goals, including through North-South, South-South and triangular cooperation
187	17	Worldwide weighted tariff-average	17.10	Promote a universal, rules-based, open, non-discriminatory and equitable multilateral trading system under the World Trade Organization, including through the conclusion of negotiations under its Doha Development Agenda
188	17	Developing countries’ and least developed countries’ share of global exports	17.11	Significantly increase the exports of developing countries, in particular with a view to doubling the least developed countries’ share of global exports by 2020
189	17	Weighted average tariffs faced by developing countries, least developed countries and small island developing States	17.12	Realize timely implementation of duty-free and quota-free market access on a lasting basis for all least developed countries, consistent with World Trade Organization decisions, including by ensuring that preferential rules of origin applicable to imports from least developed countries are transparent and simple, and contribute to facilitating market access
190	17	Macroeconomic Dashboard	17.13	Enhance global macroeconomic stability, including through policy coordination and policy coherence
191	17	Number of countries with mechanisms in place to enhance policy coherence of sustainable development	17.14	Enhance policy coherence for sustainable development
192	17	Extent of use of country-owned results frameworks and planning tools by providers of development cooperation	17.15	Respect each country’s policy space and leadership to establish and implement policies for poverty eradication and sustainable development Multi-stakeholder partnerships
193	17	Number of countries reporting progress in multi-stakeholder development effectiveness monitoring frameworks that support the achievement of the sustainable development goals	17.16	Enhance the global partnership for sustainable development, complemented by multi-stakeholder partnerships that mobilize and share knowledge, expertise, technology and financial resources, to support the achievement of the sustainable development goals in all countries, in particular developing countries
194	17	Amount in United States dollars committed to public-private partnerships for infrastructure	17.17	Encourage and promote effective public, public-private and civil society partnerships, building on the experience and resourcing strategies of partnerships Data, monitoring and accountability
195	17	Statistical capacity indicator for Sustainable Development Goal monitoring	17.18	By 2020, enhance capacity-building support to developing countries, including for least developed countries and small island developing States, to increase significantly the availability of high-quality, timely and reliable data disaggregated by income, gender, age, race, ethnicity, migratory status, disability, geographic location and other characteristics relevant in national contexts
196	17	Number of countries that have national statistical legislation that complies with the Fundamental Principles of Official Statistics	17.18	By 2020, enhance capacity-building support to developing countries, including for least developed countries and small island developing States, to increase significantly the availability of high-quality, timely and reliable data disaggregated by income, gender, age, race, ethnicity, migratory status, disability, geographic location and other characteristics relevant in national contexts
197	17	Number of countries with a national statistical plan that is fully funded and under implementation, by source of funding	17.18	By 2020, enhance capacity-building support to developing countries, including for least developed countries and small island developing States, to increase significantly the availability of high-quality, timely and reliable data disaggregated by income, gender, age, race, ethnicity, migratory status, disability, geographic location and other characteristics relevant in national contexts
198	17	Dollar value of all resources made available to strengthen statistical capacity in developing countrie	17.19	By 2030, build on existing initiatives to develop measurements of progress on sustainable development that complement gross domestic product, and support statistical capacity-building in developing countries
199	17	Proportion of countries that (a) have conducted at least one population and housing census in the last 10 years; and (b) have achieved 100 per cent birth registration and 80 per cent death registration	17.19	By 2030, build on existing initiatives to develop measurements of progress on sustainable development that complement gross domestic product, and support statistical capacity-building in developing countries
\.


--
-- Data for Name: indicatorsJunction; Type: TABLE DATA; Schema: public; Owner: sabrinac
--

COPY public."indicatorsJunction" (id, "enterpriseId", "indicatorId") FROM stdin;
15	1	136
16	1	140
17	1	138
\.


--
-- Data for Name: investmentStage; Type: TABLE DATA; Schema: public; Owner: sabrinac
--

COPY public."investmentStage" (id, stage) FROM stdin;
1	Bootstrap
2	Family & Friends
3	Seed
4	Series A
5	Series B
6	Series C
\.


--
-- Data for Name: investmentStageJunction; Type: TABLE DATA; Schema: public; Owner: sabrinac
--

COPY public."investmentStageJunction" (id, "enterpriseId", "investmentStageId") FROM stdin;
14	1	4
16	3	4
\.


--
-- Data for Name: investmentVehicles; Type: TABLE DATA; Schema: public; Owner: sabrinac
--

COPY public."investmentVehicles" (id, "investmentVehicle") FROM stdin;
1	Debt
2	Equity
3	Convertible Debt
4	Convertible Equity
5	Grant
6	Government Funding
7	Incubator/Accelerator Funding
8	Angel Investment
9	Open to all offers
\.


--
-- Data for Name: investmentVehiclesJunction; Type: TABLE DATA; Schema: public; Owner: sabrinac
--

COPY public."investmentVehiclesJunction" (id, "enterpriseId", "investmentVehicleId") FROM stdin;
17	1	5
18	1	6
19	1	8
20	1	9
21	3	5
22	3	6
23	3	8
24	3	9
\.


--
-- Data for Name: operatingSector; Type: TABLE DATA; Schema: public; Owner: sabrinac
--

COPY public."operatingSector" (id, sector) FROM stdin;
1	Consumer Goods
2	Extractives & Minerals Processing
3	Financials
4	Food & Beverage
5	Health Care
6	Infrastructure
7	Renewable Resources & Alternative Energy
8	Resource Transformation
9	Services
10	Technology & Communications
11	Transportation
\.


--
-- Data for Name: operatingSectorJunction; Type: TABLE DATA; Schema: public; Owner: sabrinac
--

COPY public."operatingSectorJunction" (id, "enterpriseId", "sectorId") FROM stdin;
7	3	1
12	1	1
\.


--
-- Data for Name: painPoints; Type: TABLE DATA; Schema: public; Owner: sabrinac
--

COPY public."painPoints" (id, "painPoint") FROM stdin;
1	Financial - areas where your customers are spending too much. money
2	Productivity - areas where your customer wants to be more efficient or productive
3	Process - areas where you could provide more convenient processes for your customers
4	Support - areas where customers are not receiving the support they need
\.


--
-- Data for Name: painPointsJunction; Type: TABLE DATA; Schema: public; Owner: sabrinac
--

COPY public."painPointsJunction" (id, "enterpriseId", "painPointId") FROM stdin;
9	3	4
10	3	1
19	1	4
20	1	1
\.


--
-- Data for Name: progressIndicators; Type: TABLE DATA; Schema: public; Owner: sabrinac
--

COPY public."progressIndicators" (id, indicator) FROM stdin;
1	Leads Generated/Converted
2	Website Traffic Volume
3	Social Media Interaction
4	Cash Flow Forecasts
5	Customer Acquisition
6	None of the above
\.


--
-- Data for Name: progressIndicatorsJunction; Type: TABLE DATA; Schema: public; Owner: sabrinac
--

COPY public."progressIndicatorsJunction" (id, "enterpriseId", "indicatorId") FROM stdin;
13	1	2
14	1	4
\.


--
-- Data for Name: sdg; Type: TABLE DATA; Schema: public; Owner: sabrinac
--

COPY public.sdg (id, sdg, icon) FROM stdin;
1	No Poverty	/images/SDGs/E-WEB-Goal-01.png
2	Zero Hunger	/images/SDGs/E-WEB-Goal-02.png
3	Good Health and Well-being	/images/SDGs/E-WEB-Goal-03.png
4	Quality Education	/images/SDGs/E-WEB-Goal-04.png
5	Gender Equality	/images/SDGs/E-WEB-Goal-05.png
6	Clean Water and Sanitation	/images/SDGs/E-WEB-Goal-06.png
7	Affordable and Clean Energy	/images/SDGs/E-WEB-Goal-07.png
8	Decent Work and Economic Growth	/images/SDGs/E-WEB-Goal-08.png
9	Industry, Innovation and Infrastructure	/images/SDGs/E-WEB-Goal-09.png
10	Reduced Inequality	/images/SDGs/E-WEB-Goal-10.png
11	Sustainable Cities and Communities	/images/SDGs/E-WEB-Goal-11.png
12	Responsible Consumption and Production	/images/SDGs/E-WEB-Goal-12.png
13	Climate Action	/images/SDGs/E-WEB-Goal-13.png
14	Life Below Water	/images/SDGs/E-WEB-Goal-14.png
15	Life on Land	/images/SDGs/E-WEB-Goal-15.png
16	Peace, Justice and Strong Institutions	/images/SDGs/E-WEB-Goal-16.png
17	Partnerships for the Goals	/images/SDGs/E-WEB-Goal-17.png
\.


--
-- Data for Name: sdgJunction; Type: TABLE DATA; Schema: public; Owner: sabrinac
--

COPY public."sdgJunction" (id, "enterpriseId", "sdgId") FROM stdin;
7	1	14
\.


--
-- Data for Name: societalImpact; Type: TABLE DATA; Schema: public; Owner: sabrinac
--

COPY public."societalImpact" (id, "societalImpact") FROM stdin;
1	Currently not considering/May cause harm
2	Actively avoiding harm with internal policies
3	Our product or service benefits the individual or community stakeholder social wellbeing
4	Our product or service directly contributes to a solution to a social problem
\.


--
-- Data for Name: societalImpactJunction; Type: TABLE DATA; Schema: public; Owner: sabrinac
--

COPY public."societalImpactJunction" (id, "enterpriseId", "societalImpactId") FROM stdin;
22	1	2
23	3	2
\.


--
-- Data for Name: stakeholderSegments; Type: TABLE DATA; Schema: public; Owner: sabrinac
--

COPY public."stakeholderSegments" (id, segment) FROM stdin;
1	Age
2	Gender/Gender Identity
3	Race
4	Income
5	Region
6	Ethnicity
7	Sexual Preference
\.


--
-- Data for Name: stakeholderSegmentsJunction; Type: TABLE DATA; Schema: public; Owner: sabrinac
--

COPY public."stakeholderSegmentsJunction" (id, "enterpriseId", "segmentId") FROM stdin;
\.


--
-- Data for Name: startupBarriers; Type: TABLE DATA; Schema: public; Owner: sabrinac
--

COPY public."startupBarriers" (id, barrier) FROM stdin;
1	Captial Requirements
2	Technical Knowledge Base
3	Customer Cost of Switching
4	Educating Your Market
5	Access to Materials
6	Access to Distribution Channels
7	Patents
8	Government Regulations
9	Economies of Scale
10	Product Differentiation
\.


--
-- Data for Name: startupBarriersJunction; Type: TABLE DATA; Schema: public; Owner: sabrinac
--

COPY public."startupBarriersJunction" (id, "enterpriseId", "barrierId") FROM stdin;
1	1	2
2	1	6
5	3	2
6	3	6
\.


--
-- Data for Name: supportiveCharacteristics; Type: TABLE DATA; Schema: public; Owner: sabrinac
--

COPY public."supportiveCharacteristics" (id, characteristic) FROM stdin;
1	Research-backed
2	Proven outside of Target Market
3	Internal Measurement shows effectiveness
4	None of the above - Innovative approach
\.


--
-- Data for Name: supportiveCharacteristicsJunction; Type: TABLE DATA; Schema: public; Owner: sabrinac
--

COPY public."supportiveCharacteristicsJunction" (id, "enterpriseId", "characteristicId") FROM stdin;
7	1	4
\.


--
-- Data for Name: technologies; Type: TABLE DATA; Schema: public; Owner: sabrinac
--

COPY public.technologies (id, technology) FROM stdin;
1	Hardware
2	Mobile Application
3	Web Application
4	Marketplace
5	Software
6	Ad Publishing
7	Anonymizer
8	Appilcation Development and Testing
9	Backup and Recovery
10	Business Intelligence
11	Cloud Broker
12	Cloud Carrier
13	Cloud Service Provider
14	Cloud Storage
15	Collaboration
16	Content Delivery Network (CDN)
17	Content Management
18	Customer Relationship Management (CRM)
19	Database Management
20	E-Commerce
21	Education Tech
22	Enterprise Resource Planning (ERP)
23	Financial Services
24	Games
25	Healthcare
26	Hosting Services
27	Human Resources
28	IT Service Management
29	Legal
30	Marketing & Sales
31	Media
32	Office Productivity
33	P2P
34	Search
35	Security
36	Service Management
37	Shopping
38	Social Networking
39	Software Repository
40	Travel Tech
41	Web Content
42	Not a Technology Based Solution
\.


--
-- Data for Name: technologiesJunction; Type: TABLE DATA; Schema: public; Owner: sabrinac
--

COPY public."technologiesJunction" (id, "enterpriseId", "technologyId") FROM stdin;
13	3	6
14	3	15
15	3	20
28	1	15
29	1	20
30	1	38
\.


--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: sabrinac
--

COPY public."user" (id, "enterpriseName", email, "logoUrl", username, password, "authLevel") FROM stdin;
3	Admin	admin@admin.com		admin	$2a$10$kITYGxAzgBM2mzauPmT.j.PYgKb9Vm42FSi8Q/DRTBRTohDpGL0c2	admin
1	Under the See	ciaci0028@gmail.com	/images/UnderTheSee.png	sabrina	$2a$10$FljFri8Q/wPQ3kD6iC3DNOXsF8ZWrwjOO5zTRDq5izHAmQ8fHH9XG	guest
4	No PoverTea	jc@gmail.com	/images/NoPoverTea.png	jeremy	$2a$10$9QEq24Dovj4jUMJFvkt4AeeqNmEUQV3nBLgqmoJvoUWEAAzb35/Va	guest
5	CatWalk	catwalk@catwalk.com	https://i.pinimg.com/originals/9c/76/a8/9c76a82615aae4ca65e1efee25f05608.png	catwalk	$2a$10$BPxZMvEj1iLFwEKXU/NpBeeGP2jB0Ktu/CUlNcJ.To5wfEAK1im2e	guest
\.


--
-- Name: answers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: sabrinac
--

SELECT pg_catalog.setval('public.answers_id_seq', 81, true);


--
-- Name: anticipatedRisksJunction_id_seq; Type: SEQUENCE SET; Schema: public; Owner: sabrinac
--

SELECT pg_catalog.setval('public."anticipatedRisksJunction_id_seq"', 9, true);


--
-- Name: anticipatedRisks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: sabrinac
--

SELECT pg_catalog.setval('public."anticipatedRisks_id_seq"', 10, true);


--
-- Name: competitiveAdvantagesJunction_id_seq; Type: SEQUENCE SET; Schema: public; Owner: sabrinac
--

SELECT pg_catalog.setval('public."competitiveAdvantagesJunction_id_seq"', 68, true);


--
-- Name: competitiveAdvantages_id_seq; Type: SEQUENCE SET; Schema: public; Owner: sabrinac
--

SELECT pg_catalog.setval('public."competitiveAdvantages_id_seq"', 8, true);


--
-- Name: developmentStageJunction_id_seq; Type: SEQUENCE SET; Schema: public; Owner: sabrinac
--

SELECT pg_catalog.setval('public."developmentStageJunction_id_seq"', 16, true);


--
-- Name: developmentStage_id_seq; Type: SEQUENCE SET; Schema: public; Owner: sabrinac
--

SELECT pg_catalog.setval('public."developmentStage_id_seq"', 6, true);


--
-- Name: economicImpactJunction_id_seq; Type: SEQUENCE SET; Schema: public; Owner: sabrinac
--

SELECT pg_catalog.setval('public."economicImpactJunction_id_seq"', 23, true);


--
-- Name: economicImpact_id_seq; Type: SEQUENCE SET; Schema: public; Owner: sabrinac
--

SELECT pg_catalog.setval('public."economicImpact_id_seq"', 4, true);


--
-- Name: environmentalImpactJunction_id_seq; Type: SEQUENCE SET; Schema: public; Owner: sabrinac
--

SELECT pg_catalog.setval('public."environmentalImpactJunction_id_seq"', 23, true);


--
-- Name: environmentalImpact_id_seq; Type: SEQUENCE SET; Schema: public; Owner: sabrinac
--

SELECT pg_catalog.setval('public."environmentalImpact_id_seq"', 4, true);


--
-- Name: fundingUseJunction_id_seq; Type: SEQUENCE SET; Schema: public; Owner: sabrinac
--

SELECT pg_catalog.setval('public."fundingUseJunction_id_seq"', 26, true);


--
-- Name: fundingUse_id_seq; Type: SEQUENCE SET; Schema: public; Owner: sabrinac
--

SELECT pg_catalog.setval('public."fundingUse_id_seq"', 11, true);


--
-- Name: growthFactorsJunction_id_seq; Type: SEQUENCE SET; Schema: public; Owner: sabrinac
--

SELECT pg_catalog.setval('public."growthFactorsJunction_id_seq"', 6, true);


--
-- Name: growthFactors_id_seq; Type: SEQUENCE SET; Schema: public; Owner: sabrinac
--

SELECT pg_catalog.setval('public."growthFactors_id_seq"', 11, true);


--
-- Name: helpMoveForwardJunction_id_seq; Type: SEQUENCE SET; Schema: public; Owner: sabrinac
--

SELECT pg_catalog.setval('public."helpMoveForwardJunction_id_seq"', 17, true);


--
-- Name: helpMoveForward_id_seq; Type: SEQUENCE SET; Schema: public; Owner: sabrinac
--

SELECT pg_catalog.setval('public."helpMoveForward_id_seq"', 5, true);


--
-- Name: impactSectors_id_seq; Type: SEQUENCE SET; Schema: public; Owner: sabrinac
--

SELECT pg_catalog.setval('public."impactSectors_id_seq"', 10, true);


--
-- Name: impactTableJunction_id_seq; Type: SEQUENCE SET; Schema: public; Owner: sabrinac
--

SELECT pg_catalog.setval('public."impactTableJunction_id_seq"', 30, true);


--
-- Name: indicatorsJunction_id_seq; Type: SEQUENCE SET; Schema: public; Owner: sabrinac
--

SELECT pg_catalog.setval('public."indicatorsJunction_id_seq"', 17, true);


--
-- Name: indicators_id_seq; Type: SEQUENCE SET; Schema: public; Owner: sabrinac
--

SELECT pg_catalog.setval('public.indicators_id_seq', 199, true);


--
-- Name: investmentStageJunction_id_seq; Type: SEQUENCE SET; Schema: public; Owner: sabrinac
--

SELECT pg_catalog.setval('public."investmentStageJunction_id_seq"', 16, true);


--
-- Name: investmentStage_id_seq; Type: SEQUENCE SET; Schema: public; Owner: sabrinac
--

SELECT pg_catalog.setval('public."investmentStage_id_seq"', 6, true);


--
-- Name: investmentVehiclesJunction_id_seq; Type: SEQUENCE SET; Schema: public; Owner: sabrinac
--

SELECT pg_catalog.setval('public."investmentVehiclesJunction_id_seq"', 24, true);


--
-- Name: investmentVehicles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: sabrinac
--

SELECT pg_catalog.setval('public."investmentVehicles_id_seq"', 9, true);


--
-- Name: operatingSectorJunction_id_seq; Type: SEQUENCE SET; Schema: public; Owner: sabrinac
--

SELECT pg_catalog.setval('public."operatingSectorJunction_id_seq"', 12, true);


--
-- Name: operatingSector_id_seq; Type: SEQUENCE SET; Schema: public; Owner: sabrinac
--

SELECT pg_catalog.setval('public."operatingSector_id_seq"', 11, true);


--
-- Name: painPointsJunction_id_seq; Type: SEQUENCE SET; Schema: public; Owner: sabrinac
--

SELECT pg_catalog.setval('public."painPointsJunction_id_seq"', 20, true);


--
-- Name: painPoints_id_seq; Type: SEQUENCE SET; Schema: public; Owner: sabrinac
--

SELECT pg_catalog.setval('public."painPoints_id_seq"', 4, true);


--
-- Name: progressIndicatorsJunction_id_seq; Type: SEQUENCE SET; Schema: public; Owner: sabrinac
--

SELECT pg_catalog.setval('public."progressIndicatorsJunction_id_seq"', 16, true);


--
-- Name: progressIndicators_id_seq; Type: SEQUENCE SET; Schema: public; Owner: sabrinac
--

SELECT pg_catalog.setval('public."progressIndicators_id_seq"', 6, true);


--
-- Name: sdgJunction_id_seq; Type: SEQUENCE SET; Schema: public; Owner: sabrinac
--

SELECT pg_catalog.setval('public."sdgJunction_id_seq"', 7, true);


--
-- Name: sdg_id_seq; Type: SEQUENCE SET; Schema: public; Owner: sabrinac
--

SELECT pg_catalog.setval('public.sdg_id_seq', 17, true);


--
-- Name: societalImpactJunction_id_seq; Type: SEQUENCE SET; Schema: public; Owner: sabrinac
--

SELECT pg_catalog.setval('public."societalImpactJunction_id_seq"', 23, true);


--
-- Name: societalImpact_id_seq; Type: SEQUENCE SET; Schema: public; Owner: sabrinac
--

SELECT pg_catalog.setval('public."societalImpact_id_seq"', 4, true);


--
-- Name: stakeholderSegmentsJunction_id_seq; Type: SEQUENCE SET; Schema: public; Owner: sabrinac
--

SELECT pg_catalog.setval('public."stakeholderSegmentsJunction_id_seq"', 1, false);


--
-- Name: stakeholderSegments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: sabrinac
--

SELECT pg_catalog.setval('public."stakeholderSegments_id_seq"', 7, true);


--
-- Name: startupBarriersJunction_id_seq; Type: SEQUENCE SET; Schema: public; Owner: sabrinac
--

SELECT pg_catalog.setval('public."startupBarriersJunction_id_seq"', 6, true);


--
-- Name: startupBarriers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: sabrinac
--

SELECT pg_catalog.setval('public."startupBarriers_id_seq"', 10, true);


--
-- Name: supportiveCharacteristicsJunction_id_seq; Type: SEQUENCE SET; Schema: public; Owner: sabrinac
--

SELECT pg_catalog.setval('public."supportiveCharacteristicsJunction_id_seq"', 7, true);


--
-- Name: supportiveCharacteristics_id_seq; Type: SEQUENCE SET; Schema: public; Owner: sabrinac
--

SELECT pg_catalog.setval('public."supportiveCharacteristics_id_seq"', 4, true);


--
-- Name: technologiesJunction_id_seq; Type: SEQUENCE SET; Schema: public; Owner: sabrinac
--

SELECT pg_catalog.setval('public."technologiesJunction_id_seq"', 30, true);


--
-- Name: technologies_id_seq; Type: SEQUENCE SET; Schema: public; Owner: sabrinac
--

SELECT pg_catalog.setval('public.technologies_id_seq', 42, true);


--
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: sabrinac
--

SELECT pg_catalog.setval('public.user_id_seq', 6, true);


--
-- Name: answers answers_pkey; Type: CONSTRAINT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public.answers
    ADD CONSTRAINT answers_pkey PRIMARY KEY (id);


--
-- Name: anticipatedRisksJunction anticipatedRisksJunction_pkey; Type: CONSTRAINT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."anticipatedRisksJunction"
    ADD CONSTRAINT "anticipatedRisksJunction_pkey" PRIMARY KEY (id);


--
-- Name: anticipatedRisks anticipatedRisks_pkey; Type: CONSTRAINT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."anticipatedRisks"
    ADD CONSTRAINT "anticipatedRisks_pkey" PRIMARY KEY (id);


--
-- Name: competitiveAdvantagesJunction competitiveAdvantagesJunction_pkey; Type: CONSTRAINT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."competitiveAdvantagesJunction"
    ADD CONSTRAINT "competitiveAdvantagesJunction_pkey" PRIMARY KEY (id);


--
-- Name: competitiveAdvantages competitiveAdvantages_pkey; Type: CONSTRAINT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."competitiveAdvantages"
    ADD CONSTRAINT "competitiveAdvantages_pkey" PRIMARY KEY (id);


--
-- Name: developmentStageJunction developmentStageJunction_pkey; Type: CONSTRAINT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."developmentStageJunction"
    ADD CONSTRAINT "developmentStageJunction_pkey" PRIMARY KEY (id);


--
-- Name: developmentStage developmentStage_pkey; Type: CONSTRAINT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."developmentStage"
    ADD CONSTRAINT "developmentStage_pkey" PRIMARY KEY (id);


--
-- Name: economicImpactJunction economicImpactJunction_pkey; Type: CONSTRAINT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."economicImpactJunction"
    ADD CONSTRAINT "economicImpactJunction_pkey" PRIMARY KEY (id);


--
-- Name: economicImpact economicImpact_pkey; Type: CONSTRAINT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."economicImpact"
    ADD CONSTRAINT "economicImpact_pkey" PRIMARY KEY (id);


--
-- Name: environmentalImpactJunction environmentalImpactJunction_pkey; Type: CONSTRAINT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."environmentalImpactJunction"
    ADD CONSTRAINT "environmentalImpactJunction_pkey" PRIMARY KEY (id);


--
-- Name: environmentalImpact environmentalImpact_pkey; Type: CONSTRAINT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."environmentalImpact"
    ADD CONSTRAINT "environmentalImpact_pkey" PRIMARY KEY (id);


--
-- Name: fundingUseJunction fundingUseJunction_pkey; Type: CONSTRAINT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."fundingUseJunction"
    ADD CONSTRAINT "fundingUseJunction_pkey" PRIMARY KEY (id);


--
-- Name: fundingUse fundingUse_pkey; Type: CONSTRAINT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."fundingUse"
    ADD CONSTRAINT "fundingUse_pkey" PRIMARY KEY (id);


--
-- Name: growthFactorsJunction growthFactorsJunction_pkey; Type: CONSTRAINT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."growthFactorsJunction"
    ADD CONSTRAINT "growthFactorsJunction_pkey" PRIMARY KEY (id);


--
-- Name: growthFactors growthFactors_pkey; Type: CONSTRAINT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."growthFactors"
    ADD CONSTRAINT "growthFactors_pkey" PRIMARY KEY (id);


--
-- Name: helpMoveForwardJunction helpMoveForwardJunction_pkey; Type: CONSTRAINT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."helpMoveForwardJunction"
    ADD CONSTRAINT "helpMoveForwardJunction_pkey" PRIMARY KEY (id);


--
-- Name: helpMoveForward helpMoveForward_pkey; Type: CONSTRAINT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."helpMoveForward"
    ADD CONSTRAINT "helpMoveForward_pkey" PRIMARY KEY (id);


--
-- Name: impactSectors impactSectors_pkey; Type: CONSTRAINT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."impactSectors"
    ADD CONSTRAINT "impactSectors_pkey" PRIMARY KEY (id);


--
-- Name: impactTableJunction impactTableJunction_pkey; Type: CONSTRAINT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."impactTableJunction"
    ADD CONSTRAINT "impactTableJunction_pkey" PRIMARY KEY (id);


--
-- Name: indicatorsJunction indicatorsJunction_pkey; Type: CONSTRAINT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."indicatorsJunction"
    ADD CONSTRAINT "indicatorsJunction_pkey" PRIMARY KEY (id);


--
-- Name: indicators indicators_pkey; Type: CONSTRAINT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public.indicators
    ADD CONSTRAINT indicators_pkey PRIMARY KEY (id);


--
-- Name: investmentStageJunction investmentStageJunction_pkey; Type: CONSTRAINT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."investmentStageJunction"
    ADD CONSTRAINT "investmentStageJunction_pkey" PRIMARY KEY (id);


--
-- Name: investmentStage investmentStage_pkey; Type: CONSTRAINT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."investmentStage"
    ADD CONSTRAINT "investmentStage_pkey" PRIMARY KEY (id);


--
-- Name: investmentVehiclesJunction investmentVehiclesJunction_pkey; Type: CONSTRAINT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."investmentVehiclesJunction"
    ADD CONSTRAINT "investmentVehiclesJunction_pkey" PRIMARY KEY (id);


--
-- Name: investmentVehicles investmentVehicles_pkey; Type: CONSTRAINT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."investmentVehicles"
    ADD CONSTRAINT "investmentVehicles_pkey" PRIMARY KEY (id);


--
-- Name: operatingSectorJunction operatingSectorJunction_pkey; Type: CONSTRAINT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."operatingSectorJunction"
    ADD CONSTRAINT "operatingSectorJunction_pkey" PRIMARY KEY (id);


--
-- Name: operatingSector operatingSector_pkey; Type: CONSTRAINT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."operatingSector"
    ADD CONSTRAINT "operatingSector_pkey" PRIMARY KEY (id);


--
-- Name: painPointsJunction painPointsJunction_pkey; Type: CONSTRAINT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."painPointsJunction"
    ADD CONSTRAINT "painPointsJunction_pkey" PRIMARY KEY (id);


--
-- Name: painPoints painPoints_pkey; Type: CONSTRAINT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."painPoints"
    ADD CONSTRAINT "painPoints_pkey" PRIMARY KEY (id);


--
-- Name: progressIndicatorsJunction progressIndicatorsJunction_pkey; Type: CONSTRAINT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."progressIndicatorsJunction"
    ADD CONSTRAINT "progressIndicatorsJunction_pkey" PRIMARY KEY (id);


--
-- Name: progressIndicators progressIndicators_pkey; Type: CONSTRAINT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."progressIndicators"
    ADD CONSTRAINT "progressIndicators_pkey" PRIMARY KEY (id);


--
-- Name: sdgJunction sdgJunction_pkey; Type: CONSTRAINT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."sdgJunction"
    ADD CONSTRAINT "sdgJunction_pkey" PRIMARY KEY (id);


--
-- Name: sdg sdg_pkey; Type: CONSTRAINT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public.sdg
    ADD CONSTRAINT sdg_pkey PRIMARY KEY (id);


--
-- Name: societalImpactJunction societalImpactJunction_pkey; Type: CONSTRAINT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."societalImpactJunction"
    ADD CONSTRAINT "societalImpactJunction_pkey" PRIMARY KEY (id);


--
-- Name: societalImpact societalImpact_pkey; Type: CONSTRAINT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."societalImpact"
    ADD CONSTRAINT "societalImpact_pkey" PRIMARY KEY (id);


--
-- Name: stakeholderSegmentsJunction stakeholderSegmentsJunction_pkey; Type: CONSTRAINT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."stakeholderSegmentsJunction"
    ADD CONSTRAINT "stakeholderSegmentsJunction_pkey" PRIMARY KEY (id);


--
-- Name: stakeholderSegments stakeholderSegments_pkey; Type: CONSTRAINT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."stakeholderSegments"
    ADD CONSTRAINT "stakeholderSegments_pkey" PRIMARY KEY (id);


--
-- Name: startupBarriersJunction startupBarriersJunction_pkey; Type: CONSTRAINT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."startupBarriersJunction"
    ADD CONSTRAINT "startupBarriersJunction_pkey" PRIMARY KEY (id);


--
-- Name: startupBarriers startupBarriers_pkey; Type: CONSTRAINT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."startupBarriers"
    ADD CONSTRAINT "startupBarriers_pkey" PRIMARY KEY (id);


--
-- Name: supportiveCharacteristicsJunction supportiveCharacteristicsJunction_pkey; Type: CONSTRAINT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."supportiveCharacteristicsJunction"
    ADD CONSTRAINT "supportiveCharacteristicsJunction_pkey" PRIMARY KEY (id);


--
-- Name: supportiveCharacteristics supportiveCharacteristics_pkey; Type: CONSTRAINT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."supportiveCharacteristics"
    ADD CONSTRAINT "supportiveCharacteristics_pkey" PRIMARY KEY (id);


--
-- Name: technologiesJunction technologiesJunction_pkey; Type: CONSTRAINT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."technologiesJunction"
    ADD CONSTRAINT "technologiesJunction_pkey" PRIMARY KEY (id);


--
-- Name: technologies technologies_pkey; Type: CONSTRAINT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public.technologies
    ADD CONSTRAINT technologies_pkey PRIMARY KEY (id);


--
-- Name: user user_pkey; Type: CONSTRAINT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);


--
-- Name: user user_username_key; Type: CONSTRAINT; Schema: public; Owner: sabrinac
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_username_key UNIQUE (username);


--
-- PostgreSQL database dump complete
--

