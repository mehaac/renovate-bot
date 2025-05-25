module.exports = {
  platform: 'github',
  token: process.env.GITHUB_TOKEN,
  autodiscover: false,
  repositories: [
    'mehaac/summary_v3',
  ],
  dryRun: false,
  logLevel: 'info',
  onboarding: true,
  requireConfig: true,
  onboardingConfig: {
    extends: ['config:recommended']
  }
}; 
