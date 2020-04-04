package com.myproject.app;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Base {
	public static WebDriver driver;
	public static Properties prop;
	
	public static WebDriver getDriver() throws IOException
	{
		Properties prop=new Properties();
		FileInputStream fis=new FileInputStream("C:\\Users\\Jimemez\\Desktop\\STUDY\\mymavenproject\\src\\test\\java\\com\\myproject\\app\\global.properties");
		
		prop.load(fis);
		
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Jimemez\\Downloads\\chromedriver.exe");
        driver=new ChromeDriver(); 
        driver.manage().window().maximize();
        driver.get(prop.getProperty("url"));
        return driver;
        
        
	}
}
