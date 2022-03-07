import react from 'react';
import {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import '../Questionnaire.css'
import QuestionnaireNav from '../QuestionnaireNav/QuestionnaireNav';

function SectionFourTraction() {

    const investmentStage = [
        'Bootstrap', 'Family/Friends', 'Seed', 'Series A', 'Series B',
        'Series C'
    ]

    return (
        <>
            <QuestionnaireNav />
            <form className='questionnaireForm'>
                <h1>Section 4 - Traction</h1>
                <p>
                Tell us about the momentum behind your organization!

                In this section you are able to provide more detail about the numbers behind opportunity for growth and recent customer development.  
                </p>
                <h5>
                    What stage of development is your PRODUCT in?
                </h5>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue=""
                        row
                        name="radio-buttons-group"
                        className='centerHelp'
                    >
                        <FormControlLabel labelPlacement="top" value="Concept/Research" control={<Radio />} label="Concept/Research" />
                        <FormControlLabel labelPlacement="top" value="Initial Prototype" control={<Radio />} label="Initial Prototype" />
                        <FormControlLabel labelPlacement="top" value="Validation" control={<Radio />} label="Validation" />
                        <FormControlLabel labelPlacement="top" value="Refinement" control={<Radio />} label="Refinement" />
                        <FormControlLabel labelPlacement="top" value="Scaling" control={<Radio />} label="Scaling" />
                        <FormControlLabel labelPlacement="top" value="Established Loyal Customer Base" control={<Radio />} label="Established Loyal Customer Base" />
                    </RadioGroup>
                <h5>
                    What stage of investment is your ORGANIZATION in?
                </h5>
                
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue=""
                    row
                    name="radio-buttons-group"
                    className='centerHelp'
                >

                <FormControlLabel labelPlacement="top" value="Bootstrap" control={<Radio />} label="Bootstrap" />
                <FormControlLabel labelPlacement="top" value="Family/Friends" control={<Radio />} label="Family/Friends" />
                <FormControlLabel labelPlacement="top" value="Seed" control={<Radio />} label="Seed" />
                <FormControlLabel labelPlacement="top" value="Series A" control={<Radio />} label="Series A" />
                <FormControlLabel labelPlacement="top" value="Series B" control={<Radio />} label="Series B" />
                <FormControlLabel labelPlacement="top" value="Series C" control={<Radio />} label="Series C" />
                </RadioGroup>
                <h5>
                    What indicators other than sales show your progress since inception?
                </h5>
                <Box>
                    <FormControl className='questionnaireForm centerHelp'>
                        {investmentStage.map(stage => (
                            <FormControlLabel control={<Checkbox />} label= {stage} />
                        ))}

                    </FormControl>
                </Box>

                <h5>How much have you received in funding to date?</h5>
                <TextField id="outlined-basic" label="Short Answer Text" variant="outlined" />

                <h5>
                    What is your customer growth rate over the last 6 months?
                </h5>

                <TextField id="outlined-basic" label="Growth Percentage" variant="outlined" />

                <h5>
                    Are you generating revenue?
                </h5>

                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue=""
                    row
                    name="radio-buttons-group"
                    className='centerHelp'
                >

                <FormControlLabel labelPlacement="top" value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel labelPlacement="top" value="No" control={<Radio />} label="No" />

                </RadioGroup>









                

            </form>
        </>
    )
}

export default SectionFourTraction;