import {Card, Button, Box, Container, Sheet, Stack, Typography, List, ListItem} from '@mui/joy'
import Header from '../components/Header.jsx'
import graphic1 from '../assets/graphic1.webp'

const Instruction = () => {
    return (<>
        <Header/>
        <Container sx={{display: "flex", flexDirection: "column", minWidth: {md: "1000px", lg: "1450px"}, px: 3, py: 3, gap: 1}}>
            <Stack sx={{flexDirection: {xs: "column-reverse", md: "row"}, alignItems: "center", my: 2}}>
                <Box sx={{display: "flex", flex: 1, width: "100%", justifyContent: "center"}}>
                    <Box component="img" sx={{width: {xs: "100%", md: "70%"}}}
                         src={graphic1}
                         alt="Instruction to NeuraChat"
                    />
                </Box>
                <Box sx={{flex: 1}}>
                    <Typography level="body-md" sx={{fontStyle: "italic"}}>
                        STEPS
                    </Typography>
                    <Typography level="h1" sx={{mb: 2, fontSize: "2.5rem"}}>
                        Easy to <Typography sx={{color: "primary.400"}}>Get Started.</Typography>
                    </Typography>
                    <List marker="decimal" size="lg">
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
                            <Typography level="body-lg">
                                You can also set NeuraChat settings
                            </Typography>
                        </ListItem>
                    </List>
                </Box>
            </Stack>
            <Stack sx={{flexDirection: {xs: "column", md: "row"}, alignItems: "center", justifyContent: "center"}}>
                <Card sx={{
                    flexDirection: {xs: "column", md: "row"},
                    backgroundColor: "primary.solidBg",
                    p: {xs: 3, md: 8},
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "space-between"
                }}>
                    <Typography level="h3" sx={{color: "primary.solidColor", fontSize: {xs: "1rem", md: "1.7rem"}}}>
                        People all over the world are happily using NeuraChat.
                    </Typography>
                    <Box sx={{display: "flex", gap: {xs: 2, md: 4}, justifyContent: {xs: "space-around"}}}>
                        <Button color="danger" size="lg" sx={{py: {md: 2}, width: {xs: "100%", md: "initial"}, fontSize: {xs: "1rem", md: "1.5rem"}}}>Get Started</Button>
                        <Button variant="soft" size="lg" color="primary" sx={{width: {xs: "100%", md: "initial"}, fontSize: {xs: "1rem", md: "1.5rem"}}}>Contact us</Button>
                    </Box>
                </Card>
            </Stack>
        </Container>
    </>)
}


export default Instruction;