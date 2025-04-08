import { GridColDef } from "@mui/x-data-grid-premium";

const userColumns: GridColDef[] = [
  { field: "firstName", headerName: "First Name" },
  { field: "lastName", headerName: "Last Name" },
  { field: "age", headerName: "Age" },
  { field: "gender", headerName: "Gender" },
  { field: "email", headerName: "Email" },
  { field: "companyName", headerName: "Company Name" },
  { field: "department", headerName: "Department" },
  { field: "jobTitle", headerName: "Title" },
];

export default userColumns;
