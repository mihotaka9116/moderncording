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
