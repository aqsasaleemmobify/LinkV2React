import React, { useState } from "react";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  MenuItem,
  Typography,
  Snackbar,
  Alert,
  Paper,
  Grid,
  Box,
} from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";


const industries = [
  "Healthcare",
  "Finance",
  "Legal",
  "Robotics",
  "Education",
  "Other",
];

const DeveloperSubmission = () => {
  const [formData, setFormData] = useState({
    developerName: "",
    email: "",
    moduleName: "",
    description: "",
    sourceUrl: "",
    ownerUrl: "",
    industry: "",
    tags: "",
    usesLLM: false,
    wantsConnections: false,
    openToProfitSharing: false,
    risks: "",
    message: "",
    documentation: null,
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const submission = new FormData();
    for (let key in formData) {
      submission.append(key, formData[key]);
    }
    try {
      setOpenSnackbar(true);
    } catch (error) {
      console.error(error);
    }
  };

  const renderRequiredLabel = (label) => (
    <span>
      {label} <span className="required-star">*</span>
    </span>
  );

  return (
    <>
      <Paper elevation={3} className="submission-container">
        <KeyboardBackspaceIcon
          onClick={() => navigate("/")}
          sx={{ cursor: "pointer", color: "#1e41af", fontSize: 30 }}
        />
        <Typography variant="h4" sx={{ color: "#1e3a8a", textAlign: "center", marginBottom: 3 }}>
          Submit Your AI Module
        </Typography>
        <Typography sx={{ color: "#4b5563", textAlign: "center", marginBottom: 2 }}>
          Before your module can connect with others, we need a few details.
          Every submission goes through our MorphicBrain intelligence loop for
          validation, compatibility, and risk screening.
        </Typography>

        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label={renderRequiredLabel("Developer Name")}
                name="developerName"
              
                value={formData.developerName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label={renderRequiredLabel("Email")}
                name="email"
                type="email"
               
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label={renderRequiredLabel("Module Name")}
                name="moduleName"
                require
                value={formData.moduleName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                multiline
                label={renderRequiredLabel("Description")}
                name="description"
               
                value={formData.description}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="GitHub / Source URL"
                name="sourceUrl"
                value={formData.sourceUrl}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Owner Website / Profile"
                name="ownerUrl"
                value={formData.ownerUrl}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                select
                fullWidth
                label={renderRequiredLabel("Primary Industry")}
                name="industry"
                value={formData.industry}
               
                onChange={handleChange}
              >
                {industries.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Tags (comma-separated)"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
              />
            </Grid>
          </Grid>

          <Box mt={3}>
            <FormControlLabel
              control={<Checkbox checked={formData.usesLLM} onChange={handleChange} name="usesLLM" />}
              label="Uses a Large Language Model?"
            />
            <FormControlLabel
              control={<Checkbox checked={formData.wantsConnections} onChange={handleChange} name="wantsConnections" />}
              label="I want this module to connect with others"
            />
            <FormControlLabel
              control={
                <Checkbox checked={formData.openToProfitSharing} onChange={handleChange} name="openToProfitSharing" />
              }
              label="Open to profit-sharing?"
            />
          </Box>

          <TextField
            fullWidth
            multiline
            label="Known Risks or Limitations"
            name="risks"
            value={formData.risks}
            onChange={handleChange}
            sx={{ mt: 2 }}
          />
          <TextField
            fullWidth
            multiline
            label="Message to Admin (Optional)"
            name="message"
            value={formData.message}
            onChange={handleChange}
            sx={{ mt: 2 }}
          />

          <Box mt={3}>
            <Typography variant="subtitle1" sx={{ fontWeight: 500, mb: 1 }}>
              Upload Documentation
            </Typography>
            <div className="upload-box">
              <input
                type="file"
                name="documentation"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
              />
              {formData.documentation && (
                <p className="file-name">📄 {formData.documentation.name}</p>
              )}
            </div>
          </Box>

          <Box textAlign="center" mt={4}>
            <Button variant="contained" size="large" className="submit-button" type="submit">
              → Submit Module for Review
            </Button>
          </Box>
        </form>

        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={() => setOpenSnackbar(false)}
        >
          <Alert
            onClose={() => setOpenSnackbar(false)}
            severity="success"
            sx={{ width: "100%" }}
          >
            ✅ Your submission was received! We’ll notify you once it passes MorphicBrain review.
          </Alert>
        </Snackbar>

        <Box className="notice-box">
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: "#1e3a8a", mb: 2 }}>
            🔔 Notice: Submission Guidelines
          </Typography>

          <Typography sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <span className="emoji">🔒</span>
            All module submissions are routed through MorphicBrain security layers.
          </Typography>

          <Typography sx={{ mb: 2 }}>
            Before being reviewed by <strong>Link2VA Admin</strong>, your submission will undergo:
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <p><span className="emoji success">✅</span> Risk assessment</p>
              <p><span className="emoji success">✅</span> Capability check</p>
            </Grid>
            <Grid item xs={6}>
              <p><span className="emoji success">✅</span> Connection readiness</p>
              <p><span className="emoji success">✅</span> Abuse prevention</p>
            </Grid>
          </Grid>

          <Typography sx={{ fontStyle: "italic", color: "#6b7280", mt: 2 }}>
            📧 You will receive an email when your module is approved or requires further action.
          </Typography>
        </Box>
      </Paper>
    </>
  );
};

export default DeveloperSubmission;
