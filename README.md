# Front End

This is a single page app built on Angular 4 that will be pulling content from a WordPress API back end.

# Development

The project is set up to either be installed locally with npm or run within a Docker container.

The serve locally, `ng serve` when using angular cli. (this used to be `npm start`)

# Production

run `ng build --prod` to compile and aggregate js + htmlassets into `dist/`

NOTE: angular-cli / ng is probably installed locally (not a global npm install), so the path to execute it will be `./node_modules/@angular/cli/bin/ng`

## Docker

The `Dockerfile` provides the instructions for building the image for our Angular app. Make sure you have [Docker](http://docker.io) installed, then feed it the Dockerfile to build the image (tagged as 'angularapp' here). Once the image is built, you can run a container from it, mapping the ports and volumes to allow access into the container from the host environment.

```shell
docker build -t angularapp .
docker run -it -p 3000:3000 -v $(pwd):/usr/src/app --name wellingup angularapp
```

## Prerequisites

Node.js and npm are essential to Angular development. <a href="https://docs.npmjs.com/getting-started/installing-node" target="\_blank" title="Installing Node.js and updating npm">
Install Node</a>

**Verify that you are running at least node `v4.x.x` and npm `3.x.x`**
by running `node -v` and `npm -v` in a terminal/console window.
Older versions produce errors.

## Install npm packages

Install the necessary npm packages as defined in `package.json` and verify that it works:

```shell
npm install
npm start
```

The `npm start` command first compiles the application from Typescript,
then simultaneously watches for changes to re-compile and runs the `lite-server`.
Both the compiler and the server watch for file changes.

Shut it down manually with `Ctrl-C`.

### npm scripts

The Angular QuickStart comes with several useful npm scripts predefined in `package.json`:

* `npm start` - runs the compiler and a server at the same time, both in "watch mode".
* `npm run build` - runs the TypeScript compiler once.
* `npm run build:w` - runs the TypeScript compiler in watch mode; the process keeps running, awaiting changes to TypeScript files and re-compiling when it sees them.
* `npm run serve` - runs the [lite-server](https://www.npmjs.com/package/lite-server), a light-weight, static file server, written and maintained by
[John Papa](https://github.com/johnpapa) and
[Christopher Martin](https://github.com/cgmartin)
with excellent support for Angular apps that use routing.

Here are the test related scripts:
* `npm test` - compiles, runs and watches the karma unit tests
* `npm run e2e` - compiles and run protractor e2e tests, written in Typescript (*e2e-spec.ts)

Scripts to compile and copy assets to deploy...

use main-aot.ts, to feed to ... 


## Testing

The QuickStart documentation doesn't discuss testing.
This repo adds both karma/jasmine unit test and protractor end-to-end testing support.

These tools are configured for specific conventions described below.

*It is unwise and rarely possible to run the application, the unit tests, and the e2e tests at the same time.
We recommend that you shut down one before starting another.*

### Unit Tests
TypeScript unit-tests are usually in the `src/app` folder. Their filenames must end in `.spec.ts`.

Look for the example `src/app/app.component.spec.ts`.
Add more `.spec.ts` files as you wish; we configured karma to find them.

Run it with `npm test`

That command first compiles the application, then simultaneously re-compiles and runs the karma test-runner.
Both the compiler and the karma watch for (different) file changes.

Shut it down manually with `Ctrl-C`.

Test-runner output appears in the terminal window.
We can update our app and our tests in real-time, keeping a weather eye on the console for broken tests.
Karma is occasionally confused and it is often necessary to shut down its browser or even shut the command down (`Ctrl-C`) and
restart it. No worries; it's pretty quick.

### End-to-end (E2E) Tests

E2E tests are in the `e2e` directory, side by side with the `src` folder.
Their filenames must end in `.e2e-spec.ts`.

Look for the example `e2e/app.e2e-spec.ts`.
Add more `.e2e-spec.js` files as you wish (although one usually suffices for small projects);
we configured Protractor to find them.

Thereafter, run them with `npm run e2e`.

That command first compiles, then simultaneously starts the `lite-server` at `localhost:8080`
and launches Protractor.  

The pass/fail test results appear at the bottom of the terminal window.
A custom reporter (see `protractor.config.js`) generates a  `./_test-output/protractor-results.txt` file
which is easier to read; this file is excluded from source control.

Shut it down manually with `Ctrl-C`.

[travis-badge]: https://travis-ci.org/angular/quickstart.svg?branch=master
[travis-badge-url]: https://travis-ci.org/angular/quickstart
