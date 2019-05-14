Feature: controls

    Only numeric, "-" and "." caracters must be allowed

    Scenario Outline: I mustn't be able to operate caracters different from int, float or negative values
        Given "<first_value>" and "<second_value>" are provided
        When I check the type
        Then I should obtain "<result>"
        Examples:
            | first_value | second_value | result       |
            | John        | 56           | Not a number |
            | 5.4         | Holmes       | Not a number |
            | Robert      | T1000        | Not a number |
            | ç%&         | öä£          | Not a number |
            | 45          | 68           | OK           |