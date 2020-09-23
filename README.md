#Introduction 
This repo contains tests written for CRA Payment, GST34, GST Tax and Payroll Tax forms.

The following instructions will setup protractor and provide steps to run tests in the repo.

#Getting Started

#Installing Protractor
	1. Install Node.JS (latest LTS)
	2. To avoid certificate issues when retrieve npm packages run the following command line: npm config set strict-ssl false 
	3. Install Protractor and Jasmine modules by running command line (install globally - otherwise will need to specify the path to webdriver-manager in Step 4):
        npm install -g protractor
        npm install -g jasmine
        npm install –g protractor-cucumber-framework
        npm install -g typescript
	4. Install web drivers (default is Chrome) by running command:
    webdriver-manager update --ignore-ssl
    
    Note: To avoid certificate errors with run "--ignore-ssl", similar to previously run "npm" commands.

#Running Protractor Tests

#Resolving SSL Issue
	
    NOTE: If the following errors are encountered:
		Error: unable to get local issuer certificate at TLSSocket.onConnectSecure (_tls_wrap.js:1051:34) at TLSSocket.emit (events.js:189:13) at TLSSocket._finishInit (_tls_wrap.js:633:8)

	Then run the following to help resolve the issue:
		> webdriver-manager version # 12.1.1
        > webdriver-manager shutdown
        > webdriver-manager clean # remove the downloaded driver files 
        > webdriver-manager update --ignore_ssl # bypass network proxy
        > webdriver-manager start 
        
        From: https://github.com/angular/webdriver-manager/issues/250

#Running Tests	

  pre-condition: go to package.json 
  inside scripts- update your chrome browser version in webdriver-update
   "webdriver-update": "webdriver-manager update --versions.chrome 81.0.4044.113 --ignore_ssl"

    1. Open new terminal on vs code
    2. Run npm install for the first time to download node_modules 
    3. Run npm run webdriver-update for the first time to downlaod webdriver
    4. Run command npm run test

    Note:
    npm run test- this command will compile the typescript files and then run the Protractor.conf.js file

    

Note:
If you want to run from the command line and override the conf.js file run with this command:
	protractor .\.tmp_ConvertedJS\conf\gst34.conf.js --cucumberOpts.tags "@debug"
See: https://stackoverflow.com/questions/50545125/cucumber-protractor-is-not-running-with-multiple-tags?rq=1

Troubleshooting:
ChromeDriver Beta 4.0 - doesn't appear to work, need to downgrade.  Use the following:

Retrieve Older Version:
webdriver-manager update --standalone --versions.standalone=3.8.0 --ignore_ssl

Start with a Specific Version:
webdriver-manager start --versions.standalone=3.8.0

#Test Tags
The following tags can be used to control which category of tests to execute.
@all                - Complete execution of all automated tests i.e. Full Regression
@smoketest          - Minimum level of automated test coverage to validate build successful
@e2e                - Tests that focus on complete End to End completion of steps i.e. Enter form details, Submit, Confirm, Receive Reciept