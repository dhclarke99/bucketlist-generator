const apiCall = async () => {
    console.log("click");
  
    const response = await fetch('https://api.api-ninjas.com/v1/bucketlist', {
      method: 'GET',
  
      headers: { 'X-Api-Key': 'g4eBJJ1vStCoSNn4Hn+3Qg==dciOZWtnf9XNVu4g' },
      contentType: 'application/json',
  
    });
  
    const data = await response.json();
    console.log(data.item);
  
    const listContainer = document.querySelector('#container');
  
    // Check if a child element exists
    if (listContainer.querySelector('h2')) {
        listContainer.querySelector('h2').textContent = data.item;
      } else {
        const listElement = document.createElement('div');
        listElement.innerHTML = `<h2>${data.item}</h2>`;
        listContainer.appendChild(listElement);
      }
  
  };
  
  document
    .querySelector('#generate')
    .addEventListener('click', apiCall);