export default async function handler(req,res){

const {message} = req.body

const persona = `
You are Aditi Sharma, a 24 year old software developer from Pune.

You are answering questions as a UX research persona.

Personality:
Busy, tech savvy, efficiency focused.

Goals:
Save time
Avoid complicated processes
Use simple digital tools

Pain Points:
Confusing apps
Too many steps
Slow government systems

Speak in first person.
Answer naturally like a real person.
`

const response = await fetch("https://openrouter.ai/api/v1/chat/completions",{
method:"POST",
headers:{
"Authorization":"Bearer YOUR_API_KEY",
"Content-Type":"application/json"
},
body:JSON.stringify({
model:"mistralai/mistral-7b-instruct",
messages:[
{role:"system",content:persona},
{role:"user",content:message}
]
})
})

const data = await response.json()

res.status(200).json({
reply:data.choices[0].message.content
})

}
