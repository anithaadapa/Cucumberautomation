package stepDefinitions;

import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;


@RunWith(io.cucumber.junit.Cucumber.class)
public class StepDefinition {
	
	public static WebDriver driver;
	
	
	
	@Given("^The user has launched the application in the browser$")
    public void the_user_has_launched_the_application_in_the_browser() throws Throwable {
		driver = new ChromeDriver();
		driver.get("https://the-internet.herokuapp.com/login");
		
     //  System.out.println("Launching the application");
    }

    @When("^The user enters valid user \"([^\"]*)\" and \"([^\"]*)\"$")
    public void the_user_enters_valid_user_something_and_something(String userid, String password) throws Throwable {
        System.out.println("userid");
        System.out.println("password");
        
        WebElement username = driver.findElement(By.id("username"));
        username.sendKeys(userid);
        
        WebElement passwordfield = driver.findElement(By.id("password"));
        passwordfield.sendKeys(password);
    }

    @Then("^Clicks on the login button to log into the application$")
    public void clicks_on_the_login_button_to_log_into_the_application() throws Throwable {
    	  System.out.println("click log in button");
    }

    @And("^Check if the user hads logged in successfully$")
    public void check_if_the_user_hads_logged_in_successfully() throws Throwable {
    	  System.out.println("The user logged in successfully");
    }

    @And("^Check if the user is able to place an order$")
    public void check_if_the_user_is_able_to_place_an_order() throws Throwable {
    	
    	    }

    	    @When("^The user searches for the term \"([^\"]*)\"$")
    	    public void the_user_searches_for_the_term_something(String strArg1) throws Throwable {
    	       
    	    }

    	    @Then("^Check if the shirts pages is getting displayed$")
    	    public void check_if_the_shirts_pages_is_getting_displayed() throws Throwable {
    	       
    	    }

    	    @And("^Logout of the application$")
    	    public void logout_of_the_application() throws Throwable {
    	     
    	    }

    	
        
}
    
