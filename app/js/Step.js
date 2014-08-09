function Step(args){
  var _data = args || {};

  this.get = function(prop){
    if(typeof prop !== 'undefined') {
      if(typeof _data[prop] != 'undefined') {
        return _data[prop];
      }
    }
    return undefined;
  };

  this.set = function(prop, value){
    if(typeof prop !== 'undefined') {
      var oldValue = _data[prop];
      _data[prop] = value;
      return oldValue;
    }
    return undefined;
  };
}

Step.prototype = {
  previous : function(value) {
    if(typeof value !== 'undefined') {
      return this.get('previous');
    }
    return this.set('previous', value);
  },

  next : function(value) {
    if(typeof value !== 'undefined') {
      return this.get('next');
    }
    return this.set('next', value);
  },

  title : function(value) {
    if(typeof value !== 'undefined') {
      return this.get('title');
    }
    return this.set('title', value);
  },

  description : function(value) {
    if(typeof value !== 'undefined') {
      return this.get('description');
    }
    return this.set('description', value);
  },
};
