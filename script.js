function fetchData() {
    fetch('http://192.168.101.4:3000/asesoria_energetica')
        .then(response => response.json())
        .then(data => {
            displayData(data);
            renderChart(data);
        })
        .catch(error => console.error('Error fetching data:', error));
}

function displayData(data) {
    const dataList = document.getElementById('data-list');
    dataList.innerHTML = '';
    data.forEach(item => {
        const listItem = document.createElement('li');
        listItem.className = 'data-item';
        listItem.innerHTML = `
            <h3>${item.NOMBRE}</h3>
            <p>CIF: ${item.CIF}</p>
            <p>TARIFA: ${item.TARIFA}</p>
            <p>Comercializadora: ${item.COMERCIALIZADORA}</p>
            <p>Estado: ${item.ESTADO}</p>
        `;
        dataList.appendChild(listItem);
    });
}

function filterData() {
    const filterValue = document.getElementById('filterInput').value.toUpperCase();
    const filteredData = [];
    const dataList = document.getElementById('data-list');
    const items = dataList.getElementsByClassName('data-item');
    for (let i = 0; i < items.length; i++) {
        const name = items[i].getElementsByTagName('h3')[0].innerText.toUpperCase();
        const cif = items[i].getElementsByTagName('p')[0].innerText.toUpperCase();
        const comercializadora = items[i].getElementsByTagName('p')[2].innerText.toUpperCase();
        const estado = items[i].getElementsByTagName('p')[3].innerText.toUpperCase();
        if (name.includes(filterValue) || cif.includes(filterValue) || comercializadora.includes(filterValue) || estado.includes(filterValue)) {
            filteredData.push(items[i]);
        }
    }
    displayFilteredData(filteredData);
}

function displayFilteredData(filteredData) {
    const dataList = document.getElementById('data-list');
    dataList.innerHTML = '';
    filteredData.forEach(item => {
        dataList.appendChild(item);
    });
}

function renderChart(data) {
    const estados = {};
    data.forEach(item => {
        estados[item.ESTADO] = estados[item.ESTADO] ? estados[item.ESTADO] + 1 : 1;
    });

    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Object.keys(estados),
            datasets: [{
                label: 'Cantidad por Estado',
                data: Object.values(estados),
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

window.onload = fetchData;
