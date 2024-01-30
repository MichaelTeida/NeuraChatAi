import {Typography, Box, Container, List, ListItem, ListItemDecorator, AspectRatio} from "@mui/joy";
import robotImg from "../assets/Robot woman graphics.webp"
import poweredbyopenaibadgeoutlinedondark from "../assets/powered-by-openai-badge-outlined-on-dark.svg";
import poweredbyopenaibadgeoutlinedonlight from "../assets/powered-by-openai-badge-outlined-on-light.svg";
import {useColorScheme} from "@mui/joy";
import {useEffect, useState} from "react";
import BackgroundAnimation from "../components/BackgroundAnimation.jsx";
import Header from "../components/Header.jsx";

export function About() {
    const {mode} = useColorScheme();
    const [openAiBadge, setOpenAiBadge] = useState(mode)

    useEffect(() => {
        mode === 'light' ? setOpenAiBadge(poweredbyopenaibadgeoutlinedonlight) : setOpenAiBadge(poweredbyopenaibadgeoutlinedondark)
    },[mode])

    return (
        <>
            <Header/>
            <Container sx={{display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: {xs: "column", md: "row"}, minWidth: {md: "1350px"}, p: {xs: 4}, py: {xs: 10}, gap: {xs: 6, md: 0}, minHeight: 'calc(100dvh - var(--Header-height))'}}>
                <Box sx={{zIndex: "2",flex: 6, display: "flex", flexDirection: {xs: "column", md: "row"}, gap: 2, flexWrap: "wrap"}}>
                    <Typography component="h1" level="h1" fontSize={{xs: 45, md: 50}}>
                        Welcome to <Typography color={"primary"}>NeuraChat</Typography>
                    </Typography>
                    <Typography sx={{color: "text.primary"}}>
                        NeuraChat is your ultimate AI companion, revolutionizing the way you interact online. With cutting-edge technology and intuitive design, NeuraChat offers a seamless chat experience unlike any other. Explore the possibilities with NeuraChat today!
                    </Typography>
                    <Box sx={{display: 'flex', flexDirection: {md: "row"}, gap: {md: 3}}} >
                        <List aria-labelledby="advantages" >
                            <ListItem sx={{color: "text.primary", height: 56, p: 0}}>
                                <ListItemDecorator sx={{mr:-2}}>⭐</ListItemDecorator>Limitless Possibilities
                            </ListItem>
                            <ListItem sx={{color: "text.primary", height: 56, p: 0}}>
                                <ListItemDecorator sx={{mr:-2}}>⭐</ListItemDecorator>AI-powered conversations.
                            </ListItem>
                        </List>
                        <List aria-labelledby="advantages">
                            <ListItem sx={{color: "text.primary", height: 56, p: 0}}>
                                <ListItemDecorator sx={{mr:-2}}>⭐</ListItemDecorator>Intelligent Problem-Solving
                            </ListItem>
                            <ListItem sx={{color: "text.primary", height: 56, p: 0}}>
                                <ListItemDecorator sx={{mr:-2}}>⭐</ListItemDecorator>User-friendly features.
                            </ListItem>
                        </List>
                    </Box>
                    <Box display="flex" maxWidth={{xs: 400, md: 350}} alignSelf="center" component="img" src={openAiBadge} alt={"Logo NeuraChatAi"}/>
                </Box>
                <Box sx={{zIndex: "2", flex: 6}}>
                    <AspectRatio
                        objectFit="contain"
                        ratio={1}
                        variant="plain"
                        maxHeight={400}
                        sx={(theme) => ({
                            minWidth: 350,
                            alignSelf: 'stretch',
                            [theme.breakpoints.up(834)]: {
                                alignSelf: 'initial',
                                flexGrow: 1,
                                '--AspectRatio-maxHeight': '600px',
                                '--AspectRatio-minHeight': '600px',
                            },
                        })}
                    >
                        <Box component="img" src={robotImg} alt={"Logo NeuraChatAi"} />
                    </AspectRatio>
                </Box>
            </Container>
            <BackgroundAnimation/>
        </>
    );
}
