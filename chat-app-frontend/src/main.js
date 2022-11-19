import './main.css';

import { FormControl, FormHelperText, Input, InputLabel } from '@mui/material';
import React, { useState } from 'react';

import Button from '@mui/material/Button';
import Chats from './Chats';

const Main = () => {
  const [inputField, setInputField] = useState('');
  const [postsMessages, setPostMesssages] = useState([]);


  console.log(inputField);
  console.log(postsMessages);

  const dropMsg = (e) => {
    // all the logic to send a message goes
    e.preventDefault();
    setPostMesssages([...postsMessages, inputField]);
    setInputField('');
  }

  return (
    <div className="Main">
      <h1>MEChat World</h1>
      <div className="chatForm">
        <FormControl>
          <InputLabel variant="contained"  color="secondary" htmlFor="my-input">Please Drop Your Messages...🙂</InputLabel>
          <Input label="Filled success" variant="filled" color="success" focused id="my-input" aria-describedby="my-helper-text" value={inputField} onChange={e => setInputField(e.target.value)} />
          <FormHelperText id="my-helper-text" variant="contained" color="secondary">We wil keep your chats private...🔒</FormHelperText>
          <br/>
            <Button 
              variant="contained" 
              color="secondary" 
              type='submit' 
              onClick={dropMsg} 
              disabled={!inputField}
              >
                Drop a message
            </Button>
        </FormControl>
      </div>
      {
        postsMessages.map(postMessage => (
          <div className="postField">
            <Chats text={postMessage}/>
          </div>
        ))
      }

    </div>
  );
}

export default Main;
