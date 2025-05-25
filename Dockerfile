FROM renovate/renovate:latest

# Use an OCI-compliant label to identify the source repository
LABEL org.opencontainers.image.source="https://github.com/yourusername/renovate-bot"

# Copy configuration file
COPY config.js /usr/src/app/config.js

# Set working directory
WORKDIR /usr/src/app

# The entrypoint is already set in the base image 
