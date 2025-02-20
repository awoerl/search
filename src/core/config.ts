const getBaseUrl = () => {
  let path = window.location.pathname;
  if (path === "/") {
    return "http://localhost/master/admin/rest";
  } else {
    let BaseUrl = window.location.href;
    const pattern = "/admin/rest";
    return BaseUrl.slice(0, BaseUrl.indexOf(pattern) + pattern.length);
  }
};

const getCSToken = () => {
  let CSToken =
    new URLSearchParams(window.location.search).get("CSToken") || "";

  if (CSToken) {
    localStorage.setItem("CSToken", CSToken);
  }

  return localStorage.getItem("CSToken") || "";
};

export var BASE_URL = getBaseUrl();
export var CSTOKEN = getCSToken();
export var IMAGE_MODE = "auto"; //cover, contain, auto
