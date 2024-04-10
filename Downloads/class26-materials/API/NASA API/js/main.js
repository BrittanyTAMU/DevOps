document.getElementById('randomMediaButton').addEventListener('click', fetchRandomMedia);

function fetchRandomMedia() {
    fetch('https://images-api.nasa.gov/search?q=apollo%2011')
        .then(response => response.json())
        .then(data => {
            const items = data.collection.items;
            const randomIndex = Math.floor(Math.random() * items.length);
            const randomItem = items[randomIndex];

            const title = randomItem.data[0].title;
            const description = randomItem.data[0].description;
            const dateCreated = randomItem.data[0].date_created;
            const keywords = randomItem.data[0].keywords.join(', ');

            const mediaType = randomItem.data[0].media_type;
            let mediaElement;

            if (mediaType === 'image') {
                mediaElement = document.createElement('img');
                mediaElement.src = randomItem.links[0].href;
            } else if (mediaType === 'video') {
                mediaElement = document.createElement('video');
                mediaElement.controls = true;
                mediaElement.src = randomItem.links[0].href;
            }

            const mediaContainer = document.getElementById('mediaContainer');
            mediaContainer.innerHTML = '';

            const mediaInfo = document.createElement('div');
            mediaInfo.innerHTML = `
                <h2>Title: ${title}</h2>
                <p>Description: ${description}</p>
                <p>Date Created: ${dateCreated}</p>
                <p>Keywords: ${keywords}</p>
            `;
            mediaContainer.appendChild(mediaElement);
            mediaContainer.appendChild(mediaInfo);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
