// fetch the data from the Star Wars API
fetch('https://swapi.dev/api/people/') 
// convert the response to JSON
  .then(response => response.json())
  // access the results property from the JSON data
  .then(data => {
    
    // assign the results array to a variable
    const results = data.results;   
    // get the list element
    const list = document.querySelector('#list');
    // loop through the results array
    results.forEach(character => {
      
      // create a list item for each character
      const listItem = document.createElement('li');
      // set the text content of the list item to the character's name
      listItem.textContent = character.name;
      // append the list item to the list
      list.appendChild(listItem);
    }
    );
  })
  
  // catch any errors and log them to the console
  .catch(error => {
    // log the error to the console
    console.error('Error:', error);
  });
