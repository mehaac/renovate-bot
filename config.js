module.exports = {
  platform: 'github',
  token: process.env.GITHUB_TOKEN,
  autodiscover: true,
  dryRun: false,
  logLevel: 'info',
  onboarding: true,
  requireConfig: true,
  onboardingConfig: {
    extends: ['config:recommended']
  }
}; 
