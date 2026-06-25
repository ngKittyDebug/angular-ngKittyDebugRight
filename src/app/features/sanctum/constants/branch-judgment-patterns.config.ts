export const BRANCH_FORBIDDEN_PATTERNS = [/temp/i, /wip/i, /asdf/i, /test-?123/i, /^master$/i, /^main$/i, /fix-?fix/i];
export const BRANCH_SACRED_PREFIXES = ['feat/', 'fix/', 'chore/', 'refactor/', 'docs/', 'perf/'];
export const BRANCH_HERETICAL_PATTERNS = [/legacy/i, /hotfix/i, /urgent/i, /_\d{8,}/];
export const BRANCH_KEBAB_CASE_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
