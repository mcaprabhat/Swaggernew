SWAGGER and MOCK
================

### Swagger

Swagger is the tool selected to create the specification for each webservice using HTTP resources among hybris and the Single Page Application (SPA).

This tool has its own specification to define the services and can be seen in the [Github](https://github.com/wordnik/swagger-spec/blob/master/versions/1.2.md).

Also, to serve this specification (because it is web based) a NodeJS approach was selected because it is less resource consuming on the development machines and because its characteristics it has a simple framework to create the mocks based on the specification.
The framework used in NodeJS with ExpressJS was the [swagger-node-express](https://github.com/wordnik/swagger-node-express).

The front-end to display the specification is based on the [swagger-ui](https://github.com/wordnik/swagger-ui).

Basically, once you download the project the specs are inside the SPA_mock/specs directory, two files for each resource, one with the specification for each method and another one with the data and the code for the mock.
In case of any doubts on what you see in the swagger-ui (front-end) you can check inside the first file, for example, for authorizations resource, the first mentioned file is the authorizations.js and the second one is the authorizationsData.js.
Inside the first file, you will see a section called 'spec' where you will find the method specification in a JSON format based on the [JSON schema](http://json-schema.org/).

### Mock

The mock was created using the swagger-node-express framework and NodeJS + ExpressJS.

### Starting up the SPA_mock project

To see the specification or use the mock you need to:

Once you have downloaded the project from the SVN go to the SPA_mock directory and run:

    $ npm install
    $ node bin/www 
    Swagger and Mock listenning on http://localhost:3000

Now you are ready to see the specification and run the mock against that server and port.

### To request fixes or changes on the swagger/mock
