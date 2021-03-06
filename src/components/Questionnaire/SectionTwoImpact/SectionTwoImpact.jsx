import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from 'react-router-dom';

import '../Questionnaire.css';

import { 
    Table, 
    TableHead, 
    TableRow, 
    TableBody,
    Button, 
    Box, 
    Container,
    Checkbox,
    Select,
    MenuItem,
    FormControl,
    FormControlLabel,
    FormGroup,
    InputLabel,
    TextField,
} 
from '@mui/material';
import Paper from '@mui/material/Paper';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import QuestionnaireNav from '../QuestionnaireNav/QuestionnaireNav';
import SectionTwoImpactOpportunity from "./SectionTwoImpactOpportunity/SectionTwoImpactOpportunity";
import AdminInputBox from '../../AdminInputBox/AdminInputBox';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function SectionTwoImpact() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [open, setOpen] = useState(false);

    history.scrollRestoration = 'manual';

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch({type: 'FETCH_SECTION_TWO'});
        dispatch({type: 'FETCH_SECTION_TWO_ENTERPRISE', payload: selectedEnterprise});
    }, [])

    const user = useSelector(store => store.user);
    const impactSectors = useSelector(store => store.section2.impactSectors);
    const section2Enterprise = useSelector(store => store.section2Enterprise);
    const selectedImpactSector = useSelector(store => store.section2Enterprise.impactSectorId);
    const selectedEnterprise = useSelector(store => store.adminReducer.selectedEnterprise);
    const selectedIndicator = useSelector(store => store.section2Enterprise.indicatorId);


    const handleSubmit = (event) => {
        event.preventDefault();
        setOpen(true);

        dispatch({
            type: 'UPDATE_SECTION_TWO',
            payload: {
                id: selectedEnterprise,
                ...section2Enterprise
            }
        })
    }

    const handleImpactSector = (event) => {
        console.log('in handleImpactSector');
        const index = selectedImpactSector.indexOf(Number(event.target.value))
        console.log('index:', index);
        if (index === -1) {
            dispatch({
                type: 'SET_SECTION_TWO_ENTERPRISE',
                payload: {
                    impactSectorId: [...selectedImpactSector, Number(event.target.value)]}
            }); 
        }
        else {
            dispatch({
                type: 'SET_SECTION_TWO_ENTERPRISE',
                payload: {
                    impactSectorId: selectedImpactSector.filter((selectedImpactSector) => selectedImpactSector !== Number(event.target.value))
                }
            });
        }
    }


    const onNext = (event) => {
        handleSubmit(event);
        history.push('/solution')
    }

    const onBack = (event) => {
        handleSubmit(event);
        history.push('/story')
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handleAdminDispatch = (event) => {
        dispatch({
            type: 'SET_SECTION_TWO_ENTERPRISE',
            payload: {admin2: event}
        })
    }


    return(
        <>
        <Box className="fullPage">
            <QuestionnaireNav/>
            <Paper className="formPaper" elevation={3}>
                <Box className="questionnaireForm">
                    <form>
                        <h1><b>Section 2 - Impact</b></h1>
                        <p className="definingImpact">Defining your Impact...</p>
                        <br></br>
                        <h3>
                            This section includes questions surrounding the social, environmental or economic 
                            impact your organization is trying to achieve. Answers should be thorough and 
                            thoughtful as this is a very important section of your report. 
                            Being able to communicate your impact opportunity and results in a way that 
                            external users can understand is of utmost importance!
                        </h3>
                        <Box sx={{marginTop: "50px"}}>
                            <p>What is the social / environmental problem you are trying to solve?</p>
                            <TextField
                                className="socialEnviroProblem"
                                label="Social/Environmental Problem"
                                InputLabelProps={{ shrink: true }}
                                variant="outlined"
                                type="text"
                                placeholder="Social/Environmental Problem"
                                multiline rows={5}
                                id="outlined-basic" 
                                sx={{width: 600}}
                                value={section2Enterprise.problemBeingSolved2}
                                onChange={(event) => dispatch({
                                type: 'SET_SECTION_TWO_ENTERPRISE',
                                payload: { problemBeingSolved2: event.target.value }
                                })}
                            >

                            </TextField>
                        </Box>
                        <Box sx={{marginTop: "50px"}}>
                            <p>What category best describes your IMPACT Sector?</p>
                            <FormControl sx={{marginLeft: "-160px"}}>
                                {impactSectors?.map(sector => {
                                    return(
                                        <FormControlLabel 
                                            key={sector.id}
                                            checked={selectedImpactSector.includes(sector.id)}
                                            value={sector.id}
                                            defaultValue={0}
                                            onChange={handleImpactSector}
                                            control={<Checkbox />} 
                                            label={sector.impactSector}
                                        />
                                    )
                                })}
                            </FormControl>
                        </Box>
                        <Box sx={{marginTop: "50px"}}>
                            <p>
                                Please tell us about the economic, 
                                environmental or social COST of the problem
                                in your words (dollars lost, people effected, 
                                loss of opportunity, etc.)
                            </p>
                            <TextField
                                label="Cost of The Problem"
                                InputLabelProps={{ shrink: true }}
                                className="costOfProblem"
                                variant="outlined"
                                type="text"
                                placeholder="COST of The Problem"
                                multiline rows={5}
                                id="outlined-basic" 
                                sx={{width: 600}}
                                value={section2Enterprise.costOfProblem2}
                                onChange={(event) => dispatch({
                                type: 'SET_SECTION_TWO_ENTERPRISE',
                                payload: { costOfProblem2: event.target.value }
                                })}
                            >

                            </TextField>
                        </Box>
                        <Box sx={{marginTop: "50px"}}>
                            <p>How does your product or service help solve the 
                                social or economic problem outlined in the problem 
                                questions above?</p>
                            <TextField
                                label="Solution"
                                InputLabelProps={{ shrink: true }}
                                className="solutionToProblem"
                                variant="outlined"
                                type="text"
                                placeholder="Solution"
                                multiline rows={5}
                                id="outlined-basic" 
                                sx={{width: 600}}
                                value={section2Enterprise.howTheySolve2}
                                onChange={(event) => dispatch({
                                type: 'SET_SECTION_TWO_ENTERPRISE',
                                payload: { howTheySolve2: event.target.value }
                                })}
                            >

                            </TextField>
                        </Box>
                        <Box sx={{marginTop: "50px"}}>
                            <p>Describe the individual, community or 
                                environment that benefits most from your 
                                solution?</p>
                            <TextField
                                label="Who Benefits?"
                                InputLabelProps={{ shrink: true }}
                                className="whoBenefits"
                                variant="outlined"
                                type="text"
                                placeholder="Who Benefits"
                                multiline rows={5}
                                id="outlined-basic" 
                                sx={{width: 600}}
                                value={section2Enterprise.whoBenefits2}
                                onChange={(event) => dispatch({
                                type: 'SET_SECTION_TWO_ENTERPRISE',
                                payload: { whoBenefits2: event.target.value }
                                })}
                            >
                            </TextField>
                        </Box>
                        <SectionTwoImpactOpportunity />
                        <Link to="/story">
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
                        <Link to="/solution">
                            <button 
                            className="btn"
                            onClick={(event) => onNext(event)}
                            >
                                Next
                            </button>
                        </Link>
                    </form>
                </Box>

            <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Questionnaire saved!
                </Alert>
            </Snackbar>

        <AdminInputBox
            value={section2Enterprise.admin2}
            callback={handleAdminDispatch}
        />
            </Paper>
        </Box>

        </>
    )
}


export default SectionTwoImpact;