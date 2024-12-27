import '/global.css'

const fileName = 'jagmyungso_logo.png';

document.querySelector('#app').innerHTML = `
<div class="row align-items-center h-25">
  <div class="col-4"></div>
  <div class="col-4"></div>
  <div class="col-4"></div>
</div>
<div class="row align-items-center h-50">
  <div class="col-4"></div>
  <div class="col-4">
    <img src="${new URL(`./images/${fileName}`, import.meta.url).href}" width="150px"></img>
    <p>jagmyungso.com</p>
    <p>인터넷 작명소에 오신 것을 환영합니다.</p>
    <p>인터넷 작명소는 몇 가지 질문 및 그에 대한 답을 바탕으로 AI 기능을 활용해 무료로 작명 서비스를 제공합니다. 
    <p>아래 버튼을 눌러 무료 작명 서비스를 시작해 보세요.</p>
    <button onclick="location.href='/baby/'" type="button">아기 이름 짓기</button>
    <button onclick="location.href='/company/'" type="button">회사 이름 짓기</button>
  </div>
  <div class="col-4"></div>
</div>
<div class="row align-items-center h-25">
  <div class="col-4"></div>
  <div class="col-4"></div>
  <div class="col-4"></div>
</div>
`;

const endpoints = [
  'baby',
  'company'
]

function init() {
  const pathName = document.location.pathname;

  //Use History API and update the URL path
  if (pathName === '/') {
    // do nothing
  }
  else if (pathName.split('/').length == 2) {
    window.location.href = window.location.href + '/';
  }
  else if (pathName.split('/')[2] && pathName.split('/')[2].length > 0) {
    console.log(pathName + ' page not found');
    window.history.pushState({ test: 'test' }, "", "/");
  }
  else if (!endpoints.includes(pathName.split('/')[1])) {
    console.log(pathName + ' page not found');
    window.history.pushState({ test: 'test' }, "", "/");
  }
}

init();

