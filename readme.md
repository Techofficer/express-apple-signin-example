# Express Apple Sign in Example

This example demonstrates how to use Express  and Passport to authenticate users using Sign in with Apple. Use this example as a starting point for your own web applications.

## Prerequisites
1. You should be enrolled in [Apple Developer Program](https://developer.apple.com/programs/).
2. Please have a look at [Apple documentation](
https://developer.apple.com/sign-in-with-apple/get-started/) related to "Sign in with Apple" feature.
3. You should create App ID and Service ID in your Apple Developer Account.
4. You should generate private key for your Service ID in your Apple Developer Account.
5. Create a new service / client id here https://developer.apple.com/account/resources/identifiers/serviceId/add/

More details about configuration can be found in [passport-appleid](https://github.com/Techofficer/passport-apple) repository.

## Instructions

To install this example on your computer, clone the repository and install dependencies.
```bash
$ git clone git@github.com:Techofficer/express-apple-signin-example.git
$ cd express-apple-signin-example
$ npm install
```

The example uses config file to configure the consumer key and consumer secret needed to access Sign in with Apple REST API. Add the appropriate credentials to ```config.json``` file and put private key, associated with your Apple developer account, to project's root directory. Start the server:
```bash
node app.js
```
Open a web browser and navigate to http://localhost:3000/ to see the example in action.

## Contributing
Pull requests are welcome. 

## License
[The MIT License](https://choosealicense.com/licenses/mit/)

Copyright (c) 2019 Artem Efremov
