var util = require('util')

module.exports = {
    url: 'https://app.getjarvis.com.au/sign-up',
    elements: {
      iframe_select:{
        selector:'//iframe[@class="resp-iframe"]',
        locateStrategy:'xpath'
      },
      signemailbtn: {
        selector: '//div[@class="sign-email"]//i',
        locateStrategy: 'xpath'
      },
      firstNameBox:{
          selector:'//input[@name="firstName"]',
          locateStrategy: 'xpath'
      },
      lastNameBox:{
        selector:'//input[@name="lastName"]',
        locateStrategy: 'xpath'
      },
      phoneNumberBox:{
        selector:'//input[@name="phoneNumber"]',
        locateStrategy: 'xpath'
      },
      emailBox:{
        selector:'//input[@name="email"]',
        locateStrategy: 'xpath'
      },
      passwordBox:{
        selector:'//input[@name="password"]',
        locateStrategy: 'xpath'
      },
      submitButton:{
          selector:'//button[contains(@class,"ui button btn")]',
          locateStrategy: 'xpath'
      }



    },
    commands: [{
        el: function(elementName, data) {
            var element = this.elements[elementName.slice(1)];
            return util.format(element.selector, data);
        }
       
       

    }]
  };
