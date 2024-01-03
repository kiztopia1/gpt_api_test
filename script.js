const key2 = "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";
const apiUrl = "https://api.openai.com/v1/chat/completions";
const j = async (message) => {
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${key2}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          // { role: "system", content: "You are a helpful assistant." },
          { role: "user", content: message },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error("error");
    }

    const result = await response.json();

    console.log(result.choices[0].message.content);
  } catch (error) {
    console.error("Error:", error.message);
    return "An error occurred while processing your request.";
  }
};
