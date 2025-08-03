
//core Module 
const path = require('path');

// External Module

const  express = require('express')

// Local Module
const userRouter = require('./routes/userRouter');

const hostRouter = require('./routes/hostRouter');
//Local Module
const rootdir = require("./utils/pathUtil")

const app = express();

app.use((req,res, next) => {
  console.log(req.url, req.method);

  next();
})
 
app.use(express.urlencoded());

app.use(userRouter);
app.use("/host",hostRouter);

app.use((req,res,next) => {
res.sendFile(path.join(rootdir,'views','404.html'))
})
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`)
})