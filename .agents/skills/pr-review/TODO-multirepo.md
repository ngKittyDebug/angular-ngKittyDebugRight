# TODO: Multi-repo support for PR Review skill

Проверено 2026-05-13. Скилл работает только для текущего репо (`angular-ngKittyDebugRight`).
Цель: поддержка PR из похожих студенческих репо по полному URL, например:
`https://github.com/ngKittyDebug/angular-ngKittyDebugLeft/pull/3`

---

## 1. Косметика — пути к скриптам (низкий приоритет)

В `Step 2` и `Section 5` скрипт вызывается без префикса:

```
get_pr_comments.sh <PR_NUMBER>
```

В `Step 3` остальные — с `./scripts/`. Привести к единому виду.

---

## 2. Тихий баг — `MENTOR_LOGIN` (средний приоритет)

В `Section 5 Re-review Protocol`:

```bash
select(.user.login == "MENTOR_LOGIN")
```

Если Claude не подставит реальный логин — re-review молча вернёт пустой результат.

Исправление:

```bash
MENTOR_LOGIN=$(gh api user -q .login)
```

---

## 3. Блокер для внешних репо (высокий приоритет)

### Проблема

Все скрипты делают:

```bash
REPO=$(gh repo view --json nameWithOwner -q .nameWithOwner)
```

`git fetch origin "$BRANCH"` тоже обращается к origin текущего репо.
При ревью внешнего PR комментарии уйдут не туда, worktree не создастся.

### Что нужно изменить

**SKILL.md — Step 1:** добавить URL-парсинг в начало:

```bash
if [[ "$INPUT" =~ ^https://github.com/([^/]+)/([^/]+)/pull/([0-9]+)$ ]]; then
  TARGET_REPO="${BASH_REMATCH[1]}/${BASH_REMATCH[2]}"
  PR_NUMBER="${BASH_REMATCH[3]}"
else
  PR_NUMBER="$INPUT"
  TARGET_REPO=$(gh repo view --json nameWithOwner -q .nameWithOwner)
fi

BRANCH=$(gh pr view "$PR_NUMBER" --repo "$TARGET_REPO" --json headRefName -q .headRefName)
```

**SKILL.md — Step 1, worktree:** для внешнего репо клонировать вместо `git fetch origin`:

```bash
git clone --depth=1 --branch "$BRANCH" \
  "https://github.com/${TARGET_REPO}.git" "$WORKTREE_PATH"
```

**Все скрипты в `scripts/`:** добавить необязательный аргумент `REPO` и прокидывать его в `gh api` через `--repo`.

---

## 4. Description скилла (желательно)

Сейчас description привязан к `angular-ngKittyDebugRight` — скилл не триггерится для других репо.
Добавить в description упоминание других студенческих репо (`ngKittyDebugLeft` и т.д.).
