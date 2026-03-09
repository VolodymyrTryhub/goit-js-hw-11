const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const query = event.target.elements['search-text'].value.trim();

  if (query === '') {
    alert('Please enter a search word');
    return;
  }

  console.log(query);

  event.target.reset();
}
