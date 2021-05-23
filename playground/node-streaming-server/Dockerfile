FROM node:14

RUN useradd -m app

USER app

# Copy content
COPY --chown=app . /home/app/server

# Define WorkDIR
WORKDIR /home/app/server

# Expose PORT
EXPOSE 3658

# Install dependencies
RUN npm install && \
    mkdir ./.log && touch ./.log/out.log


CMD ["bash", "-c", "npx pm2 --no-daemon start index.js 1>/dev/null 2>/dev/null"]