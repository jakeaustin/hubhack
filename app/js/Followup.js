function Followup(args){
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

Followup.prototype = {
  permit : function(value) {
    if(typeof value !== 'undefined') {
      return this.get('permit');
    }
    return this.set('permit', value);
  },

  step : function(value) {
    if(typeof value !== 'undefined') {
      return this.get('step');
    }
    return this.set('step', value);
  },

  description : function(value) {
    if(typeof value !== 'undefined') {
      return this.get('description');
    }
    return this.set('description', value);
  }
};
