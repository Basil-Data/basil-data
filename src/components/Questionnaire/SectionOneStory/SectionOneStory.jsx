import react from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

// MUI
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';

import '../Questionnaire.css';
import QuestionnaireNav from '../QuestionnaireNav/QuestionnaireNav';

function SectionOneStory () {
    const dispatch = useDispatch();
    const history = useHistory();

    history.scrollRestoration = 'manual';

    // get the user.id from the store to send with everything else
    const user = useSelector((store) => store.user);
    const competitiveAdvantages = useSelector(store => store.section1.competitiveAdvantages);
    const section1Enterprise = useSelector(store => store.section1Enterprise);
    const selectedAdvantages = useSelector(store => store.section1Enterprise.competitiveAdvantagesId);
    const selectedEnterprise = useSelector(store => store.adminReducer.selectedEnterprise);

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch({ type: 'FETCH_SECTION_ONE' });
        dispatch({ type: 'FETCH_ENTERPRISE_SECTION_ONE', payload: selectedEnterprise})
    }, []);

    const handleCompetitiveAdvantages = (event) => {
        const index = selectedAdvantages.indexOf(Number(event.target.value))
        if (index === -1) {
            dispatch({
                type: 'SET_SECTION_ONE_ENTERPRISE',
                payload: {competitiveAdvantagesId: [...selectedAdvantages, Number(event.target.value)]}
            })
        }
        else {
            dispatch({
                type: 'SET_SECTION_ONE_ENTERPRISE',
                payload: {competitiveAdvantagesId: selectedAdvantages.filter((selectedAdvantages) => selectedAdvantages !== Number(event.target.value))}
            })
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch({
            type: 'UPDATE_SECTION_ONE',
            // Make sure to send the enterpriseID (which is the same as 
            // the user id from the store) as part of the payload
            // this was the way I was able to figure it out
            payload: {
                id: user.id,
                data: section1Enterprise
        }})
    };


    const onNext = (event) => {
        handleSubmit(event);
        history.push('/impact')
    }

    return (
        <>
        <QuestionnaireNav/>
            <h1 className='questionnaireForm'>Section 1 - Story</h1>
            <p className='questionnaireForm'>This section is about you and your team, your motivation for the problem, 
                the special make-up of your organization and most importantly a chance to
                introduce yourself and your exciting solution to a potential investor!  
                Make sure to be enthusiastic and show investors why they should go with you!</p>
        <form className='questionnaireForm'>
            <h5>What is the size of your enterprise? (people)</h5>
            <TextField 
                id="outlined-basic" 
                label="Number of people"
                type="number" 
                variant="outlined" 
                InputLabelProps={{shrink: true,}}
                value={section1Enterprise.enterpriseSize1 || ''}
                onChange={(event) => dispatch({
                    type: 'SET_SECTION_ONE_ENTERPRISE',
                    payload: { enterpriseSize1: event.target.value }
                })}
            />
            <h5>When was the organization founded?</h5>
            <TextField 
                id="outlined-basic" 
                label="Date founded" 
                variant="outlined" 
                type="date"
                InputLabelProps={{shrink: true,}}
                value={section1Enterprise.dateFounded1}
                onChange={(event) => dispatch({
                    type: 'SET_SECTION_ONE_ENTERPRISE',
                    payload: { dateFounded1: event.target.value }
                })}
            />
            <h5>What is your Mission Statement?</h5>
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
                        label="Mission Statement" 
                        InputLabelProps={{shrink: true,}}
                        variant="outlined" 
                        multiline rows={5}
                        fullWidth
                        value={section1Enterprise.missionStatement1}
                        onChange={(event) => dispatch({
                            type: 'SET_SECTION_ONE_ENTERPRISE',
                            payload: { missionStatement1: event.target.value }
                        })}
                    />
                </Box>
            </Grid>
            <h5>How well do you understand the problem?</h5>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    value={Number(section1Enterprise.understandProblem1)}
                    row
                    name="radio-buttons-group"
                    className='centerHelp'
                    onChange={(event) => dispatch({
                        type: 'SET_SECTION_ONE_ENTERPRISE',
                        payload: {understandProblem1: event.target.value}
                    })}
                >
                    <FormControlLabel labelPlacement="top" value="1" control={<Radio />} label="1" />
                    <FormControlLabel labelPlacement="top" value="2" control={<Radio />} label="2" />
                    <FormControlLabel labelPlacement="top" value="3" control={<Radio />} label="3" />
                    <FormControlLabel labelPlacement="top" value="4" control={<Radio />} label="4" />
                    <FormControlLabel labelPlacement="top" value="5" control={<Radio />} label="5" />
                    <FormControlLabel labelPlacement="top" value="6" control={<Radio />} label="6" />
                    <FormControlLabel labelPlacement="top" value="7" control={<Radio />} label="7" />
                    <FormControlLabel labelPlacement="top" value="8" control={<Radio />} label="8" />
                    <FormControlLabel labelPlacement="top" value="9" control={<Radio />} label="9" />
                    <FormControlLabel labelPlacement="top" value="10" control={<Radio />} label="10" />
                </RadioGroup>
            <h5>How many years of collective experience within the impact problem space?</h5>
            <TextField 
                id="outlined-basic" 
                label="Number of years" 
                variant="outlined" 
                InputLabelProps={{shrink: true,}}
                value={section1Enterprise.yearsCollectiveExperience1}
                onChange={(event) => dispatch({
                    type: 'SET_SECTION_ONE_ENTERPRISE',
                    payload: { yearsCollectiveExperience1: event.target.value }
                })}
            />
            <h5>What percentage of your founding team is BIPOC (Black, Indigenous, Person of Color)?</h5>
            <TextField 
                id="outlined-basic" 
                label="Percentage BIPOC" 
                variant="outlined" 
                InputLabelProps={{shrink: true,}}
                value={section1Enterprise.percentageBIPOC1}
                onChange={(event) => dispatch({
                    type: 'SET_SECTION_ONE_ENTERPRISE',
                    payload: { percentageBIPOC1: event.target.value }
                })}
            />
            <h5>What percentage of your founding team is female?</h5>
            <TextField 
                id="outlined-basic" 
                label="Percentage female" 
                variant="outlined"
                InputLabelProps={{shrink: true,}}
                value={section1Enterprise.percentageFemale1}
                onChange={(event) => dispatch({
                    type: 'SET_SECTION_ONE_ENTERPRISE',
                    payload: { percentageFemale1: event.target.value }
                })} 
            />
            <h5>Select from the list of tangible competitive advantages that apply to your organization</h5>
            <Box className='centerHelp' sx={{ display: 'flex' }}>
                <FormControl className='questionnaireForm' sx={{ m : 3}}>
                    {competitiveAdvantages?.map(advantage => (
                            <FormControlLabel 
                                key = {advantage.id} 
                                checked={selectedAdvantages.includes(advantage.id)}
                                value={advantage.id}
                                defaultValue={0}
                                onChange={handleCompetitiveAdvantages}
                                control={
                                    <Checkbox 
                                    />} 
                                label={advantage.advantage} />
                    ))}
                </FormControl>
            </Box>
            <h5>How would you introduce your organization to a potential investor in a paragraph?</h5>
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
                        label="Introduction" 
                        variant="outlined" 
                        multiline rows={5}
                        fullWidth
                        InputLabelProps={{shrink: true,}}
                        value={section1Enterprise.investorIntroduction1}
                        onChange={(event) => dispatch({
                            type: 'SET_SECTION_ONE_ENTERPRISE',
                            payload: { investorIntroduction1: event.target.value }
                        })} 
                    />
                </Box>
            </Grid>
            <br/>
            <br/>
            <button 
                className="btn"
                onClick={(event) => handleSubmit(event)}
            >
                Save
            </button>
            <Link to="/impact">
                <button 
                    className="btn"
                    onClick={(event) => onNext(event)}
                >
                    Next
                </button>
            </Link>
        </form>
        </>
    )
};

export default SectionOneStory;