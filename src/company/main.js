import '/global.css'
import './local.css'

import { entryPage } from './pages/entryPage.js'
import { secondPage } from './pages/secondPage.js'
import { thirdPage } from './pages/thirdPage.js'
import { lastPage } from './pages/lastPage.js'
import { sharedPage } from './pages/sharedPage.js'
import { adsense } from '/_components/adsense'

import firebaseManager from '/controllers/firebaseManager.js'
import stateManager from '/controllers/stateManager.js'
import routingManager from '/controllers/routingManager.js'
import globalManager from '/controllers/globalManager.js'

document.querySelector('#app').innerHTML = `
<div class="row align-items-center h-25">
  <div class="col-2">col-2</div>
  <div class="col-8">col-8</div>
  <div class="col-2">col-2</div>
</div>
<div class="row align-items-center h-50">
  <div class="col-2">col-2</div>
  <div class="col-8">
    ${entryPage().html}
    ${secondPage().html}
    ${thirdPage().html}
    ${lastPage().html}
    ${sharedPage().html}
  </div>
  <div class="col-2">col-2</div>
</div>
<div class="row align-items-center h-25">
  <div class="col-2">col-2</div>
  <div class="col-8">col-8</div>
  <div class="col-2">col-2</div>
  <!-- 
    ${adsense('ca-pub-3913910396873542', 'auto', '1865057572', true)}
  -->
</div>
`;

stateManager.init();
routingManager.init();
globalManager.init();
firebaseManager.init();

