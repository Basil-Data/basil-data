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

function SectionFourTraction() {

    const investmentStage = [
        'Bootstrap', 'Family/Friends', 'Seed', 'Series A', 'Series B',
        'Series C'
    ]

    const [generatedRevenue, setGeneratedRevenue] = useState(false);

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

                <h5>
                Tell us more about the progress shown from each of these indicators and/or any other unique traction you may have gained.
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

                <h5>How much have you received in funding to date?</h5>

                <TextField id="outlined-basic" label="Short Answer Text" variant="outlined" />

                <h5>
                    What is your customer growth rate over the last 6 months?
                </h5>

                <h6>
                    Please provide a percentage
                </h6>

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
                    onChange={(evt) => setGeneratedRevenue(!generatedRevenue)}
                >

                <FormControlLabel labelPlacement="top" value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel labelPlacement="top" value="No" control={<Radio />} label="No" />
                    
                   
                
                </RadioGroup>
                 {/* Questions below are generated if the user chooses yes. */}
                {generatedRevenue ? <>
                <h5>
                    What is your average growth in monthly revenue over the past 6 months?
                </h5>

                <h6>
                    Please provide a percentage
                </h6>
                
                <TextField id="outlined-basic" label="Percentage" variant="outlined" />

                <h5>
                    Are you making a profit?
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

                
                
                <h5>
                    If yes, what is your net profit margin (%)?
                </h5>

                <h6>
                    (Total Revenue - Total Costs)/ Total Revenue
                </h6>

                <TextField id="outlined-basic" label="Net Profit Margin %" variant="outlined" />

                <h5>
                    Customer Acquisition Cost (CAC)
                </h5>
                
                <h6>
                    In this brief section we want to gain more insight into the expenses associated with acquiring new customers in a given sales/marketing cycle. Please provide answers to the best of your ability. 

                </h6>

                <h5>
                    What is your most recent Customer Acquisition Cost? (dollars)
                </h5>

                <h6>
                    If known, provide below. If unknown, answer "N/A" and proceed to answer the further questions.
                </h6>

                <TextField id="outlined-basic" label="CAC $" variant="outlined" />

                <h5>
                    What are your total marketing expenses during one sales/marketing cycle? (in dollars)
                </h5>
                
                <h6>
                    This includes campaigns, marketing salary expenses, overhead expenses, etc.
                </h6>

                <TextField id="outlined-basic" label="Marketing Expenses" variant="outlined" />

                <h5>
                    How many new customers have you acquired in your most recent sales/marketing cycle?
                </h5>

                <TextField id="outlined-basic" label="New Customers" variant="outlined" />

                </> : <> </>

}
                
                </form>
        </>
    )
}

export default SectionFourTraction;