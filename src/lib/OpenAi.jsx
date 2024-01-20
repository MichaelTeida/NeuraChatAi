import {Configuration, OpenAIApi} from 'openai'

const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY
})
const openai = new OpenAIApi(configuration)

export async function sendMessage(message) {
    const response = await openai.createCompletion({
        model: 'text-davinci-002',
        prompt: message,
        temperature: 0.5, // how creative OpenAi should be (0 - 1)
        max_tokens: 400,
        frequency_penalty: 0.01, // parametr frequency_penalty pozwala sterować różnorodnością generowanego tekstu przez model GPT, modyfikując rozkład prawdopodobieństwa, aby rzadziej generować słowa, które model częściej widział podczas treningu.
        presense_penalty: 0.01, // parametr presence_penalty zniechęca model GPT do generowania słów, które już wystąpiły w tekście wejściowym (input), poprzez modyfikację rozkładu prawdopodobieństwa.
        top_p: 1, // shrinks or grows the “pool” of available tokens to choose from, the domain to select over. 1=big pool, 0=small pool
    })
    return response.data.choices[0].text
}