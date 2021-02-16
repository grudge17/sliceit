const express = require('express')
const mongoose=require('mongoose')
const app =express()
require('dotenv').config()

//impport routes
const wordRoutes=require('./routes/word')

//db connection
mongoose.connect(
    process.env.MONGO_URI,
    {useNewUrlParser: true}
  )
  .then(() => console.log('DB Connected'))
   
  mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`)
  });
  
//routes middleware
app.use('/sliceit',wordRoutes)


const port=process.env.PORT || 8000

app.listen(port,()=>{
    console.log(`Server is running on port ` + port)
})