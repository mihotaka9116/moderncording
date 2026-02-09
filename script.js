<script>
  const today = new Date().toISOString().split("T")[0];
  const checkinInput = document.getElementsByName('checkin')[0];
  const checkoutInput = document.getElementsByName('checkout')[0];

  if (checkinInput && checkoutInput) {
      // 初期値として今日以降を設定
      checkinInput.min = today;
      checkoutInput.min = today;

      // チェックイン日が変更されたら実行
      checkinInput.addEventListener('change', function() {
          // チェックアウトの最小値を「チェックイン日に設定した日」に変更
          checkoutInput.min = this.value;
          
          // もしチェックアウト日がチェックイン日より前になっていたらリセット
          if (checkoutInput.value && checkoutInput.value < this.value) {
              checkoutInput.value = this.value;
          }
      });
  }
</script>

// ハンバーガーメニューの制御（差し替え）
const navbtn = document.querySelector('.navbtn');
const html = document.querySelector('html');

if (navbtn) {
    navbtn.addEventListener('click', () => {
        html.classList.toggle('open');
    });
}

// メニューリンクをクリックしたら閉じる（ページ内リンク対策）
const navLinks = document.querySelectorAll('.nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        html.classList.remove('open');
    });
});

// スクロールアニメーションの制御
const observeAnimation = () => {
  const targets = document.querySelectorAll('.js-fade'); // 監視対象のクラス名
  
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2 // 20%見えたら実行
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-show'); // 表示されたらクラスを追加
      }
    });
  }, options);

  targets.forEach(target => observer.observe(target));
};

observeAnimation();
