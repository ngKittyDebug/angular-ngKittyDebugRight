export function formatKoanNumber(n: number, width: 2 | 3 = 2): string {
  return String(n).padStart(width, '0');
}
