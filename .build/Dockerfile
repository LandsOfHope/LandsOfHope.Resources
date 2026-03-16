FROM oven/bun:latest AS build

WORKDIR /build/.build
COPY .build/package.json .

ARG BUILD_VERSION
RUN bun install --production

COPY .build/* ./.build/.

RUN bun .build/generate_chat_colors_css.mjs
RUN bun build ./.build/analytics.js --target browser --minify --outdir /build/js/current

# FROM python:3.8 as prod

# RUN mkdir -p /srv/www
# WORKDIR /srv/www

# COPY . .
# COPY --from=build /build/output/*.js ./js/current/.
# COPY --from=build /build/css/chat/chat-colors.css ./css/chat/chat-colors.css

# EXPOSE 80
# CMD ["python", "-m", "http.server", "80"]

FROM httpd:2.4.62-alpine AS prod

COPY . /usr/local/apache2/htdocs/.
# COPY .build/httpd.conf /usr/local/apache2/conf/httpd.conf
COPY --from=build /build/js/current/* /usr/local/apache2/htdocs/js/current/.
COPY --from=build /build/.build/css/chat/chat-colors.css /usr/local/apache2/htdocs/css/chat/chat-colors.css