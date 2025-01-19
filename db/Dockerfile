# Dockerfile for PostgreSQL  
FROM postgres:13  
ENV POSTGRES_USER=user  
ENV POSTGRES_PASSWORD=password  
ENV POSTGRES_DB=webshop  
COPY init.sql /docker-entrypoint-initdb.d/  