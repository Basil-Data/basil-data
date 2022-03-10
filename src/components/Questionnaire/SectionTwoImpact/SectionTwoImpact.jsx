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
        fetchSectionTwo();
    }, [])

    const user = useSelector(store => store.user);
    const impactSectors = useSelector(store => store.section2.impactSectors);
    const section2Enterprise = useSelector(store => store.section2Enterprise);



    console.log('impact sectors are:', impactSectors);
    console.log('section2Enterprise:', section2Enterprise);
    console.log('user', user);

    const fetchImpactSectors = () => {
        dispatch({
            type: 'FETCH_IMPACT_SECTORS'
        });
    }

    const fetchSectionTwo = () => {
        dispatch({
            type: 'FETCH_SECTION_TWO'
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch({
            type: 'POST_SECTION_TWO',
            payload: {
                id: user.id,
                data: section2Enterprise
            }
        })
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
                    multiline rows={5}
                    id="outlined-basic" 
                    sx={{width: 600}}
                    value={section2Enterprise.problemBeingSolved2}
                    onChange={(event) => dispatch({
                    type: 'SET_SECTION_TWO_ENTERPRISE',
                    payload: { problemBeingSolved2: event.target.value }
                    })}
                >

                </TextField>
                <br></br>
                <p>What category best describes your IMPACT Sector?</p>
                <Select
                    className="impactCategory"
                    variant="outlined"
                    type="text"
                    sx={{width: 200}}
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
                <p>
                    Please tell us about the economic, 
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
                    multiline rows={5}
                    id="outlined-basic" 
                    sx={{width: 600}}
                    value={section2Enterprise.costOfProblem2}
                    onChange={(event) => dispatch({
                    type: 'SET_SECTION_TWO_ENTERPRISE',
                    payload: { costOfProblem2: event.target.value }
                    })}
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
                    multiline rows={5}
                    id="outlined-basic" 
                    sx={{width: 600}}
                    value={section2Enterprise.howTheySolve2}
                    onChange={(event) => dispatch({
                    type: 'SET_SECTION_TWO_ENTERPRISE',
                    payload: { howTheySolve2: event.target.value }
                    })}
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
                    multiline rows={5}
                    id="outlined-basic" 
                    sx={{width: 600}}
                    value={section2Enterprise.whoBenefits2}
                    onChange={(event) => dispatch({
                    type: 'SET_SECTION_TWO_ENTERPRISE',
                    payload: { whoBenefits2: event.target.value }
                    })}
                >

                </TextField>
                <SectionTwoImpactOpportunity />
                <Link to="/story">
                    <button 
                        className="btn"
                        onClick={(event) => handleSubmit(event)}
                    >
                        Back
                    </button>
                </Link>
                <button 
                    className="btn"
                    onClick={(event) => handleSubmit(event)}
                >
                    Submit
                </button>
                <Link to="/solution">
                    <button 
                    className="btn"
                    onClick={(event) => handleSubmit(event)}
                    >
                        Next
                    </button>
                </Link>
            </form>
        </Box>
        </>
    )
}


export default SectionTwoImpact;