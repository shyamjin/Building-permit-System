import React, { useState } from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { Grid, MenuItem, TextField, CardContent } from '@mui/material';

interface Project {
  id: string;
  ProjectName: string;
  ProjectOwner: string;
  dueDate: string;
  zone: number;
  street: number;
  building: number;
  PropertyType: string;
}

const FormComponent: React.FC = () => {
  const [formData, setFormData] = useState<Project>({
    id: '',
    ProjectName: '',
    ProjectOwner: '',
    dueDate: '',
    zone: 0,
    street: 0,
    building: 0,
    PropertyType: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | { name?: string; value: unknown }>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name as string]:
        name === 'zone' || name === 'street' || name === 'building' ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // Here you can handle form submission (e.g., API call)
  };

  return (
    <Card>
      <CardHeader title="Property Details" sx={{ bgcolor: '#c4cdd5', color: 'white' }} />
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Project Name"
                name="ProjectName"
                value={formData.ProjectName}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Project Owner"
                name="ProjectOwner"
                value={formData.ProjectOwner}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Due Date"
                name="dueDate"
                type="date"
                value={formData.dueDate}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Zone"
                name="zone"
                type="number"
                value={formData.zone}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Street"
                name="street"
                type="number"
                value={formData.street}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Building"
                name="building"
                type="number"
                value={formData.building}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                select
                label="Property Type"
                name="PropertyType"
                value={formData.PropertyType}
                onChange={handleChange}
                required
              >
                <MenuItem value="Private">Private</MenuItem>
                <MenuItem value="Public">Public</MenuItem>
              </TextField>
            </Grid>
            {/* <Grid item xs={12}> */}
            {/*    <Button variant="contained" color="primary" type="submit"> */}
            {/*        Submit */}
            {/*    </Button> */}
            {/* </Grid> */}
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default FormComponent;
