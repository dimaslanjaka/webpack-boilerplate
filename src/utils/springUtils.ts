import env from '@root/_env.json';

export interface AjaxResponse {
  [key: string]: any;
  error: boolean;
  message: string;
}

/**
 * spring utility using .env file to populate _env.json
 */
export default class springUtils {
  private static origin: URL;
  /**
   * get url origin of backend
   * @returns URL instance without pathname
   */
  public static getOrigin() {
    if (typeof this.origin === 'undefined') this.origin = new URL(env.BASE_API);
    this.origin.pathname = '/';
    return this.origin;
  }
  /**
   * get url of backend
   * @param pathname pathname of backend
   * @returns URL instance
   */
  public static getURL(pathname?: string) {
    this.getOrigin();
    const url = this.origin;
    if (typeof pathname == 'string') url.pathname = pathname;
    return url;
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
