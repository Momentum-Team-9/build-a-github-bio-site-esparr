// Calling the root div in index.html
const outputDiv = document.querySelector("#root");

// GET request for Em GitHub profile
fetch("https://api.github.com/users/esparr")
  .then((response) => response.json())
  .then((items) => {
    for (item of items) {
      // Create a div to hold name
      const headerBox = document.createElement("div");
      headerBox.classList("header-box");

      // Add Name to name box
      const fullName = document.createElement("h1");
      fullName.classList("name");
      fullName.innerText = item.name;
      headerBox.appendChild(fullName);

      //Create a div to hold details
      const detailsBox = document.createElement("div");
      detailsBox.classList("details-box");

      // Add The Basics title
      const theBasics = document.createElement("h2");
    }
  });
