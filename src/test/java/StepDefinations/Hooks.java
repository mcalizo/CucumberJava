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
	
	@After("@Test6")
	public void AfterTest6()
	{
		driver.close();
		
	}
	
	@After("@Test7")
	public void AfterTest7()
	{
		driver.close();
		
	}
	
	@After("@Test8")
	public void AfterTest8()
	{
		driver.close();
	}
	
	@After("@Test9")
	public void AfterTest9()
	{
		driver.close();
	}
	
	@After("@Test10")
	public void AfterTest10()
	{
		driver.close();
	}
	
	@After("@Test11")
	public void AfterTest11()
	{
		driver.close();
	}
}