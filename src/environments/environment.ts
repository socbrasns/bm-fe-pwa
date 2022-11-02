// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  appTitle: 'bm-fe-pwa',
  appLang: 'en',
  production: false,
  auth: {
    api: 'http://localhost:8090', //bm-api-data host and port
    tokenStorageId: 'token', // token id in local storage
    authorityStorageId: 'authority', // authority id in local storage
    profilenStorageId: 'profile', // profile id in local storage
  },
  themeDefault: 'bootstrap4-dark-blue',
  themes: ['bootstrap4-dark-blue','bootstrap4-dark-purple','md-light-indigo']
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
