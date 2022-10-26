$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login_Amazon.feature");
formatter.feature({
  "line": 1,
  "name": "Login Functionality",
  "description": "",
  "id": "login-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Check if the user is able to login to the amazon with proper credentials",
  "description": "",
  "id": "login-functionality;check-if-the-user-is-able-to-login-to-the-amazon-with-proper-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "The user has launched the application in the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "The user enters valid user \"UserName\" and \"password\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Clicks on the login button to log into the application",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Check if the user hads logged in successfully",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Check if the user is able to place an order",
  "keyword": "And "
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Check if the user is not able to login to the amazon",
  "description": "",
  "id": "login-functionality;check-if-the-user-is-not-able-to-login-to-the-amazon",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "The user has launched the application in the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "The user enters valid \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Clicks on the login button to log into the application",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Check if appropriate error message is displayed to the user",
  "keyword": "And "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "login-functionality;check-if-the-user-is-not-able-to-login-to-the-amazon;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 17,
      "id": "login-functionality;check-if-the-user-is-not-able-to-login-to-the-amazon;;1"
    },
    {
      "cells": [
        "XXXXXX",
        "YYYYYY"
      ],
      "line": 18,
      "id": "login-functionality;check-if-the-user-is-not-able-to-login-to-the-amazon;;2"
    },
    {
      "cells": [
        "UUUU,",
        "IIII"
      ],
      "line": 19,
      "id": "login-functionality;check-if-the-user-is-not-able-to-login-to-the-amazon;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "Check if the user is not able to login to the amazon",
  "description": "",
  "id": "login-functionality;check-if-the-user-is-not-able-to-login-to-the-amazon;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "The user has launched the application in the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "The user enters valid XXXXXX and YYYYYY",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Clicks on the login button to log into the application",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Check if appropriate error message is displayed to the user",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 19,
  "name": "Check if the user is not able to login to the amazon",
  "description": "",
  "id": "login-functionality;check-if-the-user-is-not-able-to-login-to-the-amazon;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "The user has launched the application in the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "The user enters valid UUUU, and IIII",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Clicks on the login button to log into the application",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Check if appropriate error message is displayed to the user",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "Check if the user is able to search for a product  // alternate method",
  "description": "",
  "id": "login-functionality;check-if-the-user-is-able-to-search-for-a-product--//-alternate-method",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "The user has launched the application in the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "The user searches for the term \"Shirts\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Check if the shirts pages is getting displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Logout of the application",
  "keyword": "And "
});
});