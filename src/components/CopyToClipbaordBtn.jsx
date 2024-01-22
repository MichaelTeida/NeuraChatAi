import {Button} from "@mui/joy";
import PropTypes from 'prop-types';

const CopyToClipboardBtn = ({content}) => {
    const handleCopy = () => {
        return navigator.clipboard.writeText(content)
    }
    return <Button onClick={handleCopy}>Kopiuj</Button>
}

CopyToClipboardBtn.propTypes = {
    content: PropTypes.string
};

export default CopyToClipboardBtn