import './styles/bootstrap.css';
import './styles/main.css';
import * as variables from './variables';
import * as events from './events';


const createMain = () => {
  const element = document.createElement('main');
  element.classList.add('px-3');
  element.id = 'main';
  element.innerHTML = variables.searchPageHTML;

  return element;
};

const createBody = () => {
  document.body.classList.add('text-center');
  const element = document.createElement('div');
  element.classList.add('cover-container', 'd-flex', 'w-100', 'h-100', 'p-3', 'mx-auto', 'flex-column', 'padding-top:50%');


  element.appendChild(createMain());

  return element;
};

document.body.appendChild(createBody());
events.assignFunction('searchButton');