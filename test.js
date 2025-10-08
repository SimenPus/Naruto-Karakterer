document.getElementById("searchBtn").addEventListener("click", function () {
    fetch("https://dattebayo-api.onrender.com/characters")
        .then(response => response.json())
        .then(data => {
            // console.log(data.characters);
            let myData = data.characters
            let myValue = document.getElementById("searchInput").value
            myData.forEach(element => {
                if (element.name == myValue) {
                    console.log(element);
                    console.log(element.uniqueTraits[0]);
                    // console.log(element.images[0]);
                    // console.log(element.images[1]);
                    // console.log(element.personal.birthdate);

                    if (img.src == [0]) {
                        
                    }

                    result.innerHTML = `
        <h2>${element.name}</h2>
        <p>Birthdate: ${element.personal.birthdate}</p>
        <p>Unique Traits: ${element.uniqueTraits[0]}</p>
        <img src="${element.images[0]}" width="200">
        <img src="${element.images[1]}" width="200">
      `;

                }

            });
        })
})