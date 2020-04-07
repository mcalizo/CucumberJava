package Pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class FlightBookingPage {
	
public WebDriver driver;
	
	public FlightBookingPage(WebDriver driver)
	{
		this.driver=driver;
	}
	
By FlightLogo=By.xpath("//span[contains(text(),'Flights')]");
	
	public WebElement getLogo()
	{
		return driver.findElement(FlightLogo);
	}

By HotelLogo=By.xpath("//span[contains(text(),'Hotels')]");

	public WebElement getHotel()
	{
		return driver.findElement(HotelLogo);
		
	}
	
By HotelPackagesLogo=By.xpath("//span[contains(text(),'Holiday Packages')]");

	public WebElement getPackages()
	{
		return driver.findElement(HotelPackagesLogo);
	
	}

By FlightStatus=By.xpath("//span[@class='text-label text-active'][contains(text(),'Flight Status')]");

	public WebElement getStatus()
	{
		return driver.findElement(FlightStatus);
		
	}
	
By checkIn=By.xpath("//span[contains(text(),'Check-In')]");

	public WebElement getcheckin()
	{
		return driver.findElement(checkIn);
		
	}
	
By ManageBooking=By.xpath("//span[contains(text(),'Manage Booking')]");

	public WebElement getBooking()
	{
		return driver.findElement(ManageBooking);
	}
	
}

