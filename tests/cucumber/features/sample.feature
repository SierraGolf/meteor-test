Feature: Log problem

  @dev
  Scenario: Server side errors are not logged in the cucumber.log
    Given A server side method throws an error
    When An element is not found


