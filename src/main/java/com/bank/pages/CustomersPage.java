package com.bank.pages;

import com.bank.utilities.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CustomersPage extends Utility {
    private static final Logger log = LogManager.getLogger(CustomersPage.class.getName());
    public CustomersPage(){
        PageFactory.initElements(driver,this);
    }
    @CacheLookup
    @FindBy(xpath = "//button[@class='btn btn-primary btn-lg']")
    WebElement clickCustomerLoginLink;

    public void clickCustomerLoginLink(){
        log.info("click Customer Login Link" + clickCustomerLoginLink.toString());
        clickOnElement(clickCustomerLoginLink);
    }
    @FindBy(xpath = "//select[@id='userSelect']")
    WebElement clickOnYourNameList;
    public void clickOnYourNameList(){
        log.info("click On Your Name List" + clickOnYourNameList.toString());
        selectByContainsTextFromDropDown((By) clickOnYourNameList,"Harry Potter");

    }
    @FindBy(xpath = "//button[contains(text(),'Login')]")
    WebElement clickOnLogin;
    public void clickOnLogin(){
        log.info("click On Login" + clickOnLogin.toString());
        clickOnElement(clickOnLogin);
    }
    @FindBy(xpath = "//button[contains(text(),'Logout')]")
    WebElement verifyLogoutButtonDisplayed;
    public String verifyLogoutButtonDisplayed(){
        log.info("verify Logout Button Displayed" + verifyLogoutButtonDisplayed.toString());
        return getTextFromElement(verifyLogoutButtonDisplayed);
    }
    @FindBy(xpath = "//body[1]/div[3]/div[1]/div[2]/div[1]/div[1]/strong[1]")
    WebElement verifyWelcomeMessage;
    public String verifyWelcomeMessage(){
        log.info("verify Welcome Message " + verifyWelcomeMessage.toString());
        return getTextFromElement(verifyWelcomeMessage);

    }
    @FindBy(xpath = "//button[contains(text(),'Logout')]")
    WebElement clickOnLogout;
    public void clickOnLogout(){
        log.info("click On LOgout" + clickOnLogout.toString());
        clickOnElement(clickOnLogout);
    }
}
