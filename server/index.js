const express = require('express');
  
const app = express();
const port = process.argv.PORT;

require('./endpoints')(app)
  
app.listen(port, (error) =>{
  if(!error) { console.log(`Server is Successfully Running, and App is listening on port ${port}`) }
  else { console.error("Error occurred, server can't start", error); }
});