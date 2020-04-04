package StepDefinations;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;
import org.testng.Assert;

import com.myproject.app.Base;

import Pages.CartPage;
import Pages.CheckOutPage;
import Pages.HomePage;

@RunWith(Cucumber.class)
public class SearchDefination extends Base{
	
	HomePage h;
	CartPage ct;
	CheckOutPage cp;
	 
	
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
        }

    @And("^User proceeded to checkout page for purchase$")
    public void user_proceeded_to_checkout_page_for_purchase() throws Throwable {
    	System.out.println("User proceed to purchase the vegetable");
    	ct=new CartPage(driver);
        ct.getToCart().click();
        ct.getoCheckOut().click();
        
    }

}