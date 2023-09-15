// "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"
const express = require("express");
require("dotenv").config();

const OpenAI = require("openai")
// main()

const app = express()

const port = process.env.PORT || 5000

app.post('/',async(req,res)=>{
  const openai = new OpenAI({
    apiKey:process.env.OPENAI_API_KEY
  })

  const chatCompletion = await openai.chat.completions.create({
    model:"gpt-3.5-turbo",
    messages:[{"role":"user","content":"how are you"}],
    max_tokens:40
  })
  console.log(chatCompletion.choices[0].message,' the message we got')
  res.json({data:chatCompletion.data})
})

app.listen(port,()=>{
  console.log('Project is running on',port)
})

