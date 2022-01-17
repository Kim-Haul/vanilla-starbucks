
/* BADGES */
const badgeEl = document.querySelector('header .badges');
// window.addEventListener('scroll', function(){
//   console.log('scroll!!');
// });
window.addEventListener('scroll', _.throttle(function(){ // 윈도우 객체(브라우저)에 스크롤 이벤트 추가
  console.log('window.scrollY');
  if(window.scrollY > 500){
    //배지 숨기기! badgeEl.style.display = 'none';
    // gsap.to(요소, 지속시간(s), 옵션); 옵션은 기본적으로 객체의 형태
    gsap.to(badgeEl, 0.6, {
      opacity: 0,
      display: 'none'
    // gsap이라는 js 애니메이션 라이브러리를 통해 to라는 method로 애니메이션을 동작
    });
    //버튼 보이기!
    gsap.to('#to-top', .2, {
      x: 0
    });
    } else{
    // 배지 표시! badgeEl.style.display = 'block';
    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display: 'block'
    });
    //버튼 숨기기!
    gsap.to('#to-top', .2, { // GSAP에서는 직접 찾지않고, CSS 선택자만 적어도 to method가 자동으로 내용을 찾을 수 있음
      x: 100
    });
  }
}, 300)); 
// 외부 js 라이브러리 이용. scroll과 관련해서 짧은 시간에 많은 함수가 지속적으로 사용되는 것을 피하기 위함. 300 = 0.3s의 부하
// _.throttle(함수, 시간(ms))

const toTopEl = document.querySelector('#to-top');
toTopEl.addEventListener('click', function() {
  gsap.to(window, .7, {
    scrollTo: 0 // gsap의 scrollToPlugin
  });
});


/* VISUAL */
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, // 0.7 1.4 2.1 2.7
    opacity: 1
  } );
});
//.forEach(함수(매개변수, 반복횟수) {})


/* SLIDER */
// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

/* PROMOTION */
new Swiper('.promotion .swiper-container', {
  direction: 'horizontal',
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백(px)
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 3000 // 기본값이 3초(3000ms)
  },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

new Swiper('.awards .swiper-container', {
  direction: 'horizontal', // 수평 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true, // 반복 재생 여부
  spaceBetween: 30, // 슬라이드 사이 여백
  slidesPerView: 5, // 한 번에 보여줄 슬라이드 개수
  navigation: { // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: '.awards .swiper-prev', // 이전 버튼 선택자
    nextEl: '.awards .swiper-next' // 다음 버튼 선택자
  }
});


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function() {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    // 숨김 처리!
    promotionEl.classList.add('hide');
  } else {
    // 보임 처리 !
    promotionEl.classList.remove('hide');
  }
});



// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size){
  // gsap.to(요소, 시간, 옵션);
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1, // 무한반복
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay)
  })
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);



const spyEls = document.querySelectorAll('section.scroll-spy'); // section이라는 태그에 .scroll-spy라는 클래스가 붙어있다면
spyEls.forEach(function (spyEl){
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정 
      triggerHook: .8,
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});


