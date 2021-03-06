import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';


// MUI
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import '../Questionnaire.css';
import QuestionnaireNav from '../QuestionnaireNav/QuestionnaireNav';
import AdminInputBox from '../../AdminInputBox/AdminInputBox';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function SectionThreeSolution () {
    
    const dispatch = useDispatch();
    const history = useHistory();

    const [open, setOpen] = React.useState(false);

    history.scrollRestoration = 'manual';


    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch({ type: 'FETCH_SECTION_THREE'});
        dispatch({ type: 'FETCH_ENTERPRISE_SECTION_THREE', payload: selectedEnterprise});
    }, []);

    // get the user.id from the store to send with everything else
    const user = useSelector((store) => store.user);
    // These are the arrays that come from the tables for check boxes
    const painPoints = useSelector(store => store.section3.painPoints);
    const operatingSector = useSelector(store => store.section3.operatingSector);
    const technologies = useSelector(store => store.section3.technologies);
    // This is the enterprise's revolving answers being updated
    const section3Enterprise = useSelector(store => store.section3Enterprise);
    // These are the enterprises's selected check boxes
    const selectedOperatingSector = useSelector(store => store.section3Enterprise.operatingSectorId);
    const selectedPainPoints = useSelector(store => store.section3Enterprise.painPointsId);
    const selectedTechnologies = useSelector(store => store.section3Enterprise.technologiesId);
    const selectedEnterprise = useSelector(store => store.adminReducer.selectedEnterprise);

    const handleOperatingSectors = (event) => {
        const index = selectedOperatingSector.indexOf(Number(event.target.value))
        if (index === -1) {
            dispatch({
                type: 'SET_SECTION_THREE_ENTERPRISE',
                payload: {operatingSectorId: [...selectedOperatingSector, Number(event.target.value)]}
            })
        }
        else {
            dispatch({
                type: 'SET_SECTION_THREE_ENTERPRISE',
                payload: {operatingSectorId: selectedOperatingSector.filter((selectedOperatingSector) => selectedOperatingSector !== Number(event.target.value))}
            })
        }
    };

    const handlePainPoints = (event) => {
        const index = selectedPainPoints.indexOf(Number(event.target.value))
        if (index === -1) {
            dispatch({
                type: 'SET_SECTION_THREE_ENTERPRISE',
                payload: {painPointsId: [...selectedPainPoints, Number(event.target.value)]}
            })
        }
        else {
            dispatch({
                type: 'SET_SECTION_THREE_ENTERPRISE',
                payload: {painPointsId: selectedPainPoints.filter((selectedPainPoints) => selectedPainPoints !== Number(event.target.value))}
            })
        }
    };

    const handleTechnologies = (event) => {
        const index = selectedTechnologies.indexOf(Number(event.target.value))
        if (index === -1) {
            dispatch({
                type: 'SET_SECTION_THREE_ENTERPRISE',
                payload: {technologiesId: [...selectedTechnologies, Number(event.target.value)]}
            })
        }
        else {
            dispatch({
                type: 'SET_SECTION_THREE_ENTERPRISE',
                payload: {technologiesId: selectedTechnologies.filter((selectedTechnologies) => selectedTechnologies !== Number(event.target.value))}
            })
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setOpen(true);

        dispatch({
            type: 'POST_SECTION_THREE',
            // Make sure to send the enterpriseID (which is the same as 
            // the user id from the store) as part of the payload
            // this was the way I was able to figure it out
            payload: {
                id: selectedEnterprise,
                ...section3Enterprise
        }})
    };


    const onNext = (event) => {
        console.log('in onNext');
        handleSubmit(event);
        history.push('/traction')
    }


    const onBack = (event) => {
        handleSubmit(event);
        history.push('/impact')
    }


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handleAdminDispatch = (event) => {
        dispatch({
            type: 'SET_SECTION_THREE_ENTERPRISE',
            payload: {admin3: event}
        })
    }


    return (
        <Box className="fullPage">
            <QuestionnaireNav />
            <Paper className="formPaper" elevation={3}>
                <h1 className='questionnaireForm'>Section 3 - Solution</h1>
                <h3 className='questionnaireForm'>In this section we ask for more detail regarding your business
                offering and how it can help potential customers.
                </h3>
                <form className='questionnaireForm'>
                    <Box sx={{marginTop: "50px"}}>
                        <h4>What sector do you operate in?</h4>
                        <Box sx={{marginLeft: "120px"}}>
                            <FormControl sx={{ m : 3}}>
                                {operatingSector?.map(sector => (
                                    <FormControlLabel 
                                        checked={selectedOperatingSector.includes(sector.id)}
                                        value={sector.id}
                                        onChange={handleOperatingSectors}
                                        control={
                                        <Checkbox 
                                        />} 
                                        label={sector.sector}
                                        key={sector.id} />
                                ))}
                            </FormControl>
                        </Box>
                    </Box>
                    <Box sx={{marginTop: "50px"}}>
                        <h4>Describe the profile of your PAYING customer:</h4>
                        <p>What are the characteristics of your target user market?</p>
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
                                    label="Customer characteristics" 
                                    variant="outlined" 
                                    multiline rows={5}
                                    fullWidth
                                    InputLabelProps={{shrink: true,}}
                                    value={section3Enterprise.payingCustomerProfile3}
                                    onChange={(event) => dispatch({
                                        type: 'SET_SECTION_THREE_ENTERPRISE',
                                        payload: {payingCustomerProfile3: event.target.value}
                                    })}
                                />
                        </Box>
                    </Grid>
                </Box>
                <Box sx={{marginTop: "50px"}}>
                    <h4>Who are your main competitors?</h4>
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
                                label="Main competitors" 
                                variant="outlined" 
                                multiline rows={5}
                                fullWidth
                                InputLabelProps={{shrink: true,}}
                                value={section3Enterprise.mainCompetitors3}
                                onChange={(event) => dispatch({
                                    type: 'SET_SECTION_THREE_ENTERPRISE',
                                    payload: {mainCompetitors3: event.target.value}
                                })}
                            />
                        </Box>
                    </Grid>
                </Box>
                <Box sx={{marginTop: "50px"}}>
                    <h4>How does your product/service differ from your competitors?</h4>
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
                                label="Differing competitive factors" 
                                variant="outlined" 
                                multiline rows={5}
                                InputLabelProps={{shrink: true,}}
                                fullWidth
                                value={section3Enterprise.differFromCompetitors3}
                                onChange={(event) => {
                                    dispatch({
                                        type: 'SET_SECTION_THREE_ENTERPRISE',
                                        payload: {differFromCompetitors3: event.target.value}
                                    })
                                }}
                            />
                        </Box>
                    </Grid>
                </Box>
                <Box sx={{marginTop: "50px"}}>
                    <h4>What customer pain points does your product/service seek to solve?</h4>
                    <Box >
                        <FormControl sx={{marginLeft: "70px"}}>
                            {painPoints?.map(point => {
                                return(
                                    <Box>
                                        <Table>
                                            <TableRow sx={{display: "table"}}>
                                                <TableCell sx={{border: "none"}}>
                                                    <Checkbox 
                                                        key={point.id}
                                                        checked={selectedPainPoints.includes(point.id)}
                                                        value={point.id}
                                                        defaultValue={0}
                                                        onChange={handlePainPoints}
                                                    />
                                                </TableCell>
                                                <TableCell sx={{border: "none"}}>
                                                    {point.painPoint}
                                                </TableCell>
                                            </TableRow>
                                        </Table>
                                    </Box>
                                )
                            })}
                        </FormControl>
                    </Box>
                </Box>
                {/* <FormControlLabel 
                                        key={point.id}
                                        checked={selectedPainPoints.includes(point.id)}
                                        control={
                                            <Checkbox
                                                value={point.id}
                                                onChange={handlePainPoints}
                                            />} 
                                        label={point.painPoint}
                                    /> */}
                <Box sx={{marginTop: "50px"}}>
                    <h4>What do your clients/customers say about your product or service? (i.e. testimonial)</h4>
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
                                label="Testimonial" 
                                variant="outlined" 
                                multiline rows={5}
                                fullWidth
                                InputLabelProps={{shrink: true,}}
                                value={section3Enterprise.testimonial3}
                                onChange={(event) => dispatch({
                                    type: 'SET_SECTION_THREE_ENTERPRISE',
                                    payload: {testimonial3: event.target.value}
                                })}
                            />
                        </Box>
                    </Grid>
                </Box>
                <Box sx={{marginTop: "50px"}}>
                    <h4>Describe your business model</h4>
                    <p>Things to focus on: Description of the solution from a 
                        business standpoint;  Is the product an SaaS solution? 
                        What is the pricing model? How will your product/service 
                        generate revenue? What achievements do you have that can 
                        mark your progress to-date?</p>
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
                                label="Business Model" 
                                variant="outlined" 
                                multiline rows={5}
                                fullWidth
                                InputLabelProps={{shrink: true,}}
                                value={section3Enterprise.businessModel3}
                                onChange={(event) => dispatch({
                                    type: 'SET_SECTION_THREE_ENTERPRISE',
                                    payload: {businessModel3: event.target.value}
                                })}
                            />
                        </Box>
                    </Grid>
                </Box>
                <Box sx={{marginTop: "50px"}}>
                    <h4>Please select the top three technology applications that apply 
                        to your organization.</h4>
                    <Box className='centerHelp' sx={{ display: 'flex' }}>
                        <FormControl sx={{ m : 3}}>
                            {technologies?.map(technology => (
                                    <FormControlLabel 
                                        checked={selectedTechnologies.includes(technology.id)}
                                        disabled={!selectedTechnologies.includes(technology.id) && selectedTechnologies.length > 2}
                                        control={
                                        <Checkbox 

                                        />} 
                                        value={technology.id}
                                        onChange={handleTechnologies}
                                        label={technology.technology}
                                        key={technology.id} />
                            ))}
                        </FormControl>
                    </Box>
                </Box>
                <br/>
                <br/>
                <Link>
                    <button 
                        className="btn" 
                        onClick={(event) => onBack(event)}>
                        Back
                    </button>
                </Link>
                <button 
                    className="btn"
                    onClick={handleSubmit}>
                        Save
                    </button>
                <Link>
                    <button 
                        className="btn"
                        onClick={(event) => onNext(event)}>
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
                value={section3Enterprise.admin3}
                callback={handleAdminDispatch}
            />
            </Paper>
        </Box>
    )
};

export default SectionThreeSolution;