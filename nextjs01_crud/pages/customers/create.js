import { useState } from 'react';
import Router from 'next/router';

const Create = () => {
    const [errorMessage, setErrorMessage] = useState('');
  
    const onSubmit = async () => {
        if (errorMessage) setErrorMessage('');
    
        try {
          const res = await fetch('/api/customers/create', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value,
                telephone: document.getElementById('telephone').value,
                creditCardNumber: document.getElementById('creditCardNumber').value
            }),
          });
          if (res.status === 200) {
            Router.push('/customers');
          } else {
            throw new Error(await res.text());
          }
        } catch (error) {
          console.error(error);
          setErrorMessage(error.message);
        }
    };

    return <div>
        {errorMessage && (
            <p role="alert" className="errorMessage">
                {errorMessage}
            </p>
        )}
        <div>
          <label>First Name</label>
          <input
            type="text"
            id="firstName"
            placeholder="e.g. John"
          />
        </div>
        <div>
            <label>Last Name</label>
            <input
                type="text"
                id="lastName"
                placeholder="e.g. Doe"
            />
        </div>
        <div>
            <label>Telephone</label>
            <input
                type="text"
                id="telephone"
                placeholder="e.g. 123-456-7890"
            />
        </div>
        <div>
            <label>Credit Card Number</label>
            <input
                type="text"
                id="creditCardNumber"
                placeholder="e.g. 1234567890123456"
            />
        </div>
        <div className="submit">
          <button onClick={onSubmit} className="createButton">
            Create
          </button>
        </div>
    </div>
}

export default Create;
