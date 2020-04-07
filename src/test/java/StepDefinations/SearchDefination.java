package StepDefinations;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.junit.Cucumber;

import java.util.Iterator;
import java.util.Set;

import org.junit.runner.RunWith;
import org.testng.Assert;

import com.myproject.app.Base;

import Pages.CartPage;
import Pages.CheckOutPage;
import Pages.HomePage;
import Pages.TopDealsPage;

@RunWith(Cucumber.class)
public class SearchDefination extends Base{
	
	HomePage h;
	CartPage ct;
	CheckOutPage cp;
	TopDealsPage td;
	 
	
    @Given("^User is on the application Landing page$")
    public void user_is_on_the_application_landing_page() throws Throwable {
    	System.out.println("User is on the landing Page");
        driver=Base.getDriver();
        
        
    }

    @When("^User search for (.+) Vegetable$")
    public void user_search_for_something_vegetable(String strArg1) throws Throwable {
    	System.out.println("User is searching for Vegetable");
        h=new HomePage(driver);
        Assert.assertTrue(h.getLogo().getText().contains("GREENKART"));
        h.getSearch().sendKeys(strArg1);
    	Thread.sleep(3000);
    }

    @Then("^\"([^\"]*)\" results are displayed$")
    public void something_results_are_displayed(String strArg1) throws Throwable {
    	System.out.println("Results are displayed");
    Assert.assertTrue(h.getProductName().getText().contains(strArg1));
    Thread.sleep(3000);
   
    }
    
    @Then("^verify selected (.+) items are displayed in checkout page$")
    public void verify_selected_items_are_displayed_in_checkout_page(String name) throws Throwable {
    	 System.out.println("Items are in checkout page");
    	 cp=new CheckOutPage(driver);
    	 Assert.assertTrue(cp.getProductName().getText().contains(name));  
    }
    
        
    @And("^Added items to cart$")
    public void added_items_to_cart() throws Throwable {
    	System.out.println("Items are added to cart");
        h.getAmount().click();
        h.getToCart().click();
        Thread.sleep(3000);
        }

    @And("^User proceeded to checkout page for purchase$")
    public void user_proceeded_to_checkout_page_for_purchase() throws Throwable {
    	System.out.println("User proceed to purchase the vegetable");
    	ct=new CartPage(driver);
        ct.getToCart().click();
        ct.getoCheckOut().click();
        Thread.sleep(3000);
        
    }
    
    @When("^User click the cart$")
    public void user_click_the_cart() throws Throwable {
    	System.out.println("User click the cart");
    	ct=new CartPage(driver);
    	ct.getToCart().click();
    }

    @Then("^verify the cart is empty$")
    public void verify_the_cart_is_empty() throws Throwable {
    	System.out.println("verify the cart is empty");
    	ct=new CartPage(driver);
    	ct.getEmptyCart().isDisplayed();
    	Assert.assertTrue(ct.getoCheckOut().getText().contains("PROCEED TO CHECKOUT")); 
        
    }
    
    @When("^User clicks the Top deals$")
    public void user_clicks_the_top_deals() throws Throwable {
    	System.out.println("User clicks the Top deals");
    	h=new HomePage(driver);
        h.getTopDeals().click();
        Thread.sleep(5000);
        
        Set<String> windowIds = driver.getWindowHandles();
        Iterator<String> iter = windowIds.iterator();
        
        String mainWindow = iter.next();
        String childWindow = iter.next();
        
        driver.switchTo().window(childWindow);
        
        System.out.println("The title of the child window :" + driver.getTitle());
        
        td=new TopDealsPage(driver);
    	td.getApple().isDisplayed();
    	td.getCarrot().isDisplayed();
    	td.getMango().isDisplayed();
    	td.getOrange().isDisplayed();
    	td.getPotato().isDisplayed();
    	td.getTomato().isDisplayed();
    	Thread.sleep(5000);
    	driver.close();
    	
    	driver.switchTo().window(mainWindow);
    	System.out.println("The title of the main window :" + driver.getTitle());
    }
    
    @Then("^User go back to the greenkart homepage$")
    public void user_go_back_to_the_greenkart_homepage() throws Throwable {
    	System.out.println("User go back to the greenkart homepage");
    	h=new HomePage(driver);
        Assert.assertTrue(h.getLogo().getText().contains("GREENKART"));
    }
     	
  		
    	
    
        

}