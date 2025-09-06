import axios from 'axios';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Enter city name: ', async (city)=>{
    const apiKey = 'c36ba9048725bf60167e6eb73232710c'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try{
        const res = await axios.get(url);
        console.log(`City Name: ${res.data.name}`);
        console.log(`Current temperature is ${res.data.main.temp}°C`);
        console.log(`Weather description: ${res.data.weather[0].description}`);
    } catch (error) {
        console.error('Error fetching weather data:', error.message);
    } finally {
        rl.close();
    }
})