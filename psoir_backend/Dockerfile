FROM maven:latest
WORKDIR /app

COPY . ./

RUN mvn clean install -DskipTests

ENTRYPOINT ["mvn","spring-boot:run"]


# ARG JAR_FILE=target/*.jar
# COPY ${JAR_FILE} app.jar
# ENTRYPOINT ["java","-jar","/app.jar"]