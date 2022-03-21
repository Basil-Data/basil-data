import { react, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import "../Questionnaire.css";
import QuestionnaireNav from "../QuestionnaireNav/QuestionnaireNav";

function SectionFiveMarket() {
  const dispatch = useDispatch();
  const history = useHistory();
  const section5 = useSelector((store) => store.section5Enterprise);
  const user = useSelector((store) => store.user);
  const selectedEnterprise = useSelector(store => store.adminReducer.selectedEnterprise);
  console.log('user.id is', user.id);

  history.scrollRestoration = 'manual';


  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch({
        type: "FETCH_ENTERPRISE_SECTION_FIVE",
        payload: selectedEnterprise
    });
}, []);

  // Update Function
  function handleSubmit(evt) {
    evt.preventDefault();

    
    dispatch({
      type: "UPDATE_SECTION_FIVE",
      payload: {
        data: section5
      }});
  }

  function handleBack(event) {
    event.preventDefault();

    dispatch({
      type: "UPDATE_SECTION_FIVE",
      payload: {
        data: section5
      }});
    
    history.push('/traction')

  }

  function handleNext(event) {
    event.preventDefault();

    dispatch({
      type: "UPDATE_SECTION_FIVE",
      payload: {
        data: section5
      }});
    
    history.push('/risks-and-hurdles')

  }

  return (
    <Box className="fullPage">
      <QuestionnaireNav />
      <Paper className="formPaper" elevation={3}>
      <form className="questionnaireForm">
        <h1>Section 5 - Market</h1>
        <p>
          Your Market Environment... Give insight into the size of your market,
          its potential for growth and the assumptions you have based your
          estimations on. On this page we assist you in providing current trends
          and spotlight that make your industry attractive.
        </p>

        <h5>
          What is the size of the Total Addressable Market (TAM) in US dollars?
        </h5>

        <h6>This is the total market demand for your product.</h6>

        <TextField
          id="outlined-basic"
          label="TAM $"
          variant="outlined"
          InputLabelProps={{shrink: true,}}
          value={section5.addressableMarket5}
          onChange={(evt) =>
            dispatch({
              type: "SET_SECTION5_RESPONSES",
              payload: { addressableMarket5: evt.target.value },
            })
          }
        />

        <h5>
          What is the size of the Serviceable Available Market (SAM) in US
          dollars?
        </h5>

        <h6>
          This is the portion of the market you can reach based on your business
          Market and target consumer group.
        </h6>
        <TextField
          id="outlined-basic"
          label="SAM $"
          variant="outlined"
          InputLabelProps={{shrink: true,}}
          value={section5.serviceableMarket5}
          onChange={(evt) =>
            dispatch({
              type: "SET_SECTION5_RESPONSES",
              payload: { serviceableMarket5: evt.target.value },
            })
          }
        />

        <h5>
          What is the size of the market realistically obtainable to your
          organization (SOM) in US dollars?
        </h5>

        <h6>
          This is the portion of your Serviceable Available Market that you can
          realistically capture at this point.
        </h6>

        <TextField
          id="outlined-basic"
          label="SOM $"
          variant="outlined"
          InputLabelProps={{shrink: true,}}
          value={section5.obtainableMarket5}
          onChange={(evt) =>
            dispatch({
              type: "SET_SECTION5_RESPONSES",
              payload: { obtainableMarket5: evt.target.value },
            })
          }
        />

        <h5>Tell us a little about why this market size is realistic</h5>

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
              maxWidth: "100%",
            }}
          >
            <TextField
              id="outlined-basic"
              label="Long Answer Text"
              variant="outlined"
              multiline
              rows={5}
              fullWidth
              value={section5.whyRealistic5}
              InputLabelProps={{shrink: true,}}
              onChange={(evt) =>
                dispatch({
                  type: "SET_SECTION5_RESPONSES",
                  payload: { whyRealistic5: evt.target.value },
                })
              }
            />
          </Box>
        </Grid>

        <h5>
          In the box(es) below, include up to 3 quotes, 
          statistics, or metrics that provide some broader 
          perspective or context about your market. 
          We recommend including a reliable source.  
        </h5>

        <h6>
          Example:
          “Concerns about impact washing (66%) loom largest, followed
          less acutely by the market’s ‘inability to demonstrate impact
          <br />
          results’ (35%) and the ‘inability to compare impact results with peers’
          (34%)” 
          <br />
          - Global Impact Investing Network 2020 Annual Survey
        </h6>


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
              maxWidth: "100%",
            }}
          >
            <TextField
              id="outlined-basic"
              label="50-Word Limit Quote"
              variant="outlined"
              multiline
              rows={2}
              fullWidth
              value={section5.industryPerspectiveOne5}
              InputLabelProps={{shrink: true,}}
              onChange={(evt) =>
                dispatch({
                  type: "SET_SECTION5_RESPONSES",
                  payload: { industryPerspectiveOne5: evt.target.value },
                })
              }

            />
          </Box>
        </Grid>

        <br />

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
              maxWidth: "100%",
            }}
          >
            <TextField
              id="outlined-basic"
              label="50-Word Limit Quote"
              variant="outlined"
              multiline
              rows={2}
              fullWidth
              value={section5.industryPerspectiveTwo5}
              InputLabelProps={{shrink: true,}}
              onChange={(evt) =>
                dispatch({
                  type: "SET_SECTION5_RESPONSES",
                  payload: { industryPerspectiveTwo5: evt.target.value },
                })
              }
            />
          </Box>
        </Grid>
        
        <br />

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
              maxWidth: "100%",
            }}
          >
            <TextField
              id="outlined-basic"
              label="50-Word Limit Quote"
              variant="outlined"
              multiline
              rows={2}
              fullWidth
              value={section5.industryPerspectiveThree5}
              InputLabelProps={{shrink: true,}}
              onChange={(evt) =>
                dispatch({
                  type: "SET_SECTION5_RESPONSES",
                  payload: { industryPerspectiveThree5: evt.target.value },
                })
              }
            />
          </Box>
        </Grid>


        <br />
        <br />

        
        <button 
          onClick={(evt) => handleBack(evt)}
          className="btn">Back
        </button>
        

        <button 
            onClick={(evt) => handleSubmit(evt)} 
            className="btn">
            Submit
        </button>

        
        <button
          onClick={(evt) => handleNext(evt)} 
          className="btn">Next
        </button>
        
      </form>
      </Paper>
    </Box>
  );
}

export default SectionFiveMarket;
