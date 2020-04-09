package StepDefinations;

import java.util.List;

import org.junit.runner.RunWith;
import org.testng.Assert;

import com.myproject.app.Base;

import Pages.HomePage;
import Pages.PlaceOrderPage;
import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
public class PlaceOrderDefination extends Base{
	
	HomePage h;
	PlaceOrderPage PO;

    @And("^User proceeded to place order page$")
    public void user_proceeded_to_place_order_page() throws Throwable {
    	System.out.println("User proceeded to place order page");
        PO=new PlaceOrderPage(driver);
        PO.getCode().isDisplayed();
        PO.getApply().isDisplayed();
        PO.getplaceOrder().click();
        Thread.sleep(5000);
    }

      
    @Then("^verify that the vegetables are successfully purchased$")
    public void verify_that_the_vegetables_are_successfully_purchased() throws Throwable {
    	System.out.println("verify that the vegetables are successfully purchased");
        h=new HomePage(driver);
    	PO=new PlaceOrderPage(driver);
    	PO.getSelectCountry().click();
    	PO.getVisibleText().click();
    	PO.getCheckbox().click();
    	Thread.sleep(5000);
    	PO.getButton().click();
    	Assert.assertTrue(PO.getThankYouText().getText().contains("Thank you, your order has been placed successfully"));
        Thread.sleep(5000);
    }
    
    @Then("^Error message will show up$")
    public void error_message_will_show_up() throws Throwable {
    	PO=new PlaceOrderPage(driver);
    	System.out.println("Error message will show up");
    	Assert.assertTrue(PO.getVerify().getText().contains("Invalid code ..!"));
    	Assert.assertEquals(true, PO.getVerify().isDisplayed());
    }

    @And("^User enters an invalid code then click apply$")
    public void user_enters_an_invalid_code_then_click_apply() throws Throwable {
    	System.out.println("User enters an invalid code then click apply");  
    	PO=new PlaceOrderPage(driver);
    	PO.getCode().sendKeys("Holiday");
    	PO.getApply().click();
    	Thread.sleep(5000);
    }
    
    @And("^User clicks apply without promo code$")
    public void user_clicks_apply_without_promo_code() throws Throwable {
    	PO=new PlaceOrderPage(driver);
    	PO.getApply().click();
    	Thread.sleep(5000);
        
    }
    
    @Then("^User will get notify to enter a code$")
    public void user_will_get_notify_to_enter_a_code() throws Throwable {
    	PO=new PlaceOrderPage(driver);
    	Assert.assertTrue(PO.getEmptyCode().getText().contains("Empty code ..!"));
    	Assert.assertEquals(true, PO.getEmptyCode().isDisplayed());
    }
    
    @When("^User search for an items$")
    public void user_search_for_an_items(DataTable arg1) throws Throwable {
    	List<List<String>> data = arg1.raw();
    	h=new HomePage(driver);    	
    	h.getSearch().sendKeys(data.get(0).get(1));
    	   	
        
    }

    @Then("^Results will displayed$")
    public void results_will_displayed() throws Throwable {
    	h=new HomePage(driver);
    	h.getProductName().isDisplayed();
    	
    }

}