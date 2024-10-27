Feature: Login

  Scenario: I should be able to login as Employee
    Given I am in the landing page of 'qa test challenge'
    When I am logged in as 'Employee'
    Then I should be redirected to 'Home' with url 'https://qatestchallenge.humanforce.io/Home/'
    And 'Wade' should be displayed
