package CucumberOptions;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/java/features",
		glue="StepDefinations",strict=true,monochrome = true,
		plugin= {"pretty","html:target/cucumber","json:traget/cucumber.json","junit:target/cukes.xml", 
				"com.cucumber.listener.ExtentCucumberFormatter:target/report.html"})

		

public class TestRunner {
	
}