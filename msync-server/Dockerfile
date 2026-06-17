FROM rust:1.96-slim-trixie
ARG APP_NAME=msync-server
WORKDIR /usr/src/$APP_NAME
COPY . .

RUN cargo install --path .

CMD ["$APP_NAME"]