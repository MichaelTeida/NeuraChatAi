import {Card, Button, Box, Container, Sheet, Stack, Typography, List, ListItem} from '@mui/joy'
import Header from '../components/Header.jsx'
import graphic1 from '../assets/graphic1.webp'

const Instruction = () => {
    return (<>
        <Header/>
            <Container sx={{minWidth: { md: "1000px", lg: "1450px"}, pl: 2, pr: 4}}>
                <Stack sx={{flexDirection: {xs: "column", md: "row"}, alignItems: "center", my: 2}}>
                    <Box sx={{flex: 1}}>
                        <Box>
                            <Box component="img" sx={{width: "100%"}}
                                 src={graphic1}
                                 alt="Instruction to NeuraChat"
                            />
                        </Box>
                    </Box>
                    <Box sx={{flex: 1}}>
                        <Typography level="body-md" sx={{fontStyle: "italic"}}>
                            STEPS
                        </Typography>
                        <Typography level="h1" sx={{mb: 2, fontSize: "2.5rem"}}>
                            Easy to <Typography sx={{color: "primary.400"}}>Get Started.</Typography>
                        </Typography>
                        <List marker="decimal"size="lg" >
                            <ListItem sx={{alignItems: "flex-start", flexDirection: "column", mb: 2}}>
                                <Typography level="title-lg" sx={{fontSize: "1.5rem", mb: 1}}>
                                    Go to Homepage
                                </Typography>
                                <Typography level="body-lg">
                                    To communicate with NeuraChat AI
                                </Typography>
                            </ListItem>
                            <ListItem sx={{alignItems: "flex-start", flexDirection: "column", mb: 2}}>
                                <Typography level="title-lg" sx={{fontSize: "1.5rem", mb: 1}}>
                                    Type something
                                </Typography>
                                <Typography level="body-lg">
                                    and click send - You can ask about everything
                                </Typography>
                            </ListItem>
                            <ListItem sx={{alignItems: "flex-start", flexDirection: "column", mb: 2}}>
                                <Typography level="title-lg" sx={{fontSize: "1.5rem", mb: 1}}>
                                    Get response
                                </Typography>
                                <Typography level="body-lg" >
                                    You can also set NeuraChat settings
                                </Typography>
                            </ListItem>
                        </List>
                    </Box>
                </Stack>
                <Stack sx={{flexDirection: {xs: "column", md: "row"}, alignItems: "center", justifyContent: "center"}}>
                    <Card sx={{flexDirection: {xs: "column", md: "row"}, backgroundColor: "primary.solidBg", p: {xs: 4, md:8}, width: "100%", justifyContent: "space-between"}}>
                        <Typography level="h3" sx={{color: "primary.solidColor"}}>
                            People all over the world are happily using NeuraChat.
                        </Typography>
                        <Box sx={{ display: "flex", gap: 2, justifyContent: {xs: "space-around"} }}>
                            <Button color="danger" size="lg">Get Started</Button>
                            <Button variant="soft" size="lg" color="primary" >Contact us</Button>
                        </Box>
                    </Card>
                </Stack>
            </Container>
    </>)
}


export default Instruction;