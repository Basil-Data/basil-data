import { Link } from 'react-router-dom';
import Box from '@mui/material/Box'
import '../Questionnaire.css';


function QuestionnaireNav () {
    return (
        <Box 
            className='sectionNav' 
            sx={{
                marginTop: "170px",
                marginBottom: "40px",
                
            }}
        >
            <Link className='questionnaireNavLink' to="/story">
                <h3>01. Story</h3>
            </Link>
            <Link className='questionnaireNavLink' to="/impact">
                <h3>02. Impact</h3>
            </Link>
            <Link className='questionnaireNavLink' to="/solution">
            <h3>03. Solution</h3>
            </Link>
            <Link className='questionnaireNavLink' to="/traction">
                <h3>04. Traction</h3>
            </Link>
            <Link className='questionnaireNavLink' to="/market">
                <h3>05. Market</h3>
            </Link>
            <Link className='questionnaireNavLink' to="/risks-and-hurdles">
                <h3>06. Risks & Hurdles</h3>
            </Link>
            <Link className='questionnaireNavLink' to="/next-steps">
                <h3>07. Next Steps</h3>
            </Link>
        </Box>
    )
};

export default QuestionnaireNav;