import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

import '../../../Questionnaire.css';

import { 
    Table, 
    TableHead, 
    TableRow, 
    TableCell,
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

function LifeBelowWater() {
    const dispatch = useDispatch();

    const sdg = useSelector(store => store.section2.sdg);
    const section2Enterprise = useSelector(store => store.section2Enterprise)
    const indicators = useSelector(store => store.section2.indicators);
    const selectedIndicator = useSelector(store => store.section2Enterprise.indicatorId);



    const handleIndicator = (event) => {
        const index = selectedIndicator.indexOf(Number(event.target.value))
        if (index === -1) {
            dispatch({
                type: 'SET_SECTION_TWO_ENTERPRISE',
                payload: {
                    indicatorId: [...selectedIndicator, Number(event.target.value)]}
            }); 
        }
        else {
            dispatch({
                type: 'SET_SECTION_TWO_ENTERPRISE',
                payload: {
                    indicatorId: selectedIndicator.filter((selectedIndicator) => selectedIndicator !== Number(event.target.value))
                }
            });
        }
    }




    return(
        <Box className="questionnaireForm">
            <img src="images/SDGs/E-WEB-Goal-14.png" width="200px" height="200px"/>
            <h1><b>SDG - Life Below Water</b></h1>
            <Box sx={{marginTop: "50px"}}>
                <p>What Indicators do you use/intend to use to track change?</p>
                <FormControl sx={{marginLeft: "14px"}}>
                    {indicators?.map(indicator => {
                        if(indicator.sdgId === 14) {
                            return (
                                <Box>
                                    <Table>
                                        <TableRow sx={{display: "table"}}>
                                            <TableCell sx={{border: "none"}}>
                                                <Checkbox
                                                    key={indicator.id} 
                                                    checked={selectedIndicator.includes(indicator.id)}
                                                    value={indicator.id}
                                                    defaultValue={0}
                                                    onChange={handleIndicator}
                                                />
                                            </TableCell>
                                            <TableCell sx={{border: "none"}}>
                                                {indicator.indicator}
                                            </TableCell>
                                        </TableRow>
                                    </Table> 
                                </Box>                   
                            )
                        }
                    })}
                </FormControl>
            </Box>
            <Box sx={{marginTop: "50px"}}>
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
                    sx={{width: 600, marginLeft: "-37px"}}
                    value={section2Enterprise.elaborateOnIndicators2 || ''}
                    onChange={(event) => dispatch({
                        type: 'SET_SECTION_TWO_ENTERPRISE',
                        payload: {elaborateOnIndicators2: event.target.value}
                    })}
                ></TextField>
            </Box>
            <Box sx={{marginTop: "50px"}}>
                <p>Where specifically is your current target ecosystem?</p>
                <p>In what regions, states or cities are you focusing your efforts today?</p>
                <TextField
                    label="Location"
                    InputLabelProps={{ shrink: true }}
                    variant="outlined"
                    type="text"
                    placeholder="Location"
                    multiline rows={5}
                    id="outlined-basic" 
                    sx={{width: 600, marginLeft: "-37px"}}
                    value={section2Enterprise.focusedEfforts2 || ''}
                    onChange={(event) => dispatch({
                        type: 'SET_SECTION_TWO_ENTERPRISE',
                        payload: { focusedEfforts2: event.target.value }
                    })}
                ></TextField>
            </Box>
            <Box sx={{marginTop: "50px"}}>
                <p>What are the specific changes you would like to see for your target ecosystem?
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
                    sx={{width: 600, marginLeft: "-37px"}}
                    value={section2Enterprise.specificChanges2 || ''}
                    onChange={(event) => dispatch({
                        type: 'SET_SECTION_TWO_ENTERPRISE',
                        payload: { specificChanges2: event.target.value }
                    })}
                ></TextField>
            </Box>
            <Box sx={{marginTop: "50px"}}>
                <p>Have you measured your outcomes?</p>
                <RadioGroup 
                    sx={{marginLeft: "120px"}}
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
            </Box>
            <Box sx={{marginTop: "50px"}}>
                <p>If applicable, please select any secondary Sustainable Development Goals that align with your organization's mission. </p>
                <RadioGroup 
                    sx={{marginLeft: "120px"}}
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
        </Box>

    )
}

export default LifeBelowWater;