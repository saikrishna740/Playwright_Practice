Feature: Ecommerce

  Scenario: End To End Testing 
    Given  a login to the ecommerce application with "saikavati197@gmail.com" and "@Bunny1436"
    When Add "Zara coat 4" to cart 
    Then Verify "Zara coat 4" is displayed in the cart 
    When Enter volid details and place the order 
    Then Verify order in present in the orderHistory