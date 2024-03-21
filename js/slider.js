const nextBtns = document.querySelectorAll('.s3_slide .arrow.right')
const prevBtns = document.querySelectorAll('.s3_slide .arrow.left')
const slide = document.querySelectorAll('.s3_slide .row_inner')


nextBtns.forEach((nextBtn) => {
  nextBtn.addEventListener('click',function(e){
    e.preventDefault();
    //console.log(e.target.parentElement)

    const slider = e.target.parentElement;

    if (slider.classList.contains('row1')){
      nextFunc(0)
    }
    else if (slider.classList.contains('row2')){
      nextFunc(1)
    }
  })
})

prevBtns.forEach((prevBtn) => {
  prevBtn.addEventListener('click',function(e){
    e.preventDefault();
    //console.log(e.target.parentElement)

    const slider = e.target.parentElement;

    if (slider.classList.contains('row1')){
      prevFunc(0)
    }
    else if (slider.classList.contains('row2')){
      prevFunc(1)
    }
  })
})

function nextFunc(i) {
  //console.log('넥스트함수입니다 받아온 인자는? - ', i)
  //const imgs = slide[i].querySelectorAll('img');  -NodeList(단순한 묶음)
  const imgs = Array.from(slide[i].querySelectorAll('img'));
  console.log('이미지들은? - ',imgs)

  //active클라스가 있는 이미지의 인덱스를 찾는다
  let index = imgs.findIndex((img)=>{
    return img.classList.contains('active')
  })
  console.log('active클라스가 있는 이미지는? -', index )

  imgs[index].classList.remove('active');
  index++;
  if(index === imgs.length) { index = 0; }
  imgs[index].classList.add('active');
}


function prevFunc(i) {
  const imgs = Array.from(slide[i].querySelectorAll('img'));

  let index = imgs.findIndex((img)=>{
    return img.classList.contains('active')
  })

  imgs[index].classList.remove('active');
  index--;
  if(index < 0) { index = imgs.length - 1; }
  imgs[index].classList.add('active');
}