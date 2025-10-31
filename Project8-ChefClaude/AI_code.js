import { InferenceClient } from "@huggingface/inference";

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page. The recipe needs to shown on the webpage. So, Properly format it accordingly. 
`
const HF_API_KEY = import.meta.env.VITE_HF_API_KEY
console.log(`HF API KEY: ${HF_API_KEY}`)
const client = new InferenceClient(HF_API_KEY)

export default async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")
    try {
        const response = await client.chatCompletion({
            model: "openai/gpt-oss-20b",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make! Create three sections namely ingredients, instructions and tips.` },
            ],
            max_tokens: 1024,
        })
        return response.choices[0].message.content
    } catch (err) {
        console.error(err.message)
        return "Sorry, I couldn't generate a recipe. Please try again."
    }
}