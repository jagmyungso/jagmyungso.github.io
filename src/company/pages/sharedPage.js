import componentManager from "/controllers/componentManager";

export function sharedPage() {
    const id = 'shared-page';
    const html = `
        <div class="justify-content-center" id="${id}">
            <div class="container-flex">
                <h1>Shared Page Test</h1>
                <p id="shared-result"></p>
            </div>
        </div>
    `;
    componentManager.createScriptAutorun(`script-${id}-init`, init);
    return { html: html, id: id };
}

// TODO: Fill the page with content fetched based on the DB ID
// TODO: Setup a rule that anyone can read, anyone can write to certain location
// TODO: Setup a function in Firebase function to call OpenAPI and store the result

function init() {
    const id = 'shared-page';
    document.addEventListener(`${id}-value-updated`, (e) => {
        const ref = document.stateManager.getRef(id);
        const db = document.firebaseManager.db;
        const dbRef = db.ref(db.db, 'results/' + ref.dbId);

        db.onValue(dbRef, (snapshot) => {
            const data = snapshot.val();
            const elem = document.getElementById('shared-result');
            elem.innerText = data.result;
        });
    });
    document.addEventListener(`${id}-visibility-updated`, (e) => {
        console.log(e);
    });
}

