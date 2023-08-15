export function getDayName(dateStr: string | undefined, locale: string): string | undefined {
  const today = new Date().toISOString().slice(0, 10);
  if (dateStr && dateStr !== today) {
    const date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: 'short' });
  } else {
    return 'Today';
  }
}
