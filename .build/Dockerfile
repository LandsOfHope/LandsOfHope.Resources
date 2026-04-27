FROM oven/bun:latest AS build

WORKDIR /build/.build
COPY .build/package.json .

ARG BUILD_VERSION
RUN bun install --production

COPY .build/* ./.build/.

RUN bun .build/generate_chat_colors_css.ts
RUN bun build ./.build/analytics.js --target browser --minify --outdir /build/js/current

FROM httpd:2.4.62-alpine AS prod

COPY . /usr/local/apache2/htdocs/.
COPY --from=build /build/js/current/* /usr/local/apache2/htdocs/js/current/.
COPY --from=build /build/.build/css/chat/chat-colors.css /usr/local/apache2/htdocs/css/chat/chat-colors.css