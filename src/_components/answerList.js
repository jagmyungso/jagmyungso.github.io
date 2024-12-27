import componentManager from "/controllers/componentManager";
import { answerButton } from "/_components/answerButton.js";

/*
arrayOfAnswers = [answers]
answer = "<button></button>"
*/

export function answerList(pageNumber, arrayOfAnswers) {
    let i = 0, len = arrayOfAnswers.length;
    let answersHtml = '';

    while(i < len){
        answersHtml += answerButton(pageNumber, i, arrayOfAnswers[i]);
        i++;
    }

    const name = 'btn-a-' + pageNumber;
    const html = `
        <div class="btn-group">
            ${answersHtml}
        </div>
    `;

    return componentManager.removeLineBreaks(html);
}