var doc = fl.getDocumentDOM();
var items = doc.selection;

for (var i = 0; i < items.length; i++) {
  var item = items[i];
  item.setTransformationPoint({x:item.width/2, y:item.height/2});
}