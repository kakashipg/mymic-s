  $(function () {
    // セレクタを指定して2つの要素を取得
    let buyElement = $(".buy-btn");
    let contactElement = $(".contact-btn");
  
    // 両方の要素を初期状態で非表示にする
    buyElement.hide();
    contactElement.hide();
  
    // ウィンドウのスクロールイベントを監視し、条件を満たすとfadeInさせる
    $(window).scroll(function () {
      if ($(this).scrollTop() > 150) {
        buyElement.fadeIn();
        contactElement.fadeIn();
      } else {
        buyElement.fadeOut();
        contactElement.fadeOut();
      }
    });
  });

