# ☀️ Previsão do Tempo

Este é um projeto simples de previsão do tempo, desenvolvido com React e a API OpenWeather. O usuário pode inserir o nome de uma cidade e receber informações sobre o clima, incluindo temperatura atual, sensação térmica, umidade e descrição das condições meteorológicas.

## Funcionalidades 🌟

- Busca informações meteorológicas de uma cidade inserida pelo usuário.
- Utiliza a API pública OpenWeather para obter os dados.
- Exibe dados como temperatura, sensação térmica, umidade e uma breve descrição das condições climáticas.

## Tecnologias Utilizadas ⚙️

- **React** - Biblioteca JavaScript para criação de interfaces de usuário.
- **Axios** - Cliente HTTP para realizar as requisições à API.
- **OpenWeather API** - Serviço de dados meteorológicos.

## Instalação 📦

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/previsao-tempo.git
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd previsao-tempo
    ```

3. Instale as dependências:
    ```bash
    npm install
    ```

4. Execute o projeto:
    ```bash
    npm start
    ```

O projeto será executado em `http://localhost:3000`.

## Como Usar 🛠️

1. Insira o nome de uma cidade no campo de busca.
2. Clique no botão "Buscar" para obter as informações meteorológicas da cidade.
3. As informações do clima, como temperatura, sensação térmica, umidade e descrição, serão exibidas na tela.

## Estrutura de Código 📁

### Componente Principal - `App.js`

O arquivo `App.js` contém o componente principal da aplicação, que é responsável por:

- Receber o input do usuário através de um campo de texto.
- Fazer a requisição à API OpenWeather com base na cidade fornecida.
- Renderizar o componente `Weatherinfor` que exibe as informações do clima.

```jsx
const [weather, setWeather] = useState();
const inputRef = useRef();

async function searchCity() {
  const city = inputRef.current.value;
  const key = "sua-api-key-aqui";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`;
  const apiData = await axios.get(url);
  setWeather(apiData.data);
}
