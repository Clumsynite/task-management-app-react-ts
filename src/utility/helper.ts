import moment from "moment";

const categoryColor = {
  ADDED: "primary",
  STARTED: "success",
  COMPLETED: "danger",
};

const priorityColor = {
  LOW: "secondary",
  MEDIUM: "warning",
  HIGH: "danger",
};

const gradients = {
  primary: {
    from: "#26D0CE",
    to: "#1A2980",
  },
  success: {
    from: "#00F260",
    to: "#0575E6",
  },
  danger: {
    from: "#c31432",
    to: "#240b36",
  },
  light: {
    from: "#F9FCFF",
    to: "#DEE4EA",
  },
  dark: {
    from: "#414345",
    to: "#232526",
  },
};

const dateFormat = "ddd, DD MMM YYYY HH:mm:ss A";
const formatTimestamp = (timestamp: string) => moment(timestamp).format(dateFormat);

export { categoryColor, gradients, priorityColor, dateFormat, formatTimestamp };
