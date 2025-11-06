# 📝 Git Quick Reference - MCM Design Hub

## Daily Commands

```bash
# Check status
git status              # Full status
git s                   # Short status (alias)

# View changes
git diff                # Unstaged changes
git diff --staged       # Staged changes
git ds                  # Staged diff (alias)

# Stage files
git add <file>          # Stage specific file
git add -p              # Interactive staging

# Commit
git commit              # Opens editor with template
git cm "message"        # Quick commit (alias)

# View history
git log --oneline -5    # Last 5 commits
git lg                  # Pretty graph (alias)
git last                # Last commit stats (alias)

# Sync with GitHub
git pull origin main    # Pull latest
git push origin main    # Push commits

# Undo mistakes
git unstage <file>      # Unstage file (alias)
git undo                # Undo last commit, keep changes (alias)
git checkout -- <file>  # Discard file changes
```

## Commit Message Format

```
<type>(<scope>): <subject>

Examples:
feat(landing): Add color palette generator
fix(newsletter): Validate email before submission
docs(readme): Update installation instructions
style(landing): Format JavaScript with Prettier
refactor(components): Extract button component
chore(deps): Update Eleventy to 3.1.0
```

### Types

- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation
- `style` - Code formatting
- `refactor` - Code restructuring
- `test` - Tests
- `chore` - Maintenance
- `perf` - Performance
- `ci` - CI/CD

### Scopes

- `landing`, `learn`, `explore`, `practice`
- `components`, `layout`, `styles`
- `config`, `deploy`, `docs`

## Pre-Commit Checklist

- [ ] One logical change
- [ ] Clear commit message
- [ ] Reviewed diff
- [ ] Build succeeds
- [ ] No debug code

## Atomic Commit Workflow

```bash
# 1. Stage related changes
git add src/assets/js/pages/landing.js

# 2. Commit with clear message
git cm "feat(landing): Add color copy functionality"

# 3. Stage next logical change
git add src/assets/css/pages/landing.css

# 4. Another atomic commit
git cm "style(landing): Add hover effects to swatches"

# 5. Push when ready
git push origin main
```

## Quick Fixes

```bash
# Forgot to stage a file?
git add forgotten-file.js
git can                 # Commit amend no-edit (alias)

# Wrong commit message?
git ca                  # Commit amend (alias)

# Staged wrong file?
git unstage <file>      # Unstage (alias)
```

## Files to Never Commit

❌ `node_modules/`  
❌ `_site/`  
❌ `.DS_Store`  
❌ `*.log`  
❌ `.env`

Already in `.gitignore` ✅

## Help

📖 Full guide: `.github/GIT_WORKFLOW.md`  
📖 Contributing: `CONTRIBUTING.md`  
🚀 Deployment: `DEPLOYMENT.md`

---

**Remember: Atomic commits = Clean history = Happy developers!** 🎉
