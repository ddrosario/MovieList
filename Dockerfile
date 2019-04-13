FROM node
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 1337
CMD ["npm", "start"]

