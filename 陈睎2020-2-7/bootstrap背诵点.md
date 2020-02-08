[[toc]]

# Bootstrap4.4介绍
1. 全球最受欢迎的前端组件库
2. 用于开发响应式布局、移动设备优先的 WEB 项目
3. 基于JQuery

# Bootstrap4.4的安装
1. 本地安装
    官网：https://v4.bootcss.com/
2. CDN引用
    ```html
    <!-- Bootstrap4.4 CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css">
    <!-- jQuery3.4.1 -->
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.min.js"></script>
    <!-- popper1.16 -->
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
    <!-- Bootstrap4.4 javascript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js"></script>
    ```
3. NPM安装
    ```
    npm install bootstrap
    npm i jquery
    npm i @popperjs/core
    ```

# 栅格系统
## 视口尺寸划分
视口类型|标识|尺寸
:-:|:-:|:-:
超小视口|xs|视口宽 < 576px
小视口|sm|视口宽 ≥ 576px
中等视口|md|视口宽 ≥ 576px
大视口|lg|视口宽 ≥ 992px
超大视口|xl|视口宽 ≥ 1200px

## 容器宽度
容器类|xs|sm|md|lg|xl
:-:|:-:|:-:|:-:|:-:|:-:
`.container`|100%|540px|720px|960px|1140px
`.container-sm`|100%|540px|720px|960px|1140px
`.container-md`|100%|100%|720px|960px|1140px
`.container-lg`|100%|100%|100%|960px|1140px
`.container-xl`|100%|100%|100%|100%|1140px
`.container-fluid`|100%|100%|100%|100%|100%
> 各个容器类不能相互嵌套使用

## 栅格系统
**行**
`.row` 行，**display:flex**
`.row .row-cols-{breakpoint}-{value}` 指定每行的列数
`.row .no-gutters` 取消行中列的槽宽
> `{breakpoint}` 取值：**省略**，**sm**，**md**，**lg**，**xl**
> `{value}` 取值：**1~6**

**列**
`.col` 自动布局列，每列会平分改行
`.col-{breakpoint}-{value}` 指定视口下的列数，每行至多 12 列
`.col-{breakpoint}-auto` 根据内容调整宽度
`.col .order-{breakpoint}-{order}` 列排序，order 越小越靠前
`.col .offset-{breakpoint}-{offset}` 列向右偏移指定的列数
> `{breakpoint}` 取值：**省略**，**sm**，**md**，**lg**，**xl**
> `{value}` 取值：**1~12**
> `{order}` 取值: **0~12**，**first**，**last**
> `{offset}` 取值：**0~11**

# 工具类
## 颜色
**文本颜色**
`.text-{color}` 设置文本颜色为指定的情景色
`.text-black-50` 设置文本颜色为 rgba(0,0,0,0.5)
`.text-white-50` 设置文本颜色为 rgba(255,255,255,0.5)
> `{color}` 取值：**primary**，**secondary**，**success**，**danger**，**warning**，**info**，**light**，**dark**，**body**，**muted**，**white**

**背景颜色**
`.bg-{color}` 设置背景色为指定的请景色
`.bg-transparent` 设置背景色为透明
> `{color}` 取值：**primary**，**secondary**，**success**，**danger**，**warning**，**info**，**light**，**dark**，**white**

