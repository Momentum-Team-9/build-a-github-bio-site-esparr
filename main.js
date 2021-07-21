// Calling the root div in index.html
const outputDiv = document.querySelector("#root");

// GET request for Em GitHub profile
fetch("https://api.github.com/users/esparr")
  .then((response) => response.json())
  .then((profile) => {
    console.log(profile);
    // Create a div to hold name
    const headerBox = document.createElement("div");
    headerBox.classList.add("header-box");
    outputDiv.appendChild(headerBox);

    // Add Name to name box
    const headerName = document.createElement("h1");
    headerName.classList.add("name");
    headerName.innerText = profile.name;
    headerBox.appendChild(headerName);

    // Create a div to hold details
    const detailsBox = document.createElement("div");
    detailsBox.classList.add("details-box");
    outputDiv.appendChild(detailsBox);

    // Create a div to hold The Basics
    const basicsBox = document.createElement("div");
    basicsBox.classList.add("basics-box");
    detailsBox.appendChild(basicsBox);

    // Add The Basics title
    const theBasics = document.createElement("h2");
    theBasics.innerText = "The Basics";
    basicsBox.appendChild(theBasics);

    // Add Name again
    const detailsName = document.createElement("p");
    detailsName.classList.add("details");
    detailsName.innerHTML =
      "<span class='text-fancy'>" + "Name  " + "</span>" + profile.name;
    basicsBox.appendChild(detailsName);

    // Add GitHub URL
    const gitURL = document.createElement("p");
    gitURL.classList.add("details");
    gitURL.innerHTML =
      "<span class='text-fancy'>" +
      "GitHub URL  " +
      "</span>" +
      profile.html_url;
    basicsBox.appendChild(gitURL);

    // Add Company
    const company = document.createElement("p");
    company.classList.add("details");
    company.innerHTML =
      "<span class='text-fancy'>" + "Company  " + "</span>" + profile.company;
    basicsBox.appendChild(company);

    // Add Twitter
    const twitter = document.createElement("p");
    twitter.classList.add("details");
    twitter.innerHTML =
      "<span class='text-fancy'>" +
      "Twitter  " +
      "</span>" +
      "@" +
      profile.twitter_username;
    basicsBox.appendChild(twitter);

    // Create a div to hold vertical line
    const verticalLine = document.createElement("div");
    verticalLine.classList.add("vertical-line");
    detailsBox.appendChild(verticalLine);

    // Create a div to hold The Story
    const storyBox = document.createElement("div");
    storyBox.classList.add("story-box");
    detailsBox.appendChild(storyBox);

    // Add The Story title
    const theStory = document.createElement("h2");
    theStory.innerText = "The Story";
    storyBox.appendChild(theStory);

    // Add the bio
    const bio = document.createElement("p");
    bio.innerHTML = profile.bio;
    storyBox.appendChild(bio);

    // Create a div to hold Avatar
    const avatarBox = document.createElement("div");
    avatarBox.classList.add("avatar-box");
    detailsBox.appendChild(avatarBox);

    // Add avatar image
    const avatar = document.createElement("img");
    avatar.classList.add("avatar");
    avatar.src = profile.avatar_url;
    avatarBox.appendChild(avatar);

    // Create div below detailsBox
    const moreInfoBox = document.createElement("div");
    moreInfoBox.classList.add("moreinfo-box");
    outputDiv.appendChild(moreInfoBox);

    // Create more stuff in here later!
  });
