Feature: To open Google Page and search for Feluda

Feature Description: This feature will open a browser and navigate to Google search page and search for Feluda and Dam

    @smoke
    Scenario: Navigate to google page and search for Feluda
        Given I navigate to Google Page to search for Feluda
        Then I search for Feluda
        Then I click on the Search Now button
        Then I should see the listings of Feluda

    @smoke
    Scenario: Navigate to google page and search for Dam
        Given I navigate to Google Page to search for Dam
        Then I search for Dam
        Then I click on the Search Now button to search for Dam
        Then I should see the listings of Dam
