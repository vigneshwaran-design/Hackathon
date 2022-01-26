//Write the logic to Get the data
async function getUser() {
    let users;
    try {
      users= fetch(
        "https://api.jikan.moe/v4/anime?q=naruto")
        .then(response => response.json())
        .then(json => json)
      } catch (e) {
        console.log(e);
      }
       return users;
  }
  
  
  async function displayUser() {
    let users = await getUser();
   
    const userList = document.querySelector(".user-list");
    userList.innerHTML = "";
    users.data.forEach((user) => {

      userList.innerHTML += `
      
       <div class="maincontent">
        <div class="card" >
           <img  class="user-avatar" src="${user.images.jpg.image_url}" alt="${user.images.jpg.name}">
             <div class="card-body">
               <h3 class="card-title"><p>Title :<span> ${user.title}</span></p></h3>
      
                  <p class="card-text"><b><h4>Synopsis </h4></b>${user.synopsis}</p>
                  <p>Date : <span>${user.aired.prop.from.day}-${user.aired.prop.from.month}-${user.aired.prop.from.year}</span></p>
                  <p>Type of Series : <span>${user.type}</span</p>
                  <p>IMDB Score : <span>${user.score}</span></p>
                  <p>Rating : <span>${user.rating}</span></p>
      
      
           </div>
       </div>
      </div>
   
  
      `;
    });
    
  }
  
  displayUser();
  
  async function myFunction(){
    var input=document.getElementById("myInput");

    filter=input.value.toUpperCase();
    let user= await getUser();
    user.data.forEach((us)=>{
      let title=`${us.title}`
     
      var title1=title.toUpperCase();
    
    for (var i = 0; i < user.length; i++) {
      
  
      if (title1) {
        if (title1.indexOf(filter) > -1) {`
          <div class="maincontent">
        <div class="card" >
           <img  class="user-avatar" src="${user.images.jpg.image_url}" alt="${user.images.jpg.name}">
             <div class="card-body">
               <h4 class="card-title"><span>Title : </span>${user.title}</h4>
      
                  <p class="card-text"><h4>Synopsis : </h4>${user.synopsis}</p>
                  <p> <span>Date : </span>${user.aired.prop.from.day}-${user.aired.prop.from.month}-${user.aired.prop.from.year}</p>
                  <p><span>Type of Series : </span>${user.type}</p>
                  <p><span>IMDB Score : </span>${user.score}</p>
                  <p><span>Rating : </span>${user.rating}</p>
      
      
           </div>
       </div>
      </div>`
        } else {
          
        }
      }
    }
    })
    

    
    
  }