import react from 'react';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// MUI
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

import '../Questionnaire.css';
import QuestionnaireNav from '../QuestionnaireNav/QuestionnaireNav';

function SectionOneStory () {
    const history = useHistory();
    const dispatch = useDispatch();

    const competitiveAdvantages = useSelector(store => store.section1.competitiveAdvantages);

    useEffect(() => {
        dispatch({ type: 'FETCH_SECTION_ONE' })
    }, []);


    return (
        <>
        <QuestionnaireNav/>
            <h1 className='questionnaireForm'>Section 1 - Story</h1>
            <p className='questionnaireForm'>This section is about you and your team, your motivation for the problem, 
                the special make-up of your organization and most importantly a chance to
                introduce yourself and your exciting solution to a potential investor!  
                Make sure to be enthusiastic and show investors why they should go with you!</p>
        <form className='questionnaireForm'>
            <h5>What is the size of your enterprise? (people)</h5>
            <TextField id="outlined-basic" label="Number of people" variant="outlined" />
            <h5>When was the organization founded?</h5>
            <TextField id="outlined-basic" label="Date founded" variant="outlined" />
            <h5>What is your Mission Statement?</h5>
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
                        label="Mission Statement" 
                        variant="outlined" 
                        multiline rows={5}
                        fullWidth/>
                </Box>
            </Grid>
            <h5>How well do you understand the problem?</h5>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue=""
                row
                name="radio-buttons-group"
                className='centerHelp'
            >
                <FormControlLabel labelPlacement="top" value="1" control={<Radio />} label="1" />
                <FormControlLabel labelPlacement="top" value="2" control={<Radio />} label="2" />
                <FormControlLabel labelPlacement="top" value="3" control={<Radio />} label="3" />
                <FormControlLabel labelPlacement="top" value="4" control={<Radio />} label="4" />
                <FormControlLabel labelPlacement="top" value="5" control={<Radio />} label="5" />
                <FormControlLabel labelPlacement="top" value="6" control={<Radio />} label="6" />
                <FormControlLabel labelPlacement="top" value="7" control={<Radio />} label="7" />
                <FormControlLabel labelPlacement="top" value="8" control={<Radio />} label="8" />
                <FormControlLabel labelPlacement="top" value="9" control={<Radio />} label="9" />
                <FormControlLabel labelPlacement="top" value="10" control={<Radio />} label="10" />
            </RadioGroup>
            <h5>How many years of collective experience within the impact problem space?</h5>
            <TextField id="outlined-basic" label="Number of years" variant="outlined" />
            <h5>What percentage of your founding team is BIPOC (Black, Indigenous, Person of Color)?</h5>
            <TextField id="outlined-basic" label="Percentage BIPOC" variant="outlined" />
            <h5>What percentage of your founding team is female?</h5>
            <TextField id="outlined-basic" label="Percentage female" variant="outlined" />
            <h5>Select from the list of tangible competitive advantages that apply to your organization</h5>
            <Box className='centerHelp' sx={{ display: 'flex' }}>
                <FormControl className='questionnaireForm' sx={{ m : 3}}>
                    {competitiveAdvantages?.map(advantage => (
                            <FormControlLabel key = {advantage.advantage} control={<Checkbox />} label={advantage.advantage} />
                    ))}
                </FormControl>
            </Box>
            <h5>How would you introduce your organization to a potential investor in a paragraph?</h5>
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
                        label="Introduction" 
                        variant="outlined" 
                        multiline rows={5}
                        fullWidth/>
                </Box>
            </Grid>
            <br/>
            <br/>
            <button className="btn">Submit</button>
            <Link to="/impact"><button className="btn">Next</button></Link>
        </form>
        </>
    )
};

export default SectionOneStory;