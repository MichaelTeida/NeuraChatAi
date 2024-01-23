import PropTypes from 'prop-types';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {IconButton} from '@mui/joy'

const CopyToClipboardBtn = ({content, handleOpenSnackbar}) => {

    const handleClick = () => {
        handleOpenSnackbar()
        return navigator.clipboard.writeText(content)
    }

    return <IconButton sx={{m: 1.5}} onClick={handleClick}>
        <ContentCopyIcon/>
    </IconButton>
}

CopyToClipboardBtn.propTypes = {
    content: PropTypes.string,
    handleOpenSnackbar: PropTypes.func
};

export default CopyToClipboardBtn