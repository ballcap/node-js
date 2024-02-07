// Fetch the characters data from chars_ff7.json
    fetch('chars_ff7.json')
        .then(response => response.json())
        .then(charactersData => {
            // Get the select element
            var selectElement = document.getElementById("chars_ff7");
            var outputDiv = document.getElementById("output_ff7");

            // Populate the select element with options based on charactersData
            charactersData.forEach(function(character) {
                var option = document.createElement("option");
                option.value = character.name; // You can set the value to any relevant data
                option.text = character.name; // Display the character name
                selectElement.add(option);
            });

          // Add event listener to the select element
          selectElement.addEventListener("change", function() {
              // Get the selected character
              var selectedCharacter = charactersData.find(function(character) {
                  return character.name === selectElement.value;
              });

              // Display the details in the output div
              if (selectedCharacter) {
                  outputDiv.innerHTML = `
                      <p>Name: ${selectedCharacter.name}</p>
                      <p>Job: ${selectedCharacter.job}</p>
                      <p>Age: ${selectedCharacter.age}</p>
                      <p>Weapon: ${selectedCharacter.weapon}</p>
                      <div class='limits'>
                          <h1>Limits</h1>
                          ${selectedCharacter.limits.map(limit => `<p>${limit}</p>`).join('')}
                      </div>
                  `;
              } else {
                  outputDiv.innerHTML = ""; // Clear the output if no character is selected
              }
          });
        })
        .catch(error => console.error('Error fetching characters data:', error));