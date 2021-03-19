# Nginx 使用

## 例子
### 反向代理
```conf
server {
	listen 443 ssl http2; 
	listen [::]:443 ssl http2;
	server_name iamazing.cn www.iamazing.cn; 
	ssl on;
	gzip on;

	location / {
		proxy_pass http://localhost:3000;
		proxy_set_header Upgrade $http_upgrade;
		proxy_set_header Connection 'upgrade';
		proxy_set_header Host $host;
		proxy_cache_bypass $http_upgrade;
	}
}
```

## 文件服务器
```conf
server {
        listen 80 default_server;
        listen [::]:80 default_server;
        server_name www.domain.com;
        root  /path/to/share; 
        location / {
                autoindex on;
                autoindex_exact_size on;
                autoindex_localtime on;
        }
}
```

### 托管 React / Vue 应用
``` conf
server {
    listen  80;
    server_name	www.domain.com;
    location / {
        try_files $uri /index.html
    }
}

server {
  listen 80;
  server_name  your.domain.com;

  location / {
    alias /path/to/dir/of/docs/;
    index index.html;
  }
}
```

## 参考
[Nginx 快速搭建文件服务器](https://nadp.me/2020/08/07/nginx_file_server/)