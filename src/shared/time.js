import moment from "moment";
export const getDateWithoutTime = (date) => {
  return moment(date).format("Do MMM YYYY");
};
