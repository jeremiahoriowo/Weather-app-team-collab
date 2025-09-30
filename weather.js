const searchBar = document.querySelector('input');
const days = document.querySelectorAll('#specific-day');

document.querySelectorAll('button').forEach(element => {
  if (element.dataset.dropdown === 'units') {
    element.addEventListener('click', () => {
      document.getElementById('wheel-units').classList.toggle('rotate-[-60deg]');
      document.getElementById('js-switch-dropdown').classList.toggle('hidden');
    });
  };
});

document.querySelectorAll('#js-search-suggestions').forEach(input => {
  input.onclick = () => {
    searchBar.value = input.textContent;
    submitSearch();
  } 
})

searchBar.addEventListener('click', () => {
  if (document.getElementById('suggestion-box').classList.contains('hidden')) {
    document.getElementById('suggestion-box').classList.remove('hidden');
  } else {
    document.getElementById('suggestion-box').classList.add('hidden');
  }
})

function submitSearch() {
  document.getElementById('suggestion-box').classList.add('hidden');
}

document.getElementById('js-day-dropdown-button')
  .onclick = () => {
    document.getElementById('js-day-dropdown').classList.toggle('hidden');
  }

// Function to toggle Weather hourly through day
days.forEach(day => {
  day.addEventListener('click', () => {
    const dayText = day.querySelector('p').textContent;

    document.getElementById('selected-day').textContent = dayText;
    document.getElementById('js-day-dropdown').classList.add('hidden');
  });
});
