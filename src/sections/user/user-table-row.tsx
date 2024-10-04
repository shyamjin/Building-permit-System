import { useState, useCallback } from 'react';

import Button from '@mui/material/Button';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

// ----------------------------------------------------------------------

export type UserProps = {
  ProjectName: string;
  ProjectOwner: string;
  dueDate: string;
};

type UserTableRowProps = {
  row: UserProps;
};

export function UserTableRow({ row }: UserTableRowProps) {
  const [openPopover, setOpenPopover] = useState<HTMLButtonElement | null>(null);

  const handleOpenPopover = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    setOpenPopover(event.currentTarget);
  }, []);

  const handleClosePopover = useCallback(() => {
    setOpenPopover(null);
  }, []);

  return (
    <TableRow tabIndex={-1} key={row.ProjectName}>
      <TableCell>{row.ProjectName}</TableCell>

      <TableCell>{row.ProjectOwner}</TableCell>

      <TableCell>{row.dueDate}</TableCell>

      <TableCell>
        <Button variant="contained">Send</Button>
      </TableCell>
    </TableRow>
  );
}
