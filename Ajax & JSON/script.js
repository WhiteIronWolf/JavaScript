var request = new XMLHttpRequest();
request.open('GET', 'https://pokeapi.co/api/v2/pokemon/4', true); 
request.send();

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
        var data = JSON.parse(request.responseText);
        const pokemon = document.getElementById('pokemon');
        pokemon.innerHTML = data.name
        console.log(data.name);
  } else {
        console.log("error");
  }
};