# 利用优选域名或优选IP提高访问网站速度，方法如下



# 方法一，利用cloudflare-workers，可用在网站提速
- 缺点，消耗`Workers 和 Pages` 请求，免费用户每天10w
## 打开github项目里的“1无脑即可使用.js”文件，全选复制

- 项目地址：
https://github.com/jc-lw/cloudflare-workers-pages


## 打开 *cloudflare* ,找到 `Workers 和 Pages `点击
![image.png](https://rin.vcrr.us.kg/images/f9b1372d9a76c380acd993ec4c3db70ce8f1dd00.png)
- 点击创建
![image.png](https://rin.vcrr.us.kg/images/c1b47601325dce3533dac82c8e238c7e91d5f71e.png)

![image.png](https://rin.vcrr.us.kg/images/09e9adac44654a7c746713f46832853fd9853fdd.png)


- 名字自定义，然后点击`部署`
![image.png](https://rin.vcrr.us.kg/images/062f7b8f0d78b4101a31395cc7c0776526b3e659.png)

- 点击`编辑代码`
![image.png](https://rin.vcrr.us.kg/images/16f1f4d06a0fae92be573ab830db010542bf19bb.png)

## 把github项目里的“1无脑即可使用.js”文件，复制粘贴到cloudflare workers项目里，全部替换上去，如图
![image.png](https://rin.vcrr.us.kg/images/8c6440b5501872084ff5ab7744234836a1f8280c.png)

- 项目地址 `telegraph-image-7qp.pages.dev`
![image.png](https://rin.vcrr.us.kg/images/52da7311ce50ef6f68591ca44b77b4133326cb8a.png)

![image.png](https://rin.vcrr.us.kg/images/00adf9e63faeac4a2cfd42a7ccf8750f275bc3af.png)

-确定没问题后，点击`部署`

![image.png](https://rin.vcrr.us.kg/images/c4af7e80dbd4429d6d38a175d52952ef6c6bd5d4.png)

## 找到workers里的`设置`，域和路由，点击`添加`
![image.png](https://rin.vcrr.us.kg/images/091ee22cb083dae725ebe28ece3e16f3ecef7b8f.png)

- 选择路由
![image.png](https://rin.vcrr.us.kg/images/154a70e67a9e70bdbd401316545cfcf62bc9f094.png)

- 区域选择要提速的域名，路由 www.lwxpz.ggff.net 等等,没问题后，右下角添加路由
![image.png](https://rin.vcrr.us.kg/images/e25fd1cfc8dd6970f5642e3a74283b3c11026f69.png)
## 域名lwxpz.ggff.net DNS解析记录
- CNAME-二级前序   优选域名/优选IP 没问题后点击添加
![image.png](https://rin.vcrr.us.kg/images/d4725a445deae28ef82b36d66dffa6ef54eca313.png)


- 选择访问 `www.lwxpz.ggff.net` 既可打开网站
![image.png](https://rin.vcrr.us.kg/images/48064ddbb69ec885e191f62479558046749aa5b3.png)

# 方法二，利用国际版华为云提速网站
-123



