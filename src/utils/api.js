const API_KEY = process.env.AIzaSyBaVElx8O3e8XrA8DtweuGMc67HYpiLi3Y;


// TEXT ENHANCE
export const enhancePrompt = async (input) => {
  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `Enhance this image prompt with style, lighting, camera angle and details: ${input}`,
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await res.json();

    return data?.candidates?.[0]?.content?.parts?.[0]?.text || "Enhancement failed";
  } catch (error) {
    console.error(error);
    return "Error enhancing prompt";
  }
};

// IMAGE GENERATION
export const generateImage = async (prompt) => {
  try {
    const shortPrompt = (prompt || "beautiful scenery").slice(0, 100);
    return `https://image.pollinations.ai/prompt/${encodeURIComponent(shortPrompt)}`;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// IMAGE ANALYSIS
export const analyzeImage = async () => {
  try {
    return "A modern scene with vibrant colors and soft lighting.";
  } catch (error) {
    console.error(error);
    return "Analysis failed";
  }
};