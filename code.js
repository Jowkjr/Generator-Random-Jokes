const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generatorJoke);

generatorJoke();

async function generatorJoke() {
  const config = {
    headers: {
      Accept: "application/json"
    }
  };

  const res = await fetch("https://icanhazdadjoke.com", config);

  const data = await res.json();

  jokeEl.innerText = data.joke;
}
