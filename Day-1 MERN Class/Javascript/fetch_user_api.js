let url = "https://api.github.com/users";

window
  .fetch(url)
  .then((res) => res.json())
  .then((userData) => {
    userData.map((person) => {
      let sub_container = document.createElement("div");
      let image_container = document.createElement("div");
      let user_container = document.createElement("h3");
      let name = document.createElement("h2");
      let login = document.createElement("h2");
      let type = document.createElement("h2");
      let images = document.createElement("img");

      name.innerText = `UserId :${person.id}`;
      login.innerText = `Name : ${person.login}`;
      type.innerText = `Type : ${person.type}`;
      user_container.appendChild(name);
      user_container.appendChild(login);
      user_container.appendChild(type);
      let main_container = document.getElementById("container");
      main_container.appendChild(sub_container);
      sub_container.appendChild(image_container);
      sub_container.appendChild(user_container);
      
      image_container.appendChild(images);
      images.src = `${person.avatar_url}`;
      images.style.height = "250px";
      images.style.width = "250px";
      images.style.borderRadius = "50px";
      sub_container.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
      sub_container.style.margin = "10px";
      sub_container.style.borderRadius = "10px 30px";
      sub_container.style.display="flex"
      sub_container.style.alignItems="center"
      sub_container.style.justifyContent="space-evenly"
      sub_container.style.color = "white";
      sub_container.classList.add("user-card");
      
      // Make card clickable to view user details on new page
      sub_container.onclick = () => {
        const params = new URLSearchParams({
          id: person.id,
          login: person.login,
          type: person.type,
          avatar: person.avatar_url,
          nodeId: person.node_id,
          url: person.html_url
        });
        window.location.href = `user_details.html?${params.toString()}`;
      };
      
      console.log(sub_container);
    });
  })
  .catch((err) => console.log(err));
