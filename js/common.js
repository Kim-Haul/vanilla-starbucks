/* SEARCH */
const searchEl = document.querySelector('.search'); // quertSelector는 해당하는 요소의 제일 첫번째 요소 선택 != querySeletorAll
const searchInputEl = searchEl.querySelector('input'); // const SearchInput = document.querySelector('.search input');

searchEl.addEventListener('click', function(){
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused'); // 특정요소의 클래스정보를 가지고 있는 객체에서 새로운 클래스를 추가
  searchInputEl.setAttribute('placeholder','통합검색'); //('속성이름', '속성값')
});

searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused'); // 특정요소의 클래스정보를 가지고 있는 객체에서 새로운 클래스를 추가
  searchInputEl.setAttribute('placeholder',''); //('속성이름', '속성값')
});


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear() // 2022