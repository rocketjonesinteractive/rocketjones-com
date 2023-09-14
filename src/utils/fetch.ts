export async function fetchWithTimeout(resource: RequestInfo | URL, options: any) {
  if (!options.timeout) options.timeout = 8000;

  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), options.timeout);

  const response = await fetch(resource, {
    ...options,
    signal: controller.signal,
  });
  clearTimeout(id);

  return response;
}
