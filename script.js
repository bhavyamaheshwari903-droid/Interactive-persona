async function sendMessage(){

const input=document.getElementById("msg")
const message=input.value.trim()

if(!message) return

addMessage(message,"user")

input.value=""

try{

const res=await fetch("/api/chat",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({message})
})

const data=await res.json()

addMessage(data.reply,"bot")

}catch(err){

addMessage("Error connecting to AI","bot")

}

}

function addMessage(text,type){

const chat=document.getElementById("chat")

const div=document.createElement("div")

div.className="message "+type

div.innerText=text

chat.appendChild(div)

chat.scrollTop=chat.scrollHeight

}
