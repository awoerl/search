const getBaseUrl = () => {
  let BaseUrl = new URLSearchParams(window.location.search).get("url");

  if (BaseUrl) {
    localStorage.setItem("BaseUrl", BaseUrl);
  }

  return (
    localStorage.getItem("BaseUrl") ||
    "https://pba371.saas.contentserv.com/admin/rest"
  );
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
