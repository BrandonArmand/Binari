FROM node:12.18.3-buster


#copy the content of current directory to /app inside container
COPY . /Binari

WORKDIR /Binari 

RUN npm install
RUN npm install -g serve 

RUN npm run build 

EXPOSE 5000

ENTRYPOINT [ "serve", "-s", "build/" ]