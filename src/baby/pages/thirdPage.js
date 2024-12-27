import { transitionButton } from '/_components/transitionButton.js'
import { textInput } from '/_components/textInput.js'
import { card } from '/_components/card.js'

import componentManager from '/controllers/componentManager';

export function thirdPage() {
    const id = 'third-page';
    const cardBody = `
        <div class="container-flex">
            <div class="m-5">
                ${textInput('Answer Second Question Below:', 'answer-2')}
            </div>
            ${transitionButton('Previous', id, 'second-page')}
            ${transitionButton('Next', id, 'last-page')}
        </div>
    `;

    const html = `
        <div class="justify-content-center" id="${id}">
            <div class="container-flex">
                ${card('Third Page Test', cardBody)}
            </div>
        </div>
    `;

    componentManager.createScript(`script-${id}-init`, init);
    return { html: html, id: id };
}

function init() {
    const id = 'third-page';
    document.addEventListener(`${id}-value-updated`, (e) => {
        console.log(e);
    });
}