# Git Workflow & Best Practices

## 🎯 Our Git Strategy: Atomic Commits

### What are Atomic Commits?
- **One logical change per commit**
- Each commit should be self-contained and functional
- Easy to review, revert, and understand

### Good vs Bad Commits

#### ❌ Bad (too broad):
```bash
git commit -m "Update files"
git commit -m "Fix stuff"
git commit -m "WIP"
```

#### ✅ Good (atomic):
```bash
git commit -m "feat: Add color palette generator interaction"
git commit -m "fix: Correct newsletter form validation regex"
git commit -m "style: Update hero section responsive breakpoints"
git commit -m "docs: Add deployment instructions to README"
```

---

## 📝 Commit Message Convention

We'll use **Conventional Commits** format:

```
<type>(<scope>): <subject>

<body> (optional)

<footer> (optional)
```

### Types:
- **feat:** New feature
- **fix:** Bug fix
- **docs:** Documentation only
- **style:** Code style/formatting (not CSS)
- **refactor:** Code restructuring without changing behavior
- **perf:** Performance improvement
- **test:** Adding or updating tests
- **chore:** Maintenance tasks (dependencies, config)
- **build:** Build system changes
- **ci:** CI/CD changes

### Examples:

```bash
# Feature
git commit -m "feat(landing): Add interactive color palette generator"

# Bug fix
git commit -m "fix(newsletter): Validate email before submission"

# Documentation
git commit -m "docs(readme): Update installation instructions"

# Style (code formatting)
git commit -m "style(landing): Format JavaScript with Prettier"

# Refactor
git commit -m "refactor(components): Extract button component to separate file"

# Performance
git commit -m "perf(images): Add lazy loading to gallery images"

# Chore
git commit -m "chore(deps): Update Eleventy to 3.1.0"
```

---

## 🔄 Daily Workflow

### 1. Before Starting Work

```bash
# Pull latest changes
git pull origin main

# Check current status
git status

# Create feature branch (optional, for larger features)
git checkout -b feature/color-tool-enhancements
```

### 2. While Working

```bash
# Check what changed frequently
git status

# Review your changes before staging
git diff

# Stage specific files (not everything at once)
git add src/assets/js/pages/landing.js
git add src/assets/css/pages/landing.css

# Or stage specific parts of files interactively
git add -p src/index.njk
```

### 3. Making Atomic Commits

```bash
# Stage only related changes
git add src/assets/js/pages/landing.js

# Write descriptive commit
git commit -m "feat(color-generator): Add click-to-copy functionality"

# Stage next logical change
git add src/assets/css/pages/landing.css

# Another atomic commit
git commit -m "style(color-generator): Update swatch hover effects"
```

### 4. Before Pushing

```bash
# Review commit history
git log --oneline -5

# Amend last commit if needed (before pushing)
git commit --amend -m "feat(color-generator): Add click-to-copy with tooltip feedback"

# Push to GitHub
git push origin main
```

---

## 🧹 Keeping Repository Clean

### Files to NEVER Commit

Already in `.gitignore`:
- `node_modules/` - Dependencies (install via npm)
- `_site/` - Build output (generated)
- `.DS_Store` - Mac OS files
- `*.log` - Log files
- `.env` - Environment variables

### Check Before Committing

```bash
# See what will be committed
git status

# Review actual changes
git diff --staged

# Unstage if needed
git reset HEAD <file>
```

### Remove Accidentally Committed Files

```bash
# Remove from Git but keep locally
git rm --cached <file>
git commit -m "chore: Remove accidentally committed file"

# Remove from Git and delete locally
git rm <file>
git commit -m "chore: Delete unnecessary file"
```

---

## 🌿 Branch Strategy

### Main Branch Protection
- `main` branch should always be deployable
- All code in `main` should work

### Feature Branches (for larger work)

```bash
# Create feature branch
git checkout -b feature/learn-section

# Work and commit atomically
git add src/learn/index.njk
git commit -m "feat(learn): Add color theory page structure"

git add src/assets/css/pages/learn.css
git commit -m "style(learn): Create learn section styles"

# Push feature branch
git push -u origin feature/learn-section

# Create Pull Request on GitHub (optional)
# After review, merge to main
```

### Quick Fixes (hotfix branches)

```bash
git checkout -b hotfix/broken-newsletter-form
git add src/assets/js/pages/landing.js
git commit -m "fix(newsletter): Correct email validation pattern"
git push origin hotfix/broken-newsletter-form
# Merge to main
```

---

## 📊 Useful Git Commands

### Checking Status & History

```bash
# Current status
git status

# Short status
git status -s

# View commit history
git log --oneline -10

# Pretty log with graph
git log --graph --oneline --all --decorate

# See what changed in last commit
git show

# See changes in specific file
git log -p src/index.njk
```

### Undoing Changes

```bash
# Discard changes in working directory
git checkout -- <file>

# Unstage file (keep changes)
git reset HEAD <file>

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes) - DANGEROUS
git reset --hard HEAD~1

# Revert a specific commit (creates new commit)
git revert <commit-hash>
```

### Interactive Staging

```bash
# Stage parts of files interactively
git add -p

# Options:
# y - stage this hunk
# n - don't stage this hunk
# s - split into smaller hunks
# e - manually edit the hunk
# q - quit
```

---

## 🔍 Pre-Commit Checklist

Before every commit, ask yourself:

