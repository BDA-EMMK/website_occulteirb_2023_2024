
# Documentation authentification

## Notation

CAS\_URL est l'URL de base vers le serveur CAS,

Exemple: CAS\_URL = 'https://e7utrsz4ya1nhuj8hbjck5i4uxes83l4y3u9.eirb.fr/api/index.php'

## login() => void

Redirige vers la page d'authentification CAS

## setDevMode(devMode: boolean) => void

Configure le mode d'utilisation de la librairie

devMode = true: la requête de login de l'API sera CAS\_URL?login=site\_dev
devMode = false: la requête de login de l'API sera CAS\_URL?login=site

## setApiUrl(apiUrl: string) => void

Configure l'url du serveur CAS

## logout() => void

### Comportement :

* Retire l'élément "authData" du sessionStorage
* Appelle AUTH\_CALLBACK(null)
* refresh la page

## onAuthStateChange(callback, errorCallback) => Promise<void>

### Type des paramètres

* callback: (data: {}) => void
* errorCallback: (error: ErrorOnAuthStateChange) => void
* ErrorOnAuthStateChange: {
        code: string;
        message: string;
    }

Codes connus :
* success
* AUTH/INVALID\_TICKET
* AUTH/UNAUTHORIZED\_USER

Les exemples d'utilisation ci-dessous laissent penser qu'il peut y en avoir d'autre

### Comportement

### Si l'utilisateur est déjà connecté (existence de "authData" dans le sessionStorage)


Appel callback(sessionStorage["authData"])


### Si l'utilisateur ne l'est pas


Fait une requête avec les paramètres 'login' et 'ticket' de l'URL.

Si la requête réussit, stocke les infos dans le sessionStorage et fait appel à
callback(res.data).

Si la requête ne réussit pas, appel errorCallback avec le code d'erreur et le message


# Utilisation par Enchant'eirb

## login

```
login() {
    sessionStorage.setItem('redirectTo', window.location.href);
    auth.login();
}
```

## logout


```
logout() {
    auth.logout();
}
```


## onMount (page video)

```
const DEV_MODE = window.location.hostname === 'localhost' 
    || window.location.hostname === '127.0.0.1';

if (DEV_MODE) {
    auth.setDevMode(true);
    auth.setApiUrl('https://e7utrsz4ya1nhuj8hbjck5i4uxes83l4y3u9.eirb.fr/api/index.php');
}

// Attention, videoURL n'est pas un string mais un objet js
const callback = (videoURL) => { this.videoURL = videoURL } // C'est du vuejs, oklm

const errorCallback = (error) => {
    if (code == "AUTH/UNAUTHORIZED_USER") {
        alert("Vous n'êtes pas autorisé à voir la vidéo");
    }

    else if (code == "AUTH/INVALID_TICKET") {
        alert("Une erreur est survenue, veuillez réessayer");
    }

    else {
        alert("Une erreur est survenue : " + message);
    }
}

auth.onAuthStateChange(callback, errorCallback);
```

