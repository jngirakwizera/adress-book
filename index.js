let arrayOfPosts;

// this function waits for the web page to be loaded, when it does it will run the code inside of it which happen to be getPosts()
window.onload = function() {
  getPosts()

}

// this function is going to make a fetch request to the url inside it's parameter brackets (). Then it will turn the response (data it's getting back), saved here as res. The res.json will not be saved as posts and saved into the variable, arrayOfPosts
const getPosts = () => {
  fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then((posts)=>{
        arrayOfPosts = posts.results;
        displayPost();
    });
}

// this function logs the results in your browsers console
const consolePosts = () => {
  console.log(arrayOfPosts)
}


const show = (buttonId) => {
  document.getElementById(`dob_${buttonId}`).style.visibility='visible';
  document.getElementById(`address_${buttonId}`).style.visibility='visible';
  document.getElementById(`email_${buttonId}`).style.visibility='visible';
  document.getElementById(`phone_${buttonId}`).style.visibility='visible';
}

// this function creates elements inside the all-posts ul, then appends text inside it with the posts that were returned in the request.
const displayPost = () => {
  const allPosts = document.getElementById('all-posts')
  arrayOfPosts.map((post, index) => {

       let table = document.createElement("table");
       let row = table.insertRow(0);
       let cell1 = row.insertCell(0);
       let cell2 = row.insertCell(1);
       let button = row.insertCell(2);
       cell1.innerHTML = ` <img src="${post.picture.medium}"> `;
       cell2.innerHTML = `${post.name.first} ${post.name.first}`;
       button.innerHTML = `<button id="${index}" onClick="show(this.id)">Show</button>`;
   
   
       let rowtwo = table.insertRow(1);
       rowtwo.style.visibility = "hidden";
       rowtwo.id = `dob_${index}`;
       let celldob = rowtwo.insertCell(0);
       let date = new Date(post.dob.date);
       celldob.innerHTML = `<u>Date of birth</u>: ${date}`;
   
   
       let rowThree = table.insertRow(2);
       rowThree.style.visibility = "hidden";
       rowThree.id = `address_${index}`;
       let addresscell = rowThree.insertCell(0);
       addresscell.innerHTML = `<u>Address:</u> ${post.location.street.number} ${post.location.street.name}`;
   
   
       let rowfour = table.insertRow(3);
       rowfour.style.visibility = "hidden";
       rowfour.id = `email_${index}`;
       let emailcell = rowfour.insertCell(0);
       emailcell.innerHTML = ` <u>Email</u> ${post.email}`;
   
   
       let rowfive = table.insertRow(4);
       rowfive.style.visibility = "hidden";
       rowfive.id = `phone_${index}`;
       let phonecell = rowfive.insertCell(0);
       phonecell.innerHTML = `<u>Phone</u> ${post.phone}`;
   
       allPosts.append(table);
  })
}

// Your job now is to follow the functions above and use them as templates to build the functionality the buttons in the index.html file already have laid out in it. This way you can learn how to build fetch requests and work with other apis and become a real developer!!