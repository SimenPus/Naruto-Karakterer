const input = document.getElementById("searchInput");
const button = document.getElementById("searchBtn");
const result = document.getElementById("result");

button.addEventListener("click", function() {
  const name = input.value.toLowerCase();

  fetch("https://dattebayo-api.onrender.com/characters")
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      const characters = data.characters;
      let found = null;

      for (let i = 0; i < characters.length; i++) {
        if (characters[i].name.toLowerCase().includes(name)) {
          found = characters[i];
          break;
        }
      }

      if (found == null) {
        result.innerHTML = "Fant ingen karakter.";
        return;
      }

      let birthdate = "Ukjent";
      if (found.birthdate) {
        birthdate = found.birthdate;
      } else if (found.personal && found.personal.birthdate) {
        birthdate = found.personal.birthdate;
      }

      let traits = "Ingen data";
      if (found.uniqueTraits) {
        traits = found.uniqueTraits;
      } else if (found.personal && found.personal.uniqueTraits) {
        traits = found.personal.uniqueTraits;
      }

      if (Array.isArray(traits)) {
        traits = traits.join(", ");
      }

      let image = "";
      if (found.images && found.images.length > 0) {
        image = found.images[0];
      }

      result.innerHTML = `
        <h2>${found.name}</h2>
        <p>Birthdate: ${birthdate}</p>
        <p>Unique Traits: ${traits}</p>
        <img src="${image}" width="200">
      `;
    })
    .catch(function() {
      result.innerHTML = "Noe gikk galt.";
    });
});

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    button.click();
  }
});
