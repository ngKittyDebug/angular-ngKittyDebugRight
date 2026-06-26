export function randomJitter(range: number): number {
  return (Math.random() * 2 - 1) * range;
}
