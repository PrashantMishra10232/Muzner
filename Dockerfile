# Uses node version 22 as our base image
FROM node:22

# Goes to the app directory (think of it as a cd terminal command)
WORKDIR /app

# Enable Corepack and active pnpm
RUN corepack enable
RUN corepack prepare pnpm@latest --activate

# Add pnpm to PATH
ENV PNPM_HOME="/pnpm"
RUN PATH="$PNPM_HOME:$PATH"


# copy package.jsom and package-lock.json(if available)
COPY package.json pnpm-lock.yaml ./

# Install app dependencies
RUN pnpm install --frozen-lockfile

#copy the rest of the app into the container
COPY . .

# Build the Next.js app
RUN pnpm build

#Expose default Next.js port
EXPOSE 3000

# Start the Next.js app (runs next start)
CMD ["pnpm", "start"]