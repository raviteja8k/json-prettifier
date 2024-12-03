export function prettifyJson(json) {
  try {
    if (!json.trim()) {
      return { formatted: '', error: null };
    }
    
    const parsed = JSON.parse(json);
    const formatted = JSON.stringify(parsed, null, 2);
    return { formatted, error: null };
  } catch (err) {
    return {
      formatted: '',
      error: err instanceof Error ? err.message : 'Invalid JSON'
    };
  }
}