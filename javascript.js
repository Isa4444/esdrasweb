var jokes = [];

async function fetch100Jokes() {
  for (let i = 0; i < 10; i++) {
    try {
      const response = await fetch('https://official-joke-api.appspot.com/jokes/ten');
      const data = await response.json();
      jokes = jokes.concat(data);
    } catch (error) {
      console.error("Error fetching jokes:", error);
    }
  }

  console.log("Loaded 100 jokes:", jokes);
}

fetch100Jokes();