**请景色说明**
请景色|说明|颜色值|色条
:-:|:-:|:-:|:-:
primary|重要的|#007bff|<span style="display:inline-block;width:20px;height:10px;background-color:#007bff"/>
secondary|次要的|#6c757d|<span style="display:inline-block;width:20px;height:10px;background-color:#6c757d"/>
success|成功的|#28a745|<span style="display:inline-block;width:20px;height:10px;background-color:#28a745"/>
danger|危险的|#dc3545|<span style="display:inline-block;width:20px;height:10px;background-color:#dc3545"/>
warning|警告的|#ffc107|<span style="display:inline-block;width:20px;height:10px;background-color:#ffc107"/>
info|信息的|#17a2b8|<span style="display:inline-block;width:20px;height:10px;background-color:#17a2b8"/>
light|浅色的|#f8f9fa|<span style="display:inline-block;width:20px;height:10px;background-color:#f8f9fa;outline:1px solid #343a40"/>
dark|深色的|#343a40|<span style="display:inline-block;width:20px;height:10px;background-color:#343a40"/>
white|白色的|#ffffff|<span style="display:inline-block;width:20px;height:10px;background-color:#ffffff;outline:1px solid #343a40"/>
body|主体的|#212529|<span style="display:inline-block;width:20px;height:10px;background-color:#212529"/>
muted|暗淡的|#6c757d|<span style="display:inline-block;width:20px;height:10px;background-color:#6c757d"/>

## 边框
**添加边框**
`.border` 设置四边边框
`.border-top` 设置上边框
`.border-right` 设置右边框
`.border-bottom` 设置下边框
`.border-left` 设置左边框
**取消边框**
`.border-0` 设置四边边框的宽度为0
`.border-top-0` 设置上边框的宽度为0
`.border-right-0` 设置右边框的宽度为0
`.border-bottom-0` 设置下边框的宽度为0
`.border-left-0` 设置左边框的宽度为0
**边框颜色**
`.border .border-{color}` 设置边框颜色为指定的请景色
> `{color}` 取值：**primary**，**secondary**，**success**，**danger**，**warning**，**info**，**light**，**dark**，**white**

**边框圆角**
`.rounded` 设置四角为圆角
`.rounded-top` 设置左上角和右上角为圆角
`.rounded-right` 设置右上角和右下角为圆角
`.rounded-bottom` 设置左下角和右下角为圆角
`.rounded-left` 设置左上角和左下角为圆角
`.rounded-circle` 设置边框为原型
`.rounded-pill` 设置边框为胶囊型
`.rounded-0` 设置四角为直角
`.rounded-sm` 设置四角为小圆角
`.rounded-lg` 设置四角为大圆角

## 浮动
`.clearfix` 清除浮动，作用于父级元素
`.float-{breakpoint}-left` 左浮动
`.float-{breakpoint}-right` 右浮动
`.float-{breakpoint}-none` 不浮动
> `{breakpoint}` 取值：**省略**，**sm**，**md**，**lg**，**xl**

## Display
`.d-{breakpoint}-{value}` 设置元素的 display 属性
> `{breakpoint}` 取值：**省略**，**sm**，**md**，**lg**，**xl**
> `{value}` 取值：**none**，**inline**，**inline-block**，**block**，**table**，**table-cell**，**table-row**，**flex**，**inline-flex**

**元素显隐表**
类|xs|sm|md|lg|xl
:-:|:-:|:-:|:-:|:-:|:-:
`.d-none`|×|×|×|×|×
`.d-none .d-sm-block`|×|√|√|√|√
`.d-sm-none .d-md-block`|√|×|√|√|√
`.d-md-none .d-lg-block`|√|√|×|√|√
`.d-lg-none .d-xl-block`|√|√|√|×|√
`.d-xl-none`|√|√|√|√|×
`.d-block`|√|√|√|√|√
`.d-block .d-sm-none`|√|×|×|×|×
`.d-none .d-sm-block .d-md-none`|×|√|×|×|×
`.d-none .d-md-block .d-lg-none`|×|×|√|×|×
`.d-none .d-lg-block .d-xl-none`|×|×|×|√|×
`.d-none .d-xl-block`|×|×|×|×|√
> `×` 表示 **隐藏** `√` 表示 **显示**

## Flex布局类
**设置动态盒子（作用于父级类）**
`.d-{breakpoint}-flex` 将元素设置为动态盒子
`.d-{breakpoint}-inline-flex` 将元素设置为内联动态盒子
> `{breakpoint}` 取值：**省略**，**sm**，**md**，**lg**，**xl**

