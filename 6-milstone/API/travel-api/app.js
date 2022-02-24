const loadCountry = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadCountry()

const displayCountries = (countries) => {
    const countiesDiv = document.getElementById("counties");
    countries.forEach(country =>{
        // console.log(country)
        const div = document.createElement('div')
        div.classList.add('country')
        div.innerHTML = `
            <h3>${country.name}</h3>
            <h4> City:${country.capital}</h4>
            <p> Numeric Code:${country.numericCode}</p>
            <button class="button" onclick="detailsButton('${country.name}')">see more</button>

            
        `
        countiesDiv.appendChild(div)

    })
}
const detailsButton=(name)=>{
    
    const url = ` https://restcountries.com/v2/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountriesDetails(data[0]))
}
const displayCountriesDetails=(country)=>{
    console.log(country)
    const countiesDetailsDiv = document.getElementById('conties-detiles');
    const div = document.createElement('div');
    div.innerHTML =`
        <h3>${country.name}</h3>
        <h3>area:${country.area}</h3>
        <h3>demonym:${country.demonym}</h3>
        <h3>region:${country.region}</h3>
        <img width="200px" src="${country.flag}" alt="">
        
    `
    countiesDetailsDiv.appendChild(div)
 
}