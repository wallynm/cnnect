enyo.kind({
  name: 'smartView.Storage',
  kind: 'Component',


  /* Set the value of item[key] to the stringified version of obj. */
  set: function(name, obj) {
    localStorage.setItem(name, JSON.stringify(obj));
  },

  /* Get the item with the key 'name'. */
  get: function(name) {
    var result;
    if (typeof name === 'string') {
      result = localStorage.getItem(name);
    }

    if (typeof result === 'string' && result === 'undefined') {
      return undefined;
    }

    if (typeof result === 'string') {
      return JSON.parse(result);
    }
  },

  /* Remove the item with the key 'name'. */
  remove: function(name) {
    console.warn(localStorage);
    if (typeof name === 'string') {
      localStorage.removeItem(name);
    } else {
      throw 'ERROR [Storage.remove]: \'name\' was not a String.';
    }
  },

  /* Returns length of all localStorage objects. */
  __getSize: function() {
    var i, count = 0;
    for (i = 0; i < localStorage.length; i++) {
      count += localStorage.getItem(localStorage.key()).length;
    }
    return count;
  }
});
