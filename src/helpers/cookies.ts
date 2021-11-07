export class Cookies {
  static get(cookieName: string): any | undefined {
    const name = cookieName + "=";
    const cookiesDecoded = decodeURIComponent(document.cookie); //to be careful
    const cookiesArr = cookiesDecoded.split("; ");
    let res;
    cookiesArr.forEach((val) => {
      if (val.indexOf(name) === 0) res = val.substring(name.length);
    });
    return res;
  }

  static set({
    name,
    value,
    days = 30000,
  }: {
    name: string;
    value: string | number | boolean;
    days?: number | undefined;
  }) {
    let date = new Date();

    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + "; " + expires + "; path=/";
  }
}
