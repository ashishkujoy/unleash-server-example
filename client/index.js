
const fetchTokens = () => {
    axios.get('http://localhost:4242/api/client/features')
    .then(({data}) =>  {
        document.getElementById('tokens').innerText = JSON.stringify(data)
    })
}


window.onload = () => {
    document.getElementById('fetchButton')
    .onclick = fetchTokens
}