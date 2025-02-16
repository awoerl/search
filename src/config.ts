
const getBaseUrl = () => {
  
  let BaseUrl = new URLSearchParams(window.location.search).get('url');

  if (BaseUrl) {
    localStorage.setItem('BaseUrl', BaseUrl);
  }

  return localStorage.getItem('BaseUrl') || "https://pba371.saas.contentserv.com/admin/rest";
}

const getCSPin = () => {

  let CSPin = new URLSearchParams(window.location.search).get('CSPIN') || '';
  
  if (CSPin) {
    localStorage.setItem('CSPIN', CSPin);
  }

  return localStorage.getItem('CSPIN') || '';
}

export var BASE_URL = getBaseUrl();
export var CSPIN = getCSPin();
export var IMAGE_MODE = 'cover'; //cover, contain, auto
