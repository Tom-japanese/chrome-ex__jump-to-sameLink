function toggleMuteState(tabId) {
  chrome.tabs.get(tabId, async (tab) => {
    let muted = !tab.mutedInfo.muted;
    await chrome.tabs.update(tabId, { muted });
    console.log(`Tab ${tab.id} is ${ muted ? 'muted' : 'unmuted' }`);
  });
}
chrome.tabs.onUpdated.addListener(function(tabId,changeInfo,thisTab){ 
	
	// console.log(tabId);
	// console.log(changeInfo);
	// console.log(thisTab);
  // これから開くタブ（loading）既に開いているタブ（complete）
  if(changeInfo.status == "loading"){
    // 遷移先のURLを取得
    // console.log(thisTab.url);
    // 全てのタブの中から同じタブがあるかどうか確認する
    chrome.tabs.query({currentWindow:true},function(tabs){
      console.log(tabs);// 現在開いているタブの情報を取得できる
      for(i = 0; i < tabs.length;i++){
        if(thisTab.url == tabs[i].url && thisTab.id!=tabs[i].id){
          // 該当のタブに飛ぶ
          chrome.tabs.update(tabs[i].id,{highlighted:true},null);
          // 開いているタブを削除
          chrome.tabs.remove(thisTab.id,null);
          break;		
        }
      }
    });

  }




});