// 引数なしでshowAlert関数を定義
function showAlert() {
	alert("今日も楽しい開発しよう！"); //alertはデフォルトで組み込まれている関数。alert('文字列, 値')
}
// 拡張機能がクリックされたら、かっこの中を実行する

chrome.action.onClicked.addListener((tab) => { //このtabがどこからきているのか不明
    console.log(tab.id);
		console.log(tab.url);
	chrome.scripting.executeScript({
		target: { tabId: tab.id }, //現在開かれているtabがtarget
		func: showAlert //funcでもfunctionでもいいみたい
	});
});