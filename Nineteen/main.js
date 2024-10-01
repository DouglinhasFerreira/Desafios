const apiKey = ;
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&lang=pt_br&q=';

const inputCidade = document.getElementById('input-cidade');
const buttonBuscar = document.getElementById('button-buscar');
const cidadeDisplay = document.getElementById('cidade');
const tempDisplay = document.getElementById('temp');
const umidadeDisplay = document.getElementById('umidade');
const imgPrevisao = document.getElementById('img-previsao');

async function buscarPrevisao(cidade) {
    try {
        const response = await fetch(`${apiUrl}${cidade}&appid=${apiKey}`);
        const data = await response.json();
        
        if (response.status === 404) {
            cidadeDisplay.textContent = "Cidade não encontrada";
            tempDisplay.textContent = "";
            umidadeDisplay.textContent = "";
            imgPrevisao.src = "";
            return;
        }

        cidadeDisplay.textContent = `Tempo em ${data.name}`;
        tempDisplay.textContent = `${Math.round(data.main.temp)}ºC`;
        umidadeDisplay.textContent = `Umidade: ${data.main.humidity}%`;

        const icon = data.weather[0].icon;
        imgPrevisao.src = `https://openweathermap.org/img/wn/${icon}.png`;
        imgPrevisao.alt = data.weather[0].description;

    } catch (error) {
        console.error("Erro ao buscar dados:", error);
        cidadeDisplay.textContent = "Erro ao buscar a previsão";
    }
}

buttonBuscar.addEventListener('click', () => {
    const cidade = inputCidade.value;
    if (cidade) {
        buscarPrevisao(cidade);
    }
});