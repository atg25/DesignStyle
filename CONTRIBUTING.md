# Contributing to MCM Design Hub

Thank you for contributing! This guide will help you maintain our code quality standards.

## 🎯 Commit Message Format

We use [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>
```

### Types:

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Formatting (not CSS)
- `refactor`: Code restructuring
- `perf`: Performance improvement
- `test`: Tests
- `chore`: Maintenance

### Scopes:

- `landing`, `learn`, `explore`, `practice`
- `components`, `layout`, `styles`
- `config`, `deploy`, `docs`

### Examples:

```bash
feat(landing): Add color palette generator
fix(newsletter): Validate email before submission
docs(readme): Update installation instructions
style(landing): Format JavaScript with Prettier
```

## 🔄 Workflow

1. **Pull latest changes**

   ```bash
   git pull origin main
   ```

2. **Make atomic commits** (one logical change each)

   ```bash
   git add <specific-file>
   git commit -m "feat(scope): description"
   ```

3. **Test before pushing**

   ```bash
   npm run build
   npm start
   ```

4. **Push to GitHub**
   ```bash
   git push origin main
   ```

## ✅ Pre-Commit Checklist

- [ ] One logical change per commit
- [ ] Descriptive commit message
- [ ] Reviewed diff (`git diff --staged`)
- [ ] Build succeeds (`npm run build`)
- [ ] No debug code or comments
- [ ] No unrelated files staged

## 🚫 Never Commit

- `node_modules/`
- `_site/`
- `.DS_Store`
- `*.log`
- `.env` files

## 📖 Full Guide

See [GIT_WORKFLOW.md](.github/GIT_WORKFLOW.md) for detailed guidelines.