**子盒子布局方向（作用于父级类）**
`.flex-{breakpoint}-row` 布局方向为水平方向
`.flex-{breakpoint}-column` 布局方向为垂直方向
`.flex-{breakpoint}-row-reverse` 布局方向为反向水平方向
`.flex-{breakpoint}-column-reverse` 布局方向为反向垂直方向
> `{breakpoint}` 取值：**省略**，**sm**，**md**，**lg**，**xl**

**子盒子排版位置（作用于父级类）**
`.d-flex .justify-content-{breakpoint}-start` 子盒子居左对齐
`.d-flex .justify-content-{breakpoint}-end` 子盒子居右对齐
`.d-flex .justify-content-{breakpoint}-center` 子盒子居中对齐
`.d-flex .justify-content-{breakpoint}-between` 子盒子两端对齐
`.d-flex .justify-content-{breakpoint}-around` 子盒子环绕对齐
`.d-flex .align-items-{breakpoint}-start` 子盒子居上对齐
`.d-flex .align-items-{breakpoint}-end` 子盒子居下对齐
`.d-flex .align-items-{breakpoint}-center` 子盒子居中对齐
`.d-flex .align-items-{breakpoint}-baseline` 子盒子基线对齐
`.d-flex .align-items-{breakpoint}-stretch` 子盒子拉伸对齐
> `{breakpoint}` 取值：**省略**，**sm**，**md**，**lg**，**xl**

**子盒子排版位置（作用于子级类）**
`.d-flex .align-self-{breakpoint}-start` 子盒子居上对齐
`.d-flex .align-self-{breakpoint}-end` 子盒子居下对齐
`.d-flex .align-self-{breakpoint}-center` 子盒子居中对齐
`.d-flex .align-self-{breakpoint}-baseline` 子盒子基线对齐
`.d-flex .align-self-{breakpoint}-stretch` 子盒子拉伸对齐
> `{breakpoint}` 取值：**省略**，**sm**，**md**，**lg**，**xl**

**子盒子填充（作用于子级类）**
`.flex-{breakpoint}-file` 子元素填充父级元素剩余空间
> `{breakpoint}` 取值：**省略**，**sm**，**md**，**lg**，**xl**

**子盒子自动换行（作用于父级盒子）**
`.d-flex .flex-{breakpoint}-nowrap` 不自动换行
`.d-flex .flex-{breakpoint}-wrap` 自动换行
`.d-flex .flex-{breakpoint}-wrap-reverse` 反向自动换行
`.d-flex .flex-wrap .align-content-{breakpoint}-start` 子盒子换行后整体居上对齐
`.d-flex .flex-wrap .align-content-{breakpoint}-end` 子盒子换行后整体居下对齐
`.d-flex .flex-wrap .align-content-{breakpoint}-center` 子盒子换行后整体居中对齐
`.d-flex .flex-wrap .align-content-{breakpoint}-between` 子盒子换行后整体两端对齐
`.d-flex .flex-wrap .align-content-{breakpoint}-around` 子盒子换行后整体环绕对齐
`.d-flex .flex-wrap .align-content-{breakpoint}-stretch` 子盒子换行后整体拉伸对齐
> `{breakpoint}` 取值：**省略**，**sm**，**md**，**lg**，**xl**

## 文本
`.text-hide` 隐藏文本
**文本对齐**
`.text-justify` 文本两端对齐
`.text-{breakpoint}-left` 文本左对齐
`.text-{breakpoint}-center` 文本居中对齐
`.text-{breakpoint}-right` 文本右对齐
> `{breakpoint}` 取值：**省略**，**sm**，**md**，**lg**，**xl**

