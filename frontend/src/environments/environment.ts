import { KeycloakConfig } from "keycloak-angular";

// Add here your keycloak setup infos
let keycloakConfig: KeycloakConfig = {
  url: 'http://localhost:8080/auth',
  realm: 'KryptoIAM',
  clientId: 'MyClient1111',
  credentials: {
    "secret": "af9f7541-8981-4197-be78-332ae74f16e8"
  }  
};

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  SERVER_URL: "http://localhost:3000/api",
  keycloak: keycloakConfig,
  // baseUrl: 'http://localhost:4200',
  // apiUrl: 'http://localhost:8080/keycloak-auth-api/rest',
  // keycloakRealm: 'keycloak-auth',
  // keycloakClient: 'auth-client',
  // keycloakBaseUrl: 'http://localhost:8080/'
};

// export const environment = {
//   keycloak: keycloakConfig,
//   production: false
// };

