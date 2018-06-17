Feature: To open Telerik Demo Page and click on different Links

Feature Description: This feature will open a browser and navigate to Telerik Demo page and click on different Links


    @smoke
    Scenario: Navigate to Dropdown page of Telerik Demo
        Given I navigate to Telerik Page to click on Drop Down List
        Then I click on "Drop Down List" link
        Then I navigate to Drop Down List Page
        Then I select a color from  "Color" drop down
        Then I select a size from "Size" drop down
        Then I click on "Customize" button