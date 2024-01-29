import {Snackbar} from "@mui/joy";
import InfoIcon from "@mui/icons-material/Info";
import {useEffect, useState} from "react";
import PropTypes from 'prop-types';

export function SnackBar({message, closeSnackBar}) {
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const [variant, setVariant] = useState('outlined');
    const [color, setColor] = useState('neutral');
    const [autoHideDuration, setAutoHideDuration] = useState(1500);

    useEffect(() => {
        if (message) {
            setOpenSnackbar(true)
        }
        if (message.includes("Warning")) {
            setVariant('outlined')
            setColor('danger')
            setAutoHideDuration(2000)
        }
        if (message.includes("Error:")) {
            setVariant('outlined')
            setColor('danger')
            setAutoHideDuration(3000)
        }
    }, [message])

    return (
        <Snackbar open={openSnackbar}
            variant={variant}
            color={color}
                  onClose={(event, reason) => {
                      if (reason === 'clickaway') {
                          return
                      }
                      setOpenSnackbar(false);
                      closeSnackBar("")
                  }}
                  autoHideDuration={autoHideDuration} anchorOrigin={{vertical: 'top', horizontal: 'center'}}>
            <InfoIcon/> {message}
        </Snackbar>
    )

}

SnackBar.propTypes = {
    message: PropTypes.string,
    closeSnackBar: PropTypes.func
}