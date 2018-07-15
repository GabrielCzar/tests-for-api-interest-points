Feature: Interest Points
    List the Interest Points of a City 

    @InterestPoint
    Scenario: List interest points of Aachen
        Given I am in interest points screen
        When I select the city "Aachen"
        And Click in Search
        Then Click in See data 
    