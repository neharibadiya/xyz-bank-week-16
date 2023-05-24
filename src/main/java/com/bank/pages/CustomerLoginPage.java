package com.bank.pages;

import com.bank.utilities.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CustomerLoginPage extends Utility {
    private static final Logger log = LogManager.getLogger(CustomerLoginPage.class.getName());
    public CustomerLoginPage(){
        PageFactory.initElements(driver,this);
    }
    @CacheLookup
    @FindBy(xpath = "//button[@class='btn btn-primary btn-lg']")
    WebElement clickCustomerLoginLink;

    public void clickCustomerLoginLink(){
        log.info("click Customer Login Link " + clickCustomerLoginLink.toString());
        clickOnElement(clickCustomerLoginLink);
    }
    @FindBy (xpath = "//select[@id='userSelect']")
    WebElement selectNameFromList;

    public void yourNameList(){
        log.info("select Name From List" + selectNameFromList.toString());
        selectByVisibleTextFromDropDown(selectNameFromList,"---Your Name---");
    }
    @FindBy(xpath = "//button[normalize-space()='Login']")
    WebElement clickOnLoginButton;

    public void setClickOnLoginButton(){
        log.info("click On Login Button" + clickOnLoginButton.toString());
        clickOnElement(clickOnLoginButton);
    }
    @FindBy(xpath = "//button[normalize-space()='Logout']")
    WebElement verifyLogoutTab;

    public String verifyLogoutTab(){
        log.info("verify Logout Tab" + verifyLogoutTab.toString());
        return getTextFromElement(verifyLogoutTab);
    }

    @FindBy(xpath = "//button[contains(text(),'Logout')]")
    WebElement clickOnLogoutButton;

    public void ClickOnLoginButton(){
        log.info("click On Logout Button" + clickOnLogoutButton.toString());
        clickOnElement(clickOnLogoutButton);
    }
    @FindBy(xpath = "//span[@class='fontBig ng-binding']")
    WebElement verifyTheYourNameTextDisplayed;

    public String verifyTheYourNameTextDisplayed(){
        log.info("verify the your name text displayed" + verifyTheYourNameTextDisplayed.getText());
        return getTextFromElement(verifyTheYourNameTextDisplayed);
    }
}
