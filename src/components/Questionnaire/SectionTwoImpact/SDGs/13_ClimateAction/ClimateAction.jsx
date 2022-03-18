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

function ClimateAction() {
    const dispatch = useDispatch();

    const stakeholderSegments = useSelector(store => store.section2.stakeholderSegments);
    const selectedSegment = useSelector(store => store.section2Enterprise.segmentId); 
    const sdg = useSelector(store => store.section2.sdg);
    const section2Enterprise = useSelector(store => store.section2Enterprise)
    const indicators = useSelector(store => store.section2.indicators);
    const selectedIndicator = useSelector(store => store.section2Enterprise.indicatorId);



    const handleInvestorSegments = (event) => {
        const index = selectedSegment.indexOf(Number(event.target.value))
        if (index === -1) {
            dispatch({
                type: 'SET_SECTION_TWO_ENTERPRISE',
                payload: {
                    segmentId: [...selectedSegment, Number(event.target.value)]}
            }); 
        }
        else {
            dispatch({
                type: 'SET_SECTION_TWO_ENTERPRISE',
                payload: {
                    segmentId: selectedSegment.filter((selectedSegment) => selectedSegment !== Number(event.target.value))
                }
            });
        }
    }


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
                <img src="images/SDGs/E-WEB-Goal-13.png" width="200px" height="200px"/>
                <h1><b>SDG - Climate Action</b></h1>
                <p>What Indicators do you use/intend to use to track change?</p>
                <FormControl
                    sx={{
                        width: "700px",
                    }}
                >
                    {indicators?.map(indicator => {
                        if(indicator.sdgId === 13) {
                            return (
                                <Box>
                                    <Table>
                                        <TableRow sx={{display: "table"}}>
                                            <TableCell>
                                                <Checkbox
                                                    key={indicator.id} 
                                                    checked={selectedIndicator.includes(indicator.id)}
                                                    value={indicator.id}
                                                    defaultValue={0}
                                                    onChange={handleIndicator}
                                                />
                                            </TableCell>
                                            <TableCell>
                                                {indicator.indicator}
                                            </TableCell>
                                        </TableRow>
                                    </Table> 
                                </Box>                   
                            )
                        }
                    })}
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
                <p>How do you segment your stakeholders?</p>
                <FormControl>
                    {stakeholderSegments?.map(segment => {
                        return(
                            <FormControlLabel 
                                key={segment.id}
                                control={<Checkbox />} 
                                label={segment.segment}
                                checked={selectedSegment.includes(segment.id)}
                                value={segment.id}
                                defaultValue={0}
                                onChange={handleInvestorSegments}
                            />
                        )
                    })}
                </FormControl>
                <p> Where specifically is your current target region / environment?</p>
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
                <p> What are the specific changes you would like to see for your region / environment?
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
                    className="buttonCenter"
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
                    className="buttonCenter"
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

export default ClimateAction;