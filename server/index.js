const express = require('express');
  
const app = express();
const port = process.argv.PORT || 3001;

require('./endpoints')(app)
  
app.listen(port, (error) =>{
  if(!error) { console.log(`Server is Successfully Running on port ${port}`) }
  else { console.error("Error occurred, server can't start", error); }
});