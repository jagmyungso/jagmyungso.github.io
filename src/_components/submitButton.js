import componentManager from "/controllers/componentManager";

export function submitButton(text = 'Submit') {
    componentManager.createScript(`script-submit`, submit);
    const html = `
        <button onclick="${submit.name}()">${text}</button>
    `;

    return componentManager.removeLineBreaks(html);
}

function submit(){

}