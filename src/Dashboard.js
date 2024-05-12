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

function Dashboard({ location }) {
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
                    <div className='boxx'>Money Invested<p style={{fontSize:'4em', marginTop:'15px'}}>₹20,000</p></div>
                    <div className='boxx'>Loan Taken<p style={{fontSize:'4em', marginTop:'15px'}}>₹5,00,000</p></div>
                </div>
                </div>
                <div className='dash'>
                <div className='boxx' style={{width:'460px', height: '150px' ,marginTop:'-20px'}}>Category change amount<p style={{fontSize:'4em', marginTop:'15px'}}>₹1,00,000</p></div>
                <div className='boxx' style={{width:'500px', marginTop:'-20px'}}>Top Investors<p style={{fontSize:'1.4em', marginTop:'15px'}}>1. Aastha Tripathi<br></br>2. Krish Jain<br></br>3. Pragati Shekhar</p></div>
                </div>
                </div>
            </div>
        </div> 
    );
}

export default Dashboard;
