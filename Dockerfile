FROM node:22.1.0-alpine3.18

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .


EXPOSE 8083

ENV INSTRUCTOR_GRPC_PORT=8083

ENV MONGO_URI="mongodb+srv://asifasifpsps:CwCCMQj3h72bSVZr@cluster0.wu2l8x0.mongodb.net/InstructorService?retryWrites=true&w=majority&appName=Cluster0"

ENV JWT_SECRET=GeniusGrid123


CMD [ "npm", "start" ]