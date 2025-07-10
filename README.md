# Agify API Test Automation Framework

Hey there! Welcome to our project. We've built a simple but powerful tool to automatically test a fun public API called [Agify.io](https://agify.io/documentation).

## So, what's an API?

Imagine you're at a restaurant. You don't go into the kitchen to cook your food, right? You give your order to a waiter (the API), who takes it to the kitchen, and then brings the food back to you.

An API (Application Programming Interface) is just like that waiter. It's a way for different software programs to talk to each other. In our case, our testing program sends a name to the Agify API, and the Agify API sends back a predicted age.

### What's the Point of This Project?

We're showing how to write tests that check if an API is working correctly. This is a super important skill in software development! Our tests make sure that when we ask the Agify API for an age, it gives us back a sensible answer.

## How to Get Started

You can get this running on your computer in just a few steps.

**What you'll need:**

* A little program called Node.js. If you don't have it, you can [download it from the official website](https://nodejs.org/).

**Installation Steps:**

```bash
# First, make a copy of this project on your computer.
git clone https://github.com/BehrangBina/KaluzaPOC.git

# Go into the new folder you just created.
cd KaluzaPOC

# This command installs all the tools our project needs.
npm install
```

That's it for setup!

## Running the Tests

We've set up two ways to run the tests: one that talks to the real Agify.io service, and one that talks to a "mock" or fake version of it on your own machine.

### Option 1: Testing with a Mock (Recommended)

A "mock" is like a stand-in actor. Instead of calling the real Agify.io every time (which has a daily limit), we use a fake version that we control completely. It's faster and lets us test tricky situations easily.

To run the tests using our mock:

```bash
npm run test:mock
```

You should see a bunch of tests run and pass very quickly!

### Option 2: Testing Against the Real API

This is the "real deal" test. It sends actual requests over the internet to the Agify.io servers. It's a great way to be 100% sure everything works, but it's slower and you can only do it about 100 times a day for free.

To run the tests against the live API:

```bash
npm run test
```

### Option 3: Viewing a Test Report

If you want a nice, visual report of the test results that you can open in a web browser, you can run this command:

```bash
npm run test:report
```

This will create a new `cucumber-report.html` file inside the `reports/` folder. Just open that file in your browser to see a clean summary of which tests passed and which failed.

## Automating Tests with GitHub Actions

This is where things get really cool. We have already set up this project to automatically run our tests every time new code is pushed to GitHub. This is called **Continuous Integration (CI)**, and it's like having a robot that constantly checks our work for mistakes.

### How It Works

The magic happens in a file located at `.github/workflows/ci.yml`. This configuration file tells GitHub to follow these steps on every push:

1. Set up a clean virtual machine.
2. Install the correct version of Node.js.
3. Install all the project's tools using `npm install`.
4. Run our fast, mocked tests using `npm run test:mock`.

### What This Means For You

Because this file is already included in the project, you don't have to do anything to set it up!

If you fork this repository and push a change to your fork, GitHub will automatically run the tests for you. You can see the results by going to the **Actions** tab in your repository on GitHub. You'll get a green checkmark for success or a red X for failure, helping you catch bugs before they cause problems.

## What Are We Testing, Exactly?

We've written our tests in a file called `tests/features/agify.feature`. They look like plain English, so anyone can understand what they're supposed to do.

**Here's an example of one of our tests:**

```gherkin
Scenario: A normal name should get an age
  Given I have the name "michael"
  When I ask the Agify API for an age
  Then the API should say everything is OK
  And the answer should include the name "michael"
  And the answer should include an age
```

We test lots of different situations:

* What happens if you send a normal name?
* What if you send a name with numbers in it?
* What if you forget to send a name at all?
* What if you ask for the age of 11 people at once? (The API has a limit of 10!)

By testing all these cases, we can be confident that our code (and the API) works the way we expect it to.

## How the Project is Organized

We've laid out the files in a way that's easy to follow.
