Feature: Ecommerce validation

  Scenario: Placing the Order
    Given a login to Ecommerce application with "testrajat34@gmail.com" and "Rajat@25"
    When  Add "adidas original" to Cart
    Then  Verify "adidas original" is displayed in the Cart
    When  Enter valid details and Place the Order
    Then  Verify order in present in OrderHistory