import './main.css';

import { FormControl, FormHelperText, Input, InputLabel } from '@mui/material';
import React, { useEffect, useState } from 'react';

import { Button } from '@mui/material';
import Chats from './Chats';
import FlipMove from 'react-flip-move';
import SendToMobileIcon from '@mui/icons-material/SendToMobile';
import axios from './axios';

// import database from './firebase';
// import firebase from 'firebase';

const Main = () => {
  const [inputField, setInputField] = useState('');
  const [postMessages, setPostMesssages] = useState([]);
  const [userAccount, setUserAccount] = useState('');


  console.log(inputField);
  console.log(postMessages);

  // useEffect(() => {
  //   // our logic will compile one time when our application components would load
  //   database.collection('postsMessages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
  //     setPostMesssages(snapshot.docs.map(doc => ({ id: doc.id, postsMessage: doc.data() })))
  //   })
  // }, [])

  const sync = async () => {
    await axios.get('/messages/sync')
    .then((res) => {
      console.log(res.data);
      setPostMesssages(res.data);
    })
  }

  useEffect(() => {
    sync();
  }, [])
 


  useEffect(() => {
    // our logic will compile one time when our application components would load
    setUserAccount(prompt('May I know your good name, Please?'))
  }, [])

  const dropMsg = (e) => {
    // all the logic to send a message goes
    e.preventDefault();
    // database.collection('postsMessages').add({
    //   postsMessage: inputField,
    //   userAccount: userAccount,
    //   timestamp: firebase.firestore.FieldValue.serverTimestamp()
    // })
    axios.post('/messages/new', {
      userAccount: userAccount,
      postMessage: inputField,
      timestamp: Date.now()
    })


    setInputField('');
  }

  return (
    <div className="Main">
      {/* <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" alt="chat logo" /> */}
      <img src="https://cdn-icons-png.flaticon.com/512/2950/2950701.png" alt="chat logo" width="85" height="80" />
      <h1>MEChat World</h1>
       <h2>Welcome to {userAccount} into our chatroom</h2>
      <div className="chatForm">
        <FormControl className="form_control">
          <InputLabel variant="contained" color="secondary" htmlFor="my-input">Please Drop Your Messages...🙂</InputLabel>
          <Input className="form_input" label="Filled success" variant="filled" color="success" id="my-input" aria-describedby="my-helper-text" value={inputField} onChange={e => setInputField(e.target.value)} />
          <FormHelperText id="my-helper-text" variant="contained" color="secondary">We wil keep your chats private...🔒</FormHelperText>
          <br/>
            <Button 
              variant="contained" 
              color="secondary" 
              type='submit' 
              onClick={dropMsg} 
              disabled={!inputField}
              className='form_iconButton'
              >
                Drop a message
                <SendToMobileIcon />
            </Button>
        </FormControl>
      </div>

      <FlipMove>
      {
        // postsMessages.map(({id, postsMessage}) => (
          postMessages.map(postMessage => (
          <div className="postField">
            <Chats 
            userAccount={userAccount} 
            postMessage={postMessage}
            // key={id}
            key={postMessage._id}
            />
          </div>
        ))
      }
      </FlipMove>
    </div>
  );
}

export default Main;
