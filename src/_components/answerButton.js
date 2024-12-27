import componentManager from "/controllers/componentManager";

export function answerButton(pageNumber, seq, text) {
    componentManager.createScript(`script-answer-clicked`, answerClicked);

    const id = `btn-a-${pageNumber}-${seq+1}`;
    const html = `
        <button class="btn btn-primary" name="btn-a-${pageNumber}" id="${id}" onclick="${answerClicked.name}(this)">${text}</button>
    `;

    return componentManager.removeLineBreaks(html);
}

function answerClicked(elem){
    const elems = elem.parentNode.children;
    let i = 0, len = elems.length;
    while(i < len){
        elems[i].classList.remove('active');
        i++;
    }
    elem.classList.add('active');
    document.globalManager.setItem(elem.name, elem.id);
    console.log(document.globalManager.getAll());
}