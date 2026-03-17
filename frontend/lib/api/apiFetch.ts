export async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
    const base = process.env.NEXT_PUBLIC_API_BASE ?? "/api";
    const res = await fetch(`${base}${path}`, {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...(init?.headers ?? {}),
      },
    });
  
    if (!res.ok) {
      throw new Error(`API request failed: ${res.status}`);
    }
  
    return res.json() as Promise<T>;
  }