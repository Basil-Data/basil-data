import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

import '../../../Questionnaire.css';

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

function AffordableAndCleanEnergy() {

    const sdg = useSelector(store => store.section2.sdg);
    const stakeholderSegments = useSelector(store => store.section2.stakeholderSegments);

    return(
        <Box className="questionnaireForm">
                <img src="images/SDGs/E-WEB-Goal-07.png" width="200px" height="200px"/>
                <h1><b>SDG - Affordable And Clean Energy</b></h1>
                <p>What Indicators do you use/intend to use to track change?</p>
                <FormControl>
                    <FormControlLabel control={<Checkbox />} label={'Access to electricity'}/>
                    <FormControlLabel control={<Checkbox />} label={'Access to clean fuel'}/>
                    <FormControlLabel control={<Checkbox />} label={'Renewable energy proportion of total energy use'}/>
                    <FormControlLabel control={<Checkbox />} label={'Total energy use'}/>
                    <FormControlLabel control={<Checkbox />} label={'Spending on clean energy'}/>
                    <FormControlLabel control={<Checkbox />} label={'Renewable energy capacity change'}/>
                </FormControl>
                <p> Please elaborate on the progress shown in the indicators that you use
                </p>
                <TextField
                    label="Please Elaborate"
                    variant="outlined"
                    type="text"
                    placeholder="Please Elaborate"
                ></TextField>
                <p>How do you segment your stakeholders?</p>
                <FormControl>
                    {stakeholderSegments?.map(segment => (
                        <FormControlLabel control={<Checkbox />} label={segment.segment} key={segment.id}/>
                    ))}  
                </FormControl>
                <p> Where specifically is your current target population located?</p>
                <p>In what regions, states or cities are you focusing your efforts today?</p>
                <TextField
                    label="Location"
                    variant="outlined"
                    type="text"
                    placeholder="Location"
                ></TextField>
                <p> What are the specific changes you would like to see for your stakeholder?
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
                    {sdg?.map(sdg => (
                            <FormControlLabel 
                            control={<Radio/>} 
                            labelPlacement="end"
                            value={sdg.sdg}
                            label={sdg.sdg}
                            key={sdg.id}
                        />
                        ))}
                </RadioGroup>
        </Box>

    )
}

export default AffordableAndCleanEnergy;