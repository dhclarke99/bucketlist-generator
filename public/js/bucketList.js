// const listGenerator = document.querySelector('#list-generator');
//   const landingPage = document.querySelector('#landing-page');

// const createList = async (event) => {
// const title = document.querySelector('#title-create').value;
// console.log(title)
//   const response = await fetch('/api/bucketlists', {
//     method: 'POST',
//     body: JSON.stringify({title}),
//     headers: { 'Content-Type': 'application/json' },
//   });
//   console.log(JSON.stringify({title}))
//   if (response.ok) {
//     listGenerator.setAttribute("style", "visibility:visible");
//     console.log("response worked")
//     // If successful, redirect the browser to the profile page
//     // document.location.replace('/profile');
//     // const getLists = await fetch('/profile', {
//     //   method: 'GET',
//     //   // body: JSON.stringify({ email, password }),
//     //   headers: { 'Content-Type': 'application/json' },
//     } else {
//     console.log("error")
//     alert(response.statusText);
//   }
// }

// const showPage = async (event) => {
//   event.preventDefault();
//   console.log("click")
//   console.log(listGenerator)

//   if (listGenerator.getAttribute("style") === "visibility:hidden") {
//     createList()
//   } else {
//     return
//   }

// }


{/* <input class="form-input" type="text" id="name-signup" /> */}





const travelCategory = async (event) => {
  event.preventDefault();
  console.log("click")
 
  // Collect values from the login form
  const body = document.querySelector('#item-body').textContent;
  const category = "travel";
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const bucket_list_id = id;

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
      document.location.replace(`/bucketlist/${id}`);
      // const getLists = await fetch('/profile', {
      //   method: 'GET',
      //   // body: JSON.stringify({ email, password }),
      //   headers: { 'Content-Type': 'application/json' },
      // });
      console.log(id)
    } else {
      console.log("error")
      alert(response.statusText);
    }
  }
}
const foodCategory = async (event) => {
  event.preventDefault();
  console.log("click")
 
  // Collect values from the login form
  const body = document.querySelector('#item-body').textContent;
  const category = "food";
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const bucket_list_id = id;

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
      document.location.replace(`/bucketlist/${id}`);
      // const getLists = await fetch('/profile', {
      //   method: 'GET',
      //   // body: JSON.stringify({ email, password }),
      //   headers: { 'Content-Type': 'application/json' },
      // });
      console.log(id)
    } else {
      console.log("error")
      alert(response.statusText);
    }
  }

  
}

const adrenalineCategory = async (event) => {
  event.preventDefault();
  console.log("click")
 
  // Collect values from the login form
  const body = document.querySelector('#item-body').textContent;
  const category = "adrenaline";
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const bucket_list_id = id;

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
      document.location.replace(`/bucketlist/${id}`);
      // const getLists = await fetch('/profile', {
      //   method: 'GET',
      //   // body: JSON.stringify({ email, password }),
      //   headers: { 'Content-Type': 'application/json' },
      // });
      console.log(id)
    } else {
      console.log("error")
      alert(response.statusText);
    }
  }

  
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
  
    const listContainer = document.querySelector('#container');
  
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
    .querySelector('#generate')
    .addEventListener('click', apiCall);
    // document
    // .querySelector('#create')
    // .addEventListener('click', showPage);

