Feature: Purchasing Items from Search to Place order

@Test3
Scenario Outline: Proceed to placing order page
Given User is on the application Landing page
When User search for <Name> Vegetable
And Added items to cart             
And User proceeded to checkout page for purchase  
Then verify selected <Name> items are displayed in checkout page 
And User proceeded to place order page 
Then verify that the vegetables are successfully purchased

Examples:
|Name	 |
|Almonds |
|Walnuts |

