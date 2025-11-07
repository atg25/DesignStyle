# 🛡️ Quality Control System

## Overview

This project uses a comprehensive quality control system to ensure every commit meets high standards. The system automatically checks, formats, and validates your code before it's committed.

## 🎯 What Gets Checked

### Before Every Commit (Pre-commit Hook)

1. **✨ Code Formatting (Prettier)**
   - Automatically formats JavaScript, CSS, JSON, Markdown, and Nunjucks files
   - Ensures consistent code style across the project
   - Runs on staged files only

2. **🔍 Code Linting (ESLint)**
   - Checks JavaScript for errors and bad practices
   - Enforces code quality standards
   - Auto-fixes issues when possible

3. **📝 Markdown Linting (Markdownlint)**
   - Validates markdown files
   - Ensures documentation consistency
   - Auto-fixes common issues

4. **📦 Build Validation**
   - Runs `npm run build` to ensure the site builds successfully
   - Catches build errors before they reach GitHub
   - Prevents broken deployments

### During Commit (Commit-msg Hook)

1. **💬 Commit Message Validation (Commitlint)**
   - Enforces [Conventional Commits](https://www.conventionalcommits.org/) format
   - Ensures clear, categorized commit messages
   - Validates type and scope

### After Commit (Post-commit Hook)

1. **📊 Success Feedback**
   - Shows commit stats
   - Reminds you to push changes
   - Provides helpful tips

---

## 🔧 Tools Used

### Husky

Git hooks manager that runs scripts at different Git lifecycle events.

### lint-staged

Runs linters on staged files only (not the entire project), making commits fast.

### Prettier

Opinionated code formatter that ensures consistent style.

### ESLint

JavaScript linter that catches errors and enforces best practices.

### Markdownlint

Linter for markdown files to ensure documentation quality.

### Commitlint

Validates commit messages against conventional commit format.

---

## 📋 What Happens When You Commit

```bash
git commit -m "feat(landing): Add new feature"
```

**Step-by-step process:**

1. **🔍 Pre-commit hook runs**

   ```
   Running pre-commit checks...
   ✨ Formatting staged files with Prettier...
   🔍 Linting JavaScript with ESLint...
   📝 Checking markdown with Markdownlint...
   📦 Testing build...
   ✅ Build successful
   ✅ Pre-commit checks passed!
   ```

2. **💬 Commit-msg hook runs**

   ```
   🔍 Validating commit message...
   ✅ Commit message is valid!
   ```

3. **✅ Commit succeeds**
   ```
   🎉 Commit successful!
   📊 Quick stats: [shows your commit]
   💡 Tip: Push when ready with: git push origin main
   ```

---

## ✅ Valid Commit Message Format

### Format

```
<type>(<scope>): <subject>
```

### Valid Types

- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation changes
- `style` - Code formatting (not CSS)
- `refactor` - Code restructuring
- `perf` - Performance improvement
- `test` - Adding tests
- `chore` - Maintenance tasks
- `build` - Build system changes
- `ci` - CI/CD changes
- `revert` - Revert previous commit

### Valid Scopes

- `landing` - Landing page
- `learn` - Learn section
- `explore` - Explore section
- `practice` - Practice tools
- `components` - Reusable components
- `layout` - Layout templates
- `styles` - Global styles
- `config` - Configuration
- `deploy` - Deployment
- `docs` - Documentation
- `workflow` - Git workflow
- `deps` - Dependencies

### Valid Examples

✅ `feat(landing): Add color palette generator`  
✅ `fix(newsletter): Correct email validation regex`  
✅ `docs(readme): Update installation instructions`  
✅ `style(landing): Format JavaScript with Prettier`  
✅ `chore(deps): Update Eleventy to 3.1.0`

### Invalid Examples

❌ `Update files` (no type or scope)  
❌ `feat: add feature` (missing scope)  
❌ `FEAT(landing): Add feature` (wrong case)  
❌ `feat(landing): Add feature.` (ends with period)  
❌ `feat(unknown): Add feature` (invalid scope)

---

## 🚫 What Gets Blocked

Your commit will be **rejected** if:

1. **Code has syntax errors** (ESLint fails)
2. **Build fails** (`npm run build` fails)
3. **Commit message doesn't follow convention** (Commitlint fails)
4. **Files contain `console.log` or `debugger`** (ESLint rule)

### Example: Rejected Commit

```bash
$ git commit -m "added stuff"

❌ Commit message does not follow conventions!

📝 Format: <type>(<scope>): <subject>

Examples:
  feat(landing): Add color palette generator
  fix(newsletter): Validate email before submission
```

---

## 🎨 Prettier Configuration

Location: `.prettierrc.js`

**Settings:**

- Semi-colons: Yes
- Single quotes: Yes
- Print width: 100 characters
- Tab width: 2 spaces
- Trailing commas: ES5
- End of line: LF (Unix)

**File-specific rules:**

- `.njk` files: 120 char width, HTML parser
- `.json` files: 80 char width
- `.md` files: Preserve wrapping, 100 char width

**Ignored files:** (`.prettierignore`)

- `node_modules/`
- `_site/`
- `docs/research/` (preserve original formatting)

---

## 🔍 ESLint Configuration

Location: `.eslintrc.js`

**Key Rules:**

- ✅ Use `const` by default, not `var`
- ✅ No `console.log` (use `console.warn` or `console.error`)
- ✅ No `debugger` statements
- ✅ Always use `===` instead of `==`
- ✅ Use curly braces for all control statements
- ✅ Single quotes for strings
- ✅ Semicolons required

---

## 📝 Manual Commands

You can run these checks manually:

```bash
# Format all files
npm run format

# Check formatting without changing files
npm run format:check

# Lint JavaScript
npm run lint:js

# Lint Markdown
npm run lint:md

# Run all linters
npm run lint

# Build site
npm run build

# Run all checks (lint + format check + build)
npm test
```

---

## 🔄 Bypassing Hooks (Emergency Only)

**⚠️ Not recommended!** But if you absolutely need to:

```bash
# Skip pre-commit and commit-msg hooks
git commit --no-verify -m "emergency fix"

# Or use the shorthand
git commit -n -m "emergency fix"
```

**When to use:**

- Critical production hotfix that needs to go out immediately
- Temporary work-in-progress commit on a feature branch
- You'll immediately follow up with a proper commit

**When NOT to use:**

- "I don't want to fix my code" ❌
- "The linter is annoying" ❌
- "I'm in a hurry" ❌

---

## 🎓 Best Practices

### 1. Commit Early, Commit Often

The hooks are fast! Don't wait to commit until you have a lot of changes.

### 2. Review Auto-Formatted Changes

Prettier might change your formatting. Review with `git diff` before committing.

### 3. Fix ESLint Errors, Don't Disable Rules

If ESLint catches something, it's usually for a good reason.

### 4. Use Descriptive Commit Messages

The hooks ensure format, but YOU ensure meaning. Be descriptive!

### 5. Test Locally First

Run `npm run build` frequently during development.

---

## 🐛 Troubleshooting

### Pre-commit hook fails with "command not found"

```bash
# Reinstall dependencies
npm install

# Make hooks executable
chmod +x .husky/pre-commit .husky/commit-msg .husky/post-commit
```

### Prettier keeps changing files I don't want changed

Add them to `.prettierignore`

### ESLint shows errors I don't agree with

Discuss with team or document why in `.eslintrc.js` before disabling rules

### Commit message keeps getting rejected

Check the format carefully:

- Type must be lowercase
- Must include a scope in parentheses
- No period at the end
- Subject should be imperative ("Add" not "Added")

### Build fails but works in dev server

Different process! `npm run build` catches issues dev server might miss.

---

## 📊 Quality Metrics

With this system in place, you ensure:

- ✅ **100% formatted code** (Prettier)
- ✅ **Zero lint errors in production** (ESLint)
- ✅ **Consistent commit history** (Commitlint)
- ✅ **No broken builds** (Pre-commit build check)
- ✅ **Clean documentation** (Markdownlint)

---

## 🎯 Benefits

### For You

- Catches errors before they reach GitHub
- Enforces consistency automatically
- Saves time in code review
- Professional-looking commits

### For the Team

- Easy to review changes (consistent formatting)
- Clear commit history (conventional commits)
- Confidence in every commit (all checks passed)
- Reduced merge conflicts (consistent formatting)

### For the Project

- Higher code quality
- Better maintainability
- Professional appearance
- Easier onboarding

---

## 🔄 Updating Configuration

### Add New File Types to Format

Edit `.prettierrc.js` overrides section

### Add New ESLint Rules

Edit `.eslintrc.js` rules section

### Add New Commit Scopes

Edit `commitlint.config.js` scope-enum

### Add New Commit Types

Edit `commitlint.config.js` type-enum (rarely needed)

---

## 📚 Related Documentation

- `.github/GIT_WORKFLOW.md` - Comprehensive Git workflow
- `.github/GIT_QUICK_REFERENCE.md` - Quick command reference
- `CONTRIBUTING.md` - Contributing guidelines
- `README.md` - Project overview

---

## ✨ Summary

Every commit in this project is:

1. ✅ **Automatically formatted** (Prettier)
2. ✅ **Linted for errors** (ESLint, Markdownlint)
3. ✅ **Validated to build** (Eleventy)
4. ✅ **Following conventions** (Commitlint)
5. ✅ **Documented with feedback** (Post-commit hook)

**Result: Professional, high-quality code in every commit!** 🎉

---

**Remember:** These tools are here to help, not hinder. They catch issues early, save debugging time, and make collaboration smoother. Embrace them! 💪
