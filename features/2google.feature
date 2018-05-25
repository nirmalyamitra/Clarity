Feature: To open Google Page and search for Values

Feature Description: This feature will open a browser and navigate to Google search page and search for Value1 and Value2


    @smoke
    Scenario: Navigate to google page and search for Value1
        Given I navigate to Google Page to search for Value1
        Then I search for Value1
        Then I click on the 'Search Now' button
        Then I should see the listings of Value1

    @smoke
    Scenario: Navigate to google page and search for Value2
        Given I navigate to Google Page to search for Value2
        Then I search for Value2
        Then I click on the 'Search Now' button to search for Value2
        Then I should see the listings of Value2
