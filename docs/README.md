```shell
cd docker
sudo docker-compose up -d
sudo docker-compose ps

docker exec -it crmeb_php bash
chown -R www-data:www-data public/
chown -R www-data:www-data runtime/
chown -R www-data:www-data backup
chown -R www-data:www-data .env
chown -R www-data:www-data .version
chown -R www-data:www-data .constant

http://82.157.54.206:8011/
```

```shell
curl --verbose -H "Origin: http://localhost:9090" -H "Access-Control-Request-Method: POST" -X OPTIONS https://friday-fe.suomitek.com/admin
curl --verbose -H "Origin: http://localhost:9527" -H "Access-Control-Request-Method: POST" -X OPTIONS https://friday-fe.suomitek.com/admin
```