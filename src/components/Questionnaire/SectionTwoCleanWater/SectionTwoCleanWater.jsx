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

function SectionTwoCleanWater() {


    return(
        <Box className="questionnaireForm">
            <form>
                <img src="images/SDGs/E-WEB-Goal-06.png" width="200px" height="200px"/>
                <h1><b>SDG - Clean Water & Sanitation</b></h1>
                <p>What Indicators do you use/intend to use to track change?</p>
                <FormControl>
                    <FormControlLabel control={<Checkbox />} label={'Access to safe drinking water'}/>
                    <FormControlLabel control={<Checkbox />} label={'Access to safe sanitation services'}/>
                    <FormControlLabel control={<Checkbox />} label={'Ambient quality of bodies of water'}/>
                    <FormControlLabel control={<Checkbox />} label={'Change in water use'}/>
                    <FormControlLabel control={<Checkbox />} label={'Degree of integrated water resources'}/>
                    <FormControlLabel control={<Checkbox />} label={'Change in water-related ecosystems'}/>
                    <FormControlLabel control={<Checkbox />} label={'Government policy changes'}/>
                </FormControl>
                <p> Please elaborate on the progress shown in the indicators that you use
                </p>
                <TextField
                    label="Please Elaborate"
                    variant="outlined"
                    type="text"
                    placeholder="Please Elaborate"
                ></TextField>
                <p> Where specifically is your current target environment?</p>
                <p>In what regions, states or cities are you focusing your efforts today?</p>
                <TextField
                    label="Location"
                    variant="outlined"
                    type="text"
                    placeholder="Location"
                ></TextField>
                <p> What are the specific changes you would like to see for your target environment?
                </p>
                <TextField
                    label="Specific Changes"
                    className="specificChanges"
                    variant="outlined"
                    type="text"
                    placeholder="Specific Changes"
                ></TextField>
                <p>Have you measured your outcomes?</p>
                <RadioGroup className="centerHelp">
                    <FormControlLabel 
                        control={<Radio/>} 
                        labelPlacement="end"
                        value="Yes"
                        label="Yes"
                    />
                    <FormControlLabel 
                        control={<Radio/>} 
                        labelPlacement="end"
                        value="No"
                        label="No"
                    />
                    <FormControlLabel 
                        control={<Radio/>} 
                        labelPlacement="end"
                        value="Sometimes - not consistently"
                        label="Sometimes - not consistently"
                    />
                </RadioGroup>
                <p>If applicable, please select any secondary Sustainable Development Goals that align with your organization's mission. </p>
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
                <Button variant='contained'>Submit</Button>
            </form>
        </Box>

    )
}

export default SectionTwoCleanWater;