import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

// MUI
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Slider from '@mui/material/Slider'

import '../Questionnaire.css'
import QuestionnaireNav from '../QuestionnaireNav/QuestionnaireNav';
import AdminInputBox from '../../AdminInputBox/AdminInputBox';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


function SectionSevenNextSteps () {

    const dispatch = useDispatch();
    const history = useHistory();
    // store.section6 contains all of the selections for
    // this page of the questionnaire

    const [open, setOpen] = React.useState(false);

    history.scrollRestoration = 'manual';

    const section7 = useSelector((store) => store.section7);
    const section7Enterprise = useSelector((store) => store.section7Enterprise);
    const investmentSelection = useSelector((store) => store.section7Enterprise.investmentVehicleId);
    const fundingUse = useSelector((store) => store.section7Enterprise.fundingUseId);
    const wayAhead = useSelector((store) => store.section7Enterprise.assistanceId);
    const selectedEnterprise = useSelector(store => store.adminReducer.selectedEnterprise);

    console.log('section7Enterprise.societalImpactId.societalImpactId:', section7Enterprise.societalImpactId.societalImpactId);

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch({
            type: "FETCH_NEXT_STEPS",
        });
        dispatch({ 
            type: "FETCH_ENTERPRISE_SECTION_SEVEN",
            payload: selectedEnterprise
        })
    }, []);

    const handleInvestmentType = (event) => {
        const index = investmentSelection.indexOf(Number(event.target.value))
        if (index === -1) {
            dispatch({
                type: "SET_NEXT_STEPS_ENTERPRISE",
                payload: {investmentVehicleId: [...investmentSelection, Number(event.target.value)]}
            });
        } else {
            dispatch({
                type: "SET_NEXT_STEPS_ENTERPRISE",
                payload: {investmentVehicleId: investmentSelection.filter((investmentSelection) => investmentSelection !== Number(event.target.value))}
            });
        }
    }

    const handleFundraising = (event) => {
        const index = fundingUse.indexOf(Number(event.target.value))
        if (index === -1) {
            dispatch({
                type: "SET_NEXT_STEPS_ENTERPRISE",
                payload: {fundingUseId: [...fundingUse, Number(event.target.value)]}
            });
        } else {
            dispatch({
                type: "SET_NEXT_STEPS_ENTERPRISE",
                payload: {fundingUseId: fundingUse.filter((fundingUse) => fundingUse !== Number(event.target.value))}
            });
        }
    }

    const handleWayAhead = (event) => {
        const index = wayAhead.indexOf(Number(event.target.value))
        if (index === -1) {
            dispatch({
                type: "SET_NEXT_STEPS_ENTERPRISE",
                payload: {assistanceId: [...wayAhead, Number(event.target.value)]}
            });
        } else {
            dispatch({
                type: "SET_NEXT_STEPS_ENTERPRISE",
                payload: {assistanceId: wayAhead.filter((wayAhead) => wayAhead !== Number(event.target.value))}
            });
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setOpen(true);

        dispatch({
            type: 'PUT_SECTION_SEVEN',
            payload: {
                ...section7Enterprise,
                id: selectedEnterprise
            }
        })
    };

    const onNext = (event) => {
        handleSubmit(event);
        history.push('/user');
    }

    const onBack = (event) => {
        handleSubmit(event);
        history.push('/risks-and-hurdles');
    }


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handleAdminDispatch = (event) => {
        dispatch({
            type: 'SET_NEXT_STEPS_ENTERPRISE',
            payload: {admin7: event}
        })
    }


    return (
        <>
        <Box className="fullPage">
            <QuestionnaireNav/>
            <Paper className="formPaper" elevation={3}>
                <h1 className='questionnaireForm'>Section 7 - Next Steps</h1>
                <h3 className='questionnaireForm'>
                    Where do you go from here?
                </h3>
                <h3 className='questionnaireForm'>In this section you have the opportunity to detail 
                    the amount of funding you require, how you plan to 
                    use it, and what your next priorities are. 
                </h3>

                <form className='questionnaireForm'>

                <Box sx={{marginTop: "50px"}}>
                    <h4>Are you currently raising funds?</h4>
                    <RadioGroup
                        aria-labelledby = "raising-funds"
                        defaultValue = ""
                        column
                        sx={{marginLeft: "240px"}}
                        name = "radio-buttons-group"
                        className = 'centerHelp'
                        value = {section7Enterprise.raisingFunds7}
                        onChange = {(event) =>
                            { dispatch({
                                type: "SET_NEXT_STEPS_ENTERPRISE",
                                payload: {raisingFunds7: event.target.value}
                            }); }
                        }
                    >
                        <FormControlLabel labelPlacement="end" value="yes" control={<Radio />} label="Yes" />
                        <FormControlLabel labelPlacement="end" value="no" control={<Radio />} label="No" />
                        <FormControlLabel labelPlacement="end" value="maybe" control={<Radio />} label="Maybe" />
                    </RadioGroup>
                </Box>

                {section7Enterprise.raisingFunds7 === 'yes' &&
                    <Box>
                        <h4>What is your target amount? (in dollars)?</h4>
                        <TextField 
                            id="outlined-basic" 
                            label="Fundraising Target" 
                            variant="outlined"
                            type="number"
                            value={section7Enterprise.targetAmount7 ?? ''}
                            onChange = {(event) =>
                                { dispatch({
                                    type: "SET_NEXT_STEPS_ENTERPRISE",
                                    payload: {targetAmount7: Number(event.target.value)}
                                }); }
                            }
                        />
                    </Box>
                }

                <Box sx={{marginTop: "50px"}}>
                    <h4>What type of investment vehicle are you looking for?</h4>
                    <Box className='questionnaireForm centerHelp' sx={{ display: 'flex' }}>
                        <FormControl sx={{marginLeft: "55px"}}>
                            <Box>
                                <Table>
                                    <TableBody>
                                        {section7.results1?.map(type => {
                                            return(
                                                <TableRow sx={{display: "table"}}>
                                                    <TableCell sx={{border: "none"}}>
                                                        <Checkbox 
                                                            key={type.id}
                                                            checked={investmentSelection.includes(type.id)}
                                                            value={type.id}
                                                            onChange={handleInvestmentType}
                                                        />
                                                    </TableCell>
                                                    <TableCell sx={{border: "none", fontSize: "17px"}}>
                                                        {type.investmentVehicle}  
                                                    </TableCell>
                                                </TableRow>
                                            )})}
                                    </TableBody>
                                </Table>
                            </Box>
                        </FormControl>
                    </Box>
                </Box>

                <Box sx={{marginTop: "50px"}}>
                    <h4>How will you use the funding received?</h4>
                    <Box>
                        <FormControl sx={{marginLeft: "10px"}}>
                            <Box>
                                <Table>
                                    <TableBody>
                                        {section7.results2?.map(use => {
                                            return(
                                                <TableRow sx={{display: "table"}}>
                                                    <TableCell sx={{border: "none"}}>
                                                        <Checkbox 
                                                            key={use.id}
                                                            checked={fundingUse.includes(use.id)} 
                                                            value={use.id}
                                                            onChange={handleFundraising}
                                                        />
                                                    </TableCell>
                                                    <TableCell sx={{border: "none", fontSize: "17px"}}>
                                                        {use.fundingUse}
                                                    </TableCell>
                                                </TableRow>    
                                            )})}
                                    </TableBody>
                                </Table>
                            </Box>
                        </FormControl>
                    </Box>
                </Box>

                <Box sx={{marginTop: "50px"}}>
                    <h4>What are the next steps for your enterprise?</h4>
                    <Grid
                        container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Box
                            sx={{
                                width: 600,
                                maxWidth: '100%',
                            }}
                        >
                            <TextField 
                                id="outlined-basic" 
                                label="Next Steps" 
                                variant="outlined" 
                                multiline rows={5} 
                                fullWidth
                                value={section7Enterprise.nextSteps7 ?? ''}
                                onChange = {(event) =>
                                    { dispatch({
                                        type: "SET_NEXT_STEPS_ENTERPRISE",
                                        payload: {nextSteps7: event.target.value}
                                    }); }
                                }
                            />
                        </Box>
                    </Grid>
                </Box>
                <Box sx={{marginTop: "50px"}}>
                    <h4>How else can we help you move forward?</h4>
                    <Box>
                        <FormControl sx={{marginLeft: "180px"}}>
                            <Box>
                                <Table>
                                    <TableBody>
                                    {section7.results3?.map(approach => {
                                            return(
                                                <TableRow sx={{display: "table"}}>
                                                    <TableCell sx={{border: "none"}}>
                                                        <Checkbox 
                                                            key={approach.id}
                                                            checked={wayAhead.includes(approach.id)}
                                                            value={approach.id}
                                                            onChange={handleWayAhead}   
                                                        />
                                                    </TableCell>
                                                    <TableCell sx={{border: "none", fontSize: "17px"}}>
                                                        {approach.assistance} 
                                                    </TableCell>
                                                </TableRow>    
                                            )})}
                                    </TableBody>
                                </Table>
                            </Box>
                        </FormControl>
                    </Box>
                </Box>
                
                <br></br>
                <br></br>
                <h3>Matching Questions</h3>
                <h3>In this last section we ask you questions to hopefully match you with potential 
                    investors in the future as our platform develops!
                </h3>
                <br></br>

                <Box sx={{marginTop: "50px"}}>
                    <h4>Classify your impact on Society.</h4>
                    <h4>By impact on society we are referring to your organization's effect on the social fabric 
                        of the community and well-being of the individuals and families you serve
                    </h4>
                    <Box>
                        <RadioGroup
                            aria-labelledby="social-impact"
                            defaultValue={0}
                            name="radio-buttons-group"
                            className="buttonCenter2"
                            value = {Number(section7Enterprise.societalImpactId)}
                            onChange = {(event) =>
                                { dispatch({
                                    type: "SET_NEXT_STEPS_ENTERPRISE",
                                    payload: {societalImpactId: event.target.value}
                                }); }
                            }
                        >
                            <Box>
                                <Table>
                                    <TableBody>
                                        {section7.results4?.map(impact => {
                                            return(
                                                <TableRow sx={{display: "table"}}>
                                                    <TableCell sx={{border: "none", fontSize: "17px"}}>
                                                        <Radio
                                                            key={impact.id}
                                                            value={impact.id}
                                                        />
                                                    </TableCell>
                                                    <TableCell sx={{border: "none", fontSize: "17px"}}>
                                                        {impact.societalImpact}
                                                    </TableCell>
                                                </TableRow>
                                            )})}
                                    </TableBody>
                                </Table>
                            </Box>
                        </RadioGroup>
                    </Box>
                </Box>
                
                <Box sx={{marginTop: "50px"}}>
                    <h4>Classify your impact on the environment.</h4>
                    <h4>This question refers to how your organization avoids of the depletion of natural 
                        resources in order to maintain an ecological balance.
                    </h4>
                    <Box>
                        <RadioGroup
                            aria-labelledby="environmental-impact"
                            defaultValue={0}
                            name="radio-buttons-group"
                            className="buttonCenter2"
                            value = {section7Enterprise.environmentalImpactId}
                            onChange = {(event) =>
                                { dispatch({
                                    type: "SET_NEXT_STEPS_ENTERPRISE",
                                    payload: {environmentalImpactId: event.target.value}
                                }); }
                            }
                        >
                            <Box>
                                <Table>
                                    <TableBody>
                                        {section7.results5?.map(impact => {
                                            return(
                                                <TableRow sx={{display: "table"}}>
                                                    <TableCell sx={{border: "none", fontSize: "17px"}}>
                                                        <Radio
                                                            key={impact.id}
                                                            value={impact.id}
                                                        />
                                                    </TableCell>
                                                    <TableCell sx={{border: "none", fontSize: "17px"}}>
                                                        {impact.impact} 
                                                    </TableCell>
                                                </TableRow>
                                            )})}
                                    </TableBody>
                                </Table>
                            </Box>
                        </RadioGroup>
                    </Box>
                </Box>

                <Box sx={{marginTop: "50px"}}>
                    <h4>Classify your impact on economic development.</h4>
                    <h4>This question is meant to classify your organization's effect on wealth and 
                        economic growth for individuals or communities.
                    </h4>
                    <Box>
                        <Box>
                            <RadioGroup
                                aria-labelledby="economic-impact"
                                name="radio-buttons-group"
                                defaultValue={0}
                                className='buttonCenter2' 
                                value = {section7Enterprise.economicImpactId}
                                onChange = {(event) =>
                                    { dispatch({
                                        type: "SET_NEXT_STEPS_ENTERPRISE",
                                        payload: {economicImpactId: event.target.value}
                                    }); }
                                }
                            >
                                <Box>
                                    <Table>
                                        <TableBody>
                                            {section7.results6?.map(impact => {
                                                return(
                                                    <TableRow sx={{display: "table"}}>
                                                        <TableCell sx={{border: "none", fontSize: "17px"}}>
                                                            <Radio
                                                                key={impact.id}
                                                                value={impact.id}
                                                            />
                                                        </TableCell>
                                                        <TableCell sx={{border: "none", fontSize: "17px"}}>
                                                            {impact.impact} 
                                                        </TableCell>
                                                    </TableRow>
                                                )})}
                                        </TableBody>
                                    </Table>
                                </Box>
                            </RadioGroup>
                        </Box>
                    </Box> 
                </Box>                               

                <Box sx={{marginTop: "50px"}}>
                    <h4 onClick={() =>
                        dispatch({
                            type: 'SET_NEXT_STEPS_ENTERPRISE',
                            payload: {admin7: `A new computation
                            paradigm has emerged in the last decade under several names: online aggregation in the database
                            community; progressive, incremental, or iterative visualization in other communities. It consists
                            of splitting long computations into a series of approximate results improving with time; in this
                            process, partial or approximate results are then rapidly returned to the user.`}
                        })}
                    >
                        How well do you understand the problem?
                    </h4>
                    <Slider 
                        defaultValue={1}
                        step={1}
                        min={1}
                        max={10}
                        valueLabelDisplay="auto"
                        sx={{width: "270px"}}
                        marks
                        value = {section7Enterprise.understandProblem7}
                        onChange = {(event) =>
                            { dispatch({
                                type: "SET_NEXT_STEPS_ENTERPRISE",
                                payload: {understandProblem7: Number(event.target.value)}
                            }); }
                        }
                    />
                </Box>

        <br></br>
        <br></br>
        
        <Link to="/risks-and-hurdles">
            <button 
                className="btn"
                onClick={(event) => onBack(event)}
            >
                Back
            </button>
        </Link>
        
        <button 
            className="btn"
            onClick={(event) => handleSubmit(event)}
        >
            Save
        </button>

        {/* 
            Below should link should change from story to 
            whatever comes after last step in questionnaire 
        */}
        <Link to="/story">
            <button 
                className="btn"
                onClick={(event) => onNext(event)}
            >
                Next
            </button>
        </Link>
        </form>


    <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            Questionnaire saved!
        </Alert>
    </Snackbar>

    <AdminInputBox
        value={section7Enterprise.admin7}
        callback={handleAdminDispatch}
    />
        </Paper>
    </Box>

    </>
    )
};

export default SectionSevenNextSteps;