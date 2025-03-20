import consumer from "channels/consumer"

const ChatChannel = consumer.subscriptions.create("ChatChannel", {
  received(data) {
    const messages = document.getElementById("messages")
    messages.insertAdjacentHTML("beforeend", `<p>${data.message}</p>`)
  }
})

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("chat-form")
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault()
      const input = document.getElementById("message")
      ChatChannel.send({message: input.value})
      input.value = ""
    })
  }
})