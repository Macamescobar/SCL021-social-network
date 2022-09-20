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
  const smallNotText= document.createElement("small");
  smallNotText.className="text-muted"
  smallNotText.textContent= "2 DAYS AGO";
  divNotBody.appendChild(smallNotText);
  // Create a message notification
  const aNotMess= document.createElement("a");
  aNotMess.className="menu-item";
  aNotMess.setAttribute("id","messages-notifications");
  sidebar.appendChild(aNotMess);
  // Create span message notification
  const spanMessage= document.createElement("span");
  aNotMess.appendChild(spanMessage);
  // Create icon Message 
  const iconMessage= document.createElement("i");
  iconMessage.className="uil uil-envelope-alt";
  spanMessage.appendChild(iconMessage);
  //Create small notification message
  const smallNotMessage= document.createElement("small");
  smallNotMessage.className="notification-count";
  smallNotMessage.textContent="6";
  iconMessage.appendChild(smallNotMessage);
  // Create h3 Message 
  const textMessage= document.createElement("h3");
  textMessage.className="Messages";
  aNotMess.appendChild(textMessage);
  
  return root;
};
console.log(feed);
