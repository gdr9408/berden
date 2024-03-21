const $body =  document.querySelector('body');
const mob_btn =  document.querySelector('.mob_btn');
const scrollTop_btn = document.querySelector('.scrollTop_btn')

mob_btn.addEventListener('click',(e)=>{
  e.preventDefault();
  $body.classList.toggle('mOpen')
})

window.addEventListener('scroll', ()=>{
  let scroll = window.scrollY;
  //console.log(scroll)

  if( scroll > 62 ){
    $body.classList.add('scrolling');
    scrollTop_btn.classList.add('on')
  } else {
    $body.classList.remove('scrolling')
    scrollTop_btn.classList.remove('on')
  }
})

//제일밑에 scrollTop버튼 클릭하면 화면 제일 위로
scrollTop_btn.addEventListener('click', ()=>{
  window.scrollTo({
    top:0,
    behavior:"smooth"
  })
})

//기존 함수들을 오브젝트로 전환
let funcObj = {
  section0 : function(){
    const tl = gsap.timeline();  // 하나씩 작동하게함
    tl.to('#section0 .tit_wrap > *', {
      opacity:1,
      stagger: 0.3, //시차
      duration:0.5,    //속도, default=0.5s
      y: -30,
    })
    gsap.to('#section0  .scroll', { 
      opacity:1,
      duration:2, 
    })
  },
  section1 : function(){
    const tl = gsap.timeline();
    tl.to('#section1 .tit', {
      opacity:1,
      duration:0.5, 
      delay:1,   
      y: -30,
    })

    tl.to('.s1_list li', {
      opacity:1,
      stagger: 0.3,    
      y: -30,
    })

    tl.to('.sub_txt_wrap', {
      opacity:1,
      stagger: 0.3,    
      y: -30,
    });

    (function() {
      // Span 요소를 선택합니다.
    const countElements = document.querySelectorAll('.count');

    // 각 Span 요소에 대해 애니메이션을 수행합니다.
    countElements.forEach(span => {
      // data-count 속성에서 목표 값(숫자)를 가져옵니다.
      const targetCount = parseInt(span.getAttribute('data-count'));
      // 초기 값은 0으로 설정합니다.
      let currentCount = 0;
      // 애니메이션을 실행할 간격을 설정합니다.
      const increment = Math.ceil(targetCount / 100); // 적절한 값을 조정하여 애니메이션 속도를 조절할 수 있습니다.

      // setInterval을 이용하여 애니메이션을 생성합니다.
      const counter = setInterval(() => {
        // 현재 카운트가 목표 카운트에 도달하면 애니메이션을 멈춥니다.
        if (currentCount >= targetCount) {
          clearInterval(counter);
          return;
        }
        // 현재 카운트를 Span에 표시합니다.
        span.textContent = currentCount;
        // 현재 카운트를 증가시킵니다.
        currentCount += increment;
        // 현재 카운트가 목표 카운트를 초과하지 않도록 보정합니다.
        if (currentCount > targetCount) {
          currentCount = targetCount;
        }
      }, 30); // 각 반복 간격의 시간(ms)을 조절하여 애니메이션의 부드러움을 조절할 수 있습니다.
    });
      })();
  },
  section2 : function(){
    const tl = gsap.timeline();

    tl.to('#section2 .tit_wrap > *', {
      opacity:1, 
      stagger: 0.3,   
      y: -30,
    })

    tl.to('.s2_card', {
      opacity:1,
      stagger: 0.3,    
      y: -30,
    })
  },
  section3 : function(){
    const tl = gsap.timeline();
    tl.to("#section3 .s3_slide >.row",{
      opacity:1,
      stagger: 0.3,    
      y: -30,
    })
  },
  section4 : function(){
    const tl = gsap.timeline();
    tl.to("#section4 .img_wrap >*",{
      opacity:1,
      stagger: 0.3,    
      y: -30,
    })
  },
  section5 : function(){
    const tl = gsap.timeline();
    tl.to("#section5 .tit_wrap>*",{
      opacity:1,
      stagger: 0.3,    
      y: -30,
    })
    tl.to("#section5 .img_wrap>*",{
      opacity:1,
      stagger: 0.3,    
      y: -30,
    })
    tl.to("#section5 .con_btn",{
      opacity:1,
      stagger: 0.3,    
      y: -30,
    })
  },
  section6 : function (){
    const tl = gsap.timeline();
    tl.to("#section6 .tit_wrap",{
      opacity:1,   
      y: -30,
    })
    tl.to("#section6 .img_wrap > *",{
      opacity:1,
      stagger: 0.1,    
      y: -30,
    })
    tl.to("#section6 .con_btn",{
      opacity:1,   
      y: -30,
    })
  },
  section7 : function(){
    const tl = gsap.timeline();
    tl.to("#section7 .tit_wrap",{
      opacity:1,   
      y: -30,
    })
    tl.to("#section7 .s7_list > li",{
      opacity:1,
      stagger: 0.3,    
      y: -30,
    })
  }
}

