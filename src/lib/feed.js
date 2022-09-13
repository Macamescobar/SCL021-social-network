const feed = () => {
  const nav = document.createElement('nav');
  // Container padre
  const containerNav = document.createElement('div');
  containerNav.className = 'container-nav';
  nav.appendChild(containerNav);
  // Creando logo
  const nameLogo = document.createElement('h2');
  nameLogo.className = 'logo';
  containerNav.appendChild(nameLogo);
  // Crear img logo
  const imgLogo = document.createElement('img');
  imgLogo.setAttribute('src', 'img/logo.png');
  nameLogo.appendChild(imgLogo);
  // Crear title de red social
  const title = document.createElement('h3');
  title.innerText = 'diShared';
  containerNav.appendChild(title);
  // Crear div para input de búsqueda
  const searchBar = document.createElement('div');
  searchBar.className = 'search-bar';
  containerNav.appendChild(searchBar);
  // Crear icono de busqueda
  const iconSearch = document.createElement('i');
  iconSearch.className = 'uil uil-search';
  searchBar.appendChild(iconSearch);
  // Crear input de búsqueda
  const inputSearch = document.createElement('input');
  inputSearch.setAttribute('type', 'search');
  inputSearch.setAttribute('placeholder', 'What are you looking for?');
  searchBar.appendChild(inputSearch);
  // Crear div para el create
  const create = document.createElement('div');
  create.className = 'create';
  containerNav.appendChild(create);
  // Crear botón
  const buttonCreate = document.createElement('label');
  buttonCreate.className = 'btn btn-primary';
  buttonCreate.setAttribute('for', 'create-post');
  buttonCreate.innerText = 'Create';
  create.appendChild(buttonCreate);
  // Crear div con img de perfil
  const divProfile = document.createElement('div');
  divProfile.className = 'profile-photo';
  create.appendChild(divProfile);
  // Insertar img de perfil
  const imgProfile = document.createElement('img');
  imgProfile.setAttribute('src', 'img/profile-1.jpg');
  divProfile.appendChild(imgProfile);

  return nav
};

feed();
export default feed;
