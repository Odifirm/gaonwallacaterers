// permissionsService.js

import axiosService from "./api";

export const checkAccess = async (permission, path) => {
  try {
    // Fetch permissions data from API
    const response = await axiosService.get("/api/role/GetRoleScreenRight");
    const permissions = response; // Assuming response.data is an array of permissions objects
    // console.log(response);
    // Check if permission exists in fetched data and is active
    const hasPermission = permissions.some(
      (item) =>
        item.url === path && item.menuTag === permission && item.active === "Y"
    );

    // console.log("Permission key:", permission);
    // console.log("Has permission:", hasPermission);

    return hasPermission;
  } catch (error) {
    console.error("Error fetching permissions:", error.message);
    return false; // Handle error case gracefully
  }
};
