import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

import '../../Questionnaire.css';

import { 
    Table, 
    TableHead, 
    TableRow, 
    TableBody,
    Button, 
    Box, 
    Select,
    MenuItem,
    FormControl,
    FormGroup,
    InputLabel,
    TextField,
    RadioGroup,
    Radio,
    FormControlLabel,
    Checkbox,
} 
from '@mui/material';
import NoPoverty from "../SDGs/1_NoPoverty/NoPoverty";
import ZeroHunger from "../SDGs/2_ZeroHunger/ZeroHunger";
import GoodHealthAndWellbeing from "../SDGs/3_GoodHealthAndWellbeing/GoodHealthAndWellbeing";
import QualityEducation from "../SDGs/4_QualityEducation/QualityEducation";
import GenderEquality from "../SDGs/5_GenderEquality/GenderEquality";
import CleanWaterAndSanitation from "../SDGs/6_CleanWaterAndSanitation/CleanWaterAndSanitation";
import AffordableAndCleanEnergy from "../SDGs/7_AffordableAndCleanEnergy/AffordableAndCleanEnergy";
import DecentWorkAndEconomicGrowth from "../SDGs/8_DecentWorkAndEconomicGrowth/DecentWorkAndEconomicGrowth";
import IndustryInnovationAndInfrastructure from "../SDGs/9_IndustryInnovationAndInfrastructure/IndustryInnovationAndInfrastructure";
import ReducingInequality from "../SDGs/10_ReducingInequality/ReducingInequality";
import SustainableCitiesAndCommunities from "../SDGs/11_SustainableCitiesAndCommunities/SustainableCitiesAndCommunities";
import ResponsibleConsumptionAndProduction from "../SDGs/12_ResponsibleConsumptionAndProduction/ResponsibleConsumptionAndProduction";
import ClimateAction from "../SDGs/13_ClimateAction/ClimateAction";
import LifeBelowWater from "../SDGs/14_LifeBelowWater/LifeBelowWater";
import LifeOnLand from "../SDGs/15_LifeOnLand/LifeOnLand";
import PeaceJusticeAndStrongInstitutions from "../SDGs/16_PeaceJusticeAndStrongInstitutions/PeaceJusticeAndStrongInstitutions";
import PartnershipsForTheGoals from "../SDGs/17_PartnershipsForTheGoals/PartnershipsForTheGoals";



