// スライダー
$(function () {
	$('#js-slider-2').slick({
		autoplay: true, // 自動再生ON
		fade: true, // フェードON
		arrows: false, // 矢印OFF
		speed: 2000, // スライド、フェードアニメーションの速度1000ミリ秒
		autoplaySpeed: 2000, // 自動再生速度4000ミリ秒
		pauseOnFocus: false, // フォーカスで一時停止OFF
		pauseOnHover: false, // マウスホバーで一時停止OFF
	});
  });

// ページスクロール
$(function(){
  $('#switch').on('change', function(){
    var st = $(window).scrollTop();
    if($(this).prop("checked") == true) {
      $('html').addClass('scroll-prevent');
      $('html').css('top', -(st) + 'px');
      $('#switch').on('change', function(){
        if($(this).prop("checked") !== true) {
          $('html').removeClass('scroll-prevent');
          $(window).scrollTop(st);
        }
      });
    }
  });
  $('.header_menu a[href]').on('click', function(event) {
	$('#switch').prop('checked', false);
  });
  $('.header_menu a').on('click', function(){
    var st = $(window).scrollTop();
      $('html').removeClass('scroll-prevent');
      $('html').css('top', -(st) + 'px');
      $('.header_menu a').on('change', function(){
      });
    
  });
});

//　PageTop
$(function () {
	$('a[href^="#"]').click(function () {
	  var href = $(this).attr("href");
	  var target = $(href == "#" || href == "" ? 'html' : href);
	  var position = target.offset().top;
  	  var speed = 600;
	  $("html, body").animate({
		scrollTop: position
	  }, speed, "swing");
	  return false;
	});
  });

  jQuery(function($){
	$(window).on('scroll', function(){
	  if ($(window).scrollTop() > 300) {
		$('#pagetop').fadeIn(400);
	  } else {
		$('#pagetop').fadeOut(400);
	  }
	});
  });

  //　ふわっと
  $(function() {
	// スクロールイベント
	  $(window).scroll(function() {
		// フェードアニメーションを呼び出す
		fadeAnime();
	  });
	  
	  // フェードアニメーションの設定
	  function fadeAnime() {
		// .fadeUpTriggerが付いた要素に対して
		$('.fadeUpTrigger').each(function() {
		  // 縦位置を取得し-50pxして、変数targetに代入する
		  let target = $(this).offset().top -= 50;
		  // スクロール量を取得し、変数scrollに代入する
		  let scroll = $(window).scrollTop();
		  // 表示画面の高さを取得し、変数windowHeightに代入する
		  let windowHeight = $(window).height();
		  // 要素の縦位置から表示画面の高さを引いて200pxを足した数字よりscrollのほうが大きい場合
		  if(scroll > target - windowHeight + 200) {
			// .fadeUpを追加する
			$(this).addClass('fadeUp');
		  } else {
			// そうでない場合は.fadeUpを削除する
			$(this).removeClass('fadeUp');
		  }
		});
	  };    
	});
//　左右からフワッと
	$(function() {
		// スクロールイベント
		$(window).scroll(function() {
		  // ふわっとスライドを呼び出す
		  fadeInRightAnime();
		  fadeInLeftAnime();
		});
	  
		// 右からふわっとスライドの処理
		function fadeInRightAnime() {
		  $('.fadeInRightTrigger').each(function() {
			// 発火する位置の座標から-50pxし、変数targetに代入する
			let target = $(this).offset().top -= 50;
			// スクロール量を取得し、変数scrollに代入する
			let scroll = $(window).scrollTop();
			// 表示画面の高さを取得し、変数windowHeightに代入する
			let windowHeight = $(window).height();
			// もし、発火する位置から表示画面の高さ+100pxを引いた数値よりscrollの高さが大きかったら
			if(scroll > target - windowHeight + 100) {
			  // .fadeInRightを追加する
			  $(this).addClass('fadeInRight');
			} else {
			  // .fadeInRightを削除する
			  $(this).removeClass('fadeInRight');
			}
		  });
		};
	  
		// 左からふわっとスライドの処理
		function fadeInLeftAnime() {
		  $('.fadeInLeftTrigger').each(function() {
			let target = $(this).offset().top -= 50;
			let scroll = $(window).scrollTop();
			let windowHeight = $(window).height();
			if(scroll > target - windowHeight + 100) {
			  $(this).addClass('fadeInLeft');
			} else {
			  $(this).removeClass('fadeInLeft');
			}
		  });
		}; 
	  });

//　アコーディオン
$(function () {
	$(".js-accordion-title").on("click", function() {
	  $(this).next().slideToggle(200);
	  $(this).toggleClass("open",200);
	});
  });