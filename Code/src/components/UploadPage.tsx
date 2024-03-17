import React, { useState } from 'react';
import { Container, Paper, Typography, Box, LinearProgress, Button } from '@mui/material';

const UploadPage: React.FC = () => {
  const [fileName, setFileName] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleFileUpload = async (files: FileList | null) => {
    if (!files) return;

    setUploading(true);

    // Simulate file upload with timeout
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const total = files.length;
      const uploaded = i + 1;

      // Simulate upload progress
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const newProgress = Math.round((uploaded / total) * 100);
      setProgress(newProgress);
    }

    setUploading(false);
    setProgress(0);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    const file = event.target.files?.[0];
    if (file) {
        setFileName(file.name);
    }
    handleFileUpload(files);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    const file = event.dataTransfer.files?.[0];
    if (file) {
        setFileName(file.name);
    }
    handleFileUpload(files);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <Container sx={{ marginTop: '80px', marginBottom: '80px' }}>
      <Paper elevation={3} sx={{ padding: '20px', minHeight: '300px' }}>
        <Typography variant="h5" gutterBottom align='center'>
          Upload Reports for ESG Data Extraction
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <input
            type="file"
            id="fileInput"
            accept=".pdf"
            onChange={handleInputChange}
            style={{ display: 'none' }}
          />
          <label htmlFor="fileInput">

            <Button variant="contained" component="span" disabled={uploading} sx={{alignContent: 'center', justifyContent:'center'}}>
              Browse
            </Button>
          </label>
          <Box
            sx={{
              border: '2px dashed #ccc',
              borderRadius: '5px',
              width: '100%',
              height: '200px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '20px',
              cursor: 'pointer',
            }}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
          <Typography variant="body1" align="center">
              Drag & Drop PDF files here 
          </Typography>
          </Box>
          {fileName && <Typography variant='body1'>Uploaded file: {fileName}</Typography>}
          {uploading && (
            <Box sx={{ marginTop: '20px', width: '100%' }}>
              <LinearProgress variant="determinate" value={progress} />
            </Box>
          )}
        </Box>
      </Paper>
    </Container>
  );
}

export default UploadPage;