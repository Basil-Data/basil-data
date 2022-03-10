import { react, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

import "../Questionnaire.css";
import QuestionnaireNav from "../QuestionnaireNav/QuestionnaireNav";

function SectionFiveMarket() {
  const dispatch = useDispatch();
  const response = useSelector((store) => store.section5EnterpriseReducer);

  console.log("response is", response);

  const [marketReason, setMarketReason] = useState("");

  function handleSubmit(evt) {
    evt.preventDefault();

    dispatch({
      type: "SET_SECTION5_RESPONSES",
      payload: {
        addressableMarket5: evt.target.value,
        serviceableMarket5: evt.target.value,
        obtainableMarket5: evt.target.value,
        whyRealistic5: evt.target.value,
      },
    });
  }

  return (
    <>
      <QuestionnaireNav />
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
          value={response.addressableMarket5}
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
          value={response.serviceableMarket5}
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
          value={response.obtainableMarket5}
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
              value={response.whyRealistic}
              onChange={(evt) =>
                dispatch({
                  type: "SET_SECTION5_RESPONSES",
                  payload: { whyRealistic5: evt.target.value },
                })
              }
            />
          </Box>
        </Grid>

        <br />
        <br />

        <Link to="/traction">
          <button className="btn">Back</button>
        </Link>

        <button onClick={handleSubmit} className="btn">Submit</button>

        <Link to="/risks-and-hurdles">
          <button className="btn">Next</button>
        </Link>
      </form>
    </>
  );
}

export default SectionFiveMarket;
