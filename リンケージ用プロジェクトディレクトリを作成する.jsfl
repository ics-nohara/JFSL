var dom = fl.getDocumentDOM();

var showDetailLog = false;
var defineStr = "";

var isXFL = dom.pathURI.lastIndexOf(".xfl") >= 0; //xflかどうか確認
var a = dom.pathURI.lastIndexOf("/");
var flaName = dom.name.replace(".xfl", "");
var flaName = dom.name.replace(".fla", "");

var result = prompt("プロジェクトディレクトリを作成します。" ,"project/assets/" + flaName.replace("asset-",""))

if (result) {
	fl.getDocumentDOM().library.newFolder(result);
}
