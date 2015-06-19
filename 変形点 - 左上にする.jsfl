var doc = fl.getDocumentDOM();
var items = doc.selection;

for (var i = 0; i < items.length; i++) {
  var item = items[i];
  item.setTransformationPoint({x:0, y:0});
}