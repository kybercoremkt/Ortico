import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

// System instruction to give the AI personality and context
const SYSTEM_INSTRUCTION = `
Eres el asistente virtual experto de "ORTICO Constructora", una empresa de construcción líder en Mérida, Yucatán.
Tu tono debe ser profesional, amable, confiable y experto en construcción.

INFORMACIÓN DE LA EMPRESA:
- Nombre: ORTICO Constructora
- Ubicación: Mérida, Yucatán, México.
- Especialidades: Diseño arquitectónico, construcción residencial y comercial, remodelaciones, supervisión de obra, y trámites de permisos.
- Valores: Honestidad, puntualidad, calidad premium y transparencia.
- Contacto: contacto@ortico.mx | (999) 123-4567

TU ROL:
- Responder preguntas sobre servicios de construcción.
- Ofrecer estimaciones generales (siempre aclarando que son aproximadas y requieren cotización formal).
- Explicar el proceso de construcción en Yucatán (clima, materiales como chukum, piedra maya, etc.).
- Invitar a los usuarios a agendar una cita o visitar la sección de contacto para cotizaciones precisas.
- No inventes precios exactos. Di "depende de los acabados y metros cuadrados, pero contáctanos para un presupuesto".

REGLAS DE INTERACCIÓN:
- Sé conciso. Respuestas cortas y directas son mejores para chat.
- Usa formato Markdown simple (negritas, listas) para facilitar la lectura.
- Si no sabes algo, sugiere contactar a un humano de la empresa.
`;

let chatInstance: Chat | null = null;
let genAI: GoogleGenAI | null = null;

export const initializeChat = (): Chat => {
  if (!genAI) {
    genAI = new GoogleGenAI({ apiKey: API_KEY });
  }
  
  // Create a new chat session if one doesn't exist or we want to reset
  if (!chatInstance) {
    chatInstance = genAI.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topK: 40,
        maxOutputTokens: 1000,
      },
    });
  }
  return chatInstance;
};

export const sendMessageStream = async function* (message: string) {
  if (!chatInstance) {
    initializeChat();
  }
  
  if (!chatInstance) {
    throw new Error("Failed to initialize chat");
  }

  try {
    const result = await chatInstance.sendMessageStream({ message });
    
    for await (const chunk of result) {
        // Safe casting as per SDK guidelines, though strictly chunk is already typed if properly imported
        // but we want to be safe with the 'text' property access.
        const contentResponse = chunk as GenerateContentResponse;
        if (contentResponse.text) {
            yield contentResponse.text;
        }
    }
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    yield "Lo siento, tuve un problema técnico. Por favor intenta de nuevo más tarde o contáctanos directamente.";
  }
};