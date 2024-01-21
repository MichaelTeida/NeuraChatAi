import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
})

export async function sendMessage(message) {
    const params = {
        model: 'gpt-3.5-turbo-instruct',
        temperature: 0.5, // how creative OpenAi should be (0 - 1)
        max_tokens: 400,
        frequency_penalty: 0, // parametr frequency_penalty pozwala sterować różnorodnością generowanego tekstu przez model GPT, modyfikując rozkład prawdopodobieństwa, aby rzadziej generować słowa, które model częściej widział podczas treningu.
        top_p: 1, // shrinks or grows the “pool” of available tokens to choose from, the domain to select over. 1=big pool, 0=small pool
    };

    const completion = await openai.completions.create({
        prompt: message,
        ...params
    })
    return completion.choices[0].text
}