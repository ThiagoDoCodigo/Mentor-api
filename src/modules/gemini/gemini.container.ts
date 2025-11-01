import { GeminiService } from "./gemini.service";
import { GeminiController } from "./gemini.controller";

export const geminiService = new GeminiService();
export const geminiController = new GeminiController(geminiService);

export default geminiController;
