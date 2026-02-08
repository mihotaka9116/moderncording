// 今日より前の日付を選択不可にする設定
const today = new Date().toISOString().split('T')[0];
document.getElementsByName('checkin')[0].setAttribute('min', today);
document.getElementsByName('checkout')[0].setAttribute('min', today);
