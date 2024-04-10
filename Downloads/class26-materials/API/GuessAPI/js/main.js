//The user will enter first name. Get an estimate of their name and their location and place them in the DOM

document.querySelector('button').addEventListener('click', getAge)
function getAge(){
   let name =  document.querySelector('input').value
   let encodedName = encodeURIComponent(name) // makes your GuessAge API work with spaces between the names
    fetch(`https://api.agify.io?name=${encodedName}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.age)
      document.querySelector('#age').innerText = `Estimated Age: ${data.age}`
    })
    .catch(err => {
        console.error('Error:', err);
    });
}