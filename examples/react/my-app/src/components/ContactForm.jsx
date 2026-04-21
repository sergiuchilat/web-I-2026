"use client";

import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

export default function ContactForm() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
       //e.preventDefault();
        console.log("Form submitted:", form);
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <Typography variant="h6" color="success.main" sx={{ mt: 2 }}>
                Thank you, {form.name}! Your message has been sent.
            </Typography>
        );
    }

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 500, mt: 2 }}
        >
            <TextField
                label="Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                fullWidth
            />
            <TextField
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                fullWidth
            />
            <TextField
                label="Message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                fullWidth
                multiline
                rows={4}
            />
            <Button type="submit" variant="contained">
                Send Message
            </Button>
        </Box>
    );
}
