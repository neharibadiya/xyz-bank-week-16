Feature: Bank Manager Login

  @sanity,@Regression
  Scenario: Verify the bankManager Should Add Customer Successfully
    Given I am on LoginPage
    When click On "Bank Manager Login" Tab
    And click On "Add Customer" Tab
    And enter FirstName
    And enter LastName
    And enter PostCode
    And click On "Add Customer" Button
    And popup display
    Then verify message "Customer added successfully"
    And click on "ok" button on popup.
@sanity,@regression
  Scenario: Verify the bankManager Should Open Account Successfully
    Given I am on LoginPage
    When click On "Bank Manager Login" Tab
    And click On "Open Account" Tab
    And Search customer that created in first test
    And Select currency "Pound"
    And click on "process" button
    And popup displayed
    Then verify message "Account created successfully"
    And click on "ok" button on popup.

@smoke,@regression
  Scenario: Verify the customer Should Login And Logout Suceessfully.
    Given I am on LoginPage
    When click on "Customer Login" Tab
    And search customer that you created.
    And click on "Login" Button
    And verify "Logout" Tab displayed.
    And click on "Logout"
    Then verify "Your Name" text displayed

@smoke,@regression
  Scenario: Verify the customer Should Deposit Money Successfully.
    Given I am on LoginPage
    When click on "Customer Login" Tab
    And search customer that you created.
    And click on "Login" Button
    And click on "Deposit" Tab
    And Enter amount 100
    And click on "Deposit" Button
    Then verify message "Deposit Successful"

@regression
  Scenario: Verify the customer Should With draw Money Successfully
    Given I am on LoginPage
    When click on "Customer Login" Tab
    And search customer that you created.
    And click on "Login" Button
    And click on "Withdrawl" Tab
    And Enter amount 50
    And click on "Withdraw" Button
    Then verify message "Transaction Successful