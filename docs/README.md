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

mysql
crmeb
123456

redis
123456

http://82.157.54.206:8011/
admin
admin123

http://82.157.54.206:8011/admin/
http://82.157.54.206:8011/static/html/pc.html
```

```shell
curl --verbose -H "Origin: http://localhost:9090" -H "Access-Control-Request-Method: POST" -X OPTIONS https://friday-fe.suomitek.com/admin
curl --verbose -H "Origin: http://localhost:9527" -H "Access-Control-Request-Method: POST" -X OPTIONS https://friday-fe.suomitek.com/admin
```