package com.automation.tests;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;
import io.github.bonigarcia.wdm.WebDriverManager;

public class BasicSeleniumTest {

    private WebDriver driver;

    @BeforeMethod
    public void setUp() {
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        driver.manage().window().maximize();
    }

    @AfterMethod
    public void tearDown() {
        if (driver != null) {
            driver.quit();
        }
    }

    @Test
    public void testGoogleHomepage() {
        driver.get("https://www.google.com");
        String title = driver.getTitle();
        Assert.assertTrue(title.contains("Google"), "Page title should contain 'Google'");
    }

    @Test
    public void testBingHomepage() {
        driver.get("https://www.bing.com");
        String title = driver.getTitle();
        Assert.assertTrue(title.contains("Bing"), "Page title should contain 'Bing'");
    }
}