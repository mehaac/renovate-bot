# Renovate Bot Self-Hosted

This repository contains configuration for running a self-hosted Renovate bot using Coolify.

## Prerequisites

- GitHub account with Personal Access Token (PAT)
- Coolify server
- Git repositories that you want to manage with Renovate

## Setup Instructions

### 1. GitHub Personal Access Token

Create a GitHub Personal Access Token with the following permissions:
- `repo` (Full control of private repositories)
- `workflow` (Optional: needed for GitHub Actions)

### 2. Deploy to Coolify

1. Create a new service in Coolify
2. Connect this repository
3. Set the following environment variables:
   - `GITHUB_TOKEN`: Your GitHub Personal Access Token
   
### 3. Configuration

Adjust `config.js` according to your needs. See [Renovate documentation](https://docs.renovatebot.com/) for more options.

## Running Locally for Testing

```bash
# Set your GitHub token
export GITHUB_TOKEN=your_github_token

# Run with Docker Compose
docker-compose up
``` 
