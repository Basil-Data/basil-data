import { Link } from 'react-router-dom';


function QuestionnaireNav () {
    return (
        <div className='questionnaireForm'>
            <Link className='questionnaireNavLink' to="/story">
                Story
            </Link>
            <Link className='questionnaireNavLink' to="/impact">
                Impact
            </Link>
            <Link className='questionnaireNavLink' to="/solution">
                Solution
            </Link>
            <Link className='questionnaireNavLink' to="/traction">
                Traction
            </Link>
            <Link className='questionnaireNavLink' to="/market">
                Market
            </Link>
            <Link className='questionnaireNavLink' to="/risks-and-hurdles">
                Risks & Hurdles
            </Link>
            <Link className='questionnaireNavLink' to="/next-steps">
                Next Steps
            </Link>
        </div>
    )
};

export default QuestionnaireNav;