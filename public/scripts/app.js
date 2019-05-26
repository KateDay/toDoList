//   $.ajax({
//     method: "GET",
//     url: "/api/users"
//   }).done((users) => {
//     for(user of users) {
//       $("<div>").text(user.name).appendTo($("body"));
//     }
//   });;
// });

//   $.ajax({
//     method: "GET",
//     url: "/api/users"
//   }).done((users) => {
//     for(user of users) {
//       $("<div>").text(user.name).appendTo($("body"));
//     }
//   });;
// });  "restos": (input) => `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${input}&inputtype=textquery&fields=types,name&locationbias=circle:60000@51.0486,-114.0708&key=AIzaSyCqtmvXdJHk5KljegWg80BJ3S5Fx0NknKs`,

const restaurant = {
    
  "Cactus": "Cactus Club Cafe",
  "earls": "Earls",
  "Popeyes": "Popeyes",
  "Minas": "Minas Brazilian Steakhouse",
  "earls": "Earls",
  "Keg": "The Keg",
  "Osteria": "Osteria",
  "Menyatai": "Menyatai",
  "Muku": "Muku Japanese Ramen",
  "Little Spice": "Little Spice",
  "a&w": "A&W",
  "El Furniture": "El Furniture Warehouse",
  "Joey": "Joey Eau Claire"      
}


const APIS = {
  "restos": (input) => `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${input}&inputtype=textquery&fields=types,name&locationbias=circle:60000@51.0486,-114.0708&key=AIzaSyCqtmvXdJHk5KljegWg80BJ3S5Fx0NknKs`,
  "books": (input) => `https://www.googleapis.com/books/v1/volumes?q=${input}&key=AIzaSyDd1bZjix5lQXjGFAZ8x67mblYDt7VtxoA`,
  "movies": (input) => `http://www.omdbapi.com/?t=${input}&apikey=d566210c`,
  "products": (input) => `https://api.nutritionix.com/v1_1/search/${input}?results=0%3A20&cal_min=0&cal_max=50000&fields=item_name%2Cbrand_name&appId=34f1c2e9&appKey=9bd833c435be73e49737f80d8e005ab6`
}

//API Call
function onFormSubmit() {
  const form = $('#addToDo');
  form.on("submit", function(event) {
      event.preventDefault();
      const input = $('#textarea').val();
      const apiChoice = $('select.checkIt').val();
      const api = APIS[apiChoice](input);
      console.log("Choice api", input)

      fetch(api)
      .then((resp) => resp.json())
      .then(function(data) {
        if(apiChoice === 'movies') {
          return $("#watch-items").append(`<li>${data.Title} - ${data.Type}</li>`)
        }

        if (apiChoice === 'books') {
          return $("#read-items").append(`<li>${data.items[0].volumeInfo.title} - ${data.items[0].volumeInfo.printType}</li>`)
        }

        if (apiChoice === 'products') {
          return $("#buy-items").append(`<li>${data.hits[19].fields.item_name}</li>`)
        }
      })
      .catch(function(err) {
        alert(err)
      })  
  })
}

function onRestoSubmit() {
  const form = $('#addToDo');
    form.on("submit", function(event) {
    event.preventDefault();
  const restoObj = restaurant
  const restoInput = $('#textarea').val()
  for (key in restoObj) {
    if (restoInput === key) {
      console.log(restaurant[key]);
    }
  }
})
  }

function renderItems(items) {
    $("#watch-items").empty();
    $("#eat-items").empty();
    $("#read-items").empty();
    $("#buy-items").empty();
    $("#misc-items").empty();
      for (let item of items) {
        let liWrap = $("<li>").addClass("cat-list");
        let labelWrap = $("<label>").addClass("label-checkbox");
        let inputWrap = $("<input type='checkbox'>").addClass("checkbox");
      
        liWrap.append(labelWrap).append(inputWrap);
      }
  }

$(document).ready(function(){
onRestoSubmit()
onFormSubmit();
})



// https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&types=food&name=attica&key=AIzaSyCqtmvXdJHk5KljegWg80BJ3S5Fx0NknKs




// app.listen(PORT, () => {
//   console.log("Example app listening on port " + PORT);
// });

// https://cse.google.com/cse?cx=017873622156579969207:tayz2vdgawe

// Search engine ID 
// 017873622156579969207:tayz2vdgawe


//

//Google Books
// https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey


//GOOGLE API
//AIzaSyDd1bZjix5lQXjGFAZ8x67mblYDt7VtxoA


//Zomato API Key
// 7fc0ba52b112ebf563c06ad6256d9b8e

//Zomato Restos
// https://developers.zomato.com/api/v2.1/search?entity_id=300&entity_type=city&q=Cactus



// GOOGLE API WORKS /// MAKE DATABASE OF 100 PLACES
// https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=cactus&inputtype=textquery&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:100000@51.0486,-114.0708&key=AIzaSyCqtmvXdJHk5KljegWg80BJ3S5Fx0NknKs

//Yelp API
// SAkDMYC750wPdnzXMGp410qhCIg4K3FLQMa8g_QpnsPo1i33IAOm4JUCXoxvp0ihDQ94kDGYpOBtLHga98liNiZ1sMKPiXFU-6ndPZOF0OfD0La7m2DgbiB0bYvoXHYx
// https://api.yelp.com/v3/businesses/search
// Client ID
// 6gEGx3vrvLfzOlo5K9KBMA

// en_CA

// Bearer SAkDMYC750wPdnzXMGp410qhCIg4K3FLQMa8g_QpnsPo1i33IAOm4JUCXoxvp0ihDQ94kDGYpOBtLHga98liNiZ1sMKPiXFU-6ndPZOF0OfD0La7m2DgbiB0bYvoXHYxapi.yelp.com/v3/businesses/search?term=delis&latitude=51.0486&longitude=-114.0708


// NutritionIX AppID: 34f1c2e9

// Application KEY: 9bd833c435be73e49737f80d8e005ab6
// https://trackapi.nutritionix.com/v2/search/item
                                  // /v2/search/instant

                                  // https://api.nutritionix.com/v1_1/search/mcdonalds?results=0:20&fields=item_name,nf_calories&appId=34f1c2e9&appKey=9bd833c435be73e49737f80d8e005ab6