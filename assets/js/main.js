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
  // slider.style.left = "-" + (first.offsetWidth - 20) +"px";

  rightArrow.addEventListener('click', slideNext);
  leftArrow.addEventListener('click', slideBack);

  function slideNext() {

    counter--;
    slider.style.left = ((first.offsetWidth - 20) * counter) +"px";
    console.log("NEXT: " + counter);
    console.log("NEXT: " + ((first.offsetWidth - 20) * counter));
  }


  function slideBack() {
    counter++;
    // if(counter == (counter - (slide.length-1))){
    //   counter = (slide.length-1);
    // }
    // if(counter == -1){
    //   counter = ;
    // }
    console.log("BACK: " + counter);
    console.log("BACK: " + ((first.offsetWidth - 20) * counter) +"px");
    slider.style.left = ((first.offsetWidth - 20) * counter) +"px";
  }
}
