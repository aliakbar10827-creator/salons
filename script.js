function sendMessage() {
  let input = document.getElementById("userInput");
  let message = input.value;

  if (!message) return;

  let chatBox = document.getElementById("chatBox");

  // USER MESSAGE
  chatBox.innerHTML += `<p class="user">You: ${message}</p>`;

  // SIMPLE AI LOGIC (SIMULATION)
  let reply = "";

  if (message.toLowerCase().includes("haircut")) {
    reply = "💇 Haircut available. I suggest Haircut + Beard Combo (best deal 🔥). What time do you prefer?";
  }
  else if (message.toLowerCase().includes("price")) {
    reply = "💰 Haircut: 500 PKR, Beard: 300 PKR, Combo: 700 PKR";
  }
  else if (message.toLowerCase().includes("book")) {
    reply = "📅 Great! Please share date & time for your appointment.";
  }
  else {
    reply = "🤖 I can help you book, suggest services, or show offers. What do you need?";
  }

  // BOT MESSAGE
  setTimeout(() => {
    chatBox.innerHTML += `<p class="bot">AI: ${reply}</p>`;
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 500);

  input.value = "";
}
