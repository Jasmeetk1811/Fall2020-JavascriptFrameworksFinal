import React from 'react';
import Header from '../../shared/Header';
import Form from '../Form';
import { Container } from 'react-bootstrap';

const New = () => {
  return (
    <>
      <Header title="Games">
        Hi I'm a man-child.
      </Header>

      <Container>
        <Form endpoint="games/new" />
      </Container>
    </>
  );
}
 
export default New;