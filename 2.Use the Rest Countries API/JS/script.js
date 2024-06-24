document.addEventListener("DOMContentLoaded", function() {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
            const countriesContainer = document.getElementById('countries');
            data.forEach(country => {
                // Log country names
                console.log(country.name.common);
                
                // Create country element
                const countryElement = document.createElement('div');
                countryElement.classList.add('country');
                
                // Country flag
                const flag = document.createElement('img');
                flag.src = country.flags.png;
                flag.alt = `Flag of ${country.name.common}`;
                
                // Country name
                const countryName = document.createElement('h2');
                countryName.textContent = country.name.common;
                
                // Country details
                const countryDetails = document.createElement('p');
                countryDetails.innerHTML = `
                    <strong>Region:</strong> ${country.region} <br>
                    <strong>Sub-region:</strong> ${country.subregion} <br>
                    <strong>Population:</strong> ${country.population.toLocaleString()}
                `;
                
                // Append elements to country element
                countryElement.appendChild(flag);
                countryElement.appendChild(countryName);
                countryElement.appendChild(countryDetails);
                
                // Append country element to container
                countriesContainer.appendChild(countryElement);
            });
        })
        .catch(error => console.error('Error fetching countries:', error));
});
