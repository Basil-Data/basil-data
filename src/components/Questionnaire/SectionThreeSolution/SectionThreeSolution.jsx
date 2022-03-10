import react from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';


// MUI
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';

import '../Questionnaire.css';
import QuestionnaireNav from '../QuestionnaireNav/QuestionnaireNav';


function SectionThreeSolution () {
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_SECTION_THREE'});
    }, []);

    // get the user.id from the store to send with everything else
    const user = useSelector((store) => store.user);
    const painPoints = useSelector(store => store.section3.painPoints);
    const operatingSector = useSelector(store => store.section3.operatingSector);
    const technologies = useSelector(store => store.section3.technologies);
    const section3Enterprise = useSelector(store => store.section3Enterprise);

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch({
            type: 'POST_SECTION_THREE',
            // Make sure to send the enterpriseID (which is the same as 
            // the user id from the store) as part of the payload
            // this was the way I was able to figure it out
            payload: {
                id: user.id,
                data: section3Enterprise
        }})
    };

    return (
        <>
            <QuestionnaireNav />
            <h1 className='questionnaireForm'>Section 3 - Solution</h1>
            <p className='questionnaireForm'>In this section we ask for more detail regarding your business
            offering and how it can help potential customers.</p>
            <form className='questionnaireForm'>
                <h5>What sector do you operate in?</h5>
                <Box className='centerHelp' sx={{ display: 'flex' }}>
                    <FormControl sx={{ m : 3}}>
                        {operatingSector?.map(sector => (
                                <FormControlLabel 
                                    control={<Checkbox />} 
                                    label={sector.sector}
                                    key={sector.id} />
                        ))}
                    </FormControl>
                </Box>
                <h5>Describe the profile of your PAYING customer:</h5>
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
                            value={section3Enterprise.payingCustomerProfile3}
                            onChange={(event) => dispatch({
                                type: 'SET_SECTION_THREE_ENTERPRISE',
                                payload: {payingCustomerProfile3: event.target.value}
                            })}
                        />
                    </Box>
                </Grid>
                <h5>Who are your main competitors?</h5>
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
                            value={section3Enterprise.mainCompetitors3}
                            onChange={(event) => dispatch({
                                type: 'SET_SECTION_THREE_ENTERPRISE',
                                payload: {mainCompetitors3: event.target.value}
                            })}
                        />
                    </Box>
                </Grid>
                <h5>How does your product/service differ from your competitors?</h5>
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
                <h5>What customer pain points does your product/service seek to solve?</h5>
                <Box className='centerHelp' sx={{ display: 'flex' }}>
                    <FormControl sx={{ m : 3}}>
                        {painPoints?.map(point => (
                                <FormControlLabel 
                                    control={<Checkbox />} 
                                    label={point.painPoint}
                                    key={point.id} />
                        ))}
                    </FormControl>
                </Box>
                <h5>What do your clients/customers say about your product or service? (i.e. testimonial)</h5>
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
                            value={section3Enterprise.testimonial3}
                            onChange={(event) => dispatch({
                                type: 'SET_SECTION_THREE_ENTERPRISE',
                                payload: {testimonial3: event.target.value}
                            })}
                        />
                    </Box>
                </Grid>
                <h5>Describe your business model</h5>
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
                            value={section3Enterprise.businessModel3}
                            onChange={(event) => dispatch({
                                type: 'SET_SECTION_THREE_ENTERPRISE',
                                payload: {businessModel3: event.target.value}
                            })}
                        />
                    </Box>
                </Grid>
                <h5>Please select the top three technology applications that apply 
                    to your organization.</h5>
                <Box className='centerHelp' sx={{ display: 'flex' }}>
                    <FormControl sx={{ m : 3}}>
                        {technologies?.map(technology => (
                                <FormControlLabel 
                                    control={<Checkbox />} 
                                    label={technology.technology}
                                    key={technology.id} />
                        ))}
                    </FormControl>
                </Box>
                <br/>
                <br/>
                <Link to="/impact">
                    <button 
                        className="btn" 
                        onClick={handleSubmit}>
                        Back
                    </button>
                </Link>
                <button 
                    className="btn"
                    onClick={handleSubmit}>
                        Submit
                    </button>
                <Link to="/traction">
                    <button 
                        className="btn"
                        onClick={handleSubmit}>
                        Next
                    </button>
                </Link>
            </form>
        </>
    )
};

export default SectionThreeSolution;