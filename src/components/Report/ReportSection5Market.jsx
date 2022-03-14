import React from 'react';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';

function ReportSection5Market () {
    const dispatch = useDispatch();

    const enterpriseAnswers = useSelector(store => store.reportReducer)


    return (
        <>
        </>
    )
};

export default ReportSection5Market;