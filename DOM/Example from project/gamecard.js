// Selects two elements
const form = document.querySelector('#searchForm');
const currentDiv = document.querySelector('.data');

// Listens for an event
form.addEventListener('submit', async function (e) {
    // Prevent default action of submit
    e.preventDefault();

    // Gets the value from our input/form 
    const searchTerm = form.elements.query.value;

    // awaits the promise to be resolved
    const res = await axios.get(`https://api.rawg.io/api/games?key=05d8fd67c4be4a8487be0fdadcec9020&search=${searchTerm}`)

    // Empty the div with the class data
    currentDiv.innerHTML = "";

    // Function
    function addElement() {
        for (let i = 0; i < 3; i++) {
            
            // creates several nodes or elements
            const newDiv = document.createElement("div");
            const img = document.createElement('IMG');
            const title = document.createElement('h2');
            const form = document.createElement('form');
            const button = document.createElement('button');

            // Adds text to the button node / element
            button.innerText = "Visit game"

            // creates an attribute action
            const att = document.createAttribute("action");

            // Adds a value to the action attribute
            att.value = `/search/${res.data.results[i].id}`
            
            // Adds the attribute to the form node / element
            form.setAttributeNode(att);
    
            // Adds text to the h2 node / element
            title.textContent = res.data.results[i].name;

            // Adds a src for the img node / element
            img.src = res.data.results[i].background_image;

            // Append form, img, and title to the new div node / element
            newDiv.appendChild(form);
            newDiv.appendChild(img);
            newDiv.appendChild(title);

            // Append button to the form node / element
            form.appendChild(button);

            // add the newly created element and its content into the DOM 
            currentDiv.appendChild(newDiv);
        }
    }
    addElement()
})