import React, { useState } from 'react';
import { Container, TextField, Button, Box, Typography, Alert, Paper, Divider, MenuItem } from '@mui/material';

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    password: '',
    mobile: '',
    country: '',
    state: ''
  });
  const [error, setError] = useState('');

  // Country and state options for the dropdowns
  const countries = [
    { label: 'United States', value: 'US' },
    { label: 'Canada', value: 'CA' },
    { label: 'India', value: 'IN' },
    // Add more countries as needed
  ];

  const states = [
    { label: 'California', value: 'CA' },
    { label: 'Texas', value: 'TX' },
    { label: 'Ontario', value: 'ON' },
    // Add more states/provinces as needed
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    setError(''); // Clear any previous errors

    // Basic validation
    if (!formData.name || !formData.email || !formData.password) {
      setError('Please fill in all required fields.');
      return;
    }

    // Simulate sign-up logic
    alert(`Signing up with the following information:\n${JSON.stringify(formData, null, 2)}`);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f7f9fc',
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          borderRadius: 2,
          maxWidth: 500,
          width: '100%',
        }}
      >
        <Box textAlign="center" mb={2}>
          <Typography variant="h4" component="h1" color="primary" gutterBottom>
            Create an Account
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Please fill in the details to sign up
          </Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* Display error if validation fails */}
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSignUp} noValidate>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Full Name"
            name="name"
            autoComplete="name"
            value={formData.name}
            onChange={handleInputChange}
          />

          <TextField
            margin="normal"
            fullWidth
            id="companyName"
            label="Company Name"
            name="companyName"
            autoComplete="organization"
            value={formData.companyName}
            onChange={handleInputChange}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleInputChange}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
            value={formData.password}
            onChange={handleInputChange}
          />

          <TextField
            margin="normal"
            fullWidth
            id="mobile"
            label="Mobile Number"
            name="mobile"
            type="tel"
            autoComplete="tel"
            value={formData.mobile}
            onChange={handleInputChange}
          />

          <TextField
            margin="normal"
            fullWidth
            id="country"
            select
            label="Country"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
          >
            {countries.map((country) => (
              <MenuItem key={country.value} value={country.value}>
                {country.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            margin="normal"
            fullWidth
            id="state"
            select
            label="State/Province"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
          >
            {states.map((state) => (
              <MenuItem key={state.value} value={state.value}>
                {state.label}
              </MenuItem>
            ))}
          </TextField>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2, padding: 1.5 }}
          >
            Sign Up
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
