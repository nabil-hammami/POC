Feature: Menu links

    All menu links must open the right page
    Scenario: When I click on HOME menu button, the Home page must be displayed
        Given I visit my website
        When I click on HOME button
        Then the HOME page must be displayed