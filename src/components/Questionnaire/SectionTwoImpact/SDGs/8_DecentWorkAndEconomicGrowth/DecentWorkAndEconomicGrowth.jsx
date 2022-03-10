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

function DecentWorkAndEconomicGrowth() {

    const sdg = useSelector(store => store.section2.sdg);
    const stakeholderSegments = useSelector(store => store.section2.stakeholderSegments);

    return(
        <Box className="questionnaireForm">
                <img src="images/SDGs/E-WEB-Goal-08.png" width="200px" height="200px"/>
                <h1><b>SDG - Decent Work & Economic Growth</b></h1>
                <p>What Indicators do you use/intend to use to track change?</p>
                <FormControl>
                    <FormControlLabel control={<Checkbox />} label={'GDP per capita growth rate'}/>
                    <FormControlLabel control={<Checkbox />} label={'GDP per capita growth rate per employed person'}/>
                    <FormControlLabel control={<Checkbox />} label={'Employment rate / Unemployment rates'}/>
                    <FormControlLabel control={<Checkbox />} label={'Hourly earnings'}/>
                    <FormControlLabel control={<Checkbox />} label={'Access to financial services'}/>
                    <FormControlLabel control={<Checkbox />} label={'Material footprint (waste)'}/>
                    <FormControlLabel control={<Checkbox />} label={'Material consumption'}/>
                    <FormControlLabel control={<Checkbox />} label={'Youth participation (school, employment, training)'}/>
                    <FormControlLabel control={<Checkbox />} label={'Child labor'}/>
                    <FormControlLabel control={<Checkbox />} label={'Occupational injuries'}/>
                    <FormControlLabel control={<Checkbox />} label={'Labor rights compliance'}/>
                    <FormControlLabel control={<Checkbox />} label={'Bank account rates'}/>
                    <FormControlLabel control={<Checkbox />} label={'Access to aid for trade support'}/>
                    <FormControlLabel control={<Checkbox />} label={'Employment strategies'}/>
                </FormControl>
                <p> Please elaborate on the progress shown in the indicators that you use
                </p>
                <TextField
                    label="Please Elaborate"
                    variant="outlined"
                    type="text"
                    placeholder="Please Elaborate"
                    multiline rows={5}
                    id="outlined-basic" 
                    sx={{width: 600}}
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
                    multiline rows={5}
                    id="outlined-basic" 
                    sx={{width: 600}}
                ></TextField>
                <p> What are the specific changes you would like to see for your stakeholder?
                </p>
                <TextField
                    label="Specific Changes"
                    className="specificChanges"
                    variant="outlined"
                    type="text"
                    placeholder="Specific Changes"
                    multiline rows={5}
                    id="outlined-basic" 
                    sx={{width: 600}}
                ></TextField>
                <p>Have you measured the outcomes for your primary beneficiaries?</p>
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

export default DecentWorkAndEconomicGrowth;