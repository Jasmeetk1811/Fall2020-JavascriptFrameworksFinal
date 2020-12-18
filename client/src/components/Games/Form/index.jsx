import React, { useContext, useState, useEffect } from 'react';
import { NotificationContext } from '../../shared/Notifications';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { GlobalStoreContext } from '../../shared/Globals';


const GameForm = ({ endpoint, preload }) => {
  
  const [redirect, setRedirect] = useState(false);
  const { setNotification } = useContext(NotificationContext);
  const [inputs, setInputs] = useState({})
  const { globalStore } = useContext(GlobalStoreContext);


  useEffect(() => {
    setInputs({...preload});
  }, [preload])

  const handleChange = event => {
    setInputs({...inputs, [event.target.name]: event.target.value}); 
  };

  const handleSubmit = event => {
    Axios.post(`${globalStore.REACT_APP_ENDPOINT}/` ,inputs).then((data)=> {

    })
  };

  if (redirect) return <Redirect to="/"/>;
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Label>Author</Form.Label>

      <Form.Group>
        <Form.Control 
          onChange={handleChange} 
          name="title" 
          placeholder="Cyberpunk 2077"
          defaultValue={inputs.title}
          value={inputs.title}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Title</Form.Label>

        <Form.Control 
          onChange={handleChange} 
          name="publisher" 
          placeholder="Projekt Red"
          defaultValue={inputs.publisher}
          value={inputs.publisher}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Rating</Form.Label>

        <Form.Control
          type="number" 
          onChange={handleChange} 
          name="rating" 
          defaultValue={inputs.rating}
          value={inputs.rating}
          min={1}
          max={5}
          step={1}
        />
      </Form.Group>

      <Form.Group>
        <Button type="submit">Submit</Button>
      </Form.Group>
    </Form>
  );
}
 
export default GameForm;