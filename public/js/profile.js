const listGenerator = document.querySelector('#list-generator');
  const landingPage = document.querySelector('#landing-page');

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
    listGenerator.setAttribute("style", "visibility:visible");
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
  console.log("click")
  console.log(listGenerator)

  
    createList()
};

    document
    .querySelector('#create')
    .addEventListener('click', showPage);