```shell
cd docker
sudo docker-compose up -d

http://82.157.54.206:8011/
```

```shell
curl --verbose -H "Origin: http://localhost:9090" -H "Access-Control-Request-Method: POST" -X OPTIONS https://friday-fe.suomitek.com/admin
curl --verbose -H "Origin: http://localhost:9527" -H "Access-Control-Request-Method: POST" -X OPTIONS https://friday-fe.suomitek.com/admin
```