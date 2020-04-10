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
	
By item1=By.xpath("//tr[1]//td[3]");

	public WebElement getitem1()
	{
		return driver.findElement(item1);
	}
		
By item2=By.xpath("//tr[2]//td[3]");

	public WebElement getitem2()
	{
		return driver.findElement(item2);
	}

By item3=By.xpath("//tr[3]//td[3]");

	public WebElement getitem3()
	{
		return driver.findElement(item3);
	}
	
By item4=By.xpath("//tr[4]//td[3]");

	public WebElement getitem4()
	{
		return driver.findElement(item4);	
	}	
	
By item5=By.xpath("//tr[5]//td[3]");

	public WebElement getitem5()
	{
		return driver.findElement(item5);	
	}	
	
By item6=By.xpath("//tr[6]//td[3]");

	public WebElement getitem6()
	{
		return driver.findElement(item6);	
	}	

By ditem1=By.xpath("//tr[1]//td[4]");

	public WebElement getditem1()
	{
		return driver.findElement(ditem1);	
	}	
	
	By ditem2=By.xpath("//tr[2]//td[4]");

	public WebElement getditem2()
	{
		return driver.findElement(ditem2);	
	}
	
By ditem3=By.xpath("//tr[3]//td[4]");

	public WebElement getditem3()
	{
		return driver.findElement(ditem3);	
	}		
	
By ditem4=By.xpath("//tr[4]//td[4]");

	public WebElement getditem4()
	{
		return driver.findElement(ditem4);	
	}
	
By ditem5=By.xpath("//tr[5]//td[4]");

	public WebElement getditem5()
	{
		return driver.findElement(ditem5);	
	}	
	
By ditem6=By.xpath("//tr[6]//td[4]");

	public WebElement getditem6()
	{
		return driver.findElement(ditem6);	
	}	

By topdealslogo=By.xpath("//div[@class='brand greenLogo']//a//img");

	public WebElement getdealslogo()
	{
		return driver.findElement(topdealslogo);
	}
	
}
