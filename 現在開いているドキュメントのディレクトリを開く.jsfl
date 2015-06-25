/**
 * 現在開いているFlashのディレクトリを開きます
 *
 * バージョン v1.0
 * @author Nozomi Nohara
 *
 **/

function openDirectory(path) {
    var uri = FLfile.uriToPlatformPath(path);
    if (isMac()) {
        FLfile.runCommandLine("open " + "\"" + uri + "\"");
    } else {
        FLfile.runCommandLine("explorer " + "\"" + uri + "\"");
    }
}

function isMac() {
    return (fl.version.search(/mac/i) > -1);
}
/Volumes/NOHARA_HDD/Dropbox (ICS INC)/settings/jsfl_commands/レイヤーを追加してstopを追加する.jsfl
function main() {
	var isXFL = dom.pathURI.lastIndexOf(".xfl") >= 0; //xflかどうか確認
	var a = dom.pathURI.lastIndexOf("/");
	var flaName = dom.name.replace(".xfl", "");
	flaName = dom.name.replace(".fla", "");
	assetPath = dom.pathURI.substring(0, a + 1);

	if( isXFL ) {
		openDirectory(assetPath +"../");	
	} else {
		openDirectory(assetPath);
	}
}

var dom = fl.getDocumentDOM();
if( dom == null ) {
    alert("ドキュメントを開いていません。");
} else {
	main();
}