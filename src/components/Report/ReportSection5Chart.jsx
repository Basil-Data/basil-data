import React from 'react';
import { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';

// Chart JS
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';



ChartJS.register(ArcElement, Tooltip, Legend);

function ReportSection5Chart() {
    const dispatch = useDispatch();
    const section5Enterprise = useSelector((store) => store.section5Enterprise);
    useEffect(() => {
        dispatch({
            type: "FETCH_ENTERPRISE_SECTION_FIVE",
        });
    }, []);

    const data = {
        labels: ['Total Addressable Market', 'Serviceable Addressable Market', 'Serviceable Obtainable Market',],
        datasets: [
            {
                label: [
                        'Total Addressable Market (US Dollars)', 'Serviceable Addressable Market (US Dollars)','Serviceable Obtainable Market (US Dollars)'],
                data: [section5Enterprise.addressableMarket5,
                        section5Enterprise.serviceableMarket5,
                        section5Enterprise.obtainableMarket5],
                backgroundColor: ['rgba(38, 53, 73)',
                                    'rgba(159, 135, 225)',
                                    'rgb(205, 205, 218)'
                                ],
                borderColor: ['rgba(255, 99, 132, 1)'
                            ],
                borderWidth: 1, }
        ]
    }

    return (
        <>
        <div>
            
            <Doughnut 
                data={data}
                width={300}
                height={300}
                options={{ maintainAspectRatio: false }}
            />
        </div>
        </>
    )


}

export default ReportSection5Chart;