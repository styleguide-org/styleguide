# 欢迎

## 1. 使用Style Guide

Style guide 是对于现有版本的Webapp中界面元素的梳理，我们总结归纳出了按钮、表单、列表等多种样式组件。

Style guide的总体设计是基于以下的原则：

- 容器和内容相分离。在构建区块时，将其划分为外部的容器和内部的内容。在容器中定义背景、边距、边框等样式。在内容中定义字体、段落、图片等。
- 结构和皮肤相分离。在构建组件时，将其划分为主干结构和可调节的皮肤参数，结构中定义组件的层级关系，位置等，皮肤作为组件的参数定义大小、颜色等。


整个Style guide 可划分为以下几个部分：

- 基本样式：定义了颜色、字体等基本的样式，可以在所有的组件中使用
- 布局样式：通过定义容器和栅格，实现页面布局
  - 通过容器，可以根据不同的信息内容，将页面在水平上分割成各个区块。
  - 通过栅格，可以将区块进行纵向的分割，实现整个页面布局
- 组件样式：定义了按钮、表单、列表等多种样式组件。

### 1.1 使用style guide布局

style guide通过定义容器(`container` / `card`) 和栅格 (`row` / `col`）实现页面布局

- 通过容器(`container` / `card`) 可以将页面在水平上进行分割，形成成各个区块。
- 通过栅格(`row` / `col`) ，可以将区块在垂直上进行分割。

通过合理将容器和栅格进行组合，就能有效的实现页面布局。如下的例子：
```HTML
    <div class="main-window -bg-normal" style="width:360px">
            <div class="row -bg-light">
                <a class="btn">地图</a>
                <a class="btn">周边</a>
                <a class="btn">路线</a>
            </div>
        <div class="container -lighter -border">
            <div class="card">
                搜索框
            </div>
        </div>
        <div class="container">
            <div class="card -spacing-base" style="height:200px">
                九宫格内容
            </div>
            <div class="card">
                定位条
            </div>
        </div>
        <div class="row -bg-dark">
            <a class="btn">个人中心</a>
            <a class="btn">意见反馈</a>
            <a class="btn">应用推荐</a>
        </div>
    </div>
```
显示效果:
    <div class="main-window -bg-normal" style="width:360px">
            <div class="row -bg-light">
                <a class="btn">地图</a>
                <a class="btn">周边</a>
                <a class="btn">路线</a>
            </div>
        <div class="container -lighter -border">
            <div class="card">
                搜索框
            </div>
        </div>
        <div class="container">
            <div class="card -spacing-base" style="height:200px">
                九宫格内容
            </div>
            <div class="card">
                定位条
            </div>
        </div>
        <div class="row -bg-dark">
            <a class="btn">个人中心</a>
            <a class="btn">意见反馈</a>
            <a class="btn">应用推荐</a>
        </div>
    </div>

更多关于页面布局方法的说明，请戳链接至 [容器](section-2.html) [栅格](section-3.html)

### 1.2 使用style guide组件
通过将style guide中组件的样式class添加在对应的元素上即可显示所需的组件效果，例如要做一个搜索框组件的代码如下：
```HTML
    <div class="input-group" style="width:360px">
        <div class="input-text -icon">
            <i class="icon -search -ft-brand"></i>
            <input type="text"></input>
        </div>
        <input type="submit" class="btn -brand" value="搜索"></input>
    </div>
```
显示效果:
    <div class="input-group" style="width:360px">
        <div class="input-text -icon">
            <i class="icon -search -ft-brand"></i>
            <input type="text" style="line-height:20px"></input>
        </div>
        <input type="submit" class="btn -brand" value="搜索"></input>
    </div>

调用Styleguide组件的主要方法如下：

1. 声明该组件的class名称。例如，要在`<button>`元素上调用按钮组件时，需要先声明`class="btn"`。这里需要强调的是，所有组件均只能通过 class 调用，没有通过 id 调用的组件。
```
    <button class="btn">Button</button>
```
显示效果：
<div>
    <button class="btn">Button</button>
</div>

2. 根据需要指定隶属于该组件的**局部参数**。例如，如果需要一个小的、百度蓝色的、宽度为父元素20%的按钮，则只需在class中添加`-small`、`-brand`以及`-col2`参数即可。此时按钮的HTML为：
```
    <button class="btn -small -brand -col2">Button</button>
```
显示效果：
<div>
    <button class="btn -small -brand -col2">Button</button>
</div>
更多关于按钮组件参数的说明，请参考[链接](section-3.html)

3. 除了组件的参数外，我们还提供了有关背景颜色、背景透明度、阴影、字体大小以及字体颜色的**全局参数**。所有全局参数在实现时都带有`!important`关键字，因此大家可以利用它们来覆盖掉前面的组件默认样式和局部参数样式。例如，如果需要在上面小的、百度蓝色的、宽度为父元素20%的按钮的基础上，使用最大字号的文字，并带有阴影。可以这样调用：
```
    <button class="btn -small -brand -col2 -ft-large -shadow-dialog">Button</button>
```
显示效果：
<div>
    <button class="btn -small -brand -col2 -ft-large -shadow-dialog">Button</button>
</div>
更多关于可作为全局参数的基本样式，请参考[链接](section-1.html)

## 2. 在superman项目中加载style guide

1. style guide已作为模块`styleguide`整合入superman项目中。通过加载styleguide模块中的widget，来加载styleguide
```
{%body%}
    {%* 在页面头部加载styleguide-header *%}
    {%widget name="styleguide:widget/styleguide-header/styleguide-header.tpl"%}
......
    {%* 在页面底部加载styleguide-footer *%}
    {%widget name="styleguide:widget/styleguide-footer/styleguide-footer.tpl"%}
{%/body%}
```

2. 为减少头部加载Style Guide的大小，整个Style Guide被拆分为styleguide-header和styleguide-footer两个widget，styleguide-header在头部加载，styleguide-footer将在页面底部加载，它们包含的内容如下:

<table border="1" style="width:360px">
    <tr>
        <td>styleguide-header</td>
        <td>styleguide-footer</td>
    </tr>
    <tr>
        <td>
            基本样式<br>
            容器<br>
            栅格<br>
            按钮<br>
            表单<br>
            Tab<br>
        </td>
        <td>
            图标<br>
            略缩图<br>
            列表<br>
            弹出框<br>
            扩展Tab<br>
        </td>
    </tr>
</table>
3. 如果页面中需要的组件在在styleguide头部widget中不存在，可以在page.tpl中添加appendStyles widget，如下所示
```
{%block name="css"%}
    {%widget name="styleguide:widget/appendstyle/appendstyle.tpl" appendStyles="thumbnail"%}
{%/block%}
```
appendStyles参数可以是以下组件：

<table border="1" style="width:360px">
    <tr>
        <td>appendStyles</td>
    </tr>
    <tr>
        <td>
        thumbnail<br>
        list<br>
        tab-secondary<br>
        </td>
    </tr>
</table>
4. 为了和webapp原样式兼容，** 用Style Guide创建或重构的widget，就需要在顶级元素中声明“styleguide”类样式 ** ，才能正常使用styleguide的样式, 如下示例：
```
<ul class="styleguide tab index-widget-tabgroup">
   <li class="">...</li>
</ul>
```

5. 要重新编译styleguide模块，需要为FIS安装fis-parser-sass插件：
```
npm install -g fis-parser-sass
```

了解更多superman中加载style guide，请戳[参考文档](assets/Webapp_style_guide_design.docx)

## 3. 开发 Style Guide

1. 下载 Style Guide 代码。 
Style Guide代码目前是放在BAE平台上，需要联系<a href="mailto:lilin09@baidu.com?subject=Style Guide开发权限">李林</a>获得权限后可以从BAE 的SVN库中下载

2. 安装相关依赖包。切换到 Style Guide 根目录下，运行下面命令：

    `$ sudo npm install`

3. 修改代码并重新编译（有时可能需要编译两遍才能生效）。

    `$ gulp`


PS：目前 fonts icon 的自动化过程尚需进一步优化，所以这一部分的更新工作暂不开放，若需更新请联系<a href="mailto:houhongru@baidu.com?subject=Style Guide字体图标修改请求">鸿儒</a>或<a href="mailto:lilin09@baidu.com?subject=Style Guide字体图标修改请求">李林</a>。<br>
PPS：请忽略所有示例代码中的 `{$modifiers}`，该变量仅用于生成 Style Guide 时使用，谢谢！

## 4. 参考文档

[Style Guide 调研报告](assets/style_guide_investigation.pdf)

[用Style Guide开发webapp页面](assets/work_with_style_guide_.pptx)

[Webapp Style Guide产品化详细设计](assets/Webapp_style_guide_design.docx)

## 5. Changelog

2014.4.29 更新：

* 更新`list-group`列表组件，去掉了其`-static`参数

2014.4.24 为支持WebApp 全新UI风格，StyleGuide相应的做了比较大的更新：

* 为了避免新增组件和原WebApp冲突，新增组件的class名称将增加`wa-`的前缀
* 升级“栅格系统”，全部由`flex-box`实现，可以支持自动等宽column和固定宽column的模式，原`flex-row`将被废弃
* 为`container`和`card`容器增加`-large`、`-compacted`的样式，适应不同大小需要，并在`card`上使用圆角边框。
* 为`button`, `button-group`等组件增加了`-flat`的扁平化风格
* 修改了`tab`组件的样式
* 在列表`list`组件增加了`-large`样式
* 在表单内增加了`wa-label`组件
* 在基本样式内增加了`-border-round`, `-vcenter, `-hcenter`等样式
* 增加了图标


2014.3.11 更新：

* 新增将styleguide拆分为`base-styles`和`append-styles`两个CSS文件
* 新增`list` `tab-secondary` `thumbnail`单独生成的CSS文件


2014.3.6更新：

* 新增apps、gotop、label三个图标字体；
* 删除了带有左箭头和右箭头的弹出框；
* 删除了`-normal`、`-dark`、`-darker`颜色的按钮；
* 删除了`-darker`、`-brand`、`-alert`颜色的Card和Container;
* 为适应GMU`suggestion`组件，修改了`input-text`和`input-group`的实现
* 将`tab-secondary`拆分出一个文件
* 对部分组件进行了小的调整

