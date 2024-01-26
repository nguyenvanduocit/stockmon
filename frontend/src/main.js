import './style.css';
import {FetchStockData} from '../wailsjs/go/main/App';

document.querySelector('#app').innerHTML = `
    <div class="loading" id="loading">Loading...</div>
    <div class="result" id="result"></div>
`;

let loadingElement = document.getElementById("loading");
let resultElement = document.getElementById("result");
resultElement.style.fontSize = "50px";
resultElement.style.textAlign = "center";
// Setup the fetchData function
window.fetchData = function () {
    // Show loading message only if resultElement is empty
    if (!resultElement.innerText) {
        loadingElement.style.display = "block";
        resultElement.style.display = "none";
    }

    // Call App.FetchStockData("TCB")
    try {
        FetchStockData("TCB")
            .then((result) => {
                // Hide loading message
                loadingElement.style.display = "none";
                resultElement.style.display = "block";

                // Update result with data back from App.FetchStockData()
                let currentPrice = result.data[0].cp;
                let formatter = new Intl.NumberFormat('vi-VN', {
                    style: 'currency',
                    currency: 'VND',
                });
                let formattedPrice = formatter.format(currentPrice);
                resultElement.innerText = `${formattedPrice}`;
            })
            .catch((err) => {
                console.error(err);
            });
    } catch (err) {
        console.error(err);
    }
};


// Call fetchData immediately when the app opens
window.fetchData();

// Call fetchData every 2 seconds
setInterval(window.fetchData, 2000);
