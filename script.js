const persona = {
name: "Aditi Sharma",
age: "24",
occupation: "Software Developer",
location: "Pune",

goals: "I want to save time while completing tasks and access services quickly without complicated processes.",

painpoints: "I get frustrated when apps have too many steps, confusing navigation, or unclear instructions.",

needs: "I need simple interfaces, fast response times, and clear instructions.",

motivation: "Efficiency, convenience, and digital accessibility motivate me.",

technology: "I mainly use my smartphone, laptop for work, and occasionally a smartwatch.",

dailyLife: "My day mostly revolves around work, using productivity apps, ordering food online, and managing tasks digitally."
};

function sendMessage(){

let input = document.getElementById("userInput").value;
let chatbox = document.getElementById("chatbox");

let userMsg = document.createElement("div");
userMsg.className = "message user";
userMsg.innerText = input;

chatbox.appendChild(userMsg);

let response = getPersonaResponse(input);

let botMsg = document.createElement("div");
botMsg.className = "message bot";
botMsg.innerText = response;

chatbox.appendChild(botMsg);

document.getElementById("userInput").value="";
chatbox.scrollTop = chatbox.scrollHeight;

}

function getPersonaResponse(question){

question = question.toLowerCase();

if(question.includes("goal"))
return persona.goals;

if(question.includes("pain") || question.includes("problem"))
return persona.painpoints;

if(question.includes("need"))
return persona.needs;

if(question.includes("motivation"))
return persona.motivation;

if(question.includes("technology") || question.includes("device"))
return persona.technology;

if(question.includes("day") || question.includes("routine"))
return persona.dailyLife;

return "I'm not sure about that. You can ask about my goals, needs, pain points, or daily life.";
}
