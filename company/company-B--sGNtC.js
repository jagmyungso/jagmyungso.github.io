import"../global/global-B5Qt9EMX.js";import{t as i,c as s,a as c,b as u,d,s as g,e as p,f as $,r as h,g as m,h as f}from"../global/globalManager-tpXO2rPc.js";function w(){const e="entry-page",t=`
    <div class="justify-content-center" id="${e}">
        <div class="container-flex">
            <h1>Entry Page</h1>
            ${i("Start",e,"second-page")}
        </div>
    </div>
    `;return s.createScript(`script-${e}-init`,y),{html:t,id:e}}function y(){document.addEventListener("entry-page-value-updated",t=>{console.log(t)})}function b(){const e="second-page",t=`
        <div class="container-flex">
            <div class="m-5">
                ${c("Answer Question Below:","answer-1")}
            </div>
            ${u(2,["answer1","answer2","answer3","answer4"])}
            ${i("Previous",e,"entry-page")}
            ${i("Next",e,"third-page")}
        </div>
    `,n=`
        <div class="justify-content-center" id="${e}">
            <div class="container-flex">
                ${d("Second Page Test",t)}
            </div>
        </div>
    `;return s.createScript(`script-${e}-init`,P),{html:n,id:e}}function P(){document.addEventListener("second-page-value-updated",t=>{console.log(t)})}function x(){const e="third-page",t=`
        <div class="container-flex">
            <div class="m-5">
                ${c("Answer Second Question Below:","answer-2")}
            </div>
            ${i("Previous",e,"second-page")}
            ${i("Next",e,"last-page")}
        </div>
    `,n=`
        <div class="justify-content-center" id="${e}">
            <div class="container-flex">
                ${d("Third Page Test",t)}
            </div>
        </div>
    `;return s.createScript(`script-${e}-init`,S),{html:n,id:e}}function S(){document.addEventListener("third-page-value-updated",t=>{console.log(t)})}function E(){const e="last-page",t=`
    <div class="justify-content-center" id="${e}">
        <div class="container-flex">
            <h1>Third Page Test</h1>
            ${d("answers","list of answers")}
            ${i("Previous",e,"third-page")}
            ${g("Submit")}
        </div>
    </div>
    `;return s.createScript(`script-${e}-init`,L),{html:t,id:e}}function L(){document.addEventListener("last-page-value-updated",t=>{console.log(t)})}function M(){const e="shared-page",t=`
        <div class="justify-content-center" id="${e}">
            <div class="container-flex">
                <h1>Shared Page Test</h1>
                <p id="shared-result"></p>
            </div>
        </div>
    `;return s.createScriptAutorun(`script-${e}-init`,T),{html:t,id:e}}function T(){const e="shared-page";document.addEventListener(`${e}-value-updated`,t=>{const n=document.stateManager.getRef(e),a=document.firebaseManager.db,o=a.ref(a.db,"results/"+n.dbId);a.onValue(o,r=>{const l=r.val(),v=document.getElementById("shared-result");v.innerText=l.result})}),document.addEventListener(`${e}-visibility-updated`,t=>{console.log(t)})}document.querySelector("#app").innerHTML=`
<div class="row align-items-center h-25">
  <div class="col-2">col-2</div>
  <div class="col-8">col-8</div>
  <div class="col-2">col-2</div>
</div>
<div class="row align-items-center h-50">
  <div class="col-2">col-2</div>
  <div class="col-8">
    ${w().html}
    ${b().html}
    ${x().html}
    ${E().html}
    ${M().html}
  </div>
  <div class="col-2">col-2</div>
</div>
<div class="row align-items-center h-25">
  <div class="col-2">col-2</div>
  <div class="col-8">col-8</div>
  <div class="col-2">col-2</div>
  <!-- 
    ${p("ca-pub-3913910396873542","auto","1865057572",!0)}
  -->
</div>
`;$.init();h.init();m.init();f.init();
