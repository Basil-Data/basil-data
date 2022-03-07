import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

import '../Questionnaire.css';

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

function SectionTwoImpactOpportunity() {

    

    return(
        <Box className="questionnaireForm">
            <FormGroup>
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
                <RadioGroup className="centerHelp">
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
            </FormGroup>
        </Box>
    )

}


export default SectionTwoImpactOpportunity;