// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCXawQZ0W3IWSU8y5I7bbN9VlTFgymGgmY",
    authDomain: "sistema-placas.firebaseapp.com",
    databaseURL: "https://sistema-placas.firebaseio.com",
    projectId: "sistema-placas",
    storageBucket: "sistema-placas.appspot.com",
    messagingSenderId: "786998753435"
  }
};
