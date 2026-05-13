---
name: sasarik:ngKitty-review
description: Mentor PR review for the angular-ngKittyDebugRight RS School project. Checks Angular v21 patterns, RS School task criteria, TypeScript strict rules, and Taiga UI conventions.
argument-hint: <PR_NUMBER_or_URL>
allowed-tools:
  - Read
  - Write
  - Bash
  - Agent
---

Read and follow ALL instructions from the skill file at:
`.agents/skills/pr-review/SKILL.md`

Then perform the full PR review workflow for: $ARGUMENTS

If $ARGUMENTS is empty or not provided, ask the user for the PR number or URL before proceeding.
