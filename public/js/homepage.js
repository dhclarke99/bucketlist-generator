

const apiCall = async () => {
    g4eBJJ1vStCoSNn4Hn+3Qg==dciOZWtnf9XNVu4g{
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/bucketlist',
        headers: { 'X-Api-Key': 'g4eBJJ1vStCoSNn4Hn+3Qg==dciOZWtnf9XNVu4g'},
        contentType: 'application/json',
        success: function(result) {
            console.log(result);
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
};




document
    .querySelector('#generate')
    .addEventListener('click', apiCall);