FROM node:22-alpine AS build

USER root

RUN npm install -g pnpm

RUN mkdir -p /app && chown -R node:node /app

ARG VITE_GOOGLE_AUTH_CLIENT_ID
ARG VITE_BACKEND_URL
ARG VITE_WEBSOCKET_URL
ARG VITE_WEBSOCKET_PATH

ENV VITE_GOOGLE_AUTH_CLIENT_ID=$VITE_GOOGLE_AUTH_CLIENT_ID
ENV VITE_BACKEND_URL=$VITE_BACKEND_URL
ENV VITE_WEBSOCKET_URL=$VITE_WEBSOCKET_URL
ENV VITE_WEBSOCKET_PATH=$VITE_WEBSOCKET_PATH

ENV HUSKY=0
ENV NODE_ENV=build

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

COPY . .

RUN pnpm run build

# ---

FROM nginx:stable-alpine AS prod

COPY --chown=nginx:nginx --from=build /app/dist /app/dist
COPY --chown=nginx:nginx nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
