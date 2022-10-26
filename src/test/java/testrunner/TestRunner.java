package testrunner;

import org.junit.runner.RunWith;

@RunWith(io.cucumber.junit.Cucumber.class)

@io.cucumber.junit.CucumberOptions(
		features ="src/test/java/features",
		glue="StepDefinition", // I THINK CLASS NAME HERE
		plugin = {"json:target/cucumber.json", "pretty", "html:target/cucumber-reports"},
		dryRun = true
		
		)


public class TestRunner {

}
