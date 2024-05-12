import React from 'react';
import Menu from './menu.js';
import Navbar from './Navbar.js';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);



const data = {
  labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
  datasets: [
    {
      label: 'People Benefitted',
      data: [50, 75, 150, 125, 200, 225, 250, 175], // replace with your data
      backgroundColor: 'rgba(75,192,192,0.6)',
      yAxisID: 'y',
    },
    {
      label: 'Trend',
      data: [50, 75, 150, 125, 200, 225, 250, 175], // replace with your data
      type: 'line',
      fill: false,
      borderColor: 'rgba(75,192,192,1)',
      yAxisID: 'y',
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

function Dashboard(){
    return(
        <div>
            <div className='dash'>
                <Menu/>
                <div>
                    <div className='dash'>
                <div style={{ width: '700px', height: '400px' , marginTop: '20px'}}>
                    <Bar data={data} options={options} />
                </div>    
                <div className='box'>
                    <div className='boxx'>Money Invested</div>
                    <div className='boxx'>Loan Taken</div>
                </div>
                </div>
                <div className='dash'>
                <div className='boxx' style={{width:'460px', height: '150px'}}>Category change amount</div>
                <div className='boxx' style={{width:'500px'}}>Top Investors</div>
                </div>
                </div>
            </div>
        </div> 
    );
}

export default Dashboard;
