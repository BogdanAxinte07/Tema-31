import React from 'react';
import { useState } from 'react';
// Importam componentele din React Bootstrap.
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export function UserAddForm(props) {
  //primim ca prop functia ce modifica state-ul parintelui, deci afiseaza noul user pe ecran.
  const { addNewUser } = props;

  //stateurile corespunzatoare inputurilor formularului:
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [phone, setPhone] =useState('');

  const handleReset = () => {
    setName('')
    setEmail('')
    setUserName('')
    setPhone('')
  }

  //preluarea valorilor din inputuri si actualizarea stateului
  function handleEmailChange(event) {
    const value = event.target.value;
    setEmail(value);
  }
  function handleNameChange(event) {
    const value = event.target.value;
    setName(value);
  }
  function handleUserNameChange(event){
    const value = event.target.value;
    setUserName(value)
  }
  function handlePhoneChange(event){
    const value = event.target.value;
    setPhone(value)
  }
  //submiterea formularului:
  function handleFormSubmit(event) {
    //prevenim comportamentul default.
    event.preventDefault();

    //cream un nou user, pe baza datelor introduse in inputuri.
    const newUser = {
      name,
      email,
      userName,
      phone
    };

   
    //apelam functia primita ca prop de la parinte, deci afisam noul user pe ecran
    addNewUser(newUser);
  }

  return (
    //utilizam componentele din React Bootstrap, precum si clasele din Bootstrap.
    //atasam handlerul pt submiterea formualrului.
    <Form onSubmit={handleFormSubmit} className="my-5">
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name:</Form.Label>
        <Form.Control
          //atasam handlerul pentru schimbarea valorii inputului.
          onChange={handleNameChange}
          placeholder="Cristian Barbu"
          //legam continutul inputului de valoarea stateului
          value={name}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email:</Form.Label>
        <Form.Control
          //atasam handlerul pentru schimbarea valorii inputului.
          onChange={handleEmailChange}
          type="email"
          placeholder="Ex: cristian.barbu@itschool.ro"
          //legam continutul inputului de valoarea stateului
          value={email}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username:</Form.Label>
        <Form.Control
          //atasam handlerul pentru schimbarea valorii inputului.
          onChange={handleUserNameChange}
          type="text"
          placeholder="Ex: Cristian Barbu22"
          //legam continutul inputului de valoarea stateului
          value={userName}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone:</Form.Label>
        <Form.Control
          //atasam handlerul pentru schimbarea valorii inputului.
          onChange={handlePhoneChange}
          type="text"
          placeholder="Ex: 0753628561"
          //legam continutul inputului de valoarea stateului
          value={phone}
        />
      </Form.Group>

      
      <Button variant="primary" type="submit">
        Submit
      </Button>

      <Button type='button' onClick={handleReset}>Reset</Button>
    </Form>
  );
}
