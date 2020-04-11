package CucumberOptions;
import org.junit.runner.RunWith;
import com.myproject.app.Base;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/java/features",
		glue="StepDefinations", 
		tags="@Test1, @Test2, @Test3, @Test4, @Test5, @Test6, @Test7, @Test8, @Test9, @Test10, @Test11",
		strict=true,
		monochrome = true,
		plugin= {"pretty","html:target/cucumber","json:traget/cucumber.json","junit:target/cukes.xml", 
				"com.cucumber.listener.ExtentCucumberFormatter:target/report.html"})

		

public class TestRunner extends Base {
	
	

	
	
}