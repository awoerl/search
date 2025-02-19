const getBaseUrl = () => {
  let BaseUrl = window.location.pathname;
  if (BaseUrl === "/") {
    BaseUrl = "http://localhost/master/admin/rest";
  } else {
    BaseUrl = window.location.href
      .replace("rest/react/", "rest/react")
      .replace("rest/react", "rest");
  }

  return BaseUrl;
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
