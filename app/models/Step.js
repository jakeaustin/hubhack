var AppSteps = (function(){
  var that = {};
  that.Step = Step;

  function Step(){
    var _data = {},
    _continueBtnText = 'Next';

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

    this.continueButtonText = function(value){
      if(typeof value !== 'undefined') {
        _continueBtnText = value;
      }
      return _continueBtnText;
    };
  }

  Step.prototype = {
    question : function(text){
      if(typeof text !== 'undefined') {
        return this.set('question', text);
      }
      return this.get('question');
    },

    responses : function(array){
      if(typeof array !== 'undefined') {
        return this.set('responses', array);
      }
      return this.get('responses');
    },

    execute : function(response){
      if(typeof response !== 'undefined'){
        return response.getNextStep();
      }
      return undefined;
    }
  };

  return that;
})();
