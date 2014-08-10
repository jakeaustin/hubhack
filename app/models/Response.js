var AppResponses = (function(){
  var that = {};
  that.Response = Response;

  function Response(){
    var _data = {};

    this.get = function(prop){
      if(typeof prop !== 'undefined') {
        return _data[prop];
      }
      return undefined;
    };

    this.set = function(prop, newValue){
      if(typeof prop !== 'undefined') {
        var oldValue = _data[prop];
        _data[prop] = newValue;
        return oldValue;
      }
      return undefined;
    };
  }

  Response.prototype = {
    responseText : function(text){
      if(typeof text !== 'undefined') {
        return this.set('responseText', text);
      }
      return this.get('responseText');
    },

    setNextStep : function(nextStep){
      this.set('nextStep', nextStep);
    },

    getNextStep : function(){
      return this.get('nextStep');
    }
  };

  return that;
})();
