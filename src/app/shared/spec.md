# shared 目录会存在于各个目录结构里，已共享当前目录下的一些组件或服务

## 不含service的Moduel或component, directive, pip
* 此目录存放的是共享的feature module，一般不包含service，并在shared.module.ts中import/export

## 含有service的Module或单独的service，不须要全局服务的singleton
* 为了精简目录，共享的一些模块若含有自己的service也放在此处，但不需要再shared.module.ts当中import/export，这些module只是存放在这里供app单独导入使用
