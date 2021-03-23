# Curl 使用笔记

## 例子
```sh
# GET 请求
curl "https://httpbin.org/get"
curl "https://httpbin.org/get/query?a=1&b=2"

# 提交表单数据
curl -X POST -d "a=1&b=2" httpbin.org/post
# 提交 JSON 数据
curl -H "Content-Type: application/json" -X POST  --data '{"a":"1","b":"2"}' httpbin.org/post

# 携带 Cookie
curl --cookie "name=xxx" www.example.com

# 显示 http response 头信息与返回内容
curl -i https://httpbin.org/get
# 只显示 http response 头信息
curl -I https://httpbin.org/get

# 显示一次 http 通信的整个过程
curl -v https://httpbin.org/get
```
