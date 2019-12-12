window.onload = () => {

  const slider = document.querySelector('.slider-content');
  const slide = document.querySelectorAll('.slide');
  const rightArrow = document.querySelector('.arrow-right-container');
  const leftArrow = document.querySelector('.arrow-left-container');
  const first = slide[0];
  const last = slide[slide.length - 1];
  var counter = 0;

  console.log(rightArrow);

  slider.appendChild(first.cloneNode(true));
  slider.prepend(last.cloneNode(true));

  slider.appendChild(slide[1].cloneNode(true));
  slider.prepend(slide[slide.length - 2].cloneNode(true));

  slider.appendChild(slide[2].cloneNode(true));
  slider.prepend(slide[slide.length - 3].cloneNode(true));
  // slider.style.left = "-" + (first.offsetWidth - 20) +"px";

  rightArrow.addEventListener('click', slideNext);
  leftArrow.addEventListener('click', slideBack);

  function slideNext() {
      if(counter >= slide[slide.length + 2]) return;
      counter--;
      slider.style.transition = 'all .3s ease-in-out';
      slider.style.left = ((first.offsetWidth - 20) * counter) +"px";

    console.log(slide.length);

  }


  function slideBack() {
      if(counter <= -3) return;
      counter++;
      slider.style.transition = 'all .3s ease-in-out';
      slider.style.left = ((first.offsetWidth - 20) * counter) +"px";

  }

  slider.addEventListener('transitionend', checkIndex);

  function checkIndex(){
    if(counter == 3){
      counter = slide.length - 6;
      slider.style.transition = 'none';
      slider.style.left = ((first.offsetWidth - 20) * counter) +"px";
    } else if(counter == -3) {
      counter = 3;
      slider.style.transition = 'none';
      slider.style.left = ((first.offsetWidth - 20) * counter) +"px";
    }
  }
}
