const express = require("express");
require("dotenv").config();
const cors = require("cors")
const bodyParser = require("body-parser")
const OpenAI = require("openai")
const openai = new OpenAI({
  apiKey:process.env.OPENAI_API_KEY
})

const app = express()

app.use(bodyParser.json())
app.use(cors())

const port = process.env.PORT || 5000

app.post('/',async(req,res)=>{
  const {message} = req.body;
  try{
     const chatCompletion = await openai.chat.completions.create({
       model:"gpt-3.5-turbo",
       messages:[{"role":"user","content":`${message}`}],
       max_tokens:100,
       temperature:0.5
     })
     res.status(200).json({data:chatCompletion?.choices[0]?.message})
  }catch(error){
    res.status(500).json({err:error?.message})
  }

})
app.listen(port,()=>{
  console.log('Project is running on',port)
})

