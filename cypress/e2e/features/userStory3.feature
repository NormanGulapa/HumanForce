Feature: Access HF Academy for help articles

  Scenario: I should be able to login as Manager
    Given I am in the landing page of 'qa test challenge'
    When I am logged in as 'Manager'
    Then I should be redirected to 'Home' with url 'https://qatestchallenge.humanforce.io/Home/'
    And 'Jean' should be displayed
    And I click on 'HF Academy' button
    When I search for 'Personal'
    Then I should find the article titled 'How do I view or update my details' after scrolling down with url 'https://help.humanforce.com/hc/en-au/articles/360029191131-How-do-I-view-or-update-my-details'
