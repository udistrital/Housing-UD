import { AuthConfig } from 'angular-oauth2-oidc';

export const googleAuthConfig: AuthConfig = {

// URL del provedor de Identidad
  issuer: 'https://accounts.google.com',


// URL para redirigir al usuario después del inicio de sesión
  redirectUri: window.location.origin + '/home',


  // URL  para redirigir al usuario después de la actualización silenciosa
  silentRefreshRedirectUri: window.location.origin + '/home',


// La identificación con la cual está registrado con esta identificación en el servidor de autenticación
  clientId: '759295809742-ocsbbll1enj9qhflrkmrmi4kfb60siht.apps.googleusercontent.com',

  strictDiscoveryDocumentValidation: false,


  // establece el alcance de los permisos que el cliente debe solicitar
  // Los primeros tres están definidos por OIDC. El 4 es un caso específico de uso
  scope: 'openid profile email',

  showDebugInformation: true,

  sessionChecksEnabled: true,
  // DES : lp-bBnVKAIbA1O0ZYXQzqllN

  // URl para redirigir luego de la salida
  logoutUrl: window.location.origin + '/inicio',
  oidc: true
}
