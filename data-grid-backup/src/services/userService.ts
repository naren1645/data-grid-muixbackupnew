import { GridRowsProp } from "@mui/x-data-grid-premium";
import axios from "axios";

export const getUsersData = async (): Promise<GridRowsProp> => {
  const response = await axios.get("https://dummyjson.com/users");
  const users = response.data.users;

  console.log("-----------------------Data---------------");
  console.log(users);

  return users.map((user: any) => ({
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    age: user.age,
    gender: user.gender,
    email: user.email,
    companyName: user.company.name,
    department: user.company.department,
    jobTitle: user.company.title,
    hierarchy: [
      `${user.company.department}`,
      `${user.company.name}`,
      `${user.firstName}`,
    ],
    //path: `${user.company.name}/${user.company.department}/${user.firstName} ${user.lastName}`,
  }));
};
