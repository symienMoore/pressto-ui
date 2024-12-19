FROM ubuntu:latest
LABEL authors="symienmoore"

ENTRYPOINT ["top", "-b"]