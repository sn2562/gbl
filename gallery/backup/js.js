//var header_h;
var footer_h;
var window_h;

//js
/*
window.onload = function() { // htmlが完全にロードされたあとで実行される処理をここに記述する : http://kazefuku.net/archives/1212
	appInit();  
};

var appInit = function() {
	console.log('appInit : OK'); // ブラウザコンソールへの出力 (ブラウザ上で command + option + i でコンソールを表示できる)
}
*/

//jQuery
$(function(){
	//ヘッダーとフッダーの高さを取得
//	header_h=$('header').outerHeight ();
//	footer_h=$('footer').outerHeight ();
//
//	window_h = $(window).height();//ウィンドウ高を取得
//
//	var img_size=window_h-header_h-footer_h;
//	console.log(img_size);//確認

	//	$('img').height(img_size);//画像のサイズを画面いっぱいになるように変更する

	//もし画像の横幅がウィンドウのサイズより大きくなってしまったらリサイズする
	//	var img_w = $("img").width();
	//	var window_w = $(window).width();
	//	if(img_w>window_w){
	//		$('img').width(window_w);//画像のサイズを画面いっぱいになるように変更する
	//	}





});






$(window).resize(function(){//ウィンドウがリサイズされたら呼び出す
	var resizeFooter = $(window).height()-window_h;
	$('footer').height(footer_h+resizeFooter);

});

