const createList = async (event) => {
const title = document.querySelector('#title-create').textContent;
  const response = await fetch('/api/bucketlists', {
    method: 'POST',
    body: json.stringify({title}),
    headers: { 'Content-Type': 'application/json' },
  });
  console.log(json.stringify({title}))
  if (response.ok) {
    console.log("response worked")
    // If successful, redirect the browser to the profile page
    // document.location.replace('/profile');
    // const getLists = await fetch('/profile', {
    //   method: 'GET',
    //   // body: JSON.stringify({ email, password }),
    //   headers: { 'Content-Type': 'application/json' },
    } else {
    console.log("error")
    alert(response.statusText);
  }
}

const showPage = async (event) => {
  event.preventDefault();
  console.log("click")
  const listGenerator = document.querySelector('#list-generator');
  const landingPage = document.querySelector('#landing-page');

  if (listGenerator.getAttribute("style") === hidden) {
    createList()
  } else {
    return
  }

}








const travelCategory = async (event) => {
  event.preventDefault();
  console.log("click")
  
  // Collect values from the login form
  const body = document.querySelector('#item-body').textContent;
  const category = "travel";
  const bucket_list_id = 4;
  console.log(body);
  console.log(category);
  console.log(bucket_list_id);

  const requestBody = JSON.stringify({ body, category, bucket_list_id: parseInt(bucket_list_id) });
  console.log(requestBody);
  if (body && category) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/bucketlistitems', {
      method: 'POST',
      body: requestBody,
      headers: { 'Content-Type': 'application/json' },
    });

    console.log(response)

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/profile');
      const getLists = await fetch('/profile', {
        method: 'GET',
        // body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      console.log(getLists)
    } else {
      console.log("error")
      alert(response.statusText);
    }
  }
}
const foodCategory = async () => {

  
}

const adrenalineCategory = async () => {

  
}


const apiCall = async () => {
    console.log("click");
  
    const response = await fetch('https://api.api-ninjas.com/v1/bucketlist', {
      method: 'GET',
  
      headers: { 'X-Api-Key': 'g4eBJJ1vStCoSNn4Hn+3Qg==dciOZWtnf9XNVu4g' },
      contentType: 'application/json',
  
    });
  
    const data = await response.json();
    console.log(data.item);
  
    const listContainer = document.querySelector('#profile-container');
  
    // Check if a child element exists
    if (listContainer.querySelector('h2')) {
        listContainer.querySelector('h2').textContent = data.item;
      } else {
        const listElement = document.createElement('div');
        
        listElement.innerHTML = `<h2 id="item-body">${data.item}</h2>`;
        listContainer.appendChild(listElement);
      }
      document
      .querySelector('#travel')
      .addEventListener('click', travelCategory);
      document
      .querySelector('#food')
      .addEventListener('click', foodCategory);
      document
      .querySelector('#adrenaline')
      .addEventListener('click', adrenalineCategory);
  };
  
  document
    .querySelector('#profile-generate')
    .addEventListener('click', apiCall);
    document
    .querySelector('#create')
    .addEventListener('click', showPage);