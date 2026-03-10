export default async function handler(req, res) {

if (req.method !== "POST") {
return res.status(405).json({ error: "Method not allowed" })
}

try {

const { message } = req.body

const personaPrompt = `
You are a UX research persona.

Name: Aditi Sharma
Age: 24
Occupation: Software Developer
Location: Pune

Goals:
Save time
Avoid complex systems
Use efficient digital services

Painpoints:
Too many steps
Confusing apps
Slow processes

Answer naturally in first person.
Keep responses short and conversational.
`

const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
method: "POST",
headers: {
"Authorization": "Bearer YOUR_API_KEY",
"Content-Type": "application/json"
},
body: JSON.stringify({
model: "mistralai/mistral-7b-instruct",
messages: [
{ role: "system", content: personaPrompt },
{ role: "user", content: message }
]
})
})

const data = await response.json()

const reply = data.choices?.[0]?.message?.content || "Sorry, I couldn't respond."

res.status(200).json({ reply })

} catch (error) {

res.status(500).json({ reply: "Server error. Try again." })

}

}
