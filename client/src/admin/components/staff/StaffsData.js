import moment from "moment";

export const staffs = [
  {
    id: 1,
    firstName: "ahmed",
    lastName: "shaikh",
    username: "devshaikh",
    roles: ["software management", "home management"],
    email: "asofficial4k@gmail.com",
    password: "dev123",
    date: moment().calendar("ddmmyyyy"),
  },
  {
    id: 2,
    firstName: "ahsan",
    lastName: "shaikh",
    username: "ahsan112",
    roles: ["home management"],
    email: "ahsan321@gmail.com",
    password: "ahsan123",
    date: moment().calendar("ddmmyyyy"),
  },
  {
    id: 3,
    firstName: "osama",
    lastName: "shaikh",
    username: "osama321",
    roles: ["software management", "home management", "staff management"],
    email: "osama321@gmail.com",
    password: "osama321",
    date: moment().calendar("ddmmyyyy"),
  },
];
