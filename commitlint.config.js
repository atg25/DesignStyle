module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // New feature
        'fix', // Bug fix
        'docs', // Documentation only
        'style', // Code style/formatting (not CSS)
        'refactor', // Code restructuring
        'perf', // Performance improvement
        'test', // Adding tests
        'chore', // Maintenance tasks
        'build', // Build system changes
        'ci', // CI/CD changes
        'revert', // Revert previous commit
      ],
    ],
    'scope-enum': [
      2,
      'always',
      [
        'landing',
        'learn',
        'explore',
        'practice',
        'components',
        'layout',
        'styles',
        'config',
        'deploy',
        'docs',
        'workflow',
        'contributing',
        'deps',
      ],
    ],
    'subject-case': [2, 'never', ['start-case', 'pascal-case', 'upper-case']],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'scope-case': [2, 'always', 'lower-case'],
  },
};
