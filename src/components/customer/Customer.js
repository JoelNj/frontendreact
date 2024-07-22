import React,{useState} from 'react';
import axios from 'axios';
export const Customer =()=>{

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const handleSubmit = async (event) => {
      event.preventDefault();
      const data = {
        firstName,
        lastName
      };
      try {
        const response = await axios.post('http://localhost:8081/api/customers', data, {
          headers: {
            'Content-Type': 'application/json',
          }
        });
        console.log('Success:', response.data);
      } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
      }
    };
    let customerForm = (
       <form onSubmit={handleSubmit} >
        <fieldset >
        <legend>Create customer</legend>
            <label>
                First Name
            </label>
            <input 
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            >
            </input><br/>
            <label>
                Last Name
            </label>
            <input 
             type="text"
             value={lastName}
             onChange={(e) => setLastName(e.target.value)}
            >
            </input><br/>
            <input type='submit'/>
        </fieldset>
       </form>
    );
    return customerForm;
}