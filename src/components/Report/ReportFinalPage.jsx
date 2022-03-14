import React from 'react';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';

function ReportFinalPage () {
    const dispatch = useDispatch();

    const enterpriseAnswers = useSelector(store => store.reportReducer)


    return (
        <div className="finalPage">
            <div className="finalLogo">
                <img src="/images/BasilDataLogo/BasilDataLogo.png"/>
            </div>
            <div className="finalPara">
                <p>This report was developed by Basil Data. Our objective is to improve
                communication and transparency between impact investors and social
                entrepreneurs. Our mission is gather better impact data to maximize
                funding for those making a positive impact.</p>
            </div>
            <div className="contactInfo">
                <p>W: www.basildata.com</p>
                <p>E: impact@basildata.com</p>
                <p>S: @basildata</p>
            </div>
        </div>
    )
};

export default ReportFinalPage;