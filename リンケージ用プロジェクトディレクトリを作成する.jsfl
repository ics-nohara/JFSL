var dom = fl.getDocumentDOM();

var showDetailLog = false;
var defineStr = "";

flaName = dom.pathURI.slice(dom.pathURI.lastIndexOf('/')+1, dom.pathURI.lastIndexOf('.'));

var result = prompt("プロジェクトディレクトリを作成します。" ,"project/assets/" + flaName.replace("asset-",""))

if (result) {
	fl.getDocumentDOM().library.newFolder(result);
}
