# demo-microservice
A small demo Nodejs backend microservice that responds to queries on an endpoint(s) and uses a database to persist information (MongoDB).

Showcasing an example - modelling storing document(s) with attributes like title, description, author. 

### Summary of stuff done
* Created a sample small nodejs app that reads/writes to Mongo
  * It showcases and [models](https://github.com/nadeemnazeer/demo-microservice/blob/master/model/document.model.js) an example entity: Document with attributes title, body, author.
  * Uses the service repository pattern.
  * Uses Express web framework. 
  * Uses the [Environment variables](https://github.com/nadeemnazeer/demo-microservice/blob/master/.env) to store and make configurations flexible.
* [Dockerized](https://github.com/nadeemnazeer/demo-microservice/blob/master/Dockerfile) the above service then
  * Created a [docker compose yaml](https://github.com/nadeemnazeer/demo-microservice/blob/master/docker-compose.yml) for multi container app including Mongo that above service uses - by using its name as DNS.
  * Added a docker data volume to persist the data.
* Created a [bash script](https://github.com/nadeemnazeer/demo-microservice/blob/master/scripts/docker-push) that builds and pushes the miscroservice to [docker hub](https://hub.docker.com/repository/docker/nadeemnazeer/demo-microservice).
* Using free tier [Travis](https://app.travis-ci.com/) as CICD tool, created a [.travis.yaml](https://github.com/nadeemnazeer/demo-microservice/blob/master/.travis.yml) configuration that
  * Invokes the above[bash script](https://github.com/nadeemnazeer/demo-microservice/blob/master/scripts/docker-push) of above step to build and push the latest image to docker hub on any commit to master branch.
  * Again using Environment variables here to secure the sensitive data like credentials to push to docker hub.
* Created a free tier VM instance over google cloud that hosts the above app:
  * Added [one more hook to Travis file](https://github.com/nadeemnazeer/demo-microservice/blob/master/.travis.yml#L14) that ssh's to this server and pulls the latest and fires the app using docker-compose on any commit to the master branch.
  * Exposes it on port 80.
### How to run and test the pipeline:
* Simply push any commit to master branch, or to be certain to see changes live on a hosted app over google cloud instance [(34.125.5.59)](http://34.125.5.59/), update the version number in  package.json file and push to [master](https://github.com/nadeemnazeer/demo-microservice/tree/master).
  * Docker hub will udpate last pushed timestamp on the [repository](https://hub.docker.com/repository/docker/nadeemnazeer/demo-microservice).
  * The hosted app has an [index url](http://34.125.5.59/) that reads the version from [package.json](https://github.com/nadeemnazeer/demo-microservice/blob/master/package.json#L3); it will show the updated version no.
    ```
    API Version: 1.1.0
    ``` 

### How to POST/GET a request
```
curl --location --request POST 'http://34.125.5.59/document' \
--header 'Content-Type: application/json' \
--data-raw '{
 "document" : 
    {"title": "Doc 2",
     "body": "Sample body.....",
     "author": "nadeem"
    }
}'
```
```
curl --location --request GET 'http://34.125.5.59/documents'
```

### How to test locally
```
docker-compose build
docker-compose up
```
