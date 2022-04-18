// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

/* require('dotenv').config();
 */
export const environment = {
  production: false,
  API_URL: 'https://gateway.marvel.com/v1/public/',
  API_KEY: '&ts=1000&apikey=918fa0509fabca6784c4c2376d6acb5e&hash=33582913d3d6652d99eea7be6145ce54',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
