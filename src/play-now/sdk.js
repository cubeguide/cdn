const urlMappings = {
  "1v1.lol": "https://nate-games.xyz/0/g/1v1lol/"
};

function getQueryParam() {
  const queryString = window.location.search;
  if (queryString.startsWith('?')) {
    return queryString.slice(1);
  }
  return '';
}

function changeIframeSource() {
  const iframe = document.getElementById('game-id');
  const queryParam = getQueryParam();

  if (queryParam && urlMappings[queryParam]) {
    iframe.src = urlMappings[queryParam];
    iframe.target = '_top';
  } else {
    iframe.src = '';
    iframe.style.display = 'none';
  }
}

window.addEventListener('load', changeIframeSource);

document.querySelector('.arrow-button').addEventListener('click', function() {
  const iframe = document.getElementById('game-id');
  iframe.style.zIndex = '2';
  iframe.style.opacity = '1';
});