package StepDefinations;

import com.myproject.app.Base;
import cucumber.api.java.After;


public class Hooks extends Base{
	
	@After("@Test1")
	public void AfterTest1()
	{
		driver.close();
		
	}
	
	@After("@Test2")
	public void AfterTest2()
	{
		driver.close();
		
	}
	
	@After("@Test3")
	public void AfterTest3()
	{
		driver.close();
		
	}
	
	@After("@Test4")
	public void AfterTest4()
	{
		driver.close();
		
	}
	
	@After("@Test5")
	public void AfterTest5()
	{
		driver.close();
		
	}
}
