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

function SustainableCitiesAndCommunities() {

    const sdg = useSelector(store => store.section2.sdg);

    return(
        <Box className="questionnaireForm">
                <img src="images/SDGs/E-WEB-Goal-11.png" width="200px" height="200px"/>
                <h1><b>SDG - Sustainable Cities & Communities</b></h1>
                <p>What Indicators do you use/intend to use to track change?</p>
                <FormControl>
                    <FormControlLabel control={<Checkbox />} label={'Inadequate housing proportion'}/>
                    <FormControlLabel control={<Checkbox />} label={'Disaster deaths'}/>
                    <FormControlLabel control={<Checkbox />} label={'Economic loss due to disaster'}/>
                    <FormControlLabel control={<Checkbox />} label={'Waste management indicators'}/>
                    <FormControlLabel control={<Checkbox />} label={'Levels of pollution (particulate matter)'}/>
                    <FormControlLabel control={<Checkbox />} label={'Disaster risk reduction strategies implemented'}/>
                    <FormControlLabel control={<Checkbox />} label={'Development plans for population dynamics'}/>
                </FormControl>
                <p> Please elaborate on the progress shown in the indicators that you use
                </p>
                <TextField
                    label="Please Elaborate"
                    variant="outlined"
                    type="text"
                    placeholder="Please Elaborate"
                ></TextField>
                <p> Where specifically is your current target region?</p>
                <p>In what regions, states or cities are you focusing your efforts today?</p>
                <TextField
                    label="Location"
                    variant="outlined"
                    type="text"
                    placeholder="Location"
                ></TextField>
                <p> What are the specific changes you would like to see for your target region?
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

export default SustainableCitiesAndCommunities;