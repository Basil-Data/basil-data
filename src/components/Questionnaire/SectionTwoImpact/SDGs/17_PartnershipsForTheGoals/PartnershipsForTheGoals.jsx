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

function PartnershipsForTheGoals() {
    const dispatch = useDispatch();

    const sdg = useSelector(store => store.section2.sdg);

    return(
        <Box className="questionnaireForm">
                <img src="images/SDGs/E-WEB-Goal-17.png" width="200px" height="200px"/>
                <h1><b>SDG - Partnerships for the Goals</b></h1>
                <p>What Indicators do you use/intend to use to track change?</p>
                <FormControl>
                    <FormControlLabel control={<Checkbox />} label={'Government Revenue'}/>
                    <FormControlLabel control={<Checkbox />} label={'GDP'}/>
                    <FormControlLabel control={<Checkbox />} label={'Development assistance commitment levels'}/>
                    <FormControlLabel control={<Checkbox />} label={'Foreign direct investment'}/>
                    <FormControlLabel control={<Checkbox />} label={'Debt service'}/>
                    <FormControlLabel control={<Checkbox />} label={'Developing country investment levels'}/>
                    <FormControlLabel control={<Checkbox />} label={'Tariff policies'}/>
                    <FormControlLabel control={<Checkbox />} label={'Proportion of internet use'}/>
                    <FormControlLabel control={<Checkbox />} label={'Share of global exports'}/>
                    <FormControlLabel control={<Checkbox />} label={'Policies in favor or sustainable development'}/>
                    <FormControlLabel control={<Checkbox />} label={'Spending and policies on statistical measurement strategies'}/>
                </FormControl>
                <p> 
                    Please elaborate on the progress shown in 
                    the indicators that you use
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
                <p>What level does your impact operate on?</p>
                <RadioGroup className="centerHelp">
                    <FormControlLabel 
                        control={<Radio/>} 
                        labelPlacement="end"
                        value="City"
                        label="City"
                    />
                    <FormControlLabel 
                        control={<Radio/>} 
                        labelPlacement="end"
                        value="State"
                        label="State"
                    />
                    <FormControlLabel 
                        control={<Radio/>} 
                        labelPlacement="end"
                        value="Region"
                        label="Region"
                    />
                    <FormControlLabel 
                        control={<Radio/>} 
                        labelPlacement="end"
                        value="Country"
                        label="Country"
                    />
                </RadioGroup>
                <p>What specific city, state, or region is your current target?</p>
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
                <p>
                    What are the specific changes you would like 
                    to see due to your efforts?
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
                <p>
                    If applicable, please select any secondary 
                    Sustainable Development Goals that align with 
                    your organization's mission. 
                </p>
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

export default PartnershipsForTheGoals;