function SectionTwoImpactOpportunity() {
    const [sdgPrimary, setSdgPrimary] = useState('');
    console.log(sdgPrimary);

    let component;
    switch(sdgPrimary) {
        case "No Poverty":
            component = <NoPoverty />
            break;
        case "Zero Hunger":
            component = <ZeroHunger />
            break;
        case "Good Health and Well-being":
            component = <GoodHealthAndWellbeing />
            break;
        case "Quality Education":
            component = <QualityEducation />
            break;
        case "Gender Equality":
            component = <GenderEquality />
            break;
        case "Clean Water and Sanitation":
            component = <CleanWaterAndSanitation />
            break;
        case "Affordable and Clean Energy":
            component = <AffordableAndCleanEnergy />
            break;
        case "Decent Work and Economic Growth":
            component = <DecentWorkAndEconomicGrowth />
            break;
        case "Industry, Innovation and Infrastructure":
            component = <IndustryInnovationAndInfrastructure />
            break;
        case "Reduced Inequalities":
            component = <ReducingInequality />
            break;
        case "Sustainable Cities and Communities":
            component = <SustainableCitiesAndCommunities />
            break;
        case "Responsible Consumption and Production":
            component = <ResponsibleConsumptionAndProduction />
            break;
        case "Climate Action":
            component = <ClimateAction />
            break;
        case "Life Below Water":
            component = <LifeBelowWater />
            break;
        case "Life on Land":
            component = <LifeOnLand />
            break;
        case "Peace, Justice and Strong Institutions":
            component = <PeaceJusticeAndStrongInstitutions />
            break;
        case "Partnerships for the Goals":
            component = <PartnershipsForTheGoals />
            break;


    }

    return(
        <Box className="questionnaireForm">
            <form>
                <h1><b>Section 2 - Impact Opportunity</b></h1>
                <p>Select the characteristics that support the efficacy of your solution</p>
                <FormControl>
                    <FormControlLabel control={<Checkbox />} label={'Research-backed'}/>
                    <FormControlLabel control={<Checkbox />} label={'Proven outside of Target Market'}/>
                    <FormControlLabel control={<Checkbox />} label={'Internal Measurement shows effectiveness'}/>
                    <FormControlLabel control={<Checkbox />} label={'None of the above - Innovative approach'}/>
                </FormControl>
                <br></br>
                <p>Which Sustainable Development Goal best aligns best with your impact objective?</p>
                <RadioGroup 
                    className="centerHelp"
                    onChange={event => setSdgPrimary(event.target.value)}
                >
                    <FormControlLabel 
                        control={<Radio/>} 
                        labelPlacement="end"
                        value="No Poverty"
                        label="No Poverty"
                    />
                    <FormControlLabel 
                        control={<Radio/>} 
                        labelPlacement="end"
                        value="Zero Hunger"
                        label="Zero Hunger"
                    />
                    <FormControlLabel 
                        control={<Radio/>} 
                        labelPlacement="end"
                        value="Good Health and Well-being"
                        label="Good Health and Well-being"
                    />
                    <FormControlLabel 
                        control={<Radio/>} 
                        labelPlacement="end"
                        value="Quality Education"
                        label="Quality Education"
                    />
                    <FormControlLabel 
                        control={<Radio/>} 
                        labelPlacement="end"
                        value="Gender Equality"
                        label="Gender Equality"
                    />
                    <FormControlLabel 
                        control={<Radio/>} 
                        labelPlacement="end"
                        value="Clean Water and Sanitation"
                        label="Clean Water and Sanitation"
                    />
                    <FormControlLabel 
                        control={<Radio/>} 
                        labelPlacement="end"
                        value="Affordable and Clean Energy"
                        label="Affordable and Clean Energy"
                    />
                    <FormControlLabel 
                        control={<Radio/>} 
                        labelPlacement="end"
                        value="Decent Work and Economic Growth"
                        label="Decent Work and Economic Growth"
                    />
                    <FormControlLabel 
                        control={<Radio/>} 
                        labelPlacement="end"
                        value="Industry, Innovation and Infrastructure"
                        label="Industry, Innovation and Infrastructure"
                    />
                    <FormControlLabel 
                        control={<Radio/>} 
                        labelPlacement="end"
                        value="Reduced Inequalities"
                        label="Reduced Inequalities"
                    />
                    <FormControlLabel 
                        control={<Radio/>} 
                        labelPlacement="end"
                        value="Sustainable Cities and Communities"
                        label="Sustainable Cities and Communities"
                    />
                    <FormControlLabel 
                        control={<Radio/>} 
                        labelPlacement="end"
                        value="Responsible Consumption and Production"
                        label="Responsible Consumption and Production"
                    />
                    <FormControlLabel 
                        control={<Radio/>} 
                        labelPlacement="end"
                        value="Climate Action"
                        label="Climate Action"
                    />
                    <FormControlLabel 
                        control={<Radio/>} 
                        labelPlacement="end"
                        value="Life Below Water"
                        label="Life Below Water"
                    />
                    <FormControlLabel 
                        control={<Radio/>} 
                        labelPlacement="end"
                        value="Life on Land"
                        label="Life on Land"
                    />
                    <FormControlLabel 
                        control={<Radio/>} 
                        labelPlacement="end"
                        value="Peace, Justice and Strong Institutions"
                        label="Peace, Justice and Strong Institutions"
                    />
                    <FormControlLabel 
                        control={<Radio/>} 
                        labelPlacement="end"
                        value="Partnerships for the Goals"
                        label="Partnerships for the Goals"
                    />
            
                </RadioGroup>
            </form>
            <div>
                {component}
            </div>
        </Box>
    )

}


export default SectionTwoImpactOpportunity;