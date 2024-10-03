# Node build and run environment
FROM node:18 as builder
RUN mkdir /usr/src/app
# ARG GIT_TOKEN
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY . /usr/src/app
RUN npm install
# RUN rm -f .npmrc
EXPOSE 3000
RUN npm run build
CMD ["node", "./build/index.js"]

# # Use for static prod
# # build environment
# FROM node:16.7 as builder
# RUN mkdir /usr/src/app
# WORKDIR /usr/src/app
# ENV PATH /usr/src/app/node_modules/.bin:$PATH
# COPY . /usr/src/app
# RUN npm install
# RUN npm run build

# # production environment
# FROM nginx:1.13.9-alpine
# RUN rm -rf /etc/nginx/conf.d
# RUN mkdir -p /etc/nginx/conf.d
# COPY ./default.conf /etc/nginx/conf.d/
# COPY --from=builder /usr/src/app/build /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]