// 각 섹션이 화면에 보일때 애니메이션이 실행
const sections = document.querySelectorAll('section');
const io = new IntersectionObserver((entries, observer)=>{ 
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      console.log(entry.target.id)
      const objName = entry.target.id;
      funcObj[objName]()
    }
    
  })
})  


sections.forEach( section => io.observe(section) )  
//관찰할 대상 등록 (각각의 section)

// 모바일- 서브메뉴
const moSubLi =  document.querySelectorAll('.sub_menu .depth1 > li')
const subBtns =  document.querySelectorAll('.sub_menu .depth1 > li>span') //버튼 span

subBtns.forEach((menu)=>{
  menu.addEventListener('click',(e)=>{
    e.preventDefault()
    //console.log(e.target.parentElement);
    const parentEl = e.target.parentElement;

    if(parentEl.classList.contains('active')){
      parentEl.classList.remove('active')
    } else {
      moSubLi.forEach((li) => li.classList.remove('active'))
      parentEl.classList.add('active')
    }

  })
})

//화면 크기가 999보다 커졌을땐 펼쳐져있는 메뉴가 닫히게
window.addEventListener('resize', ()=>{
  if(window.innerWidth > 999){
    $body.classList.remove('mOpen')
  }
})


// desktop 네비게이션
const hNavBtn = document.querySelector('.h_nav')  //메인메뉴전체 ul
const subNav = document.querySelector('.subNav')  //서브 박스전체 
const sch_btn = document.querySelector('.sch_btn')  //서치버튼

let hNavIs = false;     //  desktop 서브박스가 펼쳐진 상태 표시
let schWrapIs = false;  // 서치박스가 펼쳐진 상태 표시

// desktop  메뉴펼처지는함수
const hNav = () => {
  if( !hNavIs && !schWrapIs ){   //서치 조건은 나중에 추가
    $body.classList.add('pcOpen')
    hNavIs = true;
  }
}

// desktop 메뉴 닫히는함수
const hNav_reset = () => {
  if( hNavIs ){
    $body.classList.remove('pcOpen');
    hNavIs = false;
  }
}

// 서치박스 펼쳐지는 함수
const sch = () => {
  $body.classList.add('sOpen');
  schWrapIs = true;
  hNav_reset(); //메뉴박스는 닫히게
}

const sch_reset = () => {
  $body.classList.remove('sOpen');
  schWrapIs = false;
}


hNavBtn.addEventListener('mouseenter', hNav )  // desktop 메뉴롤오버
subNav.addEventListener('mouseleave', hNav_reset )  // desktop 메뉴롤아웃
sch_btn.addEventListener('click', (e)=>{
  e.preventDefault();
  if(!schWrapIs){
    sch()
  } else {
    sch_reset()
  }
})


