document.addEventListener('DOMContentLoaded', function(){
    // map 
    ymaps.ready(init);
    function init() {
        function myFunction(x) {
            if (x.matches) {
                var myMap = new ymaps.Map("map", {
                    center: [55.679590, 37.450000],
                    zoom: 15,
                    controls: ['trafficControl', 'fullscreenControl'],
                    
                });
            } else {
                var myMap = new ymaps.Map("map", {
                    center: [55.679199, 37.439113],
                    zoom: 16,
                    controls: ['trafficControl', 'fullscreenControl'],
                    
                });
            }
            myMap.behaviors.disable('scrollZoom');
            myPlacemark = new ymaps.Placemark([55.679590, 37.446012], {}, {
                iconLayout: 'default#image',
                iconImageHref: "img/contact-placemark.svg",
                iconImageSize: [86, 109],
            });
            myPlacemark2 = new ymaps.Placemark([55.679412, 37.451931 ], {}, {
                iconLayout: 'default#image',
                iconImageHref: "img/contact-placemark2.svg",
                iconImageSize: [86, 109],
            });
            myMap.geoObjects.add(myPlacemark)
            myMap.geoObjects.add(myPlacemark2)
          }
          
          // Create a MediaQueryList object
          var x = window.matchMedia("(max-width: 991px)")
          
          // Call listener function at run time
          myFunction(x);
          
          // Attach listener function on state changes
          x.addEventListener("change", function() {
            myFunction(x);
          });
      
    }
   
    // FORM FIELD CHANGE ACTIVE FOR HOLDER
    var fields = document.querySelectorAll(".js-field");
    fields.forEach(f=>{
        f.addEventListener('change', function(){
            if (!this.value.length == 0) {
                this.classList.add('active');
            } else {
                this.classList.remove('active');
            }
        })
    })

    // input file 
    $.fn.fileUploader = function (filesToUpload) {
        this.closest(".files").change(function (evt) {
            for (var i = 0; i < evt.target.files.length; i++) {
                filesToUpload.push(evt.target.files[i]);
                if(evt.target.files.length !== 0) {
                    $('.js-file-holder').addClass('add__file')
                }
            };
            var output = [];
            for (var i = 0, f; f = evt.target.files[i]; i++) {
                var removeLink = "<a class=\"removeFile\" href=\"#\" data-fileid=\"" + i + "\">×</a>";
                output.push("<li><strong>", escape(f.name), "</strong>", removeLink, "</li> ");
            }
            $(".fileList")
                .append(output.join(""));
        });
    };
    var filesToUpload = [];
    $(document).on("click",".removeFile", function(e){
        e.preventDefault();
        var fileName = $(this).parent().children("strong").text();
        for(i = 0; i < filesToUpload.length; ++ i){
            if(filesToUpload[i].name == fileName){
                filesToUpload.splice(i, 1);
                if(filesToUpload.length == 0){
                    $('.js-file-holder').removeClass('add__file')
                }
            }	
        }
        $(this).parent().remove();
    });
    $("#files").fileUploader(filesToUpload);
    
   });