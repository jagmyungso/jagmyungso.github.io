const endpoints = [
    'baby',
    'company'
]

export default {
    init() {
        const searchPath = document.location.search;
        const pathName = document.location.pathname;

        //Use History API and update the URL path
        if(pathName === '/') {
            // do nothing
        }
        else if (pathName.split('/')[2] && pathName.split('/')[2].length > 0) {
            console.log(pathName + ' page not found');
            window.history.pushState({ test: 'test' }, "", "/");
        }
        else if (!endpoints.includes(pathName.split('/')[1])) {
            console.log(pathName + ' page not found');
            window.history.pushState({ test: 'test' }, "", "/");
        }

        if (searchPath) {
            const key = searchPath.split('=')[0];
            const val = searchPath.split('=')[1];

            if (key === '?id' && val) {
                console.log('here');
                // window.history.pushState({ test: 'test' }, "", `/${}${searchPath}`);

                // const state = [{
                //     id: 'entry-page',
                //     visibility: false,
                // },
                // {
                //     id: 'shared-page',
                //     visibility: true,
                //     ref: {
                //         dbId: val,
                //     }
                // }];

                // document.stateManager.batchUpdateStates(state);
            }
        }
    },
}