import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

import '../Questionnaire.css';
import SectionTwoNoHunger from "../SectionTwoNoPoverty/SectionTwoNoPoverty";

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
import SectionTwoNoPoverty from "../SectionTwoNoPoverty/SectionTwoNoPoverty";
import SectionTwoZeroHunger from "../SectionTwoZeroHunger/SectionTwoZeroHunger";
import SectionTwoHealth from "../SectionTwoHealth/SectionTwoHealth";
import SectionTwoEducation from "../SectionTwoEducation/SectionTwoEducation";
import SectionTwoGenderEquality from "../SectionTwoGenderEquality/SectionTwoGenderEquality";
import SectionTwoCleanWater from "../SectionTwoCleanWater/SectionTwoCleanWater";
import SectionTwoCleanEnergy from "../SectionTwoCleanEnergy/SectionTwoCleanEnergy";
import SectionTwoWorkGrowth from "../SectionTwoWorkGrowth/SectionTwoWorkGrowth";
import SectionTwoInfrastructure from "../SectionTwoInfrastructure/SectionTwoInfrastructure";
import SectionTwoReducingInequality from "../SectionTwoReducingInequality/SectionTwoReducingInequality";
import SectionTwoSustainableCities from "../SectionTwoSustainableCities/SectionTwoSustainableCities";
import SectionTwoResponsibleConsumption from "../SectionTwoResponsibleConsumption/SectionTwoResponsibleConsumption";
import SectionTwoClimateAction from "../SectionTwoClimateAction/SectionTwoClimateAction";
import SectionTwoLifeBelowWater from "../SectionTwoLifeBelowWater/SectionTwoLifeBelowWater";
import SectionTwoLifeOnLand from "../SectionTwoLifeOnLand/SectionTwoLifeOnLand";
import SectionTwoPeaceJustice from "../SectionTwoPeaceJustice/SectionTwoPeaceJustice";
import SectionTwoPartnerships from "../SectionTwoPartnerships/SectionTwoPartnerships";



function SectionTwoImpactOpportunity() {
    const [sdgPrimary, setSdgPrimary] = useState('');
    console.log(sdgPrimary);

    let component;
    switch(sdgPrimary) {
        case "No Poverty":
            component = <SectionTwoNoPoverty />
            break;
        case "Zero Hunger":
            component = <SectionTwoZeroHunger />
            break;
        case "Good Health and Well-being":
            component = <SectionTwoHealth />
            break;
        case "Quality Education":
            component = <SectionTwoEducation />
            break;
        case "Gender Equality":
            component = <SectionTwoGenderEquality />
            break;
        case "Clean Water and Sanitation":
            component = <SectionTwoCleanWater />
            break;
        case "Affordable and Clean Energy":
            component = <SectionTwoCleanEnergy />
            break;
        case "Decent Work and Economic Growth":
            component = <SectionTwoWorkGrowth />
            break;
        case "Industry, Innovation and Infrastructure":
            component = <SectionTwoInfrastructure />
            break;
        case "Reduced Inequalities":
            component = <SectionTwoReducingInequality />
            break;
        case "Sustainable Cities and Communities":
            component = <SectionTwoSustainableCities />
            break;
        case "Responsible Consumption and Production":
            component = <SectionTwoResponsibleConsumption />
            break;
        case "Climate Action":
            component = <SectionTwoClimateAction />
            break;
        case "Life Below Water":
            component = <SectionTwoLifeBelowWater />
            break;
        case "Life on Land":
            component = <SectionTwoLifeOnLand />
            break;
        case "Peace, Justice and Strong Institutions":
            component = <SectionTwoPeaceJustice />
            break;
        case "Partnerships for the Goals":
            component = <SectionTwoPartnerships />
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