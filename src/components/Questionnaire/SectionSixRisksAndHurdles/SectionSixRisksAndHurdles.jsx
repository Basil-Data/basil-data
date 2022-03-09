import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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

    const anticipatedRisks = useSelector((store) => store.section6);

    useEffect(() => {
        dispatch({
            type: "FETCH_ANTICIPATED_RISKS",
        });
    }, []);

    const startupBarriers = [
        'Capital Requirements', 
        'Technical Knowledge Base', 
        'Customer Cost of Switching', 
        'Educating Your Market', 
        'Access to Materials', 
        'Access to Distribution Channels', 
        'Patents', 
        'Government Regulation',
        'Economies of Scale',
        'Product Differentiation',
        'Other'
    ];

    const growthFactors = [
        'Seasonal trends', 
        'Close proximity to industry fluctuations', 
        'Commodity price/availability fluctuations', 
        'Economic cycle', 
        'Competition', 
        'Laws and Regulations', 
        'Customer Taste & Preferences', 
        'Natural Disasters',
        'Technological Evolution',
        'International Markets & Foreign Exchange Markets',
        'Political/Social Momentum',
        'Other'
    ];

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
                    {anticipatedRisks?.map(risk => (
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
                    {startupBarriers.map(barrier => (
                            <FormControlLabel control={<Checkbox />} label={barrier} />
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
                    {growthFactors.map(factor => (
                            <FormControlLabel control={<Checkbox />} label={factor} />
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

            <button className="btn">Back</button>
            <button className="btn">Submit</button>
            <button className="btn">Next</button>

        </form>
        </>
    )
};

export default SectionSixRisksAndHurdles;