- [ ] Does this commit contain ONE logical change?
- [ ] Does the commit message clearly describe what changed?
- [ ] Did I review the actual diff (`git diff --staged`)?
- [ ] Are there any debug statements or comments to remove?
- [ ] Did I accidentally stage files that shouldn't be committed?
- [ ] Is the code properly formatted?
- [ ] Does the site still build? (`npm run build`)

---

## 🚀 Workflow Examples

### Example 1: Adding a New Feature

```bash
# 1. Start with clean state
git status
git pull origin main

# 2. Make changes to add color picker
# Edit: src/assets/js/pages/landing.js

# 3. Test it works
npm start
# Test in browser

# 4. Stage only the JavaScript
git add src/assets/js/pages/landing.js

# 5. Review what you're committing
git diff --staged

# 6. Commit atomically
git commit -m "feat(color-generator): Add HSL color picker mode"

# 7. Now add the CSS styling
# Edit: src/assets/css/pages/landing.css

git add src/assets/css/pages/landing.css
git commit -m "style(color-generator): Add HSL picker UI styles"

# 8. Update documentation
# Edit: docs/landing-page.md

git add docs/landing-page.md
git commit -m "docs(landing): Document HSL picker feature"

# 9. Push all commits
git push origin main
```

### Example 2: Fixing a Bug

```bash
# 1. Identify the bug
# Newsletter form doesn't validate email properly

# 2. Fix it
# Edit: src/assets/js/pages/landing.js

# 3. Test the fix
npm start
# Test newsletter form

# 4. Commit the fix
git add src/assets/js/pages/landing.js
git commit -m "fix(newsletter): Improve email validation regex

- Add support for subdomains
- Allow plus addressing (user+tag@domain.com)
- Test with common email formats"

# 5. Push
git push origin main
```

### Example 3: Refactoring

```bash
# 1. Extract button component
# Edit: src/_includes/components/button.njk

git add src/_includes/components/button.njk
git commit -m "refactor(components): Extract button variants to separate macro"

# 2. Update usage in landing page
# Edit: src/index.njk

git add src/index.njk
git commit -m "refactor(landing): Use new button component macro"

# 3. Update styles
# Edit: src/assets/css/main.css

git add src/assets/css/main.css
git commit -m "refactor(styles): Consolidate button styles into component CSS"

# 4. Push all refactoring commits together
git push origin main
```

---

## 📈 Keeping History Clean

### Squashing Commits (before pushing)

If you have many small commits locally:

```bash
# Interactive rebase last 3 commits
git rebase -i HEAD~3

# In editor, change 'pick' to 'squash' or 's' for commits to combine
# Save and exit
# Edit combined commit message
```

### Amending Commits

```bash
# Forgot to add a file to last commit?
git add forgotten-file.js
git commit --amend --no-edit

# Fix commit message
git commit --amend -m "feat(color-generator): Add palette export feature"
```

**⚠️ WARNING:** Only amend/rebase commits that haven't been pushed!

---

## 🎯 Project-Specific Guidelines

### MCM Design Hub Commit Scopes

Use these scopes in commit messages:

- `landing` - Landing page
- `learn` - Learn section
- `explore` - Explore section
- `practice` - Practice tools
- `components` - Reusable components
- `layout` - Layout templates
- `styles` - Global styles
- `config` - Configuration files
- `deploy` - Deployment/CI related
- `docs` - Documentation

### Before Each Push

```bash
# 1. Build succeeds
npm run build

# 2. Dev server works
npm start

# 3. Check what you're pushing
git log origin/main..HEAD --oneline

# 4. All commits are atomic and well-named
git log --oneline -5

# 5. Push
git push origin main
```

---

## 🛠️ Git Aliases (Time Savers)

Add to your `~/.gitconfig`:

```ini
[alias]
    # Status
    s = status -s
    st = status
    
    # Commit
    cm = commit -m
    ca = commit --amend
    can = commit --amend --no-edit
    
    # Log
    lg = log --oneline --graph --all --decorate -10
    last = log -1 HEAD --stat
    
    # Diff
    d = diff
    ds = diff --staged
    
    # Branch
    br = branch
    co = checkout
    cob = checkout -b
    
    # Sync
    sync = !git pull origin main && git push origin main
    
    # Undo
    undo = reset --soft HEAD~1
    unstage = reset HEAD --
```

Usage:
```bash
git s                    # Instead of: git status -s
git cm "feat: Add XYZ"   # Instead of: git commit -m "feat: Add XYZ"
git lg                   # Instead of: git log --oneline --graph...
```

---

## 📚 Additional Resources

- [Conventional Commits](https://www.conventionalcommits.org/)
- [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/)
- [Git Best Practices](https://git-scm.com/book/en/v2)

---

## 🎓 Summary

### Golden Rules:
1. ✅ **One logical change per commit**
2. ✅ **Clear, descriptive commit messages**
3. ✅ **Review diffs before committing** (`git diff --staged`)
4. ✅ **Test before pushing** (`npm run build`)
5. ✅ **Never commit generated files** (node_modules, _site)
6. ✅ **Pull before you push** (`git pull`)
7. ✅ **Keep main branch deployable**

### Quick Reference:
```bash
# Daily workflow
git status              # Check what changed
git add <file>         # Stage specific file
git commit -m "..."    # Commit with message
git push origin main   # Push to GitHub

# Before committing
git diff               # Review changes
git diff --staged      # Review staged changes
npm run build          # Test build

# If you mess up
git reset HEAD <file>  # Unstage
git checkout -- <file> # Discard changes
git commit --amend     # Fix last commit
```

---

**Remember: Good Git hygiene makes collaboration easier, debugging faster, and your project more professional!** 🚀