**文本换行**
`.text-warp` 文本换行
`.text-nowarp` 文本不换行
`.text-truncate` 文本截断
`.text-break` 单词中断
**文本转换**
`.text-lowercase` 将字母转为小写形式
`.text-uppercase` 将字母转为大写形式
`.text-capitalize` 将字母转为首字母大写形式
**字体风格**
`.font-weight-bold` 粗体
`.font-weight-bolder` 超粗体
`.font-weight-normal` 正常粗细
`.font-weight-light` 细体
`.font-weight-lighter` 超细体
`.font-italic` 斜体
`.text-monospace` 等宽体
`.text-decoration-none` 去除文本装饰

## 移除处理
`.overflow-auto` 溢出后显示滚动条
`.overflow-hidden` 溢出后隐藏

## 定位
`.position-static` 静态定位
`.position-relative` 相对定位
`.position-absolute` 绝对定位
`.position-fixed` 固定定位
`.position-sticky` 粘性定位
`.fixed-top` 固定到顶部
`.fixed-bottom` 固定到底部
`.sticky-top` 黏在顶部

## 阴影
`.shadow` 设置阴影
`.shadow-none` 取消阴影
`.shadow-sm` 设置小阴影
`.shadow-lg` 设置大阴影

## 尺寸
`.w-25` width:25%
`.w-50` width:50%
`.w-75` width:75%
`.w-100` width:100%
`.w-auto` width:auto
`.h-25` height:25%
`.h-50` height:50%
`.h-75` height:75%
`.h-100` height:100%
`.h-auto` height:auto
`.mw-100` max-width:100%
`.mh-100` max-height:100%
`.min-vw-100` min-width:100vw
`.min-vh-100` min-height:100vh
`.vh-100` height:100vh
`.vw-100` width:100vw

## 间隔
`.m-{breakpoint}-{value}` 设置四边外边距
`.mt-{breakpoint}-{value}` 设置上外边距
`.mr-{breakpoint}-{value}` 设置右外边距
`.mb-{breakpoint}-{value}` 设置下外边距
`.ml-{breakpoint}-{value}` 设置左外边距
`.mx-{breakpoint}-{value}` 设置X轴外边距
`.my-{breakpoint}-{value}` 设置Y轴外边距
`.p-{breakpoint}-{value}` 设置四边内边距
`.pt-{breakpoint}-{value}` 设置上内边距
`.pr-{breakpoint}-{value}` 设置右内边距
`.pb-{breakpoint}-{value}` 设置下内边距
`.pl-{breakpoint}-{value}` 设置左内边距
`.px-{breakpoint}-{value}` 设置X轴内边距
`.py-{breakpoint}-{value}` 设置Y轴内边距
> `{breakpoint}` 取值：**省略**，**sm**，**md**，**lg**，**xl**
> `{value}` 取值：**0**=>0rem，**1**=>0.25rem，**2**=>0.5rem，**3**=>1rem，**4**=>1.5rem，**5**=>3rem，**auto**

## 链接拉伸
`a.stretched-link` 链接拉伸，拉伸的范围为最近的定位父级元素

## 垂直对齐
`.align-baseline` 基线对齐
`.align-top` 顶部对齐
`.align-middle` 居中对齐
`.align-bottom` 底部对齐
`.align-text-top` 文本顶部
`.align-text-bottom` 文本底部
```html
<img src="..." class="align-text-top">
<span>文本</span>
```
> vertical-align 之作用于 inline、inline-block、table、table-cell 形式的元素

## 可见性
`.invisible` 隐藏元素，保留空间
`.visible` 显示元素

# 页面内容
## 排版
**标题**
`.h1` 一级标题样式
`.h2` 二级标题样式
`.h3` 三级标题样式
`.h4` 四级标题样式
`.h5` 五级标题样式
`.h6` 六级标题样式
`.display-1` 突出显示一级标题
`.display-2` 突出显示二级标题
`.display-3` 突出显示三级标题
`.display-4` 突出显示四级标题
**段落**
`.lead` 突出显示段落
**文本元素**
`.small` 小号文本
`.mark` 文本高亮
**列表**
`ul.list-unstyled` 取消列表风格
`ul.list-inline>li.list-inline-item` 列表项水平排列 

