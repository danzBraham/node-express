const EventEmitter = require("events");
const customEmitter = new EventEmitter();

customEmitter.on("response", () => {
  console.log("Data received!");
});

customEmitter.on("response", (name, id) => {
  console.log(`Hello ${name}, your ID is ${id}`);
});

customEmitter.emit("response", "Zidan", 17);
