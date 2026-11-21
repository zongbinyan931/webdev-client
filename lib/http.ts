import axios from "axios";
export const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER?.replace(/\/$/, "") || "";
export const http = axios.create({ baseURL: HTTP_SERVER, withCredentials: true, timeout: 60000 });
http.interceptors.request.use((config) => {
  if (!HTTP_SERVER) throw new Error("The server address is not configured. Set NEXT_PUBLIC_HTTP_SERVER and restart the app.");
  return config;
});
export function errorMessage(error: unknown): string {
  if (axios.isAxiosError(error)) return error.response?.data?.message || error.response?.data?.error || "Cannot reach the server. Please try again.";
  return error instanceof Error ? error.message : "The request could not be completed.";
}
