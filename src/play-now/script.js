// game name and image

function changeTextAndImage(data) {
    var query = window.location.search.substring(1);
    var queryParams = query.split('&');
    var dynamicText = 'Error fetching json';
    var dynamicImageSrc = '/img-placeholder.svg'; // Default image source

    for (var i = 0; i < queryParams.length; i++) {
        var param = queryParams[i];
        if (data[param]) {
            dynamicText = data[param].title;
            dynamicImageSrc = data[param].imageSrc;
            break;
        }
    }

    document.getElementById('game-h3').textContent = dynamicText;
    document.getElementById('game-img').src = dynamicImageSrc;
}

fetch('game-loader.json')
    .then(response => response.json())
    .then(data => {
        changeTextAndImage(data);
    })
    .catch(error => {
        console.error('Error fetching game title and image', error);
    });
