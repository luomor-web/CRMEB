```shell
cd docker
sudo docker-compose up -d
```

```shell
curl --verbose -H "Origin: http://localhost:9090" -H "Access-Control-Request-Method: POST" -X OPTIONS https://friday-fe.suomitek.com/admin
curl --verbose -H "Origin: http://localhost:9527" -H "Access-Control-Request-Method: POST" -X OPTIONS https://friday-fe.suomitek.com/admin
```