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
}