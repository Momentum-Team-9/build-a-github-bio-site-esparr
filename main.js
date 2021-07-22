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
      '<a style="color: whitesmoke;" href="' +
      profile.html_url +
      '">' +
      profile.html_url +
      "</a>";
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
      '<a style="color: whitesmoke;" href="https://twitter.com/' +
      profile.twitter_username +
      '">' +
      "@" +
      profile.twitter_username +
      "</a>";
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

    const repoHeader = document.createElement("h2");
    repoHeader.classList.add("repo-h2");
    repoHeader.innerText = "A Few Projects";
    moreInfoBox.appendChild(repoHeader);

    // // Create more stuff in here later!
    fetch(profile.repos_url)
      // fetch: https://api.github.com/users/esparr/repos
      .then((res) => res.json())
      .then((repos) => {
        console.log(repos[2]);
        console.log(repos[3]);
        console.log(repos[0]);

        const repo1Box = document.createElement("div");
        repo1Box.classList.add("repo-box");
        moreInfoBox.appendChild(repo1Box);

        const repo1 = document.createElement("p");
        repo1.innerHTML =
          '<a href="' +
          repos[2].html_url +
          '">' +
          "Customer Directory Project" +
          "</a>";
        repo1Box.appendChild(repo1);

        const repo2Box = document.createElement("div");
        repo2Box.classList.add("repo-box");
        moreInfoBox.appendChild(repo2Box);

        const repo2 = document.createElement("p");
        repo2.innerHTML =
          '<a href="' +
          repos[3].html_url +
          '">' +
          "Parking Validation Form Project" +
          "</a>";
        repo2Box.appendChild(repo2);

        const repo3Box = document.createElement("div");
        repo3Box.classList.add("repo-box");
        moreInfoBox.appendChild(repo3Box);

        const repo3 = document.createElement("p");
        repo3.innerHTML =
          '<a href="' +
          repos[0].html_url +
          '">' +
          "This GitHub Bio Project" +
          "</a>";
        repo3Box.appendChild(repo3);
      });
  });
