# _Cyberchondria Cure_

#### _Cyberchondria Cure, 3.17.17_

#### By _**Michaela Davis**_


## Description

_A website where users may enter a medical issue into a form, submit it, and receive a list of doctors they may seek out to help with their medical issue._

## Setup
* Obtain your own BetterDoctors API Key
  * Visit the [BetterDoctors API site](https://developer.betterdoctor.com/) and click “Get a free API key”.
  * Fill out the form, or authenticate with GitHub.
  * Your API key should be listed on the front page (ex: “a2c356ibgh44…..”) or under My Account > Applications.

1. Run `$ npm install`.
2. Run `$ bower install`.
3. Run `$ echo >> .env "exports.apiKey = '{API_KEY}';"`.
  * Replace `{API_KEY}` with the API key you received from the BetterDoctors API site
4. Run `$ gulp build`.
5. Run `$ gulp serve`.

## Specifications
|    *Behavior*   |    *Input*    |     *Output*    |
|-----------------|---------------|-----------------|
| User enters a medical issue then hits enter or submit button | "Foot" | a list of 20 doctors in Portland that treat input appears |


## Known Bugs

_No known bugs._

## Support and contact details

_Please contact michaela.delight@gmail.com with questions or concerns._

## Technologies Used

* _Bower_
* _Gulp_
* _HTML_
* _JavaScript_
* _Node.js_
* _Npm_


## Planning

* Update JavaScript template
  * follow along with curriculum to make sure all dependencies are there
* Update README from template
* Review Epicodus API curriculum
* Follow Epicodus guidelines for project set-up
* Get API key
* Research Doctor API
    * What does it return?
    * How do I filter those returns?
* Update Specs?
* Plan UI layout
* Coding - will probably build front and back end together
* Polish
  * Delete unused or commented out...
  * Make final README edits, if necessary

  ### License

  *MIT License*

Copyright (c) 2017 **_Michaela Davis_**
