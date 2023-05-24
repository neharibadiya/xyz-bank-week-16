package com.bank.pages;

import com.bank.utilities.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AddCustomerPage extends Utility {
    private static final Logger log = LogManager.getLogger(AddCustomerPage.class.getName());
    public AddCustomerPage(){
        PageFactory.initElements(driver,this);
    }
    @CacheLookup
    @FindBy(xpath = "//button[normalize-space()='Bank Manager Login']" )
    WebElement clickOnBankManagerLoginTab;
    public void setClickOnBankManagerLoginTab(){
        log.info("click On Bank Manager Login Tab" + clickOnBankManagerLoginTab.toString());
        clickOnElement(clickOnBankManagerLoginTab);
    }
    @CacheLookup
    @FindBy(xpath = "//button[@ng-class = 'btnClass1']")
    WebElement clickOnAddCustomerTab;
    public void clickOnAddCustomerTab(){
        log.info("click On Add Customer Tab" + clickOnAddCustomerTab.toString());
        clickOnElement(clickOnAddCustomerTab);
    }
    @FindBy(xpath = "//body/div[3]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/form[1]/div[1]/input[1]")
    WebElement sendTextToFirstName;
    public void sendTextToFirstName(String firstName){
        log.info("send Text To First Name" + sendTextToFirstName.getText());
        sendTextToElement(sendTextToFirstName, firstName);
    }
    @FindBy(xpath = "//body/div[3]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/form[1]/div[2]/input[1]")
    WebElement sendTextToLastName;
    public void sendTextToLastName(String lastName){
        log.info("send Text To LastName" + sendTextToLastName.getText());
        sendTextToElement(sendTextToLastName, lastName);
    }
    @FindBy(xpath = "//body/div[3]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/form[1]/div[3]/input[1]")
    WebElement sendTextToPostCode;
    public void sendTextToPostCode(String postCode){
        log.info("send Text To PostCode" + sendTextToPostCode.getText());
        sendTextToElement(sendTextToPostCode, postCode);
    }
    @FindBy(xpath = "//body/div[3]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/form[1]/button[1]")
    WebElement clickOnAddCustomer;

    public void clickOnAddCustomer(){
        log.info("click On Add Customer" + clickOnAddCustomer.toString());
        clickOnElement(clickOnAddCustomer);
        driver.switchTo().alert();
        String text = driver.switchTo().alert().getText();// Getting the text from alert
        System.out.println(text);
        driver.switchTo().alert().accept();
    }
}
