var util = require('util')
module.exports = {
    url: 'https://app.getjarvis.com.au/sign-up',
    elements: {
      addressinput: {
        selector: '//input[@id="addressInput"]',
        locateStrategy: 'xpath'
      },
      subscription_fortnightly: {
        selector: '//input[@name="recurrence"]/../span[text()="Fortnightly"]',
        locateStrategy: 'xpath'
      },
      bookingsummary_frequency: {
          selector: '(//div[@class="SummaryBox"]//tr//td//strong[contains(text(),"Ongoing Frequency")]/../../td)[2]',
          locateStrategy:'xpath'
      },
      visithours:{
          selector:'(//span[text()="%s"])[1]',
          locateStrategy:'xpath'
      },
      monthSelector:{
          selector:'//div[@class="react-datepicker__month-container"]//div[@class="react-datepicker__current-month" and text()="%s"]',
          locateStrategy:'xpath'
      },
      daySelector:{
          selector:'//..//..//div[contains(@class,"react-datepicker__day") and not(contains(@class,"react-datepicker__day--disabled")) and contains(text(),"%s")]',
          locateStrategy:'xpath'
      },
      visitTime:{
        selector:'(//span[text()="%s"])[2]',
        locateStrategy:'xpath'
      },
      owlNextHours:{
          selector:'(//div[@class="owl-next"])[1]',
          locateStrategy:'xpath'
      },
      comments:{
          selector:'//textarea[@name="comment"]',
          locateStrategy:"xpath"
      },
      selectButlerGender:{
          selector:'(//ul[@class="option-prefer-pets"])[1]//label[@class="option"]//span[text()="%s"]',
          locateStrategy:"xpath"
      },
      selectPetType:{
        selector:'(//ul[@class="option-prefer-pets"])[2]//label[@class="option"]//span[text()="%s"]',
        locateStrategy:"xpath"
      },
      nextPageButton:{
          selector:'//input[@value="NEXT"]',
          locateStrategy:"xpath"
      }
    


      


    },
    commands: [{
        el: function(elementName, data) {
            var element = this.elements[elementName.slice(1)];
            return util.format(element.selector, data);
        },
        selectVisitHours:  function(hours){
            console.log("INSIDE asdfa")

            var ele = this.el('@visithours',hours)
            this.api.useXpath().click(ele)
        },
        selectDate: function(month , date){
            var month_ele = this.el('@monthSelector',month)
            var date_ele = this.el('@daySelector',date)
            var ele = month_ele+date_ele
            this.api.useXpath().click(ele)

        },
        selectVisitTime: function(time){
            var element = this.el('@visitTime',time)
            this.api.useXpath().click(element)
        },
        selectButlerGender: function(gender){
            var element = this.el('@selectButlerGender',gender)
            this.api.useXpath().click(element)

        },
        selectPetType: function(petType){
            var element = this.el('@selectPetType',petType)
            this.api.useXpath().click(element)

        },
        
       

    }]
  };

  ////div[@class="react-datepicker__month-container"]//div[@class="react-datepicker__current-month" and text()="August 2020"]
  ////div[@class="react-datepicker__month-container"]//div[@class="react-datepicker__current-month" and text()="August 2020"]//..//..//div[contains(@class,"react-datepicker__day") and contains(text(),"30")]


  //div[@class="react-datepicker__month-container"]//div[@class="react-datepicker__current-month" and text()="August 2020"]//..//..//div[contains(@class,"react-datepicker__day") and not(contains(@class,"react-datepicker__day--disabled")) and contains(text(),"30")]

  //  //div[@class="react-datepicker__month-container"]//div[@class="react-datepicker__current-month" and text()="August 2020"]//..//..//div[contains(@class,"react-datepicker__day") and not(contains(@class,"react-datepicker__day--disabled")) and contains(text(),"30")]