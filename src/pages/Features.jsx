import {Container, Stack, Sheet, Typography, Divider} from '@mui/joy'
import Header from "../components/Header.jsx"
import _ from 'lodash'
import {motion} from "framer-motion"

const RandomColor = () => {
    const colors = [
        'background.body',
        'background.level1',
        'background.level2',
        'background.level3',
        'primary.plainHoverBg',
        'primary.softActiveBg',
        'primary.softHoverBg',
    ]

    return _.shuffle(colors)
}

const Features = () => {
    const features = [
        'Working AI Chat: Real-time conversations powered by advanced language models.',
        'OpenAI Integration: Utilize GPT-3.5 and GPT-4 for enhanced chat capabilities.',
        'Responsive Design: Enjoy smooth interactions across devices.',
        'Customizable Models: Choose from a selection of models with unique performance.',
        'Dynamic Settings: Adjust temperature, frequency penalty, max tokens, and top-p for tailored responses.',
        'Light/Dark Mode: Enjoy adaptive color themes for a personalized experience.',
        'Snackbar Alerts: Receive informative messages and alerts.',
        'Messages Memory: Remember previous messages for reference during the conversation.',
        'Actions Counter: Track API request usage for the current model.',
        'Auto-scroll: Automatically move to the latest message for smooth chatting.',
        'Tip Suggestions: Access conversation starters with ease.'
    ]

    return (
        <>
            <Header/>
            <Sheet>
                <Container sx={{height: {xs: 150, md: 250}}}>
                    <Stack sx={{
                        height: "100%",
                        alignItems: "center",
                        flexDirection: "column",
                        justifyContent: "center",
                        gap: 2
                    }}>
                        <Typography level="h1" sx={{fontSize: {xs: "2rem", md: "3rem"}}}>Features</Typography>
                        <Divider/>
                    </Stack>
                </Container>
                {features.map((feature, index) => {
                    return <>
                        <Sheet key={index} sx={{
                            display: "flex",
                            alignItems: "center",
                            height: {xs: 300, md: 500},
                            backgroundColor: RandomColor,
                            p: {xs: 2, md: 2},
                            filter: `brightness(${_.random(0.90, 1.30, true)})`,

                        }}>
                            <Container>
                                <motion.div
                                    initial={{
                                        filter: `blur(2px)`,
                                        opacity: 0,
                                        scale: 0.5,
                                        rotate: _.random(-10, 10),
                                        x: _.random(-250, 250)
                                    }}
                                    whileInView={{
                                        filter: "blur(0)",
                                        opacity: 1,
                                        scale: 1,
                                        rotate: 0,
                                        x: _.random(-20, 20)
                                    }}
                                    transition={{
                                        duration: 1.1, scale: {
                                            type: "spring",
                                            damping: _.random(5, 12),
                                            stiffness: _.random(90, 110),
                                            restDelta: 0.001,
                                            mass: _.random(1, 1.4),
                                            velocity: _.random(1.5, 2.5)
                                        }
                                    }}
                                >
                                    <Typography level="title-lg" sx={{fontSize: {xs: 25, md: 40}}}>
                                        {feature}
                                    </Typography>
                                </motion.div>
                            </Container>
                        </Sheet>
                    </>
                })}
            </Sheet>
        </>
    )
}

export default Features;