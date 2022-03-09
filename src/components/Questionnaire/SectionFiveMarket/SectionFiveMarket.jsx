import react from 'react';
import {useState} from 'react';
import { Link } from 'react-router-dom';
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

                <h6>
                    This is the total market demand for your product.
                </h6>

                <TextField id="outlined-basic" label="TAM $" variant="outlined" />

                <h5>
                    What is the size of the Serviceable Available Market (SAM) in US dollars?
                </h5>

                <h6>
                    This is the portion of the market you can reach based on your business Market
                    and target consumer group.
                </h6>
                <TextField id="outlined-basic" label="SAM $" variant="outlined" />

                <h5>
                    What is the size of the market realistically obtainable to your organization (SOM)
                    in US dollars?
                </h5>

                <h6>
                    This is the portion of your Serviceable Available Market that you can realistically capture at this point.
                </h6>

                <TextField id="outlined-basic" label="SOM $" variant="outlined" />

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
            
                <Link to="/traction"><button className="btn">Back</button></Link>
                <button className="btn">Submit</button>
                <Link to="/risks-and-hurdles"><button className="btn">Next</button></Link>

            </form>

        </>
    )
}

export default SectionFiveMarket;