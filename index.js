const api_url = "https://api.quotable.io/random";

async function getQuote(url) {
    const response = await fetch(url);
    let data = await response.json(); 
    console.log(data.content);
    console.log(data.author);
}

getQuote(api_url);