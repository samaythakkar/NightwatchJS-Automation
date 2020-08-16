module.exports = {
    'Fill up first page ':  function (browser) {
 
    var bookingPage = browser.page.Booking();

    bookingPage.navigate()
    
    bookingPage.setValue("@addressinput","Melbourne",function(){
        browser.pause(2000)
        bookingPage.setValue("@addressinput",browser.Keys.DOWN_ARROW,function(){
            bookingPage.setValue("@addressinput",browser.Keys.ENTER);

        });

    });
    bookingPage.click('@subscription_fortnightly');
    bookingPage.getText('@bookingsummary_frequency', function(text){
        console.log(text)
    })

    bookingPage.selectVisitHours("1:00")
    bookingPage.selectDate("August 2020","29")
    bookingPage.selectVisitTime("8:00")

    bookingPage.setValue('@comments',"Hello world")
    bookingPage.selectButlerGender("Male")
    bookingPage.selectPetType("Cat")
    bookingPage.click("@nextPageButton").pause(3000)


},
    'Fill up signup form': function (browser){
    var signUpPage = browser.page.Signup();
    browser.frame(0).click("//div[@class='sign-email']")
    signUpPage.setValue("@firstNameBox","TestF");
    signUpPage.setValue("@lastNameBox","TestL");
    signUpPage.setValue("@phoneNumberBox","413000000");
    signUpPage.setValue("@emailBox","test@test123uniqa5.com");
    signUpPage.setValue("@passwordBox","Test@1234");
    signUpPage.click('@submitButton').pause(4000)

    },
    'Verify the order is placed': function(browser){
    
    var confirmationPage = browser.page.Confirmation();

    confirmationPage.getText('@bookingMessage', function(text){
        console.log(text)
    })
    
    confirmationPage.assert.value('@bookingMessage','Thanks for your booking!')


    }
  };