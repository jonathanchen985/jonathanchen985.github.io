// These are our required libraries to make the server work.

import express from 'express';
import fetch from 'node-fetch';
 //const sqlite3 = require('sqlite3').verbose(); // We're including a server-side version of SQLite, the in-memory SQL server.
 //const open = sqlite3.open; // We're including a server-side version of SQLite, the in-memory SQL server.
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import writeUser from './libraries/writeuser';


const dbSettings = {
  filename: './tmp/database.db',
  driver: sqlite3.Database
}; 

const app = express();
const port = process.env.PORT || 3000;
const db= new sqlite3.Database(':memory:', (err) => {
  if(err)
{
  return console.error('err.message');
}
console.log('Connected to the in-memory SQL database')
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


function processDataForFrontEnd(req, res) {
}

//Different API requests
app.route('/api')
  .get((req, res) => {
    // processDataForFrontEnd(req, res)
    (async()=> {
      const db = await open(dbSettings)
      const result = await db.all('SELECT * FROM user');
      console.log('Expected result', result);
      res.json(result);
    })()
  })
  .post((req, res) => {
    console.log("/api post request", req.body);
    if(!req.body.name){
      console.log(req.body);
      res.status('418').send('something went wrong, additionally i am a teapot')
    } else {
      writeUser(req.body.name, dbSettings)
      .then((result) => {
        console.log(result);
        res.send('your request was successful'); // simple mode
      })
      .catch((err) => {
        console.log(err);
      });
    }
  })

  //Put Request Method
  .put((req,res) =>{
    console.log("/api put request", req.body);
    if(!req.body.name){
      console.log(req.body);
      res.status('404').send('error')
    } else{
      writeUser(req.body.name, dbSettings)
      .then((result) =>{
        console.log(result);
        res.send('your data was updated');
      })
      .catch((err) => {
        console.log(err);
      })
    }

  }
  )


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});

