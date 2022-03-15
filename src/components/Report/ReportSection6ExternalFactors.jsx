import React from 'react';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';

// Styling/MUI
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function ReportSection6ExternalFactors () {
    const dispatch = useDispatch();

    const enterpriseAnswers = useSelector(store => store.reportReducer);
    const availableFactors = useSelector((store) => store.section6.results3);
    const selectedFactors = useSelector((store) => store.section6Enterprise.factorId);

    

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch({
            type: "FETCH_RISKS_AND_HURDLES",
            payload: selectedEnterprise
        });
        dispatch({ 
            type: "FETCH_ENTERPRISE_SECTION_SIX",
            payload: selectedEnterprise
        })
    }, []);

    return (
        <>
        <Paper className="paper" elevation={3}>
        <div className="pageContainer">
        <h1 className="heading">06. EXTERNAL FACTORS</h1>
        <hr className="dotted dottedMargin"></hr>
        <h2 className="subheading">What factors affect our growth path?</h2>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ sm: 8 }}>
            {Array.from(Array(12)).map((_, index) => (
                <Grid item sm={2} key={index}>
                <Item>xs=2</Item>
                </Grid>
            ))}
            </Grid>
        </Box>
        <div className="sectionColor section6Color">
            <h2 className="subheading">Explanation:</h2>
        </div>
        </div>
        </Paper>
        </>
    )
};

export default ReportSection6ExternalFactors;