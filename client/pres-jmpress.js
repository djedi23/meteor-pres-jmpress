if (modules.presentation === undefined)
  modules.presentation = {};
modules.presentation.currentStep = new ReactiveVar('');

if (modules.jmpress === undefined)
  modules.jmpress = {};
modules.jmpress.initialized = function() {
  return $('.jmpress').jmpress('initialized');
}
modules.jmpress.init = function() {
  $('.jmpress').jmpress(modules.jmpress.settings);
};
modules.jmpress.deinit = function() {
  $('.jmpress').jmpress('deinit');
};
modules.jmpress.reapply = function(step) {
  $('.jmpress').jmpress('reapply', step);
};
modules.jmpress.goTo = function(step) {
  $('.jmpress').jmpress('goTo', step);
};
modules.jmpress.active = function() {
  return $('.jmpress').jmpress('active');
};
modules.jmpress.canvas = function() {
  return $('.jmpress').jmpress('canvas');
};
modules.jmpress.select = function(step) {
  return $('.jmpress').jmpress('select', step);
};
modules.jmpress._settings = function() {
  return $('.jmpress').jmpress('settings');
};
modules.jmpress.defaults = function() {
  return $('.jmpress').jmpress('defaults');
};
modules.jmpress.applyStep = function(stepId, step) {
  $('.jmpress').jmpress('fire', 'applyStep', stepId, step);
};

var keyboardIgnore = function(settings, keys){
  _.each(keys, function(key){
    settings.keyboard.ignore.INPUT.push(key);
    settings.keyboard.ignore.TEXTAREA.push(key);
    settings.keyboard.ignore.SELECT.push(key);
    settings.keyboard.ignore.A.push(key);
    settings.keyboard.ignore.BUTTON.push(key);
  });
};

Template.presentation.rendered = function() {
  if (modules.presentation === undefined)
    modules.presentation = {};

  if (modules.jmpress.settings === undefined)
    modules.jmpress.settings = _.extend({
      fullscreen: true,
      hash: {use: false,
	update : false},
      'beforeChange': function( element, eventData ) {
	if ($(element).attr('id') !== 'overview')
	  modules.presentation.currentStep.set($(element).attr('id'));
      }
    },(modules.presentation.settings || null));
  
  modules.jmpress.init();

  var settings = $('.jmpress').jmpress('settings');
  settings.keyboard.ignore.A = [];
  settings.keyboard.ignore.BUTTON = [];
  keyboardIgnore(settings, [9,33,34,35,36,69,80]);

  modules.calls('template.presentation.rendered',this);
  
  if (! modules.presentation.settings.keyboard.use) // Suppress swipe on mobile if not speaker
    $(document).unbind($('.jmpress').jmpress('current').mobileNamespace);
};

Template.presentation.destroyed = function() {
  modules.jmpress.deinit();
};





Template.slide.rendered = function() {
  var step = this.$('.step');
  if ($('.jmpress').jmpress('initialized') && step.attr('style') === undefined) {
    $('.jmpress').jmpress('canvas').append(step);
    $('.jmpress').jmpress('init', step);
  }
};

Template.slide.destroyed = function() {
  if (this.$('.step').data('stepData'))
    $('.jmpress').jmpress('deinit', this.$('.step'));
};

Template.slide.helpers({
  draggable: function(){
    return modules.calls('draggableSlide');
  }
});

Template.slide.events({
  'dragstart' : function(e,tpl){
    console.log(e,this);
  },
  'dragend' : function(e,tpl){
    console.log(e,this);
  },
  'drop' : function(e,tpl){
    console.log(e,this);
  }    
});
