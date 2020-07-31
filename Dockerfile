FROM nginx:alpine
LABEL maintainer="Paul Glezen <pglezen@isab.lacounty.go>"
LABEL gov.lacounty.isab.system=cjis
LABEL gov.lacounty.isab.app=docs
RUN apk update  &&  apk upgrade  &&  apk add vim

COPY default.conf /etc/nginx/conf.d/default.conf
COPY build/ /usr/share/nginx/html/
