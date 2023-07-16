const listGenerator = document.querySelector('#list-generator');
  const landingPage = document.querySelector('#landing-page');
  const deleteBtn = document.querySelectorAll(".delete-btn")



  const deleteItem = async (event) => {
    event.preventDefault();
    const bucket_list_id = event.target.id
    console.log(bucket_list_id)
  
    if (bucket_list_id) {
      // Send a POST request to the API endpoint
      const response = await fetch(`/api/bucketlists/${bucket_list_id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });
  
    
      console.log(response)
  
      if (response.ok) {
        
        
        // If successful, redirect the browser to the bucketlist page
        document.location.replace(`/profile`);
        console.log(id)
      } else {
        console.log(err)
        alert(response.statusText);
      }
    }
  }
  
  deleteBtn.forEach(btn => {
    btn.addEventListener("click", deleteItem)
  })

const createList = async (event) => {
const title = document.querySelector('#title-create').value;
console.log(title)
  const response = await fetch('/api/bucketlists', {
    method: 'POST',
    body: JSON.stringify({title}),
    headers: { 'Content-Type': 'application/json' },
  });
  console.log(JSON.stringify({title}))
  if (response.ok) {
  
    console.log("response worked")
     document.location.replace('/profile');
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
    createList()
};

    document
    .querySelector('#create')
    .addEventListener('click', showPage);