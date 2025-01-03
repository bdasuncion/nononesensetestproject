FROM node

#RUN npm --g express

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 80

ENV MONGODB_USERNAME=bryan
ENV MONGODB_PASSWORD=password

VOLUME ["/app/node_modules"]
VOLUME ["/app/dist"]

#RUN ["npm", "run", "build"]
CMD ["npm", "run", "start"]
#CMD ["npm", "run", "dev"]
#CMD ["bash"]