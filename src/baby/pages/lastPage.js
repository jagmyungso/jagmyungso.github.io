import { transitionButton } from '/_components/transitionButton.js'
import { submitButton } from '/_components/submitButton.js'
import { card } from '/_components/card.js'

import componentManager from "/controllers/componentManager";

export function lastPage(){
    const id = 'last-page';
    const html = `
    <div class="justify-content-center" id="${id}">
        <div class="container-flex">
            <h1>Third Page Test</h1>
            ${card('answers', 'list of answers')}
            ${transitionButton('Previous', id, 'third-page')}
            ${submitButton('Submit')}
        </div>
    </div>
    `;

    componentManager.createScript(`script-${id}-init`, init);
    return { html: html, id: id };
}

function init() {
    const id = 'last-page';
    document.addEventListener(`${id}-value-updated`, (e) => {
        console.log(e);
    });
}