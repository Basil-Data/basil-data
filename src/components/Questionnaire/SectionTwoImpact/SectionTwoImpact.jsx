import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from 'react-router-dom';

import '../Questionnaire.css';

import { 
    Table, 
    TableHead, 
    TableRow, 
    TableBody,
    Button, 
    Box, 
    Select,
    MenuItem,
    FormControl,
    FormGroup,
    InputLabel,
    TextField,
} 
from '@mui/material';

import QuestionnaireNav from '../QuestionnaireNav/QuestionnaireNav';
import SectionTwoImpactOpportunity from "./SectionTwoImpactOpportunity/SectionTwoImpactOpportunity";


function SectionTwoImpact() {
    const dispatch = useDispatch();

    useEffect(() => {
        fetchImpactSectors();
    }, [])

    const impactSectors = useSelector(store => store.section2.impactSectors);


    console.log('impact sectors are:', impactSectors);

    const fetchImpactSectors = () => {
        dispatch({
            type: 'FETCH_IMPACT_SECTORS'
        });
    }



    return(
        <>
        <QuestionnaireNav/>
        <Box className="questionnaireForm">
            <form>
                <h1><b>Section 2 - Impact</b></h1>
                <p className="definingImpact">Defining your Impact...</p>
                <br></br>
                <p>
                    This section includes questions surrounding the social, environmental or economic 
                    impact your organization is trying to achieve. <br></br>Answers should be thorough and 
                    thoughtful as this is a very important section of your report.<br></br> 
                    Being able to communicate your impact opportunity and results in a way that 
                    external users can understand is of utmost importance!
                </p>
                <br></br>
                <p>What is the social / environmental problem you are trying to solve?</p>
                <TextField
                    label="Social/Environmental Problem"
                    className="socialEnviroProblem"
                    variant="outlined"
                    type="text"
                    placeholder="Social/Environmental Problem"
                >

                </TextField>
                <br></br>
                <p>What category best describes your IMPACT Sector?</p>
                <Select
                    className="impactCategory"
                    variant="outlined"
                    type="text"
                    placeholder="IMPACT Sector Category"
                >
                    <MenuItem></MenuItem>
                    {impactSectors?.map(sector => {
                        return(
                            <MenuItem key={sector.id}>{sector.impactSector}</MenuItem>
                        )
                    })}
                    
                </Select>
                <br></br>
                <p>Please tell us about the economic, 
                    environmental or social COST of the problem
                    in your words (dollars lost, people effected, 
                    loss of opportunity, etc.)
                </p>
                <TextField
                    label="Cost of The Problem"
                    className="costOfProblem"
                    variant="outlined"
                    type="text"
                    placeholder="COST of The Problem"
                >

                </TextField>
                <br></br>
                <p>How does your product or service help solve the 
                    social or economic problem outlined in the problem 
                    questions above?</p>
                <TextField
                    label="Solution"
                    className="solutionToProblem"
                    variant="outlined"
                    type="text"
                    placeholder="Solution"
                >

                </TextField>
                <br></br>
                <p>Describe the individual, community or 
                    environment that benefits most from your 
                    solution?</p>
                <TextField
                    label="Who Benefits?"
                    className="whoBenefits"
                    variant="outlined"
                    type="text"
                    placeholder="Who Benefits"
                >

                </TextField>
                <SectionTwoImpactOpportunity />
                <Link to="/story"><button className="btn">Back</button></Link>
                <button className="btn">Submit</button>
                <Link to="/solution"><button className="btn">Next</button></Link>
            </form>
        </Box>
        </>
    )
}


export default SectionTwoImpact;