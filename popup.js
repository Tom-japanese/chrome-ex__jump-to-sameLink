

var title = chrome.tabs.getSelected(function(tab) {  // 2 
      return tab.title;
  });
console.log(title);


/* ==================================================
コメントアウト
==================================================  */

function Save() {
  // タイムスタンプ作成
  var date = new Date() ;
  var a = date.getTime() ;

  var message = document.getElementById('input_message').value;
  var array = [];
  array.push(message);
  var keyName = 'info_' + a;
  chrome.tabs.getSelected(function(tab) { 
    array.push(tab.title);
    array.push(tab.url);
    console.log(keyName);
    chrome.storage.local.set({'info_': array}, function () { });

  });
  document.getElementById('input_message').value = message;
}

document.getElementById('save_button').addEventListener('click', Save);　　// 保存ボタン（save_button）がクリックされたらSave関数を実行



/* ==================================================
コメントアウト
==================================================  */

// function Load() {
//   chrome.storage.local.get('Alertmsg', function (items) {
//     document.getElementById('input_message').value = items.Alertmsg;  // Alertmsgキーと対に記録された文字列を、idがinput_messageのテキストボックスに出力
//   });
// }

// document.addEventListener('DOMContentLoaded', Load);  // オプションページ（options.html）の読み込みと解析が完了したらLoad関数を実行
