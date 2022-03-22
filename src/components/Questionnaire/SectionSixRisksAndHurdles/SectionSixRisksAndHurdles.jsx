import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

// MUI Imports
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
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

// Internal Imports
import '../Questionnaire.css'
import QuestionnaireNav from '../QuestionnaireNav/QuestionnaireNav';
import AdminInputBox from '../../AdminInputBox/AdminInputBox';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


function SectionSixRisksAndHurdles () {

    const dispatch = useDispatch();
    const history = useHistory();

    const [open, setOpen] = React.useState(false);

    history.scrollRestoration = 'manual';

    // store.section6 contains all of the selections for
    // this page of the questionnaire
    const section6 = useSelector((store) => store.section6);

    // store.section6Enterprise contains all of the responses
    // for the respective enterprise
    const section6Enterprise = useSelector((store) => store.section6Enterprise);
    const anticipatedRisks = useSelector((store) => store.section6Enterprise.riskId);
    const barriers = useSelector((store) => store.section6Enterprise.barrierId);
    const factors = useSelector((store) => store.section6Enterprise.factorId);
    const selectedEnterprise = useSelector(store => store.adminReducer.selectedEnterprise);


    const handleRisk = (event) => {
        const index = anticipatedRisks.indexOf(Number(event.target.value))
        if (index === -1) {
            dispatch({
                type: "SET_SECTION6_ENTERPRISE",
                payload: {riskId: [...anticipatedRisks, Number(event.target.value)]}
            });
        } else {
            dispatch({
                type: "SET_SECTION6_ENTERPRISE",
                payload: {riskId: anticipatedRisks.filter((anticipatedRisks) => anticipatedRisks !== Number(event.target.value))}
            });
        }
    }

    const handleBarriers = (event) => {
        const index = barriers.indexOf(Number(event.target.value))
        if (index === -1) {
            dispatch({
                type: "SET_SECTION6_ENTERPRISE",
                payload: {barrierId: [...barriers, Number(event.target.value)]}
            });
        } else {
            dispatch({
                type: "SET_SECTION6_ENTERPRISE",
                payload: {barrierId: barriers.filter((barriers) => barriers !== Number(event.target.value))}
            });
        }
    }

    const handleFactors = (event) => {
        const index = factors.indexOf(Number(event.target.value))
        if (index === -1) {
            dispatch({
                type: "SET_SECTION6_ENTERPRISE",
                payload: {factorId: [...factors, Number(event.target.value)]}
            });
        } else {
            dispatch({
                type: "SET_SECTION6_ENTERPRISE",
                payload: {factorId: factors.filter((factors) => factors !== Number(event.target.value))}
            });
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch({
            type: "FETCH_RISKS_AND_HURDLES",
            payload: selectedEnterprise
        });
        dispatch({ 
            type: "FETCH_ENTERPRISE_SECTION_SIX",
            payload: selectedEnterprise
        })
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        setOpen(true);

        dispatch({
            type: 'PUT_SECTION_SIX',
            payload: {
                ...section6Enterprise,
                id: selectedEnterprise
            }
        })
    };


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handleAdminDispatch = (event) => {
        dispatch({
            type: 'SET_SECTION6_ENTERPRISE',
            payload: {admin6: event}
        })
    }


    return (
        <>
        <Box className="fullPage">
            <QuestionnaireNav/>
            <Paper className="formPaper" elevation={3}>
                <form className='questionnaireForm'>
                    <h1>Section 6 - Risks and Hurdles</h1>
                    <h3>Enhancing your Transparency by providing insight into current and future factors 
                        that could have an effect on the growth of your organization.
                    </h3>
                    <h3>The goal of this section is not to highlight the bad or the negatives but to 
                        gain a better understanding of your organization from an internal standpoint, 
                        and to demonstrate business acumen to any external users.
                    </h3>
                    <br></br>
                    <br></br>
                    <h3>Have you anticipated any of these risks to the expected outcomes?</h3>
                    <h3>We understand these risks may be new to you. If you have not yet considered 
                        any of these risks, please select "None at this stage"
                    </h3>
                    <Box>
                        <FormControl sx={{ m : 3, marginLeft: "80px" }}>
                            {section6.results1?.map(risk => {
                                return(
                                    <Box>
                                        <Table>
                                            <TableBody>
                                                <TableRow sx={{display: "table"}}>
                                                    <TableCell sx={{border: "none"}}>
                                                        <Checkbox 
                                                            key={risk.id}
                                                            checked={anticipatedRisks.includes(risk.id)}
                                                            value={risk.id}
                                                            onChange={handleRisk}
                                                        />
                                                    </TableCell>
                                                    <TableCell sx={{border: "none", fontSize: "17px"}}>
                                                        {risk.risk}
                                                    </TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </Box>
                                )})}
                        </FormControl>
                    </Box>

                    <Box sx={{marginTop: "50px"}}>
                        <h4>If applicable, please tell us more about how you've prepared 
                            (or plan to prepare) for each of the selected impact risks. </h4>
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
                                    label="Impact Risk Planning" 
                                    variant="outlined" 
                                    multiline rows={5} 
                                    fullWidth
                                    value={section6Enterprise.riskPrep6 || ''}
                                    onChange = {(event) =>
                                        { dispatch({
                                            type: "SET_SECTION6_ENTERPRISE",
                                            payload: {riskPrep6: event.target.value}
                                        }); }
                                    }
                                />
                            </Box>
                        </Grid>
                    </Box>

                    <Box sx={{marginTop: "50px"}}>
                        <h4>From the list below, please select the startup barriers that are most applicable to you.</h4>
                        <h4>The aim of this question is to gain a grasp of how your organization is dealing with/plans to 
                            deal with potential hurdles.
                        </h4>
                        <Box>
                            <FormControl sx={{ m : 3, marginLeft: "-150px"}}>
                                    {section6.results2?.map(barrier => {
                                        return(
                                            <Box>
                                                <Table>
                                                    <TableRow sx={{display: "table"}}>
                                                        <TableCell sx={{border: "none"}}>
                                                            <Checkbox 
                                                                key={barrier.id}
                                                                checked={barriers.includes(barrier.id)}
                                                                value={barrier.id}
                                                                onChange={handleBarriers}
                                                            />
                                                        </TableCell>
                                                        <TableCell sx={{border: "none", fontSize: "17px"}}>
                                                            {barrier.barrier}
                                                        </TableCell>
                                                    </TableRow>
                                                </Table>
                                            </Box>
                                        )})}
                                </FormControl>
                            </Box>
                    </Box>

                    <Box sx={{marginTop: "50px"}}>
                        <h4>Please elaborate on how you are dealing/plan to deal with each 
                            of the startup barriers you selected above.
                        </h4>
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
                                    label="Planning for Startup Barriers" 
                                    variant="outlined" 
                                    multiline rows={5} 
                                    fullWidth
                                    value={section6Enterprise.barrierPlan6 || ''}
                                    onChange = {(event) =>
                                        { dispatch({
                                            type: "SET_SECTION6_ENTERPRISE",
                                            payload: {barrierPlan6: event.target.value}
                                        }); }
                                    }
                                />
                            </Box>
                        </Grid>
                    </Box>

                    

                    <Box sx={{marginTop: "50px"}}>
                        <h4>Select factors that could significantly influence the growth 
                            path of your enterprise (positive or negative)
                        </h4>
                        <h4>Here we are looking for factors that could be outside of your control 
                            that may have an impact on the progress of your organization. Gaining 
                            an understanding of external factors in your industry will help you to 
                            be more adept in from a business standpoint.
                        </h4>
                        <Box>
                        <FormControl>
                            <Box>
                                <Table>
                                    <TableBody>
                                        {section6.results3?.map(factor => {
                                            return(
                                                <TableRow sx={{display: "table"}}>
                                                    <TableCell sx={{border: "none"}}>
                                                        <Checkbox 
                                                            key={factor.id}
                                                            checked={factors.includes(factor.id)}
                                                            value={factor.id}
                                                            onChange={handleFactors}
                                                        />
                                                    </TableCell>
                                                    <TableCell sx={{border: "none", fontSize: "17px"}}>
                                                        {factor.factor} 
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
                        <h4>Please explain your reason(s) for your selection(s) above.</h4>
                        <h4 onClick={() =>
                        dispatch({
                            type: 'SET_SECTION6_ENTERPRISE',
                            payload: {admin6: `Risk efficiency: Manage uncertainty that matters. Who, what, where, when, why? 
                            Stakeholder participation risk: you rely on stakeholders that are globally distributed with limited communication.
                            External risk: how would changes in the market, supply chain, etc affect your ability to reduce plastics in the ocean?
                            Alignment risk: how will you communicate that your mission is reducing plastics in the ocean and not selling sunglasses?`}
                        })}>Following on from the previous question, here we are looking for 
                            explanations that tell us you are aware of how the selected external 
                            factors may impact your organization, or even better, how you are 
                            prepared to deal with external factors that may influence your growth 
                            path (+ve or -ve)
                        </h4>
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
                                    label="Impact Risk Planning" 
                                    variant="outlined" 
                                    multiline rows={5} 
                                    fullWidth
                                    value={section6Enterprise.externalGrowth6 || ''}
                                    onChange = {(event) =>
                                        { dispatch({
                                            type: "SET_SECTION6_ENTERPRISE",
                                            payload: {externalGrowth6: event.target.value}
                                        }); }
                                    } 
                                />
                            </Box>
                        </Grid>
                    </Box>
                    
                    <br></br>
                    <br></br>
                    <Link to="/market"><button className="btn">Back</button></Link>

                    <button 
                        className="btn"
                        onClick={(event) => handleSubmit(event)}
                    >
                        Save
                    </button>
                    
                    <Link to="/next-steps"><button className="btn">Next</button></Link>

                </form>
            

        <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Questionnaire saved!
            </Alert>
        </Snackbar>
        
        <AdminInputBox
            value={section6Enterprise.admin6}
            callback={handleAdminDispatch}
        />
        </Paper>
        </Box>
        </>
    )
};

export default SectionSixRisksAndHurdles;