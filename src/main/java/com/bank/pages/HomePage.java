package com.bank.pages;

import com.bank.utilities.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());
    public HomePage(){
        PageFactory.initElements(driver,this);
    }
    @CacheLookup
    @FindBy( xpath = "//button[normalize-space()='Home']")
    WebElement verifyLinkTextHome;
    public String verifyLinkTextHome(){
        log.info("verify Link Text Home" + verifyLinkTextHome.toString());
        return getTextFromElement(verifyLinkTextHome);
    }
    @FindBy(xpath = "//strong[contains(text(),'XYZ Bank')]")
    WebElement verifyTextXYZBank;
    public String verifyTextXYZBank(){
        log.info("verify Text XYZ Bank" + verifyTextXYZBank.toString());
        return getTextFromElement(verifyTextXYZBank);
    }
    @FindBy(xpath = "//button[@class='btn btn-primary btn-lg']")
    WebElement clickCustomerLoginLink;
    public void clickCustomerLoginLink() {
        log.info("click Customer Login Link" + clickCustomerLoginLink.toString());
        clickOnElement(clickCustomerLoginLink);
    }
    @FindBy(xpath = "//label[contains(text(),'Your Name :')]")
    WebElement verifyYourNameText;
    public String verifyYourNameText() {
        log.info("verify Your Name Text"+ verifyYourNameText.toString());
        return getTextFromElement(verifyYourNameText);
    }
    @FindBy(xpath = "//button[contains(text(),'Home')]")
    WebElement clickOnHomeTab;

    public void clickOnHomeTab(){
        log.info("click On Home Tab"+clickOnHomeTab.toString());
        clickOnElement(clickOnHomeTab);
    }
    @FindBy(xpath = "//button[@ng-click='manager()']")
    WebElement clickBankManagerLogin;
    public void clickBankManagerLogin(){
        log.info("click Bank Manager Login" + clickBankManagerLogin.toString());
        clickOnElement(clickBankManagerLogin);
    }
    @FindBy(xpath = "//button[@ng-class = 'btnClass1']")
    WebElement verifyAddCustomerText;
    public String verifyAddCustomerText() {
        log.info("verify Add Customer Text" + verifyAddCustomerText.toString());
        return getTextFromElement(verifyAddCustomerText);
    }
}
