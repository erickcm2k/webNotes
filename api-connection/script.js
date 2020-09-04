const app = document.getElementById("root");

const logo = document.createElement("img");
logo.src = "logo.png";

const container = document.createElement("div");
container.setAttribute("class", "container");

app.appendChild(logo);
app.appendChild(container);

ghibliUrl = "https://ghibliapi.herokuapp.com/films";
fakeAPI = "http://localhost:3000/data";
getData(ghibliUrl);

async function getData(api) {
  await fetch(api)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject({
          status: response.status,
          statusText: response.statusText,
        });
      }
    })
    .then(function (data) {
      console.log("success", data);
      renderData(data);
    })
    .catch(function (error) {
      console.log("Error", error);
      renderError();
    });
}

function renderData(data) {
  data.forEach((movie) => {
    // Create a div with a card class
    const card = document.createElement("div");
    card.setAttribute("class", "card");

    // Create an h1 and set the text content to the film's title
    const h1 = document.createElement("h1");
    h1.textContent = movie.title;

    // Create a p and set the text content to the film's description
    const p = document.createElement("p");
    movie.description = movie.description.substring(0, 300); // Limit to 300 chars
    p.textContent = `${movie.description}...`; // End with an ellipses

    // Append the cards to the container element
    container.appendChild(card);

    // Each card will contain an h1 and a p
    card.appendChild(h1);
    card.appendChild(p);
  });
}

function renderError() {
  const card = document.createElement("div");
  card.setAttribute("class", "card");

  const h1 = document.createElement("h1");
  h1.textContent = "Can not get data from Ghibli Studios :(";

  const p = document.createElement("p");
  p.textContent = "Please check your internet connection.";

  container.appendChild(card);
  card.appendChild(h1);
  card.appendChild(p);
}
