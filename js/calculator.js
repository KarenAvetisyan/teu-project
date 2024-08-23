document.addEventListener('DOMContentLoaded', function(){
        // select 
        var selectContainer = document.querySelectorAll(".select-container");
        selectContainer.forEach(s=>{
          var select = s.querySelector(".select");
          var input = s.querySelector(".select-input");
          var options = s.querySelectorAll(".option");
          var inputHiddenText = s.querySelector(".hidden-autoResizeInput")
    
         
            window.addEventListener('load', function(){
              if(s.classList.contains('autoWidth')){
                  inputHiddenText.innerText = input.value;
                  select.style.width = inputHiddenText.clientWidth+20+'px';
                }
            })
      
            select.onclick = (event) => {
              selectContainer.forEach(f=>{
                  var isClickInside = f.contains(event.target)
                  if (!isClickInside) {
                      f.classList.remove('active')
                  }
              })
              s.classList.toggle('active');
            };
      
            options.forEach((e) => {
                e.addEventListener("click", () => {
                    input.value = e.innerText;
                    if(s.classList.contains('autoWidth')){
                      inputHiddenText.innerText = input.value;
                      select.style.width = inputHiddenText.clientWidth+20+'px';
                  }
                    s.classList.remove("active");
                    options.forEach((e) => {
                        e.classList.remove("selected");
                    });
                    e.classList.add("selected");
                    if(e.classList.contains('selected')) {
                      s.classList.add('selected')
                    }
                });
            });
    
        })
        // increase and deacrease
        var number = document.getElementById('number');
        number.addEventListener('keydown', function(){
          if(number.value == 0) {
            number.value = NaN
          }
        })
        document.addEventListener('click', function(e){
          if(e.target.matches('.js-increase')){
            number.value++;
          }
          else if(e.target.matches('.js-decrease')){
            if(number.value == 0) {
              number.value = 0
            }
            else {
              number.value--;
            }
          }
        })
});
// map
window.addEventListener('load', function(){
  ymaps.ready(init);
  function init() {
          var myMap = new ymaps.Map("map-road", {
              center: [55.745508, 37.435225],
              zoom: 6,
              controls: ['trafficControl', 'fullscreenControl'],
              
          });
          // myPlacemark = new ymaps.Placemark([55.745508, 37.435225], {}, {
          //     iconLayout: 'default#image',
          //     iconImageHref: "img/contact-placemark.svg",
          //     iconImageSize: [86, 109],
          // });
      
          // myMap.geoObjects.add(myPlacemark)
  
  }
})