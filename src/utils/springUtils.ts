export interface AjaxResponse {
  [key: string]: any;
  error: boolean;
  message: string;
}

export default class springUtils {
  private static origin: URL;
  public static getOrigin() {
    if (typeof this.origin === 'undefined')
      if (location.port === '4000') {
        // local
        this.origin = new URL('http://localhost:8080');
      } else {
        // production
        this.origin = new URL('');
      }
    return this.origin;
  }
  public static checkLogin(redirect = true) {
    const url = this.getOrigin();
    url.pathname = '/me';
    fetch(url, { method: 'POST' })
      .then(res => res.json())
      .then((data: AjaxResponse) => {
        if (data.error) {
          if (data.message.toLowerCase().includes('login')) {
            if (redirect) location.href = '/login';
          }
        }
      });
  }
}
