// start animation and behavior

$(document).ready(function () {

  // close the sidebar
  $('#close').fadeOut(100);

  // when open the sidebar
  $("#bars").click(() => {
    $(".options-menu").animate({ left: "0" }, 400)
    // $('#bars').addClass('d-none');
    // $('#close').removeClass('d-none');
    let LIs = document.querySelectorAll(".links-line li");
    $('#close').fadeIn(100);
    $('#bars').fadeOut(100);

    $(LIs).eq(0).delay(400).animate({ top: '0px' }, 200, () => {
      $(LIs).eq(1).delay(80).animate({ top: '40px' }, 200, () => {
        $(LIs).eq(2).delay(80).animate({ top: '80px' }, 200, () => {
          $(LIs).eq(3).delay(80).animate({ top: '120px' }, 200, () => {
            $(LIs).eq(4).delay(80).animate({ top: '160px' }, 200)
          });
        });
      });
    });

  });

  // when close the sidebar
  $("#close").click(() => {
    let width = $(".options-menu").innerWidth();
    $(".options-menu").animate({ left: `-=${width - 50}` }, 200);

    let LIs = document.querySelectorAll(".links-line li");

    $('#bars').fadeIn(100);
    $('#close').fadeOut(100);

    $(LIs).eq(4).delay(50).animate({ top: '100%' }, 100, () => {
      $(LIs).eq(3).delay(50).animate({ top: '100%' }, 100, () => {
        $(LIs).eq(2).delay(50).animate({ top: '100%' }, 100, () => {
          $(LIs).eq(1).delay(50).animate({ top: '100%' }, 100, () => {
            $(LIs).eq(0).delay(50).animate({ top: '100%' }, 100)
          });
        });
      });
    });
    
  });

});

// end animation and behavior

// when clicking on any of side bar links closes the sidebar automatickly
function closeNav() {
  document.querySelector('#close').click();
}









// =============================================




