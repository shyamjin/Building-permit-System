import { useRef, useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TableBody from '@mui/material/TableBody';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import { Grid, TableRow, TableCell, TextField } from '@mui/material';

import { _users } from 'src/_mock';

import { Scrollbar } from 'src/components/scrollbar';

import { emptyRows } from '../utils';
import { TableNoData } from '../table-no-data';
import { UserTableHead } from '../user-table-head';
import { TableEmptyRows } from '../table-empty-rows';

// ----------------------------------------------------------------------
type User = {
  id: string;
  ProjectName: string;
  ProjectOwner: string;
  dueDate: string;
  zone: number;
  street: number;
  building: number;
  PropertyType: string;
};
export function UserView() {
  const table = useTable();

  const [filterName, setFilterName] = useState('');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isSecondGridVisible, setIsSecondGridVisible] = useState(false);
  const [gridSize, setGridSize] = useState({ xs: 12, md: 6, lg: 12 });
  const fileInputRef = useRef<HTMLInputElement | null>(null); // Ref for file input
  const [selectedFile, setSelectedFile] = useState<File | null>(null); // State to store selected file

  // Handles file input click
  const handleButtonClick = () => {
    fileInputRef.current?.click(); // Trigger click only if ref is not null
  };

  // Handles file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (files && files.length > 0) {
      setSelectedFile(files[0]); // Set the first selected file
    }
  };

  const handleSendClick = (userId: string) => {
    const user = _users.find((u) => u.id === userId) || null;
    setSelectedUser(user);
  };

  const notFound = !_users.length && !!filterName;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={selectedUser ? 6 : 12}>
        <Card>
          <Scrollbar sx={{ maxHeight: '70vh' }}>
            <TableContainer sx={{ overflow: 'unset' }}>
              <Table sx={{ minWidth: 300 }}>
                <UserTableHead
                  order={table.order}
                  orderBy={table.orderBy}
                  onSort={table.onSort}
                  headLabel={[
                    { id: 'ProjectName', label: 'Project Name' },
                    { id: 'ProjectOwner', label: 'Project Owner' },
                    { id: 'dueDate', label: 'Due date' },
                    { id: '' },
                  ]}
                />
                <TableBody>
                  {_users.map((row) => (
                    <TableRow key={row.id} tabIndex={-1}>
                      <TableCell>{row.ProjectName}</TableCell>

                      <TableCell>{row.ProjectOwner}</TableCell>

                      <TableCell>{row.dueDate}</TableCell>

                      <TableCell>
                        <Button variant="contained" onClick={() => handleSendClick(row.id)}>
                          Submit Drawing
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}

                  <TableEmptyRows
                    height={68}
                    emptyRows={emptyRows(table.page, table.rowsPerPage, _users.length)}
                  />

                  {notFound && <TableNoData searchQuery={filterName} />}
                </TableBody>
              </Table>
            </TableContainer>
          </Scrollbar>

          <TablePagination
            component="div"
            page={table.page}
            count={_users.length}
            rowsPerPage={table.rowsPerPage}
            onPageChange={table.onChangePage}
            rowsPerPageOptions={[5, 10, 25]}
            onRowsPerPageChange={table.onChangeRowsPerPage}
          />
        </Card>
      </Grid>
      {selectedUser && (
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader title="Property Details" />
            <Scrollbar sx={{ maxHeight: '62vh' }}>
              <TextField
                label="Project Name"
                value={selectedUser.ProjectName}
                fullWidth
                margin="normal"
                InputProps={{ readOnly: true }}
              />
              <TextField
                label="Project Owner"
                value={selectedUser.ProjectOwner}
                fullWidth
                margin="normal"
                InputProps={{ readOnly: true }}
              />
              <TextField
                label="Due Date"
                value={selectedUser.dueDate}
                fullWidth
                margin="normal"
                InputProps={{ readOnly: true }}
              />
              <TextField
                label="Zone"
                value={selectedUser.zone}
                fullWidth
                margin="normal"
                InputProps={{ readOnly: true }}
              />
              <TextField
                label="Street"
                value={selectedUser.street}
                fullWidth
                margin="normal"
                InputProps={{ readOnly: true }}
              />
              <TextField
                label="Building"
                value={selectedUser.building}
                fullWidth
                margin="normal"
                InputProps={{ readOnly: true }}
              />
              <TextField
                label="Property Type"
                value={selectedUser.PropertyType}
                fullWidth
                margin="normal"
                InputProps={{ readOnly: true }}
              />
            </Scrollbar>

            <Divider sx={{ borderStyle: 'dashed' }} />
            <CardActions>
              <Box display="flex" justifyContent="space-between" width="100%">
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: 'none' }} // Hides the input element
                  onChange={handleFileChange} // Handles file selection
                />
                <Button variant="contained" onClick={handleButtonClick}>
                  Upload new Drawing
                </Button>
                <Button variant="contained">Submit</Button>
              </Box>
            </CardActions>
            {selectedFile && (
              <div>
                <p>Selected file: {selectedFile.name}</p>
              </div>
            )}
          </Card>
        </Grid>
      )}
    </Grid>
  );
}

// ----------------------------------------------------------------------

export function useTable() {
  const [page, setPage] = useState(0);
  const [orderBy, setOrderBy] = useState('name');
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selected, setSelected] = useState<string[]>([]);
  const [order, setOrder] = useState<'asc' | 'desc'>('asc');

  const onSort = useCallback(
    (id: string) => {
      const isAsc = orderBy === id && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(id);
    },
    [order, orderBy]
  );

  const onSelectAllRows = useCallback((checked: boolean, newSelecteds: string[]) => {
    if (checked) {
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  }, []);

  const onSelectRow = useCallback(
    (inputValue: string) => {
      const newSelected = selected.includes(inputValue)
        ? selected.filter((value) => value !== inputValue)
        : [...selected, inputValue];

      setSelected(newSelected);
    },
    [selected]
  );

  const onResetPage = useCallback(() => {
    setPage(0);
  }, []);

  const onChangePage = useCallback((event: unknown, newPage: number) => {
    setPage(newPage);
  }, []);

  const onChangeRowsPerPage = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      onResetPage();
    },
    [onResetPage]
  );

  return {
    page,
    order,
    onSort,
    orderBy,
    selected,
    rowsPerPage,
    onSelectRow,
    onResetPage,
    onChangePage,
    onSelectAllRows,
    onChangeRowsPerPage,
  };
}
