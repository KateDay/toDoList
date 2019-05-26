function handleFormSubmit() {
  const searchbutton = $('#submitform');
  searchbutton.on("submit", function(event) {
      event.preventDefault();
      let input = $('#textarea').val();
      let api = `http://www.omdbapi.com/?t=${input}&apikey=d566210c`;
      fetch(api)
      .then((resp) => resp.json())
      .then(function(movie) {
          $("#movielist").append(`<li>${movie.Title} - ${movie.Type}</li>`)
      })  
      .catch(function(err) {
        alert(err);
  })
  }) 
}

//Book GET ---- Change Jquery id tags for Separate button
function bookFormSubmit() {
  const bookButton = $('#submitform');
  bookButton.on("submit", function(event) {
      event.preventDefault();
      let input = $('#textarea').val();
      let api = `https://www.googleapis.com/books/v1/volumes?q=${input}&key=AIzaSyDd1bZjix5lQXjGFAZ8x67mblYDt7VtxoA`;
      fetch(api)
      .then((resp) => resp.json())
      .then(function(book) {
          $("#movielist").append(`<li>${book.items[0].volumeInfo.title} - ${book.items[0].volumeInfo.printType}</li>`)
      });  
  })
  .catch(function(err) {
    alert(err);
  }) 
}

//Resto GET --- Consider switching to google places
function restoFormSubmit() {
  const restoButton = $('#testform');
  restoButton.on("submit", function(event) {
      event.preventDefault();
      let input = $('#textarea').val();
      let api = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${input}&inputtype=textquery&fields=types,name&locationbias=circle:60000@51.0486,-114.0708&key=AIzaSyCqtmvXdJHk5KljegWg80BJ3S5Fx0NknKs`;
      fetch(api)
      .then((resp) => resp.json())
      .then(function(resto) {
          $("#movielist").append(`<li>${resto.candidates[0].name}</li>`)
      });  
  })
  .catch(function(err) {
    alert(err);
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

// $('#page').on("click", '#form', function) {}


$(document).ready(function(){
  $('#addToDo').submit(function(event){
    event.preventDefault();
    const txt = $(".textBox").val();
    if (!txt ) {
      return alert("please eneter and item")
    }
    $.ajax({
      method: "POST",
      url: "/update",
      data: $(this).serialize(),
    }).done(function(list){
      renderList(list)
    })
  })
    
    const renderList = list =>{
      console.log(list)
      $list = createList(list);
      $('.tab-content #eat').prepend($list);
    }
  
    const createList = list => {
      const $ul = $('<ul>');
      list.forEach(listItem => {
        const $li = $('<li>');
        $li.append(listItem.title);
        $ul.append($li);
      });
      return $ul;
    }

      // $('.check_button').click(function(){
    // event.preventDefault();
    // function loadList(){
    //   $.ajax({
    //     method: "GET",
    //     url: "/list",
    //   }).done(function(list){
    //     renderList(list)
        
    //   })
    // }
  
    // loadList();
})  
  
  
// })





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



// Google places
// https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${input}&inputtype=textquery&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@47.6918452,-122.2226413&key=AIzaSyCqtmvXdJHk5KljegWg80BJ3S5Fx0NknKs