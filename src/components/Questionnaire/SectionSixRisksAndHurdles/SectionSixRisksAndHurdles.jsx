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
        <QuestionnaireNav/>
        <Paper className="formPaper" elevation={3}>
        <form className='questionnaireForm'>
            <h1>Section 6 - Risks and Hurdles</h1>
            <p>Enhancing your Transparency by providing insight into current and future factors 
                that could have an effect on the growth of your organization.
            </p>
            <p>The goal of this section is not to highlight the bad or the negatives but to 
                gain a better understanding of your organization from an internal standpoint, 
                and to demonstrate business acumen to any external users.
            </p>

            <h5>Have you anticipated any of these risks to the expected outcomes?</h5>
            <p>We understand these risks may be new to you. If you have not yet considered 
                any of these risks, please select "None at this stage"
            </p>
            <Box className='questionnaireForm centerHelp' sx={{ display: 'flex' }}>
                <FormControl className='questionnaireForm' sx={{ m : 3}}>
                    {section6.results1?.map(risk => (
                            <FormControlLabel 
                                key={risk.id}
                                checked={anticipatedRisks.includes(risk.id)} 
                                control={
                                    <Checkbox
                                        value={risk.id}
                                        onChange={handleRisk}
                                    />
                                } 
                                label={risk.risk} 
                            />
                    ))}
                </FormControl>
            </Box>

            <h5>If applicable, please tell us more about how you've prepared 
                (or plan to prepare) for each of the selected impact risks. </h5>
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

            <h5>From the list below, please select the startup barriers that are most applicable to you.</h5>
            <p>The aim of this question is to gain a grasp of how your organization is dealing with/plans to 
                deal with potential hurdles.
            </p>
            <Box className='questionnaireForm centerHelp' sx={{ display: 'flex' }}>
                <FormControl className='questionnaireForm' sx={{ m : 3}}>
                    {section6.results2?.map(barrier => (
                            <FormControlLabel 
                                key={barrier.id}
                                checked={barriers.includes(barrier.id)}  
                                control={
                                    <Checkbox
                                        value={barrier.id}
                                        onChange={handleBarriers}
                                    />
                                } 
                                label={barrier.barrier} 
                            />
                    ))}
                </FormControl>
            </Box>

            <h5>Please elaborate on how you are dealing/plan to deal with each 
                of the startup barriers you selected above.
            </h5>
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

            

            <h5>Select factors that could significantly influence the growth 
                path of your enterprise (positive or negative)
            </h5>
            <p>Here we are looking for factors that could be outside of your control 
                that may have an impact on the progress of your organization. Gaining 
                an understanding of external factors in your industry will help you to 
                be more adept in from a business standpoint.
            </p>
            <Box className='questionnaireForm centerHelp' sx={{ display: 'flex' }}>
                <FormControl className='questionnaireForm' sx={{ m : 3}}>
                    {section6.results3?.map(factor => (
                            <FormControlLabel 
                                key={factor.id}
                                checked={factors.includes(factor.id)}  
                                control={
                                    <Checkbox
                                        value={factor.id}
                                        onChange={handleFactors}
                                    />
                                } 
                                label={factor.factor} 
                            />
                    ))}
                </FormControl>
            </Box>

            <h5>Please explain your reason(s) for your selection(s) above.</h5>
            <p>Following on from the previous question, here we are looking for 
                explanations that tell us you are aware of how the selected external 
                factors may impact your organization, or even better, how you are 
                prepared to deal with external factors that may influence your growth 
                path (+ve or -ve)
            </p>
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
        </>
    )
};

export default SectionSixRisksAndHurdles;