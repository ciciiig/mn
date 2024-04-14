import { capitalizeFirstLetter } from "./capitalizeFirstLetter.js";

export function createNavItems (navItemsContainer, categories) {
    for (let i = 0; i < categories.length; i++) {
        const element = categories[i];
    
        const newListItem = document.createElement('li');
        newListItem.classList.add('nav-item', 'p-0', 'pe-sm-4');
        
        const newLink = document.createElement('a');
        newLink.classList.add('nav-link', 'p-0');
        newLink.href = element;
        
        const newDiv = document.createElement('div');
        newDiv.classList.add('fw-bold');
        newDiv.textContent = capitalizeFirstLetter(element);
        
        newLink.appendChild(newDiv);
        newListItem.appendChild(newLink);
        
        navItemsContainer.appendChild(newListItem);
    }
}
