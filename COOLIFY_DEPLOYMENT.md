# Deploying to Coolify

Follow these steps to deploy your Renovate bot to Coolify:

## 1. Push to GitHub

```bash
# After creating a repository on GitHub
git remote add origin https://github.com/yourusername/renovate-bot.git
git branch -M main
git commit -m "Initial commit"
git push -u origin main
```

## 2. Configure Coolify

1. Log in to your Coolify dashboard
2. Create a new service:
   - Click "Create New Resource"
   - Select "Service"
   - Choose "Docker"

3. Configure the service:
   - Repository: Connect to your GitHub repository
   - Branch: main
   - Dockerfile path: ./Dockerfile
   - Container port: 80 (or leave empty as Renovate doesn't expose ports)
   - Build arguments: None required

4. Set environment variables:
   - `GITHUB_TOKEN`: Your GitHub Personal Access Token with repo access
   - Optional additional variables:
     - `LOG_LEVEL`: debug (for troubleshooting)
     - `RENOVATE_AUTODISCOVER`: true

5. Schedule a cron job in Coolify:
   - Configure your service to run on a schedule (e.g., once per hour)
   - This ensures Renovate checks for updates regularly

## 3. Verify Deployment

1. Check Coolify logs to ensure the bot is running correctly
2. Look for onboarding PRs in your GitHub repositories
3. Renovate will create a `renovate.json` file in repositories during onboarding

## 4. Configure Repositories

For each repository you want Renovate to manage:
1. Accept the onboarding PR
2. Customize the `renovate.json` file as needed

## 5. Troubleshooting

If you encounter issues:
1. Check Coolify logs
2. Ensure your GitHub token has sufficient permissions
3. Verify network connectivity between Coolify and GitHub 
