package StepDefinations;

import java.util.List;

import org.junit.runner.RunWith;
import org.openqa.selenium.support.ui.Select;
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
    	//PO.getSelectCountry().click();
    	//PO.getVisibleText().click();
    	
    	Select s=new Select(PO.getVisibleText()); //handling static drop down
    	s.selectByVisibleText("Philippines");
    	System.out.println(PO.getCheckbox().isSelected());  
    	PO.getCheckbox().click();
    	System.out.println(PO.getCheckbox().isSelected());    	
    	Thread.sleep(5000);
    	PO.getButton().click();
    	Assert.assertTrue(PO.getThankYouText().getText().contains("Thank you, your order has been placed successfully"));
        System.out.println(PO.getThankYouText().getText());
    	Thread.sleep(5000);
    }
    
    @Then("^Error message will show up$")
    public void error_message_will_show_up() throws Throwable {
    	PO=new PlaceOrderPage(driver);
    	System.out.println("Error message will show up");
    	Assert.assertTrue(PO.getVerify().getText().contains("Invalid code ..!"));
    	Assert.assertEquals(true, PO.getVerify().isDisplayed());
    	System.out.println(PO.getVerify().getText());
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
    	System.out.println(PO.getEmptyCode().getText());
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
    	System.out.println(h.getProductName().getText());
    	
    }
    
    @Then("^User will see the error message is displayed$")
    public void user_will_see_the_error_message_is_displayed() throws Throwable {
    	System.out.println("User will see the error message is displayed");
    	PO=new PlaceOrderPage(driver);
        PO.getErrorMessage().isDisplayed();
        Assert.assertEquals(true, PO.getErrorMessage().isDisplayed());
        Assert.assertTrue(PO.getErrorMessage().getText().contains("Please accept Terms & Conditions - Required"));
        System.out.println(PO.getErrorMessage().getText());        
    }

    @And("^User click the proceed button without clicking the agreement$")
    public void user_click_the_proceed_button_without_clicking_the_agreement() throws Throwable {
    	System.out.println("User click the proceed button without clicking the agreement");
    	PO=new PlaceOrderPage(driver);
    	PO.getplaceOrder().click();
    	Assert.assertEquals(false, PO.getCheckbox().isSelected());
    	Assert.assertEquals(true, PO.getButton().isEnabled());
    	PO.getButton().click();
    	Thread.sleep(3000);
    }	

}