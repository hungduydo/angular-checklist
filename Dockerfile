# base image
FROM node:11.15.0 as build

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock
RUN yarn install

# add app and build
COPY . /app
RUN ng build --output-path=dist
RUN pwd && ls /app && ls /app/dist

# start app
# base image
FROM nginx:1.16.0-alpine

# copy artifact build from the 'build environment'
COPY ./dist/browser /usr/share/nginx/html
COPY --from=build /app/dist /usr/share/nginx/html

# expose port 80
EXPOSE 80

# run nginx
CMD ["nginx", "-g", "daemon off;"]