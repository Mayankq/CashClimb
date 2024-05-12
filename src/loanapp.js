import React from 'react';
import ReactDOM from 'react-dom/client';
import side from './assets/side.jpg'
import Navbar from './Navbar';
import Menu from './menu';
function MyForm() {
  return (
    <>
    <form>
      <div className='row2'>
        <div className='col11'>   
        <div className='loan'>
        <h1>Loan Application </h1>
        <br></br>
        <br></br>
        <br></br>
        </div>
        <div className='align1'>
        <input type="text" class='curved-radius' placeholder="Customer Name" />
        <br></br>
         <input type="text" class='curved-radius' placeholder='Phone Number'/>
         <br></br>
   
        <input type='text' class='curved-radius' placeholder='Account Number' />
        <br></br>
        </div>
        <br></br>
        <p class="spaced-text"></p>
        <div className='align2'>
    
        <input type='text' class='curved-radius' placeholder='Loan Amount' />
        <br></br>

        <input type='text' class='curved-radius' placeholder='Period of loan' />
        <br></br>

        <input type='text' class='curved-radius' placeholder='Interest Rate(%)' />
        <br></br>
        </div>
        <br></br>
        <p class="spaced-text"></p>
        <div className='align3'>
        <input type='text' style={{ width: '500px', height: '100px', gap:'80px'}} class='curved-radius' placeholder='Purpose for loan'/>

       
        </div>
        <div className='myform'>
            <input type='checkbox'/>
            <p>Read terms and condition</p>
        </div>

        <br></br>
        <div className='align4'>
        <input type='submit' class='login-btn' value="SUBMIT"/>
        </div>
        </div>
        <div className='image2'>
          <img src={side} alt="bg" className='coin'/>
        </div>
        </div>
    </form>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);

export default MyForm;