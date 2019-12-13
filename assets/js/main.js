window.onload = () => {

  /// AJAX CALL ///

  fetch('assets/js/item.json', { method : 'GET' }).then((responsive)=>{
    return responsive.json();
  }).then((data)=>{
    sliderData(data);
  })

  function sliderData(data){
    let html = ``;

    for(item of data){
      html += `<div class="slide">
                  <img class="user-image" src="${item.img}" alt="Person image">
                  <h4>${item.name}</h4>
                  <span>${item.email}</span>
                  <span><img src="assets/img/loc-icon.png" alt="icon">@${item.loc}</span>
                </div>`
    }

    document.querySelector('.slider-content').innerHTML = html;

    slide();
  }

  /// AJAX END ///

  /// SLIDER ///

  function slide() {
    const slider = document.querySelector('.slider-content');
    const slide = document.querySelectorAll('.slide');
    const rightArrow = document.querySelector('.arrow-right-container');
    const leftArrow = document.querySelector('.arrow-left-container');
    const first = slide[0];
    const last = slide[slide.length - 1];
    const jump_length = first.offsetWidth * -1;
    var counter = 0;

    slider.appendChild(first.cloneNode(true));
    slider.prepend(last.cloneNode(true));

    slider.appendChild(slide[1].cloneNode(true));
    slider.prepend(slide[slide.length - 2].cloneNode(true));

    slider.appendChild(slide[2].cloneNode(true));
    slider.prepend(slide[slide.length - 3].cloneNode(true));

    rightArrow.addEventListener('click', slideNext);
    leftArrow.addEventListener('click', slideBack);


      function slideNext() {
          if(counter >= (slide.length / 2)) return;
          counter++;
          console.log(counter);
          slider.style.transition = 'all .3s ease-in-out';
          slider.style.left = ((jump_length + 20) * counter) +"px";
      }


      function slideBack() {
          if(counter <= ((slide.length / 2) * -1)) return;
          counter--;
          console.log(counter);
          slider.style.transition = 'all .3s ease-in-out';
          slider.style.left = ((jump_length + 20) * counter) +"px";
      }

      slider.addEventListener('transitionend', checkIndex);

      function checkIndex(){
        if(counter >= (slide.length / 2)){
          counter = (slide.length / 2) * -1;
          slider.style.transition = 'none';
          slider.style.left = ((jump_length + 20) * counter) +"px";
        } else if(counter <= ((slide.length / 2) * -1)) {
          counter = slide.length / 2;
          slider.style.transition = 'none';
          slider.style.left = ((jump_length + 20) * counter) +"px";
        }
      }
  }

  /// SLIDER END

}
