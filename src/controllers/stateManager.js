const states = [
    {
        id: 'entry-page',
        visibility: false,
        ref: {}
    },
    {
        id: 'second-page',
        visibility: false,
        ref: {}
    },
    {
        id: 'third-page',
        visibility: false,
        ref: {}
    },
    {
        id: 'last-page',
        visibility: false,
        ref: {}
    },
    {
        id: 'shared-page',
        visibility: false,
        ref: {}
    }
];

export default {
    init() {
        this.batchUpdateStates(
            [{
                id: 'entry-page',
                visibility: true,
                ref: {}
            },
            {
                id: 'second-page',
                visibility: false,
                ref: {}
            },
            {
                id: 'third-page',
                visibility: false,
                ref: {}
            },
            {
                id: 'last-page',
                visibility: false,
                ref: {}
            },
            {
                id: 'shared-page',
                visibility: false,
                ref: {}
            },
            ]);
        // this.listenHistoryAction();
        document.stateManager = this;
    },
    getState() {
        return states;
    },
    getRef(id) {
        let i = 0, len = states.length;
        while (i < len) {
            if (states[i].id === id) {
                return states[i].ref;
            }
            i++;
        }
    },
    async updateState(updateInput) {
        let i = 0, len = states.length;
        while (i < len) {
            if (states[i].id === updateInput.id) {
                let keys = Object.keys(states[i]);

                const pageId = states[i].id;
                const index = keys.indexOf('id');

                if (index > -1)
                    keys.splice(index, 1);

                await keys.forEach((key) => {
                    states[i][key] = updateInput[key];
                });
                this.triggerEvent(pageId);

                break;
            }
            i++;
        }
    },
    async batchUpdateStates(arrayAttrsPerPage) {
        await arrayAttrsPerPage.forEach((page) => {
            this.updateState(page);
        });

        let i = 0, len = states.length;
        while (i < len) {
            const elem = document.getElementById(states[i].id);
            this.updatePageVisibility(elem, states[i].visibility);

            // if (states[i].visibility){
            //     this.updateUrl(states, states[i].id, states[i].id);
            // }

            i++;
        }
    },
    updatePageVisibility(elem, visibility) {
        elem.setAttribute('style', 'visibility' + ':' + (visibility ? 'visible' : 'hidden'));
        elem.setAttribute('style', 'display' + ':' + (visibility ? 'flex' : 'none'));
    },
    triggerEvent(pageId){
        const event = new Event(`${pageId}-value-updated`);
        document.dispatchEvent(event);
    },
    // triggerVisibilityChangeEvent(pageId){
    //     const event = new Event(`${pageId}-visibility-updated`);
    //     document.dispatchEvent(event);
    // },

    // updateUrl(states, title, endpoint) {
    //     const prevLocation = document.location.pathname.split('/')[1];
    //     window.history.pushState(
    //         {
    //             prev: prevLocation,
    //             new: endpoint
    //         },
    //         "Title",
    //         `/${endpoint}`
    //     );
    //     console.log(window.history.state);
    // },
    // listenHistoryAction() {
    //     window.addEventListener("popstate", (event) => {
    //         console.log(event);

    //         // history update
    //         this.updateUrl(states, event.state.new, event.state.new);

    //         // page transition
    //         const newState = [{
    //             id: window.history.state.new,
    //             visibility: false,
    //         },
    //         {
    //             id: window.history.state.prev,
    //             visibility: true,
    //         }];

    //         console.log(newState);

    //         this.batchUpdateStates(newState);
    //         console.log(`location: ${document.location}, state: ${event}`);
    //     });
    // }
}