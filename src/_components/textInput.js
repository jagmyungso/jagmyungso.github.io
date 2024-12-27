import componentManager from "/controllers/componentManager";

export function textInput(label, id) {
    componentManager.createScript('script-text-input-done', textInputDone);
    const html = `
        <label for="${id}">${label}</label><br>
        <input type="text" id="${id}" required></input>
    `;

    return componentManager.removeLineBreaks(html);
}

function textInputDone(from, to){
}