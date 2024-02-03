import {Container, Sheet, styled, Typography} from '@mui/joy'
import Header from "../components/Header.jsx"
import _ from 'lodash'

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

    const AnimatedTypography = styled(Typography)(() => ({
        "&:hover": {
            animation: "focusInContractBck 1s"
        },
        "@keyframes focusInContractBck": {
            "0%": {
                letterSpacing: "1em",
                "&::-webkit-transform": "translateZ(300px)",
                transform: "translateZ(300px)",
                "&::-webkit-filter": "blur(12px)",
                filter: "blur(12px)",
                opacity: "0"
            },
            "100%": {
                "&::-webkit-transform": "translateZ(12px)",
                transform: "translateZ(12px)",
                "&::-webkit-filter": "blur(0)",
                filter: "blur(0)",
                opacity: "1"
            }
        }
    }))

    return (
        <>
            <Header/>
            <Typography level="h1">Features</Typography>
            {features.map((feature, index) => {
                return <Sheet key={index} sx={{
                    display: "flex",
                    alignItems: "center",
                    height: 600,
                    backgroundColor: RandomColor,
                    filter: `brightness(${_.random(0.70, 1.30, true)})`
                }}>
                    <Container sx={{height: 200}}>
                        <AnimatedTypography level="title-lg" sx={{fontSize: 40}}>
                            {feature}
                        </AnimatedTypography>
                    </Container>
                </Sheet>
            })}
        </>
    );
};

export default Features;