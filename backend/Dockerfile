# Use a lightweight Java image
FROM eclipse-temurin:17-jdk-alpine

# Copy your code to the container
COPY . .

# Make the Maven wrapper executable
RUN chmod +x mvnw

# Build the app (skip tests to save time)
RUN ./mvnw clean package -DskipTests

# Tell Render to run the JAR file
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "target/backend-0.0.1-SNAPSHOT.jar"]