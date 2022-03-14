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
    const dispatch = useDispatch();
    const [sdgPrimary, setSdgPrimary] = useState('');
    console.log(sdgPrimary);

    const sdg = useSelector(store => store.section2.sdg);
    const supportiveCharacteristics = useSelector(store => store.section2.supportiveCharacteristics);
    const selectedCharacteristic = useSelector(store => store.section2Enterprise.characteristicId);
    const selectedSDG = useSelector(store => store.section2Enterprise.sdgId);


    let component;
    switch(sdgPrimary) {
        case 1:
            component = <NoPoverty />
            break;
        case 2:
            component = <ZeroHunger />
            break;
        case 3:
            component = <GoodHealthAndWellbeing />
            break;
        case 4:
            component = <QualityEducation />
            break;
        case 5:
            component = <GenderEquality />
            break;
        case 6:
            component = <CleanWaterAndSanitation />
            break;
        case 7:
            component = <AffordableAndCleanEnergy />
            break;
        case 8:
            component = <DecentWorkAndEconomicGrowth />
            break;
        case 9:
            component = <IndustryInnovationAndInfrastructure />
            break;
        case 10:
            component = <ReducedInequality />
            break;
        case 11:
            component = <SustainableCitiesAndCommunities />
            break;
        case 12:
            component = <ResponsibleConsumptionAndProduction />
            break;
        case 13:
            component = <ClimateAction />
            break;
        case 14:
            component = <LifeBelowWater />
            break;
        case 15:
            component = <LifeOnLand />
            break;
        case 16:
            component = <PeaceJusticeAndStrongInstitutions />
            break;
        case 17:
            component = <PartnershipsForTheGoals />
            break;
    }



    const handleSupportiveCharacteristics = (event) => {
        console.log('in handleSupportiveCharacteristics');
        const index = selectedCharacteristic.indexOf(Number(event.target.value))
        console.log('index:', index);
        if (index === -1) {
            dispatch({
                type: 'SET_SECTION_TWO_ENTERPRISE',
                payload: {
                    characteristicId: [...selectedCharacteristic, Number(event.target.value)]}
            }); 
        }
        else {
            dispatch({
                type: 'SET_SECTION_TWO_ENTERPRISE',
                payload: {
                    characteristicId: selectedCharacteristic.filter((selectedCharacteristic) => selectedCharacteristic !== Number(event.target.value))
                }
            });
        }
    }


    const handleSDG = (event) => {
        setSdgPrimary(Number(event.target.value));
        dispatch({
            type: 'SET_SECTION_TWO_ENTERPRISE',
            payload: {
                sdgId: Number(event.target.value)
        }}); 
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
                                defaultValue={0}
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
                    onChange={handleSDG}
                >
                    {sdg?.map(goal => {
                        return(
                            <FormControlLabel 
                            key={goal.id}
                            control={<Radio/>} 
                            labelPlacement="end"
                            value={goal.id}
                            defaultValue={0}
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