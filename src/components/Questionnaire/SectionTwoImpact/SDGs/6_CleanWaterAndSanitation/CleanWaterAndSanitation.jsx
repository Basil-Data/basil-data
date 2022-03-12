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

function CleanWaterAndSanitation() {
    const dispatch = useDispatch();

    const sdg = useSelector(store => store.section2.sdg);


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
                    InputLabelProps={{ shrink: true }}
                    variant="outlined"
                    type="text"
                    placeholder="Please Elaborate"
                    multiline rows={5}
                id="outlined-basic" 
                sx={{width: 600}}
                ></TextField>
                <p> Where specifically is your current target environment?</p>
                <p>In what regions, states or cities are you focusing your efforts today?</p>
                <TextField
                    label="Location"
                    InputLabelProps={{ shrink: true }}
                    variant="outlined"
                    type="text"
                    placeholder="Location"
                    multiline rows={5}
                    id="outlined-basic" 
                    sx={{width: 600}}
                ></TextField>
                <p> What are the specific changes you would like to see for your target environment?
                </p>
                <TextField
                    label="Specific Changes"
                    InputLabelProps={{ shrink: true }}
                    className="specificChanges"
                    variant="outlined"
                    type="text"
                    placeholder="Specific Changes"
                    multiline rows={5}
                    id="outlined-basic" 
                    sx={{width: 600}}
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
                    {sdg?.map(goal => {
                        return(
                            <FormControlLabel 
                            key={goal.id}
                            control={<Radio/>} 
                            labelPlacement="end"
                            value={goal.sdg}
                            label={goal.sdg}
                            />
                        )
                    })}
            
                </RadioGroup>
            </form>
        </Box>

    )
}

export default CleanWaterAndSanitation;