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
import ReducedInequality from "../SDGs/10_ReducedInequality/ReducedInequality";
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

    const sdg = useSelector(store => store.section2.sdg);
    const supportiveCharacteristics = useSelector(store => store.section2.supportiveCharacteristics);
    const selectedCharacteristic = useSelector(store => store.section2Enterprise.characteristicId);


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
        case "Reduced Inequality":
            component = <ReducedInequality />
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

    const handleSupportiveCharacteristics = (event) => {
        console.log('in handleSupportiveCharacteristics');
        const index = selectedCharacteristic.indexOf(event.target.value)
        console.log('index:', index);
        if (index === -1) {
            dispatch({
                type: 'SET_SECTION_TWO_ENTERPRISE',
                payload: {
                    characteristicId: [...selectedCharacteristic, event.target.value]}
            }); 
        }
        else {
            dispatch({
                type: 'SET_SECTION_TWO_ENTERPRISE',
                payload: {
                    characteristicId: selectedCharacteristic.filter((selectedCharacteristic) => selectedCharacteristic !== event.target.value)
                }
            });
        }
    }

    return(
        <Box className="questionnaireForm">
                <h1><b>Impact Opportunity</b></h1>
                <p>Select the characteristics that support the efficacy of your solution</p>
                <FormControl>
                    {supportiveCharacteristics?.map(characteristic => {
                        return(
                            <FormControlLabel 
                                key={characteristic.id}
                                checked={selectedCharacteristic.includes(characteristic.id)}
                                value={characteristic.id}
                                onChange={handleSupportiveCharacteristics}
                                control={
                                    <Checkbox  
                                    />} 
                                label={characteristic.characteristic}
                            />
                        )
                    })}
                </FormControl>
                <p>Which Sustainable Development Goal best aligns best with your impact objective?</p>
                <RadioGroup 
                    className="centerHelp"
                    onChange={event => setSdgPrimary(event.target.value)}
                >
                    {sdg?.map(goal => {
                        return(
                            <FormControlLabel 
                            key={goal.id}
                            control={<Radio/>} 
                            labelPlacement="end"
                            value={goal.sdg}
                            label={goal.sdg}
                            key={goal.id}
                            />
                        )
                    })}
                </RadioGroup>
            <div>
                {component}
            </div>
        </Box>
    )

}


export default SectionTwoImpactOpportunity;