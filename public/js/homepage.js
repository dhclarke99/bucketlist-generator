

const apiCall = async () => {
    console.log("click")
    const response = await fetch('https://api.api-ninjas.com/v1/bucketlist', {
        method: 'GET',
        
        headers: { 'X-Api-Key': 'g4eBJJ1vStCoSNn4Hn+3Qg==dciOZWtnf9XNVu4g'},
        contentType: 'application/json',
       
    });
    const data = await response.json()
    console.log(data)
};




document
    .querySelector('#generate')
    .addEventListener('click', apiCall);