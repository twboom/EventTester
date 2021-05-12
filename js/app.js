const inputs = [ // All the input field IDs
    "button",
    "text"
];

const events = [
    "click", 
]

const output = evt => {
    evt.isTrusted = undefined
    for (const [key, value] of Object.entries(evt)) {
        console.log(`${key}: ${value}`);
      }
};

const init = _ => {
    for (input in inputs) {
        for (evt in events) {
            document.getElementById(inputs[input]).addEventListener(events[evt], output)
        }
    };
};

window.onload = init;