import Axios from 'axios';
import React, { useEffect, useContext } from 'react';
import { GlobalStoreContext } from '../../shared/Globals';
import { Redirect, useParams } from 'react-router-dom';
import { NotificationContext } from '../../shared/Notifications';

const Destroy = () => {
  const { id } = useParams();
  const { setNotification } = useContext(NotificationContext);
  
  const { globalStore } = useContext(GlobalStoreContext);

  useEffect(() => {

    Axios.post(`${globalStore.REACT_APP_ENDPOINT}/games/destroy`, { _id: id })
    .then(() => {
      setNotification(`Game was destroyed successfully.`);
    })
    .catch(error => {
      setNotification(`Couldn't destroy the selected game due to an error: ${error.message}`);
    });
  }, [id,globalStore]);

  return (
    globalStore? <Redirect to="/"/> : null
  );
}
 
export default Destroy;