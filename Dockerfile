# # Node build and run environment
# FROM node:18 as builder
# RUN mkdir /usr/src/app
# # ARG GIT_TOKEN
# WORKDIR /usr/src/app
# ENV PATH /usr/src/app/node_modules/.bin:$PATH
# COPY . /usr/src/app
# RUN npm install
# # RUN rm -f .npmrc
# EXPOSE 3000
# RUN npm run build
# CMD ["node", "./build/index.js"]

# Use for static prod
FROM node:22-slim as builder
ARG GIT_TOKEN
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY . .
RUN npm install
RUN npm run build

#env
# FROM flashspys/nginx-static
# COPY --from=builder /app/build /static
# FROM socialengine/nginx-spa:latest
FROM nginx:stable-alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]