export class Cookies{

    constructor() {
        this.checkCookieEnable();
    }
    checkCookieEnable(){
        // console.log(navigator.cookieEnabled);
        if(!navigator.cookieEnabled){
            alert('Masz wyłączoną obsługę ciasteczek');
            return;
        }
    }

    setCookie(options) {}

    getCookie(name) {}

    removeCookie(name) {}
}