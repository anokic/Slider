window.onload = () => {

  const slider = document.querySelector('.slider-content');
  const slide = document.querySelectorAll('.slide');
  const rightArrow = document.querySelector('.arrow-right-container');
  const leftArrow = document.querySelector('.arrow-left-container');
  const first = slide[0];
  const last = slide[slide.length - 1];
  const jump_length = first.offsetWidth * -1;
  var counter = 0;

  console.log(jump_length + 20);

  slider.appendChild(first.cloneNode(true));
  slider.prepend(last.cloneNode(true));

  slider.appendChild(slide[1].cloneNode(true));
  slider.prepend(slide[slide.length - 2].cloneNode(true));

  slider.appendChild(slide[2].cloneNode(true));
  slider.prepend(slide[slide.length - 3].cloneNode(true));

  rightArrow.addEventListener('click', slideNext);
  leftArrow.addEventListener('click', slideBack);

  function slideNext() {

      if(counter >= slide.length - 3) return;
      counter++;
      slider.style.transition = 'all .3s ease-in-out';
      slider.style.left = ((jump_length + 20) * counter) +"px";

      console.log(counter);

  }


  function slideBack() {
      if(counter <= -3) return;
      counter--;
      slider.style.transition = 'all .3s ease-in-out';
      slider.style.left = ((jump_length + 20) * counter) +"px";
      console.log(counter);

  }

  slider.addEventListener('transitionend', checkIndex);

  function checkIndex(){
    if(counter >= slide.length - 3){
      counter = -3;
      slider.style.transition = 'none';
      slider.style.left = ((jump_length + 20) * counter) +"px";
    } else if(counter <= -3) {
      counter = 3;
      slider.style.transition = 'none';
      slider.style.left = ((jump_length + 20) * counter) +"px";
    }
  }
}
