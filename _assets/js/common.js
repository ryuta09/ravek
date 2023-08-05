function header() {

  const header = document.querySelector('.j-header');
  const header_btn = document.querySelector('.j-header__btn');
  const body = document.querySelector('body');

  header_btn.addEventListener('click', ()=>{
    if(header.classList.contains('active')){
      header.classList.remove('active');
      body.classList.remove('is-hidden');
    }else {
      header.classList.add('active');
      body.classList.add('is-hidden');
    }
  });
}

header();

//スムーススクロール
jQuery('a[href^="#"]').click(function() {
  // 移動速度を指定（ミリ秒）
  let speed = 300;
  // hrefで指定されたidを取得
  let id = jQuery(this).attr("href");
  // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
  let target = jQuery("#" == id ? "html" : id);
  // ページのトップを基準にターゲットの位置を取得
  let position = jQuery(target).offset().top;
  // ターゲットの位置までspeedの速度で移動
  jQuery("html, body").animate(
    {
      scrollTop: position
   },
    speed
  );
  return false;
});