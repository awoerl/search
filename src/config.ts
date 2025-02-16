
const getProjectID = () => {
  let newProjectID = window.location.hash.substring(1);
  if (newProjectID) {
    localStorage.setItem('projectID', newProjectID);
  }
  let projectID = localStorage.getItem('projectID') || 'pba371';
  return projectID;
}

export var BASE_URL = "https://" + getProjectID() + ".saas.contentserv.com/admin/rest";
export const CS_USER_NAME = 'admin';
export const CS_PASSWORD = 'admin';
export var IMAGE_MODE = 'cover'; //cover, contain