package com.bank.steps;

import com.bank.pages.AccountPage;
import com.bank.pages.AddCustomerPage;
import com.bank.pages.CustomerLoginPage;
import com.bank.pages.OpenAccountPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class BankSteps {
    @Given("^I am on LoginPage$")
    public void iAmOnLoginPage() {
    }

    @When("^click On \"([^\"]*)\" Tab$")
    public void clickOnTab(String arg0){
        new AddCustomerPage().setClickOnBankManagerLoginTab();
    }

    @And("^enter FirstName$")
    public void enterFirstName(String firstName) {
        new AddCustomerPage().sendTextToFirstName(firstName);
    }

    @And("^enter LastName$")
        public void enterLastName(String lastName) {
            new AddCustomerPage().sendTextToLastName(lastName);
    }

    @And("^enter PostCode$")
    public void enterPostCode(String postCode) {
        new AddCustomerPage().sendTextToPostCode(postCode);
    }

    @And("^click On \"([^\"]*)\" Button$")
    public void clickOnButton(String arg0){
        new AddCustomerPage().clickOnAddCustomer();
    }

//    @And("^popup display$")
//    public void popupDisplay() {
//    }
//
//    @Then("^verify message \"([^\"]*)\"$")
//    public void verifyMessage(String arg0) throws Throwable {
//        // Write code here that turns the phrase above into concrete actions
//        throw new PendingException();
//    }
//
//    @And("^click on \"([^\"]*)\" button on popup\\.$")
//    public void clickOnButtonOnPopup(String arg0) throws Throwable {
//        // Write code here that turns the phrase above into concrete actions
//        throw new PendingException();
//    }

    @And("^Search customer that created in first test$")
    public void searchCustomerThatCreatedInFirstTest(String name) {
        new OpenAccountPage().clickCustomerNameList("goti patel");
    }

    @And("^Select currency \"([^\"]*)\"$")
    public void selectCurrency(){
        new OpenAccountPage().currencyList();
    }

//    @And("^popup displayed$")
//    public void popupDisplayed() {
//    }

    @And("^search customer that you created\\.$")
    public void searchCustomerThatYouCreated() {
        new CustomerLoginPage().yourNameList();
    }
    @And("^click on \"([^\"]*)\" Button$")
    public void clickOnButton() {
        new CustomerLoginPage().setClickOnLoginButton();
    }
    @And("^verify \"([^\"]*)\" Tab displayed\\.$")
    public void verifyTabDisplayed(String arg0) {
        String expectedTab = "verify Logout Tab Displayed";
        String actualTab = new CustomerLoginPage().verifyLogoutTab();
        Assert.assertEquals(expectedTab,actualTab);
    }
    @Then("^verify \"([^\"]*)\" text displayed$")
    public void verifyTextDisplayed(String arg0) {
        String expectedTex = "verify Logout Tab Displayed";
        String actualTex = new CustomerLoginPage().verifyLogoutTab();
        Assert.assertEquals(expectedTex,actualTex);
    }

    @And("^Enter amount (\\d+)$")
    public void enterAmount(String amount) {
        new AccountPage().enterAmount100(amount);
    }
    @And("^click on \"([^\"]*)\" Tab$")
    public void clickOnTab() {
        new AccountPage().clickOnDepositButton();
    }
    @Then("^verify message \"([^\"]*)\"$")
    public void verifyMessage(String arg0){
        String expectedMessage = "verify Message Deposit Successfully";
        String actualMessage = new AccountPage().verifyMessageDepositSuccessfully();
        Assert.assertEquals(expectedMessage,actualMessage);
    }

    @Then("^verify message \"Transaction Successful$")
    public void verifyMessageTransactionSuccessful(String message) {
        String expectedMessage = "verify the Message Transaction Successful";
        String actualMessage = new AccountPage().verifyMessageTransactionSuccessful();
        Assert.assertEquals(expectedMessage,actualMessage);
    }


    @And("^click on \"([^\"]*)\" button$")
    public void setClickOnButton(){
        new OpenAccountPage().clickOnProcessButton();
    }

    @And("^click on \"([^\"]*)\"$")
    public void clickOn(String arg0) {
        new CustomerLoginPage().ClickOnLoginButton();
    }
}




