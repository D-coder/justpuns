function joke(){
    fetch("https://sv443.net/jokeapi/v2/joke/Pun?format=json", {
      "method": "GET",
      "headers": {
          "x-rapidapi-host": "jokeapi.p.rapidapi.com",
          "x-rapidapi-key": "3e84bc4b26msh0c3ead3ae7066aap1bcf77jsn634902d56108"
      }
  })
  .then(response => response.json())
  .then(data => {
      console.log(data)
      let joke1 = data.setup
      let joke2 = data.delivery ? data.delivery : data.joke
      document.getElementById('pun1').textContent= joke1 
      document.getElementById('pun2').textContent=joke2
    })
  .catch(err => {
      console.log(err);
      
      
  });
    
              }