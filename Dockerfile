#FROM node:14



#WORKDIR /usr/local/slice
#COPY ./ /usr/local/slice

#RUN npm install 

#CMD ["npm", "start"]

FROM node:12-alpine
 WORKDIR /slice
 COPY . .
 RUN npm install 
 CMD ["npm", "start"]