import componentManager from "/controllers/componentManager";

export function transitionButton(text, from, to) {
    componentManager.createScript('script-transition', transition);
    // const html = `
    //     <button onclick="transition('${from}', '${to}')">${text}</button>
    // `;

    const html = `
        <button onclick="${transition.name}('${from}', '${to}')">${text}</button>
    `;

    return componentManager.removeLineBreaks(html);
}

function transition(from, to) {
    const state = [{
        id: from,
        visibility: false,
        value: {}
    },
    {
        id: to,
        visibility: true,
        value: {}
    }];
    document.stateManager.batchUpdateStates(state);
    console.log(`transition from ${from} to ${to}`);
}