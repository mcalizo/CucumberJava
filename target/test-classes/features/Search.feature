Feature: Search and Place order

@Test1
Scenario: Search items and validate results
Given User is on the application Landing page
When User search for Cucumber Vegetable 
Then "Cucumber" results are displayed 

@Test2 
Scenario Outline: Search for items and then move to checkout page
Given User is on the application Landing page   
When User search for <Name> Vegetable 
And Added items to cart             
And User proceeded to checkout page for purchase  
Then verify selected <Name> items are displayed in checkout page 

Examples:
|Name	 |
|Brinjal |
|Beetroot|
|Tomato	 |
|Orange	 |

@Test4
Scenario: User proceed to cart without purchasing an items
Given User is on the application Landing page
When User click the cart
Then verify the cart is empty 


@Test5
Scenario:
Given User is on the application Landing page
When User clicks the Top deals 
Then Top deals items will displayed  




 

 




  


