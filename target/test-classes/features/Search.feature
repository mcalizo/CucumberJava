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
Scenario: Accessing the Top deals
Given User is on the application Landing page
When User clicks the Top deals 
Then User go back to the greenkart homepage     

@Test6
Scenario: Accessing the child window
Given User is on the application Landing page
When User clicks the flight booking link  
Then User go back to the greenkart homepage 


@Test7
Scenario: Comparing the value of the items to the total value
Given User is on the application Landing page
When User search for "Corn" to purchase
And Search for "Banana" to purchase
And User proceed to purchase the items 
Then The items are displayed in checkout page

@Test12
Scenario: Selecting an item in the homepage
Given User is on the application Landing page
When User select an item in the homepage 
Then Item should be on cart  





 

 




  


