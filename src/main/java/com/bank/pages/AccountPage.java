package com.bank.pages;

import com.bank.utilities.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AccountPage extends Utility {
    private static final Logger log = LogManager.getLogger(AccountPage.class.getName());
    public AccountPage(){
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
    @CacheLookup
    @FindBy(xpath = "//button[@ng-click = 'deposit()']")
    WebElement clickOnDeposit;
    public void clickOnDeposit(){
        log.info("click On Deposit" +clickOnDeposit.toString());
        clickOnElement(clickOnDeposit);
    }
    @CacheLookup
    @FindBy(xpath = "//body/div[3]/div[1]/div[2]/div[1]/div[4]/div[1]/form[1]/div[1]/input[1]")
    WebElement enterAmount100;
    public void enterAmount100(String amount){
        log.info("enter Amount 100" + enterAmount100.toString());
        sendTextToElement(enterAmount100,amount);
    }
    @CacheLookup
    @FindBy(xpath = "//body/div[3]/div[1]/div[2]/div[1]/div[4]/div[1]/form[1]/button[1]")
    WebElement clickOnDepositButton;
    public void clickOnDepositButton(){
        log.info("click on Deposit Button" + clickOnDepositButton.toString());
        clickOnElement(clickOnDepositButton);
    }
    @CacheLookup
    @FindBy(xpath = "//span[contains(text(),'Deposit Successful')]")
    WebElement verifyMessageDepositSuccessfully;
    public String verifyMessageDepositSuccessfully(){
        log.info("verify Message Deposit Successfully" + verifyMessageDepositSuccessfully.toString());
        return getTextFromElement(verifyMessageDepositSuccessfully);
    }
    @CacheLookup
    @FindBy(xpath = "//button[@class='btn btn-primary btn-lg']")
    WebElement setClickCustomerLoginLink;

    public void setClickCustomerLoginLink(){
        log.info("click Customer Login Link" + clickCustomerLoginLink.toString());
        clickOnElement(clickCustomerLoginLink);
    }
    @FindBy(xpath = "//select[@id='userSelect']")
    WebElement setClickOnYourNameList;
    public void setClickOnYourNameList(){
        log.info("click On Your Name List" + clickOnYourNameList.toString());
        selectByContainsTextFromDropDown((By) clickOnYourNameList,"Harry Potter");

    }
    @FindBy(xpath = "//button[contains(text(),'Login')]")
    WebElement setClickOnLogin;
    public void setClickOnLogin(){
        log.info("click On Login" + clickOnLogin.toString());
        clickOnElement(clickOnLogin);
    }

    @FindBy( xpath = "//body/div[3]/div[1]/div[2]/div[1]/div[3]/button[3]")
    WebElement clickOnWithdrawButton;
    public void clickOnWithdrawButton(){
        log.info("click On Withdraw Button" + clickOnWithdrawButton.toString());
        clickOnElement(clickOnWithdrawButton);
    }
    @FindBy(xpath = "//body/div[3]/div[1]/div[2]/div[1]/div[4]/div[1]/form[1]/div[1]/input[1]")
    WebElement enterAmount;
    public void enterAmount(String amount){
        log.info("enter Amount" + enterAmount.toString());
        sendTextToElement(enterAmount,amount);
    }
    @FindBy(xpath = "//body/div[3]/div[1]/div[2]/div[1]/div[4]/div[1]/form[1]/button[1]")
    WebElement clickOnWithdraw;
    public void clickOnWithdraw(){
        log.info("click On Withdraw" + clickOnWithdraw.toString());
        clickOnElement(clickOnWithdraw);
    }
    @FindBy(xpath = "//span[contains(text(),'Transaction successful')]")
    WebElement verifyMessageTransactionSuccessful;
    public String verifyMessageTransactionSuccessful(){
        log.info("verify Message Transaction Successful" + verifyMessageTransactionSuccessful.toString());
        return getTextFromElement(verifyMessageTransactionSuccessful);
    }
}
