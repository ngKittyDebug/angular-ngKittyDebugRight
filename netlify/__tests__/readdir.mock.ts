import { readdir } from 'node:fs/promises';
import { vi } from 'vitest';

// `readdir` is overloaded; its `withFileTypes` overload makes vitest type
// `mockResolvedValue` as `Dirent[]`. Our code only uses the `string[]` overload,
// so the single cast needed to mock it is isolated here.
export function mockKoanFiles(files: string[]): void {
  vi.mocked(readdir).mockResolvedValue(files as never);
}
