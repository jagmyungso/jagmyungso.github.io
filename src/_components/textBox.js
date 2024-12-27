import componentManager from "/controllers/componentManager";

export function textBox(type, text) {
    const html = `
        <label for="${id}">${label}</label><br>
        <input type="text" id="${id}" required></input>
    `;

    return componentManager.removeLineBreaks(html);
}

function textInputDone(from, to){
}