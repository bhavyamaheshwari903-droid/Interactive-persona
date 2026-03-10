async function sendMessage(){

const input = document.getElementById("message")
const text = input.value

addMessage(text,"user")

input.value=""

const response = await fetch("/api/chat",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({message:text})
})

const data = await response.json()

addMessage(data.reply,"bot")

}

function addMessage(text,type){

const chat = document.getElementById("chat")

const msg = document.createElement("div")
msg.className="message "+type
msg.innerText=text

chat.appendChild(msg)

chat.scrollTop = chat.scrollHeight

}
