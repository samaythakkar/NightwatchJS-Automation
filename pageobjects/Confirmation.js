var util = require('util')
module.exports = {
    url: 'https://app.getjarvis.com.au/sign-up',
    elements: {
      bookingMessage: {
        selector: '//div[@class="Relax"]//h3',
        locateStrategy: 'xpath'
      }
    },
    commands: [{
        el: function(elementName, data) {
            var element = this.elements[elementName.slice(1)];
            return util.format(element.selector, data);
        },
        

    }]
  };