import react from 'react';
import { useState, useEffect } from 'react';

// MUI
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';

import '../Questionnaire.css'

function SectionThreeSolution () {

    useEffect(() => {
    }, []);


    const operatingSector = [
    'Consumer Goods',
	'Extractives & Minerals Processing',
	'Financials',
	'Food & Beverage',
	'Health Care',
	'Infrastructure',
	'Renewable Resources & Alternative Energy',
	'Resource Transformation',
	'Services',
	'Technology & Communications',
	'Transportation'
    ];

    const painPoints = [
        'Financial - areas where your customers are spending too much money',
        'Productivity - areas where your customer wants to be more efficient or productive',
        'Process - areas where you could provide more convenient processes for your customers',
        'Support - areas where customers are not receiving the support they need'	
    ];

    const handleCheck = (event) => {
        console.log('box has been checked')

        painPoints[0].status = true;
        setPainPointList(painPoints);
    }

    return (
        <form className='questionnaireForm'>
            <h1>Section 3 - Solution</h1>
            <p>In this section we ask for more detail regarding your business<br/>
            offering and how it can help potential customers.</p>
            <h5>What sector do you operate in?</h5>
            <Box className='centerHelp' sx={{ display: 'flex' }}>
                <FormControl sx={{ m : 3}}>
                    {operatingSector.map(sector => (
                            <FormControlLabel 
                                control={<Checkbox />} 
                                label={sector}
                                key={sector} />
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
                    {painPoints.map(point => (
                            <FormControlLabel 
                                control={<Checkbox />} 
                                onChange={(event) => handleCheck(event)}
                                label={point}
                                key={point} />
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
            <br/><button>Submit</button>
        </form>
    )
};

export default SectionThreeSolution;