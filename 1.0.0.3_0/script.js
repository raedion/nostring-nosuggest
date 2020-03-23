// 2020/03/23
var InputBox = "gLFyf";     // Googleの入力ボックスのクラス名
var SuggestBox = "UUbT9";   // サジェストされるボックスのクラス名
var input_message = document.getElementsByClassName(InputBox)[0];   // クラスの要素取得
input_message.setAttribute("oninput", "CallDelete();");             // 入力検出のときのイベント
input_message.setAttribute("onclick", "CallDelete();");             // クリックしたときのイベント
var s = document.createElement("script");                           // js部分の追加
// 以下にGoogleのサイトで実行を行う処理をヒアドキュメントで示す
s.innerHTML = `
// クロージャ
var staticNum = function (){
    var num = 0;
    return function(){
        num++;
        return num;
    };
}();

// 削除処理の呼び出し
function CallDelete(){
    var input_message = document.getElementsByClassName('`+ InputBox +`')[0].value;
    var target = document.getElementsByClassName('` + SuggestBox + `')[0].style;
    if(input_message.length == 0 ){
        if(staticNum() != 1){
            setTimeout("ExecuteDelete()", 10);
        }
        else{
            setTimeout("ExecuteDelete()", 150);
        }
    }
};

// 削除の一定時間後に実行
function ExecuteDelete(){
    var target = document.getElementsByClassName('` + SuggestBox + `')[0].style;
    target.display = "none";
}
`;
var e = document.getElementsByTagName('body').item(0);  // body要素の取得
e.insertBefore(s, e.firstElementChild);                 // bodyの最初に追加
