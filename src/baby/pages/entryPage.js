import { transitionButton } from '/_components/transitionButton.js'

import componentManager from "/controllers/componentManager";

export function entryPage() {
    const id = 'entry-page';
    const html = `
    <div class="justify-content-center" id="${id}">
        <div class="container-flex">
            <h1>Entry Page</h1>
            ${transitionButton('Start', id, 'second-page')}
        </div>
    </div>
    `;

    componentManager.createScript(`script-${id}-init`, init);
    return { html: html, id: id };
}

function init() {
    const id = 'entry-page';
    document.addEventListener(`${id}-value-updated`, (e) => {
        console.log(e);
    });
}