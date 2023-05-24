package com.bank.pages;

import com.bank.utilities.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class OpenAccountPage extends Utility {
    private static final Logger log = LogManager.getLogger(OpenAccountPage.class.getName());
    public OpenAccountPage(){
        PageFactory.initElements(driver,this);
    }
    @CacheLookup
    @FindBy(xpath = "//button[@ng-click ='openAccount()']")
    WebElement clickOnOpenAccountLink;
    public void clickOnOpenAccountLink() {
        log.info("click On Open Account Link" + clickOnOpenAccountLink.toString());
        clickOnElement(clickOnOpenAccountLink);
    }
    @FindBy(xpath = "//select[@id='userSelect']")
    WebElement clickCustomerNameList;
    public void clickCustomerNameList(String name) {
        log.info("click Customer Name List" + clickCustomerNameList.toString());
        selectByVisibleTextFromDropDown(clickCustomerNameList,"goti patel");
    }
    @FindBy(xpath = "//select[@id='currency']")
    WebElement clickCurrency;
    public void currencyList() {
        log.info("click Currency " + clickCurrency.toString());
        selectByContainsTextFromDropDown((By) clickCurrency,"Pound");
    }
    @FindBy(xpath = "//button[contains(text(),'Process')]")
    WebElement clickOnProcessButton;
    public void clickOnProcessButton() {
        log.info("click On Process Button" + clickOnProcessButton.toString());
        clickOnElement(clickOnProcessButton);
        driver.switchTo().alert();
        String text = driver.switchTo().alert().getText();// Getting the text from alert
        System.out.println(text);
        driver.switchTo().alert().accept();
    }
}
