import {Snackbar} from "@mui/joy";
import InfoIcon from "@mui/icons-material/Info";
import {useEffect, useState} from "react";
import PropTypes from 'prop-types';

export function SnackBar({message, closeSnackBar}) {
    const [openSnackbar, setOpenSnackbar] = useState(false);

    useEffect(() => {
        if (message) {
            setOpenSnackbar(true)
        }
        if (message.includes("")) {

        }
    }, [message])

    const [variant, setVariant] = useState('outlined');
    const [color, setColor] = useState('neutral');



    return (
        <Snackbar open={openSnackbar}
            variant={variant}
            color={color}
                  onClose={(event, reason) => {
                      if (reason === 'clickaway') {
                          return
                      }
                      setOpenSnackbar(false);
                      closeSnackBar(null)
                  }}
                  autoHideDuration={1500} anchorOrigin={{vertical: 'top', horizontal: 'center'}}>
            <InfoIcon/> {message}
        </Snackbar>
    )

}

SnackBar.propTypes = {
    message: PropTypes.string,
    closeSnackBar: PropTypes.func
}