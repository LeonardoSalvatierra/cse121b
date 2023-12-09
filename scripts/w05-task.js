/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById('temples');
const templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach((temple) => {
      const articleElement = document.createElement('article');
  
      const h3Element = document.createElement('h3');
      h3Element.textContent = temple.templeName;
  
      const imgElement = document.createElement('img');
      imgElement.src = temple.imageUrl;
      imgElement.alt = temple.location;
  
      articleElement.appendChild(h3Element);
      articleElement.appendChild(imgElement);
      templesElement.appendChild(articleElement);
    });
  };



/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    const data = await response.json();
    templeList.push(...data);
    displayTemples(templeList);
};

/* reset Function */
const reset = () => {
    templesElement.innerHTML = '';
};

/* sortBy Function */
const sortBy = (temples) => {
    reset();
  
    const filter = document.getElementById('sortBy').value;
  
    switch (filter) {
      case 'utah':
        displayTemples(temples.filter(temp => temp.location.includes('Utah')));
        break;
      case 'notutah':
        displayTemples(temples.filter(temp => !temp.location.includes('Utah')));
        break;
      case 'older':
        displayTemples(temples.filter(temp => new Date(temp.dedicated) < new Date(1950, 0, 1)));
        break;
      case 'all':
        displayTemples(temples);
        break;
      default:
    }
  };

getTemples();

/* Event Listener */
document.getElementById('sortBy').addEventListener('change', () => {
    sortBy(templeList);
  });