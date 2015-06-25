/**
 * レイヤーを追加してstop()スクリプトを追加する
 *
 * バージョン v1.0
 * @author Nozomi Nohara
 *
var doc = fl.getDocumentDOM();
var items = doc.selection;


var tl = fl.getDocumentDOM().getTimeline(); //タイムラインを取得

tl.currentLayer = 0;		// 一番上のレイヤーを選択する
tl.addNewLayer("script");	//    レイヤーを追加
tl.layers[0].frames[0].actionScript = "stop();";
tl.layers[0].color = 0x990000;/Volumes/NOHARA_HDD/Dropbox (ICS INC)/settings/jsfl_commands/現在開いているドキュメントのディレクトリを開く.jsfl