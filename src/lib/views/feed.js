export const feed = () => {
  const root = document.createElement("div");
  //Crear etiqueta nav
  const nav = document.createElement("nav");
  root.appendChild(nav);
  // Crear div
  const containerNav = document.createElement("div");
  containerNav.className = "container-nav";
  nav.appendChild(containerNav);
  //Creando logo
  const nameLogo = document.createElement("h2");
  nameLogo.className = "logo";
  containerNav.appendChild(nameLogo);
  //Crear img logo
  const imgLogo = document.createElement("img");
  imgLogo.setAttribute("src", "img/logo.png");
  nameLogo.appendChild(imgLogo);
  // Crear title de red social
  const title = document.createElement("h3");
  title.innerText = "diShared";
  containerNav.appendChild(title);
  // Crear div para input de búsqueda
  const searchBar = document.createElement("div");
  searchBar.className = "search-bar";
  containerNav.appendChild(searchBar);
  // Crear icono de busqueda
  const iconSearch = document.createElement("i");
  iconSearch.className = "uil uil-search";
  searchBar.appendChild(iconSearch);
  // Crear input de búsqueda
  const inputSearch = document.createElement("input");
  inputSearch.setAttribute("type", "search");
  inputSearch.setAttribute("placeholder", "What are you looking for?");
  searchBar.appendChild(inputSearch);
  // Crear div para el create
  const create = document.createElement("div");
  create.className = "create";
  containerNav.appendChild(create);
  // Crear botón
  const buttonCreate = document.createElement("label");
  buttonCreate.className = "btn btn-primary";
  buttonCreate.setAttribute("for", "create-post");
  buttonCreate.innerText = "Create";
  create.appendChild(buttonCreate);
  // Crear div con img de perfil
  const divProfile = document.createElement("div");
  divProfile.className = "profile-photo";
  create.appendChild(divProfile);
  // Insertar img de perfil
  const imgProfile = document.createElement("img");
  imgProfile.setAttribute("src", "img/profile-1.jpg");
  divProfile.appendChild(imgProfile);

  //  Crear etiqueta main
  const main = document.createElement("main");
  root.appendChild(main);
  // Crear container
  const feedContainer = document.createElement("div");
  feedContainer.className = "container-feed";
  main.appendChild(feedContainer);
  //Create container sidebar with name
  const sidebarleft = document.createElement("div");
  sidebarleft.className = "sidebar-left";
  feedContainer.appendChild(sidebarleft);
  //Crear etiqueta a
  const profileLeft = document.createElement("a");
  profileLeft.className = "profile-left";
  sidebarleft.appendChild(profileLeft);
  //Crear div profile photo
  const profilePhoto = document.createElement("div");
  profilePhoto.className = "profile-photo";
  profileLeft.appendChild(profilePhoto);
  // Crear etiqueta img
  const imgProfileLeft = document.createElement("img");
  imgProfileLeft.setAttribute("src", "img/profile-1.jpg");
  profilePhoto.appendChild(imgProfileLeft);
  // Div text
  const handle = document.createElement("div");
  handle.className = "handle";
  profileLeft.appendChild(handle);
  // Crear h4 text name
  const textName = document.createElement("h4");
  textName.setAttribute("text", "Rosita");
  handle.appendChild(textName);
  // Create username text
  const username = document.createElement("p");
  username.className = "text-muted";
  handle.appendChild(username);
  username.setAttribute("text", "@Rosita");
  // Crear sidebar
  const sidebar = document.createElement("div");
  sidebar.className = "sidebar";
  sidebarleft.appendChild(sidebar);
  // Create label a
  const aHome = document.createElement("a");
  aHome.className = "menu-item";
  sidebar.appendChild(aHome);
  // Create span
  const spanHome = document.createElement("span");
  aHome.appendChild(spanHome);
  // Create icon home
  const iconHome = document.createElement("i");
  iconHome.className = "uil uil-home";
  spanHome.appendChild(iconHome);
  //Create h3 Home
  const textHome = document.createElement("h3");
  textHome.textContent = "Home";
  aHome.appendChild(textHome);
  //Create a explore
  const aExplore = document.createElement("a");
  aExplore.className = "menu-item";
  sidebar.appendChild(aExplore);
  // Create span explore
  const spanExplore = document.createElement("span");
  aExplore.appendChild(spanExplore);
  //Create icon Explore
  const iconExplore = document.createElement("i");
  iconExplore.className = "uil uil-compass";
  spanExplore.appendChild(iconExplore);
  //Create H3 Explore
  const textExplore = document.createElement("h3");
  textExplore.textContent = "Explore";
  aExplore.appendChild(textExplore);
  //Create a Notification
  const aNotification = document.createElement("a");
  aNotification.className = "menu-item";
  aNotification.setAttribute("id", "notifications");
  sidebar.appendChild(aNotification);
  // Create span Notification
  const spanNotification = document.createElement("span");
  aNotification.appendChild(spanNotification);
  //Create icon Notification
  const iconNotification = document.createElement("i");
  iconNotification.className = "uil uil-bell";
  spanNotification.appendChild(iconNotification);
  // Create small Notification
  const smallNotification = document.createElement("small");
  smallNotification.className = "notification-count";
  smallNotification.textContent = "9+";
  iconNotification.appendChild(smallNotification);
  //Create H3 Notification
  const textNotification = document.createElement("h3");
  textNotification.textContent = "Notification";
  aNotification.appendChild(textNotification);
  // Create div popUp
  const divPopup = document.createElement("div");
  divPopup.className = "notifications-popup";
  aNotification.appendChild(divPopup);
  // Create div container notification
  const divContainerNotification = document.createElement("div");
  divPopup.appendChild(divContainerNotification);
  // Create div profile photo popUp
  const divProfileNotification = document.createElement("div");
  divProfileNotification.className = "profile-photo";
  divContainerNotification.appendChild(divProfileNotification);
  // Create img profile
  const imgProfileNotification = document.createElement("img");
  imgProfileNotification.setAttribute("src", "/img/profile-4.jpg");
  divProfileNotification.appendChild(imgProfileNotification);
  // Create div notification body
  const divNotBody = document.createElement("div");
  divNotBody.className = "notification-body";
  divNotBody.textContent = `liked you photo`;
  divContainerNotification.appendChild(divNotBody);
  //Problemas con benito jijij
  const bNotName = document.createElement("b");
  bNotName.textContent = "Benito";
  divNotBody.appendChild(bNotName);
  //Small text notification body
  const smallNotText = document.createElement("small");
  smallNotText.className = "text-muted"
  smallNotText.textContent = "2 DAYS AGO";
  divNotBody.appendChild(smallNotText);
  // Create a message notification
  const aNotMess = document.createElement("a");
  aNotMess.className = "menu-item";
  aNotMess.setAttribute("id", "messages-notifications");
  sidebar.appendChild(aNotMess);
  // Create span message notification
  const spanMessage = document.createElement("span");
  aNotMess.appendChild(spanMessage);
  // Create icon Message 
  const iconMessage = document.createElement("i");
  iconMessage.className = "uil uil-envelope-alt";
  spanMessage.appendChild(iconMessage);
  //Create small notification message
  const smallNotMessage = document.createElement("small");
  smallNotMessage.className = "notification-count";
  smallNotMessage.textContent = "6";
  iconMessage.appendChild(smallNotMessage);
  // Create h3 Message 
  const textMessage = document.createElement("h3");
  textMessage.className = "Messages";
  aNotMess.appendChild(textMessage);

  //STORIES
  // middle container

  const middle = document.createElement("div");
  middle.className = "middle";
  feedContainer.appendChild(middle);
  // stories container

  const storiesContainer = document.createElement("div");
  storiesContainer.className = "stories";
  middle.appendChild(storiesContainer);
  // story container
  const story = document.createElement("div");
  story.className = "story";
  storiesContainer.appendChild(story);
  // story photo 1
  const storyPhoto = document.createElement("div");
  storyPhoto.className = "profile-photo";
  story.appendChild(storyPhoto);
  const storyImg = document.createElement("img");
  storyImg.setAttribute("src", "/img/profile-12.jpg");
  storyImg.setAttribute("alt", "User's story")
  story.appendChild(storyImg);
  const storyName = document.createElement("p")
  storyName.className = "storyName";
  storyName.textContent = "Your story";
  story.appendChild(storyName);


  // story2 container
  const story2 = document.createElement("div");
  story2.className = "story";
  storiesContainer.appendChild(story2);
  // story photo 2

  const storyPhoto2 = document.createElement("div");
  storyPhoto2.className = "profile-photo";
  story2.appendChild(storyPhoto2);
  const storyImg2 = document.createElement("img");
  storyImg2.setAttribute("src", "/img/profile-15.jpg");
  storyImg2.setAttribute("alt", "User's story")
  story2.appendChild(storyImg2);
  const storyName2 = document.createElement("p")
  storyName2.className = "storyName";
  storyName2.textContent = "Juanito Perez";
  story2.appendChild(storyName2);

  // story3 container
  const story3 = document.createElement("div");
  story3.className = "story";
  storiesContainer.appendChild(story3);
  // story photo 3

  const storyPhoto3 = document.createElement("div");
  storyPhoto3.className = "profile-photo";
  story2.appendChild(storyPhoto3);
  const storyImg3 = document.createElement("img");
  storyImg3.setAttribute("src", "/img/profile-10.jpg");
  storyImg3.setAttribute("alt", "User's story")
  story2.appendChild(storyImg3);
  const storyName3 = document.createElement("p")
  storyName3.className = "storyName";
  storyName3.textContent = "Lilla James";
  story3.appendChild(storyName3);

  // story4 container
  const story4 = document.createElement("div");
  story4.className = "story";
  storiesContainer.appendChild(story4);
  // story photo 4

  const storyPhoto4 = document.createElement("div");
  storyPhoto4.className = "profile-photo";
  story4.appendChild(storyPhoto4);
  const storyImg4 = document.createElement("img");
  storyImg4.setAttribute("src", "/img/profile-13.jpg");
  storyImg4.setAttribute("alt", "User's story")
  story4.appendChild(storyImg4);
  const storyName4 = document.createElement("p")
  storyName4.className = "storyName";
  storyName4.textContent = "Pepito";
  story4.appendChild(storyName4);
 
  // story5 container
  const story5 = document.createElement("div");
  story5.className = "story";
  storiesContainer.appendChild(story5);
  // story photo 5

  const storyPhoto5 = document.createElement("div");
  storyPhoto5.className = "profile-photo";
  story5.appendChild(storyPhoto5);
  const storyImg5 = document.createElement("img");
  storyImg5.setAttribute("src", "/img/profile-16.jpg");
  storyImg5.setAttribute("alt", "User's story")
  story5.appendChild(storyImg5);
  const storyName5 = document.createElement("p")
  storyName5.className = "storyName";
  storyName5.textContent = "Barack Obama";
  story5.appendChild(storyName5);

  // story6 container
  const story6 = document.createElement("div");
  story6.className = "story";
  storiesContainer.appendChild(story6);
  // story photo 6

  const storyPhoto6 = document.createElement("div");
  storyPhoto6.className = "profile-photo";
  story6.appendChild(storyPhoto5);
  const storyImg6 = document.createElement("img");
  storyImg6.setAttribute("src", "/img/profile-20.jpg");
  storyImg6.setAttribute("alt", "User's story")
  story6.appendChild(storyImg5);
  const storyName6 = document.createElement("p")
  storyName6.className = "storyName";
  storyName6.textContent = "Goku";
  story6.appendChild(storyName6);

  // Create post
  const createPost = document.createElement("form")
  createPost.className= "createPost";
  middle.appendChild(createPost);
  // profile img
  const divProfPh = document.createElement("div");
  divProfPh.className = "profile-photo";
  createPost.appendChild(divProfPh);
  const profileImg = document.createElement("img");
  profileImg.setAttribute("src", "/img/profile-1.jpg");
  divProfPh.appendChild(profileImg);
  





  // create right container
  const right = document.createElement("div");
  right.className= "right";
  feedContainer.appendChiled(right);
 









  return root;
};
console.log(feed);