## 图像
`img.img-fluid` 响应式图片
`img.thumbnail` 缩略图
`img.rounded` 圆角图片

## 表格
`table.table` 表格基础样式
`table.table.table-dark` 暗色表格
`table.table.table-striped` 隔行换色
`table.table.table-bordered` 设置表格内外边框
`table.table.table-borderless` 设置表格外边框
`table.table.table-hover` 鼠标悬浮突出显示行
`table.table-sm` 紧缩型表格
`div.table-responsive-{breakpoint} > .table` 响应式表格
`thead.thead-dark` 暗色表头
`thead.thead-light` 亮色表头
`tr.table-{color}` 设置行的背景色为指定的请景色 
`td.table-{color}` 设置单元格的背景色为指定的请景色
> `{color}` 取值：**active**，**primary**，**secondary**，**success**，**danger**，**warning**，**info**，**light**，**dark**
>`{breakpoint}` 取值：**省略**，**sm**，**md**，**lg**，**xl**

## 图片区
```html
<figure class="figure">
  <img src="..." class="figure-img">
  <figcaption class="figure-caption">标题</figcaption>
</figure>
```

# 组件
## 警告框
**带情景色的警告框**
```html
<div class="alert alert-{color}">
    A simple {color} alert—check it out!
</div>
```
> `{color}` 取值：**primary**，**secondary**，**success**，**danger**，**warning**，**info**，**light**，**dark**

**带链接的警告框**
```html
<div class="alert alert-primary">
  A simple primary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
```

**带标题的警告框**
```html
<div class="alert alert-success">
  <h4 class="alert-heading">Well done!</h4>
  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
</div>
```

**可关闭的警告框**
```html
<div class="alert alert-warning alert-dismissible fade show">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="close" data-dismiss="alert">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
```

**JavaScript操作**
```html
<body>
    <button class="btn-close-alert">close alert</button>
    <div class="alert alert-warning fade show">
        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
    </div>
    <script>
        // 关闭警告框
        $('.btn-close-alert').click(function(){
            $('.alert').alert('close')
        })
        // 关闭警告框后触发的事件
        $('.alert').on('closed.bs.alert',function(){
            console.log('closed')
        })
    </script>
</body>
```

## 徽章
**带请景色的徽章**
```html
<span class="badge badge-{color}">Badge</span>
```
> `{color}` 取值：**primary**，**secondary**，**success**，**danger**，**warning**，**info**，**light**，**dark**

**胶囊徽章**
```html
<span class="badge badge-pill badge-primary">Pill badge</span>
```

**链接徽章**
```html
<a href="#" class="badge badge-primary">Link badge</a>
```

**标题中的徽章**
```html
<h1>Example heading <span class="badge badge-secondary">New</span></h1>
```

**按钮中的徽章**
```html
<button type="button" class="btn btn-primary">
  Notifications <span class="badge badge-light">4</span>
</button>
```

## 面包屑导航
```html
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active">Library</li>
  </ol>
</nav>
```

## 按钮
**带请景色的按钮**
```html
<button type="button" class="btn btn-{color}">button</button>
```
> `{color}` 取值：**primary**，**secondary**，**success**，**danger**，**warning**，**info**，**light**，**dark**

**链接形式的按钮**
```html
<button type="button" class="btn btn-link">Link</button>
```

**按钮形式的元素**
```html
<a class="btn btn-primary" href="#" role="button">Link</a>
<button class="btn btn-primary" type="submit">Button</button>
<input class="btn btn-primary" type="button" value="Input">
```

**轮廓按钮**
```
<button type="button" class="btn btn-outline-{color}">Primary</button>
```
> `{color}` 取值：**primary**，**secondary**，**success**，**danger**，**warning**，**info**，**light**，**dark**

**大号按钮**
```html
<button type="button" class="btn btn-primary btn-lg">Large button</button>
```

