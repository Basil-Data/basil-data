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

function GenderEquality() {

    const stakeholderSegments = useSelector(store => store.section2.stakeholderSegments);
    const sdg = useSelector(store => store.section2.sdg);



    return(
        <Box className="questionnaireForm">
            <img src="images/SDGs/E-WEB-Goal-05.png" width="200px" height="200px"/>
            <h1><b>SDG - Gender Equality</b></h1>
            <p>What Indicators do you use/intend to use to track change?</p>
            <FormControl>
                <FormControlLabel control={<Checkbox />} label={'Legal frameworks for gender equality'}/>
                <FormControlLabel control={<Checkbox />} label={'Gender based violence rates'}/>
                <FormControlLabel control={<Checkbox />} label={'Youth marriage rate'}/>
                <FormControlLabel control={<Checkbox />} label={'Unpaid or underpaid work'}/>
                <FormControlLabel control={<Checkbox />} label={'Leadership roles (government)'}/>
                <FormControlLabel control={<Checkbox />} label={'Leadership roles (private industry)'}/>
                <FormControlLabel control={<Checkbox />} label={'Decision making opportunities'}/>
                <FormControlLabel control={<Checkbox />} label={'Ownership of land or business'}/>
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
                {stakeholderSegments?.map(segment => {
                    return(
                        <FormControlLabel 
                            key={segment.id}
                            control={<Checkbox />} 
                            label={segment.segment}
                        />
                    )
                })}
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
        </Box>

    )
}

export default GenderEquality;