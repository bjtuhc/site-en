###publish process:
in `./publish`:
```
scp -i ~/.ssh/jingchi_ec2_singapore.pem -r dist ubuntu@13.228.102.2:~/www
```

in ec2:
```
edit nginx.conf: sudo nano /etc/nginx/nginx.conf
sudo service nginx restart
```
