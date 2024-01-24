// src/components/SnackBar.jsx
import { Snackbar } from "@mui/joy";
import InfoIcon from "@mui/icons-material/Info";
import { useEffect, useState } from "react";

export function SnackBarError({ isActive, message }) {
    const [openSnackbar, setOpenSnackbar] = useState(false);

    useEffect(() => {
        setOpenSnackbar(isActive);
    }, [isActive]);

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    return (
        <Snackbar
            open={openSnackbar}
            onClose={handleCloseSnackbar}
            autoHideDuration={4000}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
            <InfoIcon /> {message}
        </Snackbar>
    );
}
