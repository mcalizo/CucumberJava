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

@Test8
Scenario Outline: Inputting invalid code in place order
Given User is on the application Landing page
When User search for <Name> Vegetable
And Added items to cart             
And User proceeded to checkout page for purchase  
Then verify selected <Name> items are displayed in checkout page 
And User enters an invalid code then click apply
Then Error message will show up 

Examples:
|Name	|
|Tomato	| 

@Test9
Scenario: Forgot to enter the promotion code
Given User is on the application Landing page
When User search for Cucumber Vegetable 
Then "Cucumber" results are displayed 
And Added items to cart 
And User proceeded to checkout page for purchase
And User clicks apply without promo code 
Then User will get notify to enter a code 


@Test10
Scenario: Data tables scenario
Given User is on the application Landing page
When User search for an items  
| Corn	| Onion	|
|Orange	| Pista	|
Then Results will displayed 

@Test11
Scenario: 
Given User is on the application Landing page
When User search for Cucumber Vegetable 
Then "Cucumber" results are displayed 
And Added items to cart 
And User proceeded to checkout page for purchase
And User click the proceed button without clicking the agreement   
Then User will see the error message is displayed   



