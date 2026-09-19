const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function generateResponse(chatHistory) {
  console.log("PROMPT RECEIVED:", chatHistory);

  try {
    const interaction = await ai.interactions.create({
      model: "gemini-3.8-flash",
      input: chatHistory,
    });

    return interaction.output_text;
  } catch (error) {
    console.error("AI Error:", error);
    throw error;
  }
}

module.exports = { generateResponse };