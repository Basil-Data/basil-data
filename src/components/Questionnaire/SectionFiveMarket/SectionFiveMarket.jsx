import react from 'react';
import {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';

import '../Questionnaire.css'
import QuestionnaireNav from '../QuestionnaireNav/QuestionnaireNav';

function SectionFiveMarket() {

    return (
        <>
            <QuestionnaireNav />
            <form className="questionnaireForm">
                <h1>Section 5 - Market</h1>
                <p>
                    Your Market Environment...

                    Give insight into the size of your market, its potential for growth and the assumptions you have based your estimations on.

                    On this page we assist you in providing current trends and spotlight that make your industry attractive.
                </p>

                <h5>
                    What is the size of the Total Addressable Market (TAM) in US dollars?
                </h5>
                <TextField id="outlined-basic" label="Short Answer Text" variant="outlined" />

                <h5>
                    What is the size of the Serviceable Available Market (SAM) in US dollars?
                </h5>
                <TextField id="outlined-basic" label="Short Answer Text" variant="outlined" />

                <h5>
                    What is the size of the market realistically obtainable to your organization (SOM)
                    in US dollars?
                </h5>
                <TextField id="outlined-basic" label="Short Answer Text" variant="outlined" />

                <h5>
                    Tell us a little about why this market size is realistic
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
                    label="Long Answer Text" 
                    variant="outlined" 
                    multiline rows={5} 
                    fullWidth 
                />
                </Box>
                </Grid>
            


            </form>

        </>
    )
}

export default SectionFiveMarket;