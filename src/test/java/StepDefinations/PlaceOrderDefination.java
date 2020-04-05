package StepDefinations;

import org.junit.runner.RunWith;
import org.testng.Assert;

import com.myproject.app.Base;

import Pages.HomePage;
import Pages.PlaceOrderPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
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

}