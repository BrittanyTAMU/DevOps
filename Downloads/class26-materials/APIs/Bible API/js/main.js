//The user will enter book, chapter and verse they want. Get the verse(s) and place them in the DOM
// code for multiple verseres but doesnt input the chapter, book name and verse into the dom for the user, it just inputs the text into the dom
// document.querySelector('button').addEventListener('click', getVerse)
// function getVerse(){
//    let book =  document.querySelector('#book').value
//    let chapter =  document.querySelector('#chapter').value
//    let verse =  document.querySelector('#verse').value
   
//    let url = `https://bible-api.com/${book}:${chapter}:${verse}`
//     fetch(url)
//     .then(res => res.json()) // parse response as JSON
//     .then(data => {
//       console.log(data)
//       document.querySelector('#ID').innerText = `Book ID: ${data.reference}`
//       document.querySelector('#name').innerText = `Book Name: ${data.book_name}`
//       document.querySelector('#chapter').innerText = `Chapter: ${data.chapter}`
//       document.querySelector('#verse').innerText = `Verse: ${data.verse}`
//       document.querySelector('#text').innerText = `Text: ${data.text}`
//     })
//     .catch(err => {
//         console.error('Error:', err);
//     });
// }


document.querySelector('button').addEventListener('click', getVerse);

function getVerse() {
   let book = document.querySelector('#book').value;
   let ranges = document.querySelector('#inputVerse').value.split(',').map(range => range.trim());
   
   let promises = [];
   ranges.forEach(range => {
      let [startVerse, endVerse] = range.split('-').map(Number);
      if (isNaN(endVerse)) {
         endVerse = startVerse;
      }
      for (let verse = startVerse; verse <= endVerse; verse++) {
         let url = `https://bible-api.com/${book}${verse}`;
         promises.push(fetch(url).then(res => res.json()));
      }
   });
   
   Promise.all(promises)
      .then(data => {
         console.log(data);
         data.forEach(verseData => {
            // Extract the book name, chapter, and verse from the response
            let bookName = verseData.reference.split(' ')[0]; // Extract the book name from the reference
            let chapter = parseInt(verseData.reference.split(' ')[1].split(':')[0]); // Extract the chapter number
            let verseNumber = parseInt(verseData.reference.split(' ')[1].split(':')[1]); // Extract the verse number
            let text = verseData.text;

            // Display the extracted information in the DOM
            document.querySelector('#ID').innerText += ` ${verseData.reference}`;
            document.querySelector('#name').innerText += ` ${bookName}`;
            document.querySelector('#chapter').innerText = document.querySelector('#inputChapter').value;
            document.querySelector('#verse').innerText = document.querySelector('#inputVerse').value;
            document.querySelector('#text').innerText += ` ${text}`;
         });
      })
      .catch(err => {
         console.error('Error:', err);
      });
}

