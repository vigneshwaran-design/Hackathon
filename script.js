//Write the logic to Get the data
async function getUser() {
    let users;
    try {
      const data = await fetch(
        "https://api.jikan.moe/v4/anime?q=naruto",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      users = await data.json();
      // console.log(users);
    } catch (error) {
      console.log(error);
    }
    return users;
  }
  
//   getUser();
  
  async function displayUser(user) {
    let users = await getUser();
    //   console.log(users);
    const userList = document.querySelector(".user-list");
    userList.innerHTML = "";
    users.forEach((user) => {
      // console.log(user.name);
      userList.innerHTML += `
      <div class="user-container">
      <img  class="user-avatar" src="${user.data.images.jpg.image_url}" alt="${user.name}">
      <div>
      
      <h3>${user.title}</h3>
      <p>${user.email}</p>
      <button onClick="deleteUser(${user.id})">Delete</button>
      <button onClick="editUser(${user.id})">Edit</button>
      </div>
      </div>
  
      `;
    });
    // document.getElementsByTagName(input).reset();
  }
  
  displayUser();
  
  //Write the logic to delete the data
  async function deleteUser(id) {
    try {
      const data = await fetch(
        `https://61ee6e58d593d20017dbae13.mockapi.io/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const users = await data.json();
      console.log(users);
      displayUser();
    } catch (error) {
      console.log(error);
    }
  }
  
  async function addUser() {
    const userName = document.querySelector(".add-user-name").value;
    const userAvatar = document.querySelector(".add-user-avatar").value;
  
    const data = await fetch(
      "https://61ee6e58d593d20017dbae13.mockapi.io",
      {
        method: "POST",
        body: JSON.stringify({
          name: userName,
          avatar: userAvatar,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    displayUser();
  }
  
  async function editUser(id) {
    const userName = document.querySelector(".add-user-name").value;
    const userAvatar = document.querySelector(".add-user-avatar").value;
     const data= await fetch(`https://61ee6e58d593d20017dbae13.mockapi.io/${id}`,
     {
       method: "PUT",
       body:JSON.stringify({
         name: userName,
         avatar: userAvatar,
        }),
         headers: {
           "Content-Type": "application/json",
         },
         
       })
       console.log(data);
       document.querySelector(".add-user-name").value="";
       document.querySelector(".add-user-avatar").value="";
    displayUser();
  }