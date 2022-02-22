const loadQuotes = () =>{
    fetch("https://api.kanye.rest")
    .then(res => res.json())
    .then(data => quotes(data))
}

const quotes = (apiQuote) =>{
    const quote = document.getElementById('quote');
    quote.innerText = apiQuote.quote
}