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

function ResponsibleConsumptionAndProduction() {
    const dispatch = useDispatch();

    const sdg = useSelector(store => store.section2.sdg);
    const section2Enterprise = useSelector(store => store.section2Enterprise)




    return(
        <Box className="questionnaireForm">
                <img src="images/SDGs/E-WEB-Goal-12.png" width="200px" height="200px"/>
                <h1><b>SDG - Responsible Consumption & Production</b></h1>
                <p>What Indicators do you use/intend to use to track change?</p>
                <FormControl>
                    <FormControlLabel control={<Checkbox />} label={'Sustainable policy instruments'}/>
                    <FormControlLabel control={<Checkbox />} label={'Material footprint (waste)'}/>
                    <FormControlLabel control={<Checkbox />} label={'Material consumption'}/>
                    <FormControlLabel control={<Checkbox />} label={'Food waste index'}/>
                    <FormControlLabel control={<Checkbox />} label={'Environmental agreements enacted'}/>
                    <FormControlLabel control={<Checkbox />} label={'Hazardous waste generated'}/>
                    <FormControlLabel control={<Checkbox />} label={'Recycling rate'}/>
                    <FormControlLabel control={<Checkbox />} label={'Published sustainability reports'}/>
                    <FormControlLabel control={<Checkbox />} label={'Sustainability accounting tools implementation'}/>
                    <FormControlLabel control={<Checkbox />} label={'Renewable energy capacity'}/>
                    <FormControlLabel control={<Checkbox />} label={'Change to fossil fuel subsidies'}/>
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
                    value={section2Enterprise.elaborateOnIndicators2 || ''}
                    onChange={(event) => dispatch({
                        type: 'SET_SECTION_TWO_ENTERPRISE',
                        payload: {elaborateOnIndicators2: event.target.value}
                    })}
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
                    value={section2Enterprise.focusedEfforts2 || ''}
                    onChange={(event) => dispatch({
                        type: 'SET_SECTION_TWO_ENTERPRISE',
                        payload: { focusedEfforts2: event.target.value }
                    })}
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
                    value={section2Enterprise.specificChanges2 || ''}
                    onChange={(event) => dispatch({
                        type: 'SET_SECTION_TWO_ENTERPRISE',
                        payload: { specificChanges2: event.target.value }
                    })}
                ></TextField>
                <p>Have you measured your outcomes?</p>
                <RadioGroup 
                    className="centerHelp"
                    value={section2Enterprise.measuredOutcome2}
                    onChange={(event) => dispatch({
                        type: 'SET_SECTION_TWO_ENTERPRISE',
                        payload: {measuredOutcome2: event.target.value}
                    })}
                >
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
                <RadioGroup 
                    className="centerHelp"
                    value={section2Enterprise.secondarySDG2}
                    onChange={(event) => dispatch({
                        type: 'SET_SECTION_TWO_ENTERPRISE',
                        payload: {secondarySDG2: event.target.value}
                    })}
                >
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

export default ResponsibleConsumptionAndProduction;