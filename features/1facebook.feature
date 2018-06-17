Feature: To open Facebook Page

Feature Description: This feature will open a browser and navigate to Facebook page

    @smok
    Scenario: Navigate to Facebook page
        Given I navigate to Facebook Page
        Then I take the url and take a snap
        Then I populate 'Email' and 'Password'
        Then I click on 'Log In' button
