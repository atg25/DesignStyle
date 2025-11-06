#!/bin/bash
#
# Setup Git workflow tools for MCM Design Hub
# Run: bash .github/setup-git-workflow.sh

echo "🎯 Setting up Git workflow tools..."

# Set commit message template
echo "📝 Setting up commit message template..."
git config commit.template .gitmessage
echo "✅ Commit template configured"

# Configure Git to use better diff algorithm
echo "🔍 Configuring better diff algorithm..."
git config diff.algorithm histogram
echo "✅ Diff algorithm set to histogram"

# Enable automatic color in Git output
echo "🎨 Enabling colored output..."
git config color.ui auto
echo "✅ Color output enabled"

# Set up helpful aliases
echo "⚡ Setting up Git aliases..."
git config alias.s "status -s"
git config alias.st "status"
git config alias.cm "commit -m"
git config alias.ca "commit --amend"
git config alias.can "commit --amend --no-edit"
git config alias.lg "log --oneline --graph --all --decorate -10"
git config alias.last "log -1 HEAD --stat"
git config alias.d "diff"
git config alias.ds "diff --staged"
git config alias.unstage "reset HEAD --"
git config alias.undo "reset --soft HEAD~1"
echo "✅ Git aliases configured"

# Install pre-commit hook (optional)
read -p "📋 Install pre-commit hook? (checks build before commit) [y/N]: " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    if [ -f .github/hooks/pre-commit.sample ]; then
        cp .github/hooks/pre-commit.sample .git/hooks/pre-commit
        chmod +x .git/hooks/pre-commit
        echo "✅ Pre-commit hook installed"
    else
        echo "⚠️  Pre-commit hook sample not found"
    fi
else
    echo "⏭️  Skipped pre-commit hook"
fi

echo ""
echo "✨ Git workflow setup complete!"
echo ""
echo "📚 Quick reference:"
echo "  git s               # Short status"
echo "  git cm \"message\"    # Quick commit"
echo "  git lg              # Pretty log"
echo "  git ds              # Diff staged"
echo "  git unstage <file>  # Unstage file"
echo "  git undo            # Undo last commit (keep changes)"
echo ""
echo "📖 See .github/GIT_WORKFLOW.md for full guide"
echo "📖 See CONTRIBUTING.md for commit conventions"
