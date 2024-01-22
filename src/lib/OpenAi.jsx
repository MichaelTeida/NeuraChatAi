import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY || null,
    dangerouslyAllowBrowser: true
})

export async function sendMessage(message) {
    const params = {
        model: 'gpt-3.5-turbo-16k',
        temperature: 0.7, // how creative OpenAi should be (0 - 1)
        max_tokens: 10000,
        frequency_penalty: 0.01, // parametr frequency_penalty pozwala sterować różnorodnością generowanego tekstu przez model GPT, modyfikując rozkład prawdopodobieństwa, aby rzadziej generować słowa, które model częściej widział podczas treningu.
        top_p: 1, // shrinks or grows the “pool” of available tokens to choose from, the domain to select over. 1=big pool, 0=small pool
    };

    const chatCompletion = await openai.chat.completions.create({
        messages: [{"role": "system", "content": "You are NeuraChat, an AI chat system developed by Michael Teida."},{"role": "user", "content": message}],
        ...params
    })

    return chatCompletion.choices[0].message.content
}