import react from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
        dispatch({ type: 'FETCH_SECTION_THREE'})
    }, []);

    const painPoints = useSelector(store => store.section3.painPoints);
    const operatingSector = useSelector(store => store.section3.operatingSector);

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
                            fullWidth/>
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
                            fullWidth/>
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
                            fullWidth/>
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
                            fullWidth/>
                    </Box>
                </Grid>
                <br/>
                <br/>
                <button className="btn">Back</button>
                <button className="btn">Submit</button>
                <button className="btn">Next</button>
            </form>
        </>
    )
};

export default SectionThreeSolution;