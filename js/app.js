const home = {
    
    liEls: document.querySelectorAll('#container_banners li'),
    position: 0,

    movePrev() {
        this.position = this.position - 1;
        this.liEls[this.position].scrollIntoView({behavior: 'smooth'});
    },

    moveNext() {
        this.position = this.position + 1;
        if (this.position == this.liEls.length) {
            this.position = 0;
        }
        this.liEls[this.position].scrollIntoView({behavior: 'smooth'});
    }
}

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        autoWidth: true,
        nav: true
    });
  });