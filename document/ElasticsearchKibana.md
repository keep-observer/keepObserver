# Elasticsearch+kibana
    1.Elasticsearch and Kibana installation
    2.Query the log and filter the index

## installation

Install with Docker, any version 6.5+ will do, please note that the es version and the Kibana version must be the same

**Note: The reason is that homebrew does not come with XPack due to oss protocol, and APM relies on the graphical display of data provided by XPack, which cannot be installed separately in versions after 6.5**


### Install and start es

1. Download ES image
 `docker pull elasticsearch:6.8.1`

2. View the image ID
`docker images` Find ElasticSearch :6.8.1 images ID

3. Start the image and configure the port
`docker run -it --name ${The image ID obtained in the previous step} -d -p 9200:9200 -p 9300:9300 -p 5601:5601 ${The image ID obtained in the previous step}`

4. Check to see if the container started successfully
`docker ps`,Access ElasticSearch port 9200. If you can successfully access it and see a JSON snippet of ES details, it indicates successful startup


### Install and start Kibana

1.Download the Kibana image，**Note that it must be consistent with the ES version** `docker pull kibana:6.8.1`

2. View the image ID
`docker images`

3.Start the kibana
`docker run -it -d -e ELASTICSEARCH_URL=http://127.0.0.1:9200 --name ${Kibana: image ID of 6.8.1} --network=container:${Find ElasticSearch :6.8.1 image ID}  ${Kibana: image ID of 6.8.1}`

4.Visit kiaban
http://you a IP:5601/app/kibana

### Install the APM service

Visit Kiaban to see the APM installation and usage steps

Access after installation
`vi apm-server.yml`

Modify APM external services
`
rum : 
    enabled: true
`


## Report KeepObserverKibanaApmReport index table

###


1. KeepObserverKibanaApmReport provide api

```typescript
    setUserInfo({
        id: string;       
        username: string;
        email: string;
    })
    id =  context.user.id
    username = context.user.username
    email = context.user.email
    /*config*/
    serviceName =  context.service.name
    agentVersion = context.service.agent.version
```

2. keepObserverNetwork
```typescript
    transactipn.type = `network`
    context.tags.method
    context.tags.statusType
    context.tags.type   			            
    context.tags.url    			           
    context.tags.requestHead     	               
    context.tags.responseHead                     
    context.tags.params  			               
    context.tags.body      		            
    context.tags.status      	               
    context.tags.startTime     	                
    context.tags.endTime       	           
    context.tags.costTime      	            
    context.tags.response			                
    context.tags.responseType   	            
    context.tags.timeout                      
    context.tags.errorContent                     
    context.tags.isTimeout                 
    context.tags.isError
```

3.  keepObserverLog
```typescript
    transactipn.type = `log`
    context.tags.type
    context.tags.data
```

4.  KeepObserverHtmlElementActive
```typescript
    transactipn.type = `htmlElementActive`
    context.tags.type
    context.tags.title
    context.tags.xPath
    context.tags.value
```

5.  KeepObserverMiddlewareKibanaApmTrack
```typescript
    transactipn.type = `kibanaApmTrack`
    //log
    context.tags.type
    context.tags.data
    //network
    context.tags.method
    context.tags.url
    context.tags.params
    context.tags.body
    context.tags.status
    context.tags.startTime
    context.tags.endTime
    context.tags.costTime
    context.tags.response
    context.tags.timeout
    //htmlElementActive
    context.tags.type
    context.tags.title
    context.tags.xPath
    context.tags.value
    //error
    context.tagsmessage
    context.tagsfilename
```