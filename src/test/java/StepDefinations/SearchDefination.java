package StepDefinations;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.junit.Cucumber;

import java.util.Iterator;
import java.util.Set;

import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

import com.myproject.app.Base;

import Pages.CartPage;
import Pages.CheckOutPage;
import Pages.FlightBookingPage;
import Pages.HomePage;
import Pages.PlaceOrderPage;
import Pages.TopDealsPage;

@RunWith(Cucumber.class)
public class SearchDefination extends Base{
	
	HomePage h;
	CartPage ct;
	CheckOutPage cp;
	TopDealsPage td;
	FlightBookingPage fb;
	PlaceOrderPage PO;
	 
	
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
        Assert.assertEquals(true, h.getLogo().isDisplayed());
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
    	Assert.assertEquals(true, td.getApple().isDisplayed());
    	td.getCarrot().isDisplayed();
    	Assert.assertEquals(true, td.getCarrot().isDisplayed());
    	td.getMango().isDisplayed();
    	Assert.assertEquals(true, td.getMango().isDisplayed());
    	td.getOrange().isDisplayed();
    	Assert.assertEquals(true, td.getOrange().isDisplayed());
    	td.getPotato().isDisplayed();
    	Assert.assertEquals(true, td.getPotato().isDisplayed());
    	td.getTomato().isDisplayed();
    	Assert.assertEquals(true, td.getTomato().isDisplayed());
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
        Thread.sleep(3000);
    }
     	
    @When("^User clicks the flight booking link$")
    public void user_clicks_the_flight_booking_link() throws Throwable {
       System.out.println("User clicks the flight booking link");
       h=new HomePage(driver);
       h.getLink().click();
       
       Set<String> windowIds = driver.getWindowHandles();
       Iterator<String> iter = windowIds.iterator();
       
       String mainWindow = iter.next();
       String childWindow = iter.next();
       
       driver.switchTo().window(childWindow);
       System.out.println("The title of the child window :" + driver.getTitle());
       fb=new FlightBookingPage(driver);
       Assert.assertTrue(fb.getLogo().getText().contains("Flights"));
       Assert.assertTrue(fb.getHotel().getText().contains("Hotels"));
       Assert.assertTrue(fb.getPackages().getText().contains("Holiday Packages"));
       Assert.assertTrue(fb.getStatus().getText().contains("Flight Status"));
       Assert.assertTrue(fb.getcheckin().getText().contains("Check-In"));
       Assert.assertTrue(fb.getBooking().getText().contains("Manage Booking"));
       Thread.sleep(5000);
       driver.close();
        
       
       driver.switchTo().window(mainWindow);
   	   System.out.println("The title of the main window :" + driver.getTitle());
   	     	   
    }		
    
    @When("^User search for \"([^\"]*)\" to purchase$")
    public void user_search_for_something_to_purchase(String strArg2) throws Throwable {
    	h=new HomePage(driver);
        Assert.assertTrue(h.getLogo().getText().contains("GREENKART"));
        h.getSearch().sendKeys(strArg2);
    	Thread.sleep(3000);
    	h.getAmount().click();
        h.getToCart().click();
        Thread.sleep(3000);
    }

    @Then("^The items are displayed in checkout page$")
    public void the_items_are_displayed_in_checkout_page() throws Throwable {
    	PO.getSelectCountry().click();
    	PO.getVisibleText().click();
    	PO.getCheckbox().click();
    	Thread.sleep(5000);
    	PO.getButton().click();
    	Assert.assertTrue(PO.getThankYouText().getText().contains("Thank you, your order has been placed successfully"));
        Assert.assertEquals(true, PO.getThankYouText().isDisplayed());
    	Thread.sleep(5000);
        
    }

    @And("^Search for \"([^\"]*)\" to purchase$")
    public void search_for_something_to_purchase(String strArg3) throws Throwable {
    	h=new HomePage(driver);
    	ct=new CartPage(driver);
    	h.getSearch().clear();
        h.getSearch().sendKeys(strArg3);
    	Thread.sleep(3000);
    	h.getAmount().click();
        h.getToCart().click();
        Thread.sleep(3000);
        ct.getToCart().click();
        ct.getoCheckOut().click();
        Thread.sleep(5000);
        
        WebElement Vege1=driver.findElement(By.xpath("//tr[2]//td[5]//p[1]"));
        WebElement Vege2=driver.findElement(By.xpath("//tr[3]//td[5]//p[1]"));
                   
        //WebElement Vege1=driver.findElement(By.xpath("//p[contains(text(),'150')]"));
        //WebElement Vege2=driver.findElement(By.xpath("//p[contains(text(),'380')]"));
        WebElement Total=driver.findElement(By.xpath("//span[@class='discountAmt']"));
     
        String st1= Vege1.getText();
        String st2= Vege2.getText();
        String st3= Total.getText();
        
        int value1 = Integer.parseInt(st1);
        int value2 = Integer.parseInt(st2);
        int value3 = Integer.parseInt(st3);       
        
        int sum =value1 + value2;
        System.out.println(sum);
        
        int TotalVege =value3;
        System.out.println(TotalVege);
        
        Assert.assertEquals(sum, TotalVege);
        
        
    }

    @And("^User proceed to purchase the items$")
    public void user_proceed_to_purchase_the_items() throws Throwable {    	
    	PO=new PlaceOrderPage(driver);    	
        Thread.sleep(3000);
        PO.getCode().isDisplayed();
        PO.getApply().isDisplayed();
        PO.getplaceOrder().click();
        Thread.sleep(5000);
        
    }

              

}