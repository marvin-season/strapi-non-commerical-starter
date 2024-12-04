## strapi cms
references [strapi official website](https://docs.strapi.io/dev-docs/intro)
## setup
```shell
pnpm run setup
```
## startup


**1st step: install the dep** 
```shell
pnpm install
```

**2ed step: 环境变量**

please copy the `.env.example` to `.env`. The content of .env customized by yourself!

**3rd: database**
+ **sqlite 默认**
+ **pg 可选**
```shell
docker-compose up -d
```
+ mysql ...


**4th: develop**
```shell
pnpm run develop
```


## import bankup demo if you need!

```shell
pnpm run strapi-import
```
+ username: admin@admin.xyz
+ password: Aabc#123456