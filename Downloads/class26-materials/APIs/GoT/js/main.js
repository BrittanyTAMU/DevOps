//The user will click a button. Get a character name, quote, and house and place them in the DOM



document.getElementById('getQuoteButton').addEventListener('click', fetchGoT);




// Function to fetch character from the API
function fetchGoT() {
    
    fetch('https://api.gameofthronesquotes.xyz/v1/characters')
        .then(res => res.json())
        .then(data => {
            // Select a random character from the array
            const randomCharacter = data[Math.floor(Math.random() * data.length)];
            console.log(randomCharacter);
            const randomQuote = randomCharacter.quotes[Math.floor(Math.random() * randomCharacter.quotes.length)];
            console.log(randomQuote);
            

            
            document.getElementById('quote').innerText = randomQuote;
            document.getElementById('characterName').innerText = 'Name: ' + randomCharacter.name;
             // Declare houseName once and assign value based on condition
             const houseName = randomCharacter.house && randomCharacter.house.name ? randomCharacter.house.name : 'N/A';
             document.getElementById('house').innerText =  houseName;


            document.getElementById('slug').innerText = 'Slug: ' + randomCharacter.slug;
        })
                .catch(err => {
                    console.log(`error ${err}`)
                })}
            
