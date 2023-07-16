const userInput = document.querySelector(".user-input")
const deleteBtn = document.querySelectorAll(".delete-btn")



const deleteItem = async (event) => {
  event.preventDefault();
  const bucket_list_item_id = event.target.id

  if (bucket_list_item_id) {
    // Send a POST request to the API endpoint
    const response = await fetch(`/api/bucketlistitems/${bucket_list_item_id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });

    const bucket_list_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];

    console.log(response)

    if (response.ok) {
      
      
      // If successful, redirect the browser to the bucketlist page
      document.location.replace(`/bucketlist/${bucket_list_id}`);
      console.log(id)
    } else {
      console.log("error")
      alert(response.statusText);
    }
  }
}

deleteBtn.forEach(btn => {
  btn.addEventListener("click", deleteItem)
})


const travelCategory = async (event) => {
  event.preventDefault();
  console.log("click")
  
  if (!userInput.value) {
    const body = document.querySelector('#item-body').textContent;
     // Collect values from the login form
  
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
      console.log(id)
    } else {
      console.log("error")
      alert(response.statusText);
    }
  }

  
  } else if (userInput.value) {
    const body = userInput.value;
    // Collect values from the login form
 
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
     console.log(id)
   } else {
     console.log("error")
     alert(response.statusText);
   }
 }
  }
 
 
}
const foodCategory = async (event) => {
  event.preventDefault();
  console.log("click")
  
  if (!userInput.value) {
    const body = document.querySelector('#item-body').textContent;
     // Collect values from the login form
  
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
      console.log(id)
    } else {
      console.log("error")
      alert(response.statusText);
    }
  }

  
  } else if (userInput.value) {
    const body = userInput.value;
    // Collect values from the login form
 
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
     console.log(id)
   } else {
     console.log("error")
     alert(response.statusText);
   }
 }
  }
 
 
}

const adrenalineCategory = async (event) => {
  event.preventDefault();
  console.log("click")
  
  if (!userInput.value) {
    const body = document.querySelector('#item-body').textContent;
     // Collect values from the login form
  
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
      console.log(id)
    } else {
      console.log("error")
      alert(response.statusText);
    }
  }

  
  } else if (userInput.value) {
    const body = userInput.value;
    // Collect values from the login form
 
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
     console.log(id)
   } else {
     console.log("error")
     alert(response.statusText);
   }
 }
  }
 
 
 
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
     
  };
  
  const shareEmail = async () => {
    console.log("click");
    const email = document.querySelector("#enter-email");
    const emailBody = JSON.stringify({"email": email.value})
    const response = await fetch('/api/email',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: emailBody
    });
   
    if (response.ok) {
      console.log(`email successfully sent to ${email.value}`)
    } else {
      console.log(`Error! ${response}`)
    }
  
  }
  
  const emailButton = document.querySelector('#email')
  
  emailButton.addEventListener('click', async function() {
    shareEmail();
  })

  document
    .querySelector('#generate')
    .addEventListener('click', apiCall);
    // document
    // .querySelector('#email')
    // .addEventListener('click', sendEmail);
   

