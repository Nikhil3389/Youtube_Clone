FROM ubuntu
RUN apt-get update
RUN apt-get -y install apache2
EXPOSE 80 # Expose port 80 to allow external access
RUN service apache2 start
RUN apt-get -y install git
RUN git clone https://github.com/Nikhil3389/Youtube_Clone.git app
RUN npm install
RUN npm run build 
RUN cp -r /app/build /var/www/html/
ENTRYPOINT apachectl -D FOREGROUND
ENV name <Devops>