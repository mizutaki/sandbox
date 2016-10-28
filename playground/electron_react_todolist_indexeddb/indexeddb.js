var _db = null;
var IndexedDB = {
  init: function() {
    console.log('init');
    //var ab = indexedDB.deleteDatabase("watch_someday");
    var req = window.indexedDB.open('hoge_app', 104);
    req.onupgradeneeded = function(ev) {
      var db = ev.target.result;
      ev.target.transaction.onerror = function(err) { console.log(err); };
      if (db.objectStoreNames.contains('content')) {
        db.deleteObjectStore('content');
      }
      var store = db.createObjectStore('content', {keyPath:'title'});
      console.log("XXX1", store);
    };

    req.onsuccess = function(ev) {
      _db = (ev.target) ? ev.target.result : ev.result;
      console.log('onsuccess');
      console.log(_db);
    };
  },

  add: function(text) {
    console.log('add');
    var db = _db;
    console.log(db);
    var tx = db.transaction(['content'],'readwrite');
    var store = tx.objectStore('content');
    var requrest = store.put({title: text});
    tx.oncomplete = function() { console.log('success add.'); };
    tx.onerror = function() { console.log('error add.'); };
  },

  delete: function(text) {
    console.log('delete');
    var db = _db;
    var tx = db.transaction(['content'], 'readwrite');
    var store = tx.objectStore('content');
    var requrest = store.delete(text);
    tx.onsuccess = function() { console.log('success delete.'); };
    tx.onerror = function() { console.log('error add.'); };
  }
};
module.exports = IndexedDB;