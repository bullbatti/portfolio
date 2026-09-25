export async function fetchJson<T>(filename: string): Promise<T[]> {
    const url = `${import.meta.env.BASE_URL}/data/${filename}`;

    const response = await fetch(url);

    if (!response.ok)
        throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);

    const data = (await response.json()) as T[];

    if (!Array.isArray(data))
        throw new Error(`Expected an array from ${url}, got ${typeof data}`);

    return data;
}