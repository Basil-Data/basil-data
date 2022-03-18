import React from 'react';
import { useSelector } from 'react-redux';

// Styling/MUI
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';


function ReportSection7ImpactRisk () {

    const enterpriseAnswers = useSelector(store => store.reportReducer);
    const enterpriseRisks = useSelector(store => store.reportReducer.anticipatedRisks);

    const anticipatedRisks = [
        {
            id: 1,
            name: 'Evidence Risk',
            text: 'Insufficient high-quality data exists.'
        },
        {
            id: 2,
            name: 'External Risk',
            text: 'External factors disrupt ability to deliver impact.'
        },
        {
            id: 3,
            name: 'Stakeholder Participation Risk',
            text: 'Misunderstanding of stakeholder experiences / expectations.'
        },
        {
            id: 4,
            name: 'Drop-off Risk',
            text: 'The positive impact does not endure or the negative impact is no longer mitigated.'
        },
        {
            id: 5,
            name: 'Efficiency Risk',
            text: 'Impact could be achieved with fewer resources or at a lower cost.'
        },
        {
            id: 6,
            name: 'Execution Risk',
            text: 'Activities are not delivered as planned and do not result in desired outcomes.'
        },
        {
            id: 7,
            name: 'Alignment Risk',
            text: 'Impact is not aligned into the enterprise model.'
        },
        {
            id: 8,
            name: 'Endurance Risk',
            text: 'Required activities are not delivered for a long enough period.'
        },
        {
            id: 9,
            name: 'Unexpected Impact Risk',
            text: 'Significant unexpected impact is experienced by stakeholders.',
        },
        {
            id: 10,
            name: 'None at this Stage',
            text: ''
        },
        
    ]

    return (
    <>
    <Paper className="paper" elevation={3}>
    <div className="pageContainer">
    <h1 className="pageHeader">07. IMPACT RISK</h1>
    <hr className="dotted dottedMargin"></hr>
    <h2 className="subheading">Anticipated Risks:</h2>
    <div id="arrowBackground">
    {anticipatedRisks.map(risk => (
        <>
        <div style={{display:"flex"}}>
        <Checkbox 
            size="large" 
            color="default"
            // iconStyle={{fill: 'white'}}
            disableRipple
            sx={{ mr: 2, ml: 4 }}
            checked={enterpriseRisks?.includes(risk.id)}
        >
        </Checkbox>

        {enterpriseRisks?.includes(risk.id)
        ?
        <>
        <Box sx={{ mr: 4, width: 120, display: 'flex' }}>
        <Typography variant="body2" sx={{ fontWeight: bold }}>{risk.name}</Typography>
        </Box>
        </>
        :
        <>
        <Box sx={{ mr: 4, width: 120, display: 'flex' }}>
        <Typography variant="body2">{risk.name}</Typography>
        </Box>
        </>
        }

        {enterpriseRisks?.includes(risk.id) 
        ?
        <Typography variant="body2" sx={{ fontWeight: bold }}>{risk.text}</Typography>
        :
        <Typography variant="body2">{risk.text}</Typography>
        }
        </div>
        </>
    )
    )}
    </div>
    <div className="sectionColor section7Color">
        <Typography variant="h5" className="subheading" gutterBottom>How we have prepared for these risks:</Typography>
        <Typography variant="subtitle1" className="subheading" gutterBottom>{enterpriseAnswers.riskPrep6}</Typography>
    </div>
    </div>
    </Paper>
    </>
    )
};

export default ReportSection7ImpactRisk;