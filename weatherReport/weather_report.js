function showweatherDetails(event) {
    event.preventDefault();

    const city = document.getElementById('city').value;
    const lat = document.getElementById('latitude').value;
    const long = document.getElementById('longitude').value;
    const apiKey = '363aa22fa9642aeeb5bf6223b8267fd7'; // Replace 'YOUR_API_KEY' with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const apiUrlGeo = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            var tempInFht = (data.main.temp * (9 / 5)) + 32
            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                          <p>Temperature: ${data.main.temp} &#8451; ${tempInFht} &#8457;</p>
                          <p>Weather: <br> ${data.weather[0].description} <br> Feels like ${data.main.feels_like} &#8451;</p>
                          <p><p>`;
        })

        .catch(error => {
            console.error('Error fetching weather:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
        });

}


document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);    
