import type {
  OllamaModel,
  OllamaPanelStatus,
  OllamaRunningModel,
} from "./types";

const FETCH_TIMEOUT_MS = 5000;

/**
 * Validates and normalizes a host URL to ensure it uses http or https protocol.
 * @param raw - The raw URL string to validate
 * @returns The normalized URL origin if valid, or null if invalid
 */
export function validateHostUrl(raw: string): string | null {
  try {
    const url = new URL(raw.trim());
    if (url.protocol !== "http:" && url.protocol !== "https:") {
      return null;
    }
    return url.origin;
  } catch {
    return null;
  }
}

/**
 * Fetches and parses JSON from a URL with timeout protection.
 * @param url - The URL to fetch from
 * @returns The parsed JSON response or null if the request fails
 */
async function fetchJson<T>(url: string): Promise<T | null> {
  try {
    const response = await fetch(url, {
      signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
      cache: "no-store",
    });
    if (!response.ok) {
      return null;
    }
    return (await response.json()) as T;
  } catch {
    return null;
  }
}

type VersionResponse = { version?: string };
type TagsResponse = { models?: OllamaModel[] };
type PsResponse = { models?: OllamaRunningModel[] };

/**
 * Fetches the status of an Ollama host including version, available models, and running models.
 * @param hostInput - The host URL to query
 * @returns The Ollama panel status with host information, connectivity, and model data
 */
export async function fetchOllamaStatus(hostInput: string): Promise<OllamaPanelStatus> {
  const host = validateHostUrl(hostInput);

  if (!host) {
    return {
      host: hostInput,
      online: false,
      models: [],
      running: [],
      error: "Invalid host URL. Use http:// or https:// only.",
    };
  }

  const versionData = await fetchJson<VersionResponse>(`${host}/api/version`);

  if (!versionData?.version) {
    return {
      host,
      online: false,
      models: [],
      running: [],
      error: "This Ollama host is not reachable. Check that Ollama is running and the host URL is correct.",
    };
  }

  const [tagsData, psData] = await Promise.all([
    fetchJson<TagsResponse>(`${host}/api/tags`),
    fetchJson<PsResponse>(`${host}/api/ps`),
  ]);

  return {
    host,
    online: true,
    version: versionData.version,
    models: tagsData?.models ?? [],
    running: psData?.models ?? [],
  };
}
