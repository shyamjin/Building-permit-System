import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import CardHeader from "@mui/material/CardHeader";
import Card from "@mui/material/Card";
import { CardContent } from "@mui/material";

const ButtonRenderer: React.FC<{ value: string; onClick: () => void }> = ({ value, onClick }) => {
    return (
        <button onClick={onClick} style={{ cursor: 'pointer', background: 'none', border: 'none', color: 'blue', textDecoration: 'underline' }}>
            {value}
        </button>
    );
};

const columns: GridColDef<(typeof rows)[number]>[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'checklistItem',
        headerName: 'Checklist Item',
        width: 150,
        editable: false,
    },
    {
        field: 'actualValue',
        headerName: 'Actual Value',
        width: 150,
        editable: false,
    },
    {
        field: 'referenceValue',
        headerName: 'Reference Value',
        width: 150,
        editable: false,
    },
    {
        field: 'systemRecommendation',
        headerName: 'System Recommendation',
        width: 160,
        editable: false,
    },
    {
        field: 'override',
        headerName: 'Override',
        width: 250,
        editable: false,
        renderCell: (params) => {
            const handleClick = () => {
                alert("Override action triggered for " + params.row.checklistItem);
                // Implement your custom logic here
            };

            return (
                <ButtonRenderer
                    value={params.row.systemRecommendation === 'Pass'
                        ? 'Click to add comment and override system recommendations'
                        : 'Click to override system recommendations'}
                    onClick={handleClick}
                />
            );
        },
    },
];

const rows = [
    { id: 1, checklistItem: 'CI1', actualValue: '', referenceValue: '', systemRecommendation: 'Pass', override: '' },
    { id: 2, checklistItem: 'CI2', actualValue: '', referenceValue: '', systemRecommendation: 'Pass', override: '' },
    { id: 3, checklistItem: 'Building Height', actualValue: '14M', referenceValue: '<13M', systemRecommendation: 'Fail', override: '' },
    { id: 4, checklistItem: 'No of Parking', actualValue: '1', referenceValue: '>2', systemRecommendation: 'Fail', override: '' },
    { id: 5, checklistItem: 'CI5', actualValue: '', referenceValue: '', systemRecommendation: 'Pass', override: '' },
    { id: 6, checklistItem: 'CI6', actualValue: '', referenceValue: '', systemRecommendation: 'Pass', override: '' },
    { id: 7, checklistItem: 'CI7', actualValue: '', referenceValue: '', systemRecommendation: 'Pass', override: '' },
    { id: 8, checklistItem: 'CI8', actualValue: '', referenceValue: '', systemRecommendation: 'Pass', override: '' },
    { id: 9, checklistItem: 'CI9', actualValue: '', referenceValue: '', systemRecommendation: 'Pass', override: '' },
    { id: 10, checklistItem: 'CI10', actualValue: '', referenceValue: '', systemRecommendation: 'Pass', override: '' },
];

export default function GridExample() {
    return (
        <Card sx={{ width: '100%' }}>
            <CardHeader title="Documents Details" sx={{ bgcolor: '#c4cdd5', color: 'white' }} />
            <CardContent>
                <DataGrid
                    sx={{
                        boxShadow: 2,
                        border: 2,
                        borderColor: 'primary.light',
                        '& .MuiDataGrid-cell:hover': {
                            color: 'primary.main',
                        },
                    }}
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 5,
                            },
                        },
                    }}
                    pageSizeOptions={[5]}
                    checkboxSelection
                    disableRowSelectionOnClick
                />
            </CardContent>
        </Card>
    );
}
