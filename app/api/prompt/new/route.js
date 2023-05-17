import { connectToDB } from "@utils/database"
import Prompt from "@models/promptModel"
export const POST = async (req) => {
    const { userId, prompt, tag } = await req.json()
    console.log(userId, prompt, tag)
    try {
        await connectToDB()
        const newPrompt = new Prompt({
            prompt: prompt,
            creator: userId,
            tag: tag
        })
        await newPrompt.save()
        return new Response(JSON.stringify(newPrompt), { status: 201 })
    } catch (error) {
        return new Response("Failed to create the prompt", { status: 500 })
    }
}