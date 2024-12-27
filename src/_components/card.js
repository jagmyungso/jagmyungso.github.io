import componentManager from "/controllers/componentManager";

export function card(header, cardBody) {
    const html = `
        <div class="card m-2">
            <div class="card-header">
                ${header}
            </div>
            <div class="card-body">
                ${cardBody}
            </div>
        </div>
    `;

    return componentManager.removeLineBreaks(html);
}