**小号按钮**
```html
<button type="button" class="btn btn-primary btn-sm">Small button</button>
```

**块级按钮**
```html
<button type="button" class="btn btn-primary btn-lg btn-block">Block level button</button>
```

**被激活的按钮**
```html
<a href="#" class="btn btn-primary btn-lg active">Primary link</a>
```

**被禁用的按钮**
```html
<button type="button" class="btn btn-lg btn-primary" disabled>Primary button</button>
<a href="#" class="btn btn-primary btn-lg disabled">Primary link</a>
```

**可切换状态的按钮**
```html
<button type="button" class="btn btn-primary" data-toggle="button">
  Single toggle
</button>
```

**复选框按钮**
```html
<div class="btn-group-toggle" data-toggle="buttons">
  <label class="btn btn-secondary active">
    <input type="checkbox" checked> Checked
  </label>
</div>
```

**单选框按钮**
```html
<div class="btn-group btn-group-toggle" data-toggle="buttons">
  <label class="btn btn-secondary active">
    <input type="radio" name="options" checked> Active
  </label>
  <label class="btn btn-secondary">
    <input type="radio" name="options"> Radio
  </label>
  <label class="btn btn-secondary">
    <input type="radio" name="options"> Radio
  </label>
</div>
```

**javascript操作**
```html
<body>
    <button class="toggle">toggle</button>
    <hr/>
    <button class="btn btn-primary">button</button>
    <script>
        // 切换按钮状态
        $('.toggle').click(function(){
            $('.btn').button('toggle')
        })
    </script>
</body>
```

## 按钮组
**简单按钮组**
```html
<div class="btn-group">
  <button type="button" class="btn btn-secondary">Left</button>
  <button type="button" class="btn btn-secondary">Middle</button>
  <button type="button" class="btn btn-secondary">Right</button>
</div>
```
**简单的按钮工具条**
```html
<div class="btn-toolbar">
  <div class="btn-group mr-2">
    <button type="button" class="btn btn-secondary">1</button>
    <button type="button" class="btn btn-secondary">2</button>
    <button type="button" class="btn btn-secondary">3</button>
    <button type="button" class="btn btn-secondary">4</button>
  </div>
  <div class="btn-group mr-2">
    <button type="button" class="btn btn-secondary">5</button>
    <button type="button" class="btn btn-secondary">6</button>
    <button type="button" class="btn btn-secondary">7</button>
  </div>
  <div class="btn-group">
    <button type="button" class="btn btn-secondary">8</button>
  </div>
</div>
```

**带输入框的按钮工具条**
```html
<div class="btn-toolbar mb-3">
  <div class="btn-group mr-2">
    <button type="button" class="btn btn-secondary">1</button>
    <button type="button" class="btn btn-secondary">2</button>
    <button type="button" class="btn btn-secondary">3</button>
    <button type="button" class="btn btn-secondary">4</button>
  </div>
  <div class="input-group">
    <div class="input-group-prepend">
      <div class="input-group-text">@</div>
    </div>
    <input type="text" class="form-control" placeholder="Input group example">
  </div>
</div>
```
**大号按钮组**
```html
<div class="btn-group btn-group-lg">...</div>
```

**小号按钮组**
```html
<div class="btn-group btn-group-sm">...</div>
```

**带下拉框的按钮组**
```html
<div class="btn-group">
  <button type="button" class="btn btn-secondary">1</button>
  <button type="button" class="btn btn-secondary">2</button>
  <div class="btn-group">
    <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown">
      Dropdown
    </button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Dropdown link</a>
      <a class="dropdown-item" href="#">Dropdown link</a>
    </div>
  </div>
</div>
```

**垂直方向的按钮组**
```html
<div class="btn-group-vertical">
  ...
</div>
```

# 资源下载
1. [bootstrap-4.4.1-dist.zip](resources/bootstrap-4.4.1-dist.zip)
2. [jquery.zip](resources/jquery.zip)
3. [popper.zip](resources/popper.zip)