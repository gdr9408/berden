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




// 0 
function section0(){
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
}
section0();


//1
function section1(){
  const tl = gsap.timeline();

  tl.to('#section1 .tit', {
    opacity:1,
    duration:0.5,    
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

}
section1();

//2
function section2(){
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
}
section2()

//3
function section3(){
  const tl = gsap.timeline();
  tl.to("#section3 .s3_slide >.row",{
    opacity:1,
    stagger: 0.3,    
    y: -30,
  })
}
section3()

//4 
function section4(){
  const tl = gsap.timeline();
  tl.to("#section4 .img_wrap >*",{
    opacity:1,
    stagger: 0.3,    
    y: -30,
  })
}
section4()

//5 
function section5(){
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

}
section5()

//6 
function section6(){
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

}
section6()

//7
function section7(){
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
section7()

