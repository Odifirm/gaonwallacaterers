import toastr from "toastr";
import "toastr/build/toastr.min.css";

toastr.options = {
  positionClass: "toast-bottom-right", // You can adjust this based on your preference
  timeOut: 5000, // How long the toast will display without user interaction
  closeButton: true, // Whether to show the close button
};
const notificationService = {
  success: (message, title = "") => {
    toastr.success(message, title);
  },

  error: (message, title = "") => {
    toastr.error(message, title);
  },

  warning: (message, title = "") => {
    toastr.warning(message, title);
  },

  info: (message, title = "") => {
    toastr.info(message, title);
  },
};

export default notificationService;
