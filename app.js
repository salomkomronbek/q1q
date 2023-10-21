let countryInp = document.getElementById('country-inp');
let searchBtn = document.getElementById('search-btn');
let result = document.getElementById('result');

searchBtn.addEventListener('click',()=>{
    let countryName = countryInp.value;
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`; 
    console.log(finalURL);
    fetch(finalURL)
    .then((response) => response.json()) 
    .then((data) => {
        console.log(data[0]);
        console.log(data[0].flags.svg);
        console.log(data[0].name.official);
        console.log(data[0].capital[0]);
        console.log(data[0].region);
        console.log(data[0].population);
        console.log(Object.values(data[0].languages).toString().split(',').join(','));
        result.innerHTML = `
        <img src="${data[0].flags.svg}">
        <h2>${data[0].name.official}</h2>
        <div class="wraper">
        <div class="data-wraper">
        <h4>Capital: <span>${data[0].capital[0]}</span></h4>
        </div>
        </div>


        <div class="wraper">
        <div class="data-wraper">
        <h4>Region: <span>${data[0].region}</span></h4>
        </div>
        </div>


        <div class="wraper">
        <div class="data-wraper">
        <h4>Population: <span>${data[0].population}</span></h4>
        </div>
        </div>

        <div class="wraper">
        <div class="data-wraper">
        <h4>Languange: <span>${Object.values(data[0].languages).toString().split(',').join(',')}</span></h4>
        </div>
        </div>
        `
    })
})