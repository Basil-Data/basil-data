import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// MUI Imports
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';

// Internal Imports
import '../Questionnaire.css'
import QuestionnaireNav from '../QuestionnaireNav/QuestionnaireNav';


function SectionSixRisksAndHurdles () {

    const dispatch = useDispatch();
    // store.section6 contains all of the selections for
    // this page of the questionnaire
    const section6 = useSelector((store) => store.section6);

    useEffect(() => {
        dispatch({
            type: "FETCH_RISKS_AND_HURDLES",
        });
    }, []);

    return (
        <>
        <QuestionnaireNav/>
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
                            <FormControlLabel key={risk.id} control={<Checkbox />} label={risk.risk} />
                    ))}
                </FormControl>
            </Box>

            <h5>If applicable, please tell us more about how you've prepared (or plan to prepare) 
                for each of the selected impact risks.</h5>
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
                            <FormControlLabel key={barrier.id} control={<Checkbox />} label={barrier.barrier} />
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
                            <FormControlLabel key={factor.id} control={<Checkbox />} label={factor.factor} />
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
                    />
                </Box>
            </Grid>

            <Link to="/market"><button className="btn">Back</button></Link>
            <button className="btn">Submit</button>
            <Link to="/next-steps"><button className="btn">Next</button></Link>

        </form>
        </>
    )
};

export default SectionSixRisksAndHurdles;