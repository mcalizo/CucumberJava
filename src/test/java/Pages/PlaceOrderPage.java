package Pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class PlaceOrderPage {

public WebDriver driver;
	
	public PlaceOrderPage(WebDriver driver)
	{
		this.driver=driver;
	}

	
By placeOrder=By.xpath("//button[contains(text(),'Place Order')]");
	
	
	public WebElement getplaceOrder()
	{
		return driver.findElement(placeOrder);
		
	}
		
By SelectCountry=By.xpath("//div[@class='wrapperTwo']//div//select");


	public WebElement getSelectCountry()
	{
		return driver.findElement(SelectCountry);
		
	}

By SelectVisibleText=By.xpath("//div[@class='wrapperTwo']//div//select");

	public WebElement getVisibleText()
	{
		return driver.findElement(SelectVisibleText);
		
				
	}

By Checkbox=By.xpath("//input[@class='chkAgree']");

	public WebElement getCheckbox()
	{
		return driver.findElement(Checkbox);
	}
	
By ProceedButton=By.xpath("//button[contains(text(),'Proceed')]");

	public WebElement getButton()
	{
		return driver.findElement(ProceedButton);
	}
	
By ProductName=By.xpath("//p[@class='product-name']");

	public WebElement getProductName()
	{
		return driver.findElement(ProductName);
	}
	
By ApplyButton=By.xpath("//button[@class='promoBtn']");

	public WebElement getApply()
	{
		return driver.findElement(ApplyButton);
	}
	
By ThankYou=By.xpath("//span[contains(text(),'Thank you, your order has been placed successfully')]");

	public WebElement getThankYouText()
	{
		return driver.findElement(ThankYou);
				
	}
	
By PromoCode=By.xpath("//input[@placeholder='Enter promo code']");

	public WebElement getCode()
	{
		return driver.findElement(PromoCode);
	}
	
By	ProductNameTable=By.xpath("//b[contains(text(),'#')]");

	public WebElement getProductname()
	{
		return driver.findElement(ProductNameTable);
	}
	
By VerifyCoupon=By.xpath("//span[contains(text(),'Invalid code ..!')]");

	public WebElement getVerify()
	{
		return driver.findElement(VerifyCoupon);
	}
	
By EmptyCode=By.xpath("//span[contains(text(),'Empty code ..!')]");

	public WebElement getEmptyCode()
	{
		return driver.findElement(EmptyCode);
	}
	
By ErrorMessage=By.xpath("//span[@class='errorAlert']//b");

	public WebElement getErrorMessage()
	{
		return driver.findElement(ErrorMessage);
	}
	
By GetQuantity1=By.xpath("//tr[2]//td[3]//p[1]");

	public WebElement getQuantity1()
	{
		return driver.findElement(GetQuantity1);
	}
	
By GetQuantity2=By.xpath("//tr[3]//td[3]//p[1]");

	public WebElement getQuantity2()
	{
		return driver.findElement(GetQuantity2);	
	}	
	
By ItemName=By.xpath("//div[@class='cart-preview active']//div//div//li[@class='cart-item']");

	public WebElement getItem()
	{
		return driver.findElement(ItemName);
	}

}
