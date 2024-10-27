Feature: Time and Attendance Page

  Scenario: Read Article '7 Benefits of workforce analytics for business'
    Given I am in the landing page of 'humanforce'
    When I navigated to 'Workforce Management' card
    And I expand on 'Time & Attendance'
    And I click on 'Learn more' hyperlink
    And I click on '7 benefits of workforce analytics for business' card
    Then I should be redirected to '7 benefits of workforce analytics for business' with url 'https://humanforce.com/blog/7-benefits-of-workforce-analytics-for-business/'
