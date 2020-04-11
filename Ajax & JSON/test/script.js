var request = new XMLHttpRequest(); //XMLHttpRequest() man initialisere at xhr skal intaragere med serveren.
request.open('GET', 'text.json', true); //Specifies the type of request get/post, URL, true/false.
request.send(); //Sender en request til serveren.

//onload fires the function when an XMLHttpRequest transaction completes successfully.
request.onload = function(){


  //Tjekker status ud fra request der bliver sendt. 200 = ok, over 400 = error.
  if (request.status >= 200 && request.status < 400) {
    //JSON.pare(konvetere string om til et javascript object)
    var data = JSON.parse(request.responseText); //responseText returns a string
    console.log(data[0].city);
  } else {
    console.log("error");
  }


};
