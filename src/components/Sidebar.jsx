import {Box, Divider, List, ListItem, ListItemButton, Sheet} from "@mui/joy";

const Sidebar = () => {
    return <Box width="300px" sx={{borderRight: '1px solid', borderColor: 'divider', overflowY: 'scroll'}}>
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text) => (
                    <ListItem key={text}>
                        <ListItemButton>{text}</ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text) => (
                    <ListItem key={text}>
                        <ListItemButton>{text}</ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
}

export default Sidebar