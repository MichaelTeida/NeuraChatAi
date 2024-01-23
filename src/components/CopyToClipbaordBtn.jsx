import PropTypes from 'prop-types';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {IconButton, Snackbar} from '@mui/joy'
import {useState} from "react";

const CopyToClipboardBtn = ({content}) => {
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(true)
        return navigator.clipboard.writeText(content)
    }
    const handleClose = () => {
        setOpen(false)
    }

    return <IconButton sx={{m: 1.5}} onClick={handleClick}>
        <ContentCopyIcon/>
            <Snackbar open={open} onClose={handleClose} autoHideDuration={2000} variant="outlined">
                Text copied to clipboard
            </Snackbar>
    </IconButton>
}

CopyToClipboardBtn.propTypes = {
    content: PropTypes.string
};

export default CopyToClipboardBtn