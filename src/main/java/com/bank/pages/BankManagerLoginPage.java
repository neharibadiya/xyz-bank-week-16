package com.bank.pages;

import com.bank.utilities.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class BankManagerLoginPage extends Utility {
    private static final Logger log = LogManager.getLogger(BankManagerLoginPage.class.getName());
    public BankManagerLoginPage(){
        PageFactory.initElements(driver,this);
    }
    @CacheLookup
    @FindBy(xpath = "//button[@ng-click='manager()']")
    WebElement clickOnBankManagerLoginTab;

    public void clickOnBankManagerLoginTab(){
        log.info("click On Bank Manager LoginTab" + clickOnBankManagerLoginTab.toString());
        clickOnElement(clickOnBankManagerLoginTab);
    }
    @FindBy(xpath = "//button[@ng-class = 'btnClass1']")
    WebElement verifyAddCustomerText;
    public String verifyAddCustomerText(){
        log.info("verify Add Customer Text " + verifyAddCustomerText.toString());
        return getTextFromElement(verifyAddCustomerText);
    }
    @FindBy(xpath = "//button[@ng-class = 'btnClass2']")
    WebElement verifyOpenAccountText;
    public String verifyOpenAccountText(){
        log.info("verify Open Account Text" + verifyOpenAccountText.toString());
        return getTextFromElement(verifyOpenAccountText);
    }
    @FindBy(xpath = "//button[@ng-class = 'btnClass3']")
    WebElement verifyCustomerText;
    public String verifyCustomerText(){
        log.info("verify Customer Text" + verifyCustomerText.toString());
        return getTextFromElement(verifyCustomerText);
    }
}
