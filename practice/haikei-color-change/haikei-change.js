console.log('関数の外だからこれは実行されるはずだね');

haikei_change = () => {
  console.log('関数内部のコンソールログ');
  document.body.style.backgroundColor = "blue";
}

haikei_change();
