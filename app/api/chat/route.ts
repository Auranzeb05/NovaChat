import { google } from "@ai-sdk/google";
import { streamText } from "ai";

export const maxDuration = 30;  // Optional: Set a max duration for responses

export async function POST(req: Request) {
  const { messages } = await req.json();  // Extract incoming messages

  // Call Google Gemini API to get the response
  const result = streamText({
    model: google("gemini-2.0-flash"),  // Specify the Gemini model here
    messages,  // Pass the messages as input to the model
  });

  // Return the API response to the front-end as a stream
  return result.toDataStreamResponse();
}
