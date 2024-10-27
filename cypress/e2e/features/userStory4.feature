Feature: Manage Areas As an Admin

  Scenario: Navigate to the Area page
    Given I am in the landing page of 'qa test challenge'
    When I am logged in as 'Admin'
    Then I should be redirected to 'Home' with url 'https://qatestchallenge.humanforce.io/Home/'
    And 'Bruce' should be displayed
    When I expand on 'Admin' item menu
    And I expand 'Org Structure'
    Then I click on 'areas' item menu
    Then 'Setup | Areas' should be displayed
    Then I click on 'Add new record' k-button
    And I add a new Area with the name 'Area 1'
    Then I click on 'Save'
    Then I should click on 'Delete' button
    Then I click on comfirmation button 'Yes'
