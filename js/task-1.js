const categoriesList = document.getElementById('categories');
const categoriesItems = categoriesList.querySelectorAll('li.item');

console.log('Number of categories:', categoriesItems.length);

categoriesItems.forEach(category => {
  const categoryTitle = category.querySelector('h2').textContent;

  const categoryItems = category.querySelectorAll('ul li');

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryItems.length}`);
});
