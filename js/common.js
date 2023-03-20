// common script
preventDefaultAnchor();
// 상단 튐 방지
function preventDefaultAnchor() {
  $(document).on('click', 'a[href="#"]', function(e) {
    e.preventDefault();
  });
}




