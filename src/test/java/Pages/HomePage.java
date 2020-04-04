package Pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class HomePage {
	public WebDriver driver;
	
	public HomePage(WebDriver driver)
	{
		this.driver=driver;
	}
	
	By LogoName=By.cssSelector("div.brand.greenLogo");
	
	public WebElement getLogo()
	{
		return driver.findElement(LogoName);
	}

	
	By search=By.xpath("//input[@type='search']");
	
	
	public WebElement getSearch()
	{
		return driver.findElement(search);
		
	}
	
By productName=By.cssSelector("h4.product-name");
	
	
	public WebElement getProductName()
	{
		return driver.findElement(productName);
		
	}	
	
By amountOrder=By.cssSelector("a.increment");
	
	public WebElement getAmount()
	{
		return driver.findElement(amountOrder);
	}
	
By AddToCart=By.xpath("//button[contains(text(),'ADD TO CART')]");

	public WebElement getToCart()
	{
		return driver.findElement(AddToCart);
	}
}