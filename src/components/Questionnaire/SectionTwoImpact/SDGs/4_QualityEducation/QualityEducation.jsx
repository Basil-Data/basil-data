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

function QualityEducation() {
    const dispatch = useDispatch();

    const stakeholderSegments = useSelector(store => store.section2.stakeholderSegments);
    const sdg = useSelector(store => store.section2.sdg);

    return(
        <Box className="questionnaireForm">
            <img src="images/SDGs/E-WEB-Goal-04.png" width="200px" height="200px"/>
            <h1><b>SDG - Quality Education</b></h1>
            <p>What Indicators do you use/intend to use to track change?</p>
            <FormControl>
                <FormControlLabel control={<Checkbox />} label={'Education level'}/>
                <FormControlLabel control={<Checkbox />} label={'Completion rates'}/>
                <FormControlLabel control={<Checkbox />} label={'Participation rates'}/>
                <FormControlLabel control={<Checkbox />} label={'Enrollment rates'}/>
                <FormControlLabel control={<Checkbox />} label={'Developmental tracks'}/>
                <FormControlLabel control={<Checkbox />} label={'Parity indicators (e.g. Male/female, rural/urban, wealth)'}/>
                <FormControlLabel control={<Checkbox />} label={'Access to appropriate education'}/>
                <FormControlLabel control={<Checkbox />} label={'Teacher qualifications'}/>
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
                InputLabelProps={{ shrink: true }}
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
                InputLabelProps={{ shrink: true }}
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

export default QualityEducation;