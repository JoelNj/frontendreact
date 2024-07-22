import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const ListCustomer = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get('http://localhost:8081/api/customers');
        setCustomers(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading customers: {error.message}</p>;

  return (
    <table>
      <h1>Customer List </h1>
       <tr><th>ID</th><th>first name</th><th>last name</th><th>Update</th><th>delete</th></tr>  
        {customers.map((customer) => (
        <tr>
            <td>{customer.id}</td>
            <td>{customer.firstName}</td>
            <td>{customer.lastName}</td>
            <td>update</td>
            <td>delete</td>
        </tr>
      ))}
    </table>
   
  );
};

