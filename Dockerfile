FROM groovy:latest

# Install necessary dependencies
RUN apt-get update && apt-get install -y \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Expose port for web interface
EXPOSE 8080

# Set up a simple web server
WORKDIR /app
COPY . /app

# Start the Groovy console
CMD ["groovyConsole"]
