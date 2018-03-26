FROM node:slim

RUN apt-get update && apt-get install -y \
  bzip2 \
  libfontconfig1 \
&& rm -rf /var/lib/apt/lists/*
