import PropTypes from 'prop-types';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {IconButton} from '@mui/joy'

const CopyToClipboardBtn = ({content, snackbarMessage}) => {

    const handleClick = () => {
        snackbarMessage("Content copied to clipboard")
        return navigator.clipboard.writeText(content)
    }

    return <IconButton sx={{m: 1.5, height: "10px"}} onClick={handleClick}>
        <ContentCopyIcon/>
    </IconButton>
}

CopyToClipboardBtn.propTypes = {
    content: PropTypes.string,
    snackbarMessage: PropTypes.func
};

export default CopyToClipboardBtn