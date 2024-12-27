import { transitionButton } from '/_components/transitionButton.js'
import { textInput } from '/_components/textInput.js'
import { card } from '/_components/card.js'
import { answerList } from '/_components/answerList.js'

import componentManager from '/controllers/componentManager'

export function secondPage() {
    const id = 'second-page';
    const cardBody = `
        <div class="container-flex">
            <div class="m-5">
                ${textInput('Answer Question Below:', 'answer-1')}
            </div>
            ${answerList(2, ['answer1', 'answer2', 'answer3', 'answer4'])}
            ${transitionButton('Previous', id, 'entry-page')}
            ${transitionButton('Next', id, 'third-page')}
        </div>
    `;

    const html = `
        <div class="justify-content-center" id="${id}">
            <div class="container-flex">
                ${card('Second Page Test', cardBody)}
            </div>
        </div>
    `;

    componentManager.createScript(`script-${id}-init`, init);
    return { html: html, id: id };
}

function init() {
    const id = 'second-page';
    document.addEventListener(`${id}-value-updated`, (e) => {
        console.log(e);
    });
}