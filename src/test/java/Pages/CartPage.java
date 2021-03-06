package Pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class CartPage {
	
public WebDriver driver;
	
	public CartPage(WebDriver driver)
	{
		this.driver=driver;
	}

By ClickCart=By.xpath("//a[@class='cart-icon']//img[contains(@class,'')]");

	public WebElement getToCart()
	{
		return driver.findElement(ClickCart);
	}	
	
By ProceedtoCheckOut=By.xpath("//button[contains(text(),'PROCEED TO CHECKOUT')]"); 

	public WebElement getoCheckOut()
	{
		return driver.findElement(ProceedtoCheckOut);	
	
	}
	
By EmptyCart=By.xpath("//div[@class='cart-preview active']//div//div//h2[contains(text(),'You cart is empty!')]");

	public WebElement getEmptyCart()
	{
		return driver.findElement(EmptyCart);
	}
	
By Cartitem=By.xpath("//div[@class='cart-preview active']//div//div//ul[@class='cart-items']");

	public WebElement getItemName()
	{
		return driver.findElement(Cartitem);
	}
	
}
