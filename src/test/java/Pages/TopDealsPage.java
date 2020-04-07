package Pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class TopDealsPage {
	
	public WebDriver driver;	
	
	public TopDealsPage(WebDriver driver)
	{
		this.driver=driver;
		
	}

By AppleProduct=By.xpath("//td[contains(text(),'Apple')]");

	public WebElement getApple()
	{
		return driver.findElement(AppleProduct);
	}	
	
By CarrotProduct=By.xpath("//td[contains(text(),'Carrot')]");

	public WebElement getCarrot() 
	{
		return driver.findElement(CarrotProduct);
	}		
	
By OrangeProduct=By.xpath("//td[contains(text(),'Orange')]");

	public WebElement getOrange()
	{
		return driver.findElement(OrangeProduct);
	}			

By PotatoProduct=By.xpath("//td[contains(text(),'Potato')]");

	public WebElement getPotato()
	{
		return driver.findElement(PotatoProduct);
	}	
	
By TomatoProduct=By.xpath("//td[contains(text(),'Tomato')]");

	public WebElement getTomato()
	{
		return driver.findElement(TomatoProduct);
	}		
	
By MangoProduct=By.xpath("//td[contains(text(),'Mango')]");

	public WebElement getMango()
	{
		return driver.findElement(MangoProduct);
	}
	
}
