import {Divider, List, ListItem, ListItemButton, Sheet} from "@mui/joy";

const Sidebar = () => {
    return <Sheet sx={{borderRight: '1px solid', borderColor: 'divider', overflowY: 'scroll', width: "25rem", p: 2}}>
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
        </Sheet>
}

export default Sidebar