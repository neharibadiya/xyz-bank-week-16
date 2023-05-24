$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Bank.feature");
formatter.feature({
  "line": 1,
  "name": "Bank Manager Login",
  "description": "",
  "id": "bank-manager-login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4012280400,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Verify the bankManager Should Open Account Successfully",
  "description": "",
  "id": "bank-manager-login;verify-the-bankmanager-should-open-account-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@sanity,"
    },
    {
      "line": 15,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I am on LoginPage",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "click On \"Bank Manager Login\" Tab",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "click On \"Open Account\" Tab",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Search customer that created in first test",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Select currency \"Pound\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "click on \"process\" button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "popup displayed",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "verify message \"Account created successfully\"",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "click on \"ok\" button on popup.",
  "keyword": "And "
});
formatter.match({
  "location": "BankSteps.iAmOnLoginPage()"
});
formatter.result({
  "duration": 96228400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bank Manager Login",
      "offset": 10
    }
  ],
  "location": "BankSteps.clickOnTab(String)"
});
formatter.result({
  "duration": 401191400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Open Account",
      "offset": 10
    }
  ],
  "location": "BankSteps.clickOnTab(String)"
});
formatter.result({
  "duration": 31826700,
  "status": "passed"
});
formatter.match({
  "location": "BankSteps.searchCustomerThatCreatedInFirstTest(String)"
});
formatter.result({
  "duration": 230600,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027com.bank.steps.BankSteps.searchCustomerThatCreatedInFirstTest(String) in file:/C:/Users/KISSAN/IdeaProjects/xyz-bank-week-16/target/test-classes/\u0027 with pattern [^Search customer that created in first test$] is declared with 1 parameters. However, the gherkin step has 0 arguments []. \nStep: And Search customer that created in first test\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pound",
      "offset": 17
    }
  ],
  "location": "BankSteps.selectCurrency()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "process",
      "offset": 10
    }
  ],
  "location": "BankSteps.setClickOnButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "Account created successfully",
      "offset": 16
    }
  ],
  "location": "BankSteps.verifyMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 981208900,
  "status": "passed"
});
formatter.before({
  "duration": 2351207200,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Verify the customer Should Login And Logout Suceessfully.",
  "description": "",
  "id": "bank-manager-login;verify-the-customer-should-login-and-logout-suceessfully.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 27,
      "name": "@smoke,"
    },
    {
      "line": 27,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "I am on LoginPage",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "click on \"Customer Login\" Tab",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "search customer that you created.",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "click on \"Login\" Button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "verify \"Logout\" Tab displayed.",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "click on \"Logout\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "verify \"Your Name\" text displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "BankSteps.iAmOnLoginPage()"
});
formatter.result({
  "duration": 13700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Customer Login",
      "offset": 10
    }
  ],
  "location": "BankSteps.clickOnTab()"
});
formatter.result({
  "duration": 164700,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027com.bank.steps.BankSteps.clickOnTab() in file:/C:/Users/KISSAN/IdeaProjects/xyz-bank-week-16/target/test-classes/\u0027 with pattern [^click on \"([^\"]*)\" Tab$] is declared with 0 parameters. However, the gherkin step has 1 arguments [Customer Login]. \nStep: When click on \"Customer Login\" Tab\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "BankSteps.searchCustomerThatYouCreated()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 10
    }
  ],
  "location": "BankSteps.clickOnButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Logout",
      "offset": 8
    }
  ],
  "location": "BankSteps.verifyTabDisplayed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Logout",
      "offset": 10
    }
  ],
  "location": "BankSteps.clickOn(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Your Name",
      "offset": 8
    }
  ],
  "location": "BankSteps.verifyTextDisplayed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 814496200,
  "status": "passed"
});
formatter.before({
  "duration": 2549350100,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Verify the customer Should Deposit Money Successfully.",
  "description": "",
  "id": "bank-manager-login;verify-the-customer-should-deposit-money-successfully.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 37,
      "name": "@smoke,"
    },
    {
      "line": 37,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "I am on LoginPage",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "click on \"Customer Login\" Tab",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "search customer that you created.",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "click on \"Login\" Button",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "click on \"Deposit\" Tab",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Enter amount 100",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "click on \"Deposit\" Button",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "verify message \"Deposit Successful\"",
  "keyword": "Then "
});
formatter.match({
  "location": "BankSteps.iAmOnLoginPage()"
});
formatter.result({
  "duration": 22400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Customer Login",
      "offset": 10
    }
  ],
  "location": "BankSteps.clickOnTab()"
});
formatter.result({
  "duration": 135900,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027com.bank.steps.BankSteps.clickOnTab() in file:/C:/Users/KISSAN/IdeaProjects/xyz-bank-week-16/target/test-classes/\u0027 with pattern [^click on \"([^\"]*)\" Tab$] is declared with 0 parameters. However, the gherkin step has 1 arguments [Customer Login]. \nStep: When click on \"Customer Login\" Tab\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "BankSteps.searchCustomerThatYouCreated()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 10
    }
  ],
  "location": "BankSteps.clickOnButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Deposit",
      "offset": 10
    }
  ],
  "location": "BankSteps.clickOnTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 13
    }
  ],
  "location": "BankSteps.enterAmount(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Deposit",
      "offset": 10
    }
  ],
  "location": "BankSteps.clickOnButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Deposit Successful",
      "offset": 16
    }
  ],
  "location": "BankSteps.verifyMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 841177800,
  "status": "passed"
});
formatter.before({
  "duration": 2858255300,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Verify the customer Should With draw Money Successfully",
  "description": "",
  "id": "bank-manager-login;verify-the-customer-should-with-draw-money-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 48,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "I am on LoginPage",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "click on \"Customer Login\" Tab",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "search customer that you created.",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "click on \"Login\" Button",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "click on \"Withdrawl\" Tab",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "Enter amount 50",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "click on \"Withdraw\" Button",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "verify message \"Transaction Successful",
  "keyword": "Then "
});
formatter.match({
  "location": "BankSteps.iAmOnLoginPage()"
});
formatter.result({
  "duration": 12700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Customer Login",
      "offset": 10
    }
  ],
  "location": "BankSteps.clickOnTab()"
});
formatter.result({
  "duration": 156000,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027com.bank.steps.BankSteps.clickOnTab() in file:/C:/Users/KISSAN/IdeaProjects/xyz-bank-week-16/target/test-classes/\u0027 with pattern [^click on \"([^\"]*)\" Tab$] is declared with 0 parameters. However, the gherkin step has 1 arguments [Customer Login]. \nStep: When click on \"Customer Login\" Tab\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "BankSteps.searchCustomerThatYouCreated()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 10
    }
  ],
  "location": "BankSteps.clickOnButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Withdrawl",
      "offset": 10
    }
  ],
  "location": "BankSteps.clickOnTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 13
    }
  ],
  "location": "BankSteps.enterAmount(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Withdraw",
      "offset": 10
    }
  ],
  "location": "BankSteps.clickOnButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BankSteps.verifyMessageTransactionSuccessful(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 824602800,
  "status": "passed"
});
});