Feature: additions

    My calculator must be able to do additions

    Scenario Outline: I must be able to operate int, float and negative values
        Given "<first_value>" and "<second_value>" are provided
        When I ask for the sum
        Then I should obtain <result_value>
        Examples:
            | first_value | second_value | result_value |
            | 43          | 34           | 77           |
            | 5.4         | 6.3          | 11.7         |
            | -134        | 100          | -34          |