import { useEffect, useState } from 'react';
import { GridRowsProp } from '@mui/x-data-grid-premium';
import { DataGridProProps } from '@mui/x-data-grid-pro';
import { DataGridPremium } from '@mui/x-data-grid-premium';
import { getUsersData } from './services/userService';
//import { UserRow } from './types/UserRow';
import userColumns from './constants/userColumns';
import './App.css';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// const getTreeDataPath: DataGridProProps['getTreeDataPath'] = (row: UserRow) =>
//   row.path.split('/');

//const getTreeDataPath: DataGridProProps['getTreeDataPath'] = (row) => row.path;

// const getTreeDataPath: DataGridProProps['getTreeDataPath'] = (row: { path: any; }) =>
//   row.path.split('/');

const getTreeDataPath: DataGridProProps['getTreeDataPath'] = (row) => row.hierarchy;


export default function App() {

  const [rows, setRows] = useState<GridRowsProp>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const data = await getUsersData();
        setRows(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <MuiXLicense />
      <div className="app-container">
        <div className="grid-wrapper">
          <DataGridPremium
            treeData
            pagination
            rows={rows}
            columns={userColumns}
            loading={loading}
            getTreeDataPath={getTreeDataPath}
          />
        </div>
      </div>
    </>
  );
}
