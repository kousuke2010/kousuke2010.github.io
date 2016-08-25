---
layout: post
title: "SublimeText 从安装到配置到优化"
date: 2016-08-25 17:54:18 +0800
categories: notes
tags: sublimetext
permalink: /:categories/:month-:day-:title
excerpt: #为空的清空默认摘要
published: true
---
### 设置初始化

```json
{
    "auto_wrap": false,
    "color_scheme": "Packages/Theme - Praxis/Monokai (Praxis).tmTheme",
    "default_line_ending": "unix",
    "ensure_newline_at_eof_on_save": true,
    "font_size": 14,
    "highlight_line": true,
    "ignored_packages":
    [
    "Vintage"
    ],
    "numix_sidebar_tree_xlarge": true,
    "numix_xsmall_tabs": true,
    "praxis_round_tabs": false,
    "save_on_focus_lost": true,
    "tab_size": 4,
    "translate_tabs_to_spaces": true,
    "theme": "Numix.sublime-theme",
    "trim_trailing_white_space_on_save": true,
    "update_check": false,
    "word_wrap": true
}
```

### 按键初始化

```python
[
    { "keys": ["ctrl+shift+s"], "command": "save_all" },
    { "keys": ["ctrl+shift+enter"], "command": "open_in_browser" },
    { "keys": ["ctrl+shift+w"], "command": "close_all" },
    {"keys": ["ctrl+shift+r"], "command": "reindent" , "args": {"single_line": false}},
    { "keys": ["ctrl+shift+m"], "command": "add_my_name" },
    { "keys": ["ctrl+shift+,"], "command": "add_current_time" },
    { "keys": ["ctrl+shift+."], "command": "add_over_words" },
    { "keys": ["ctrl+shift+j"], "command": "add_js_pwd" },
    { "keys": ["ctrl+shift+i"], "command": "add_images_pwd" },
    { "keys": ["ctrl+shift+c"], "command": "add_css_pwd" },
    {"keys": ["ctrl+alt+f"], "command": "js_format","context": [{"key": "selector", "operator": "equal", "operand": "source.js,source.json"}]},
    {
        "keys": ["ctrl+alt+v"],//create your own key command combination here!
        "command": "html_beautify",//command that executes html_beautify
        "context": [{
        //these options ensure that the command is executed in the right files/context
        "key": "selector",
        "operator": "equal",
        "operand": "text.html,text.css,text.html.twig,text.twig,source.html,source.html.twig,source.twig"
        }]
    }
]
```

### 推荐主题

#### [Theme-Autume](https://packagecontrol.io/packages/Theme%20-%20Autumn)
![Theme-Autume](/assets/201608/08251828.jpg)

#### [Theme-Praxis](https://packagecontrol.io/packages/Theme%20-%20Praxis)
![Theme-Praxis](/assets/201608/08251828-2.jpg)

#### [Numix Theme（推荐,可塑性高）](https://packagecontrol.io/packages/Numix%20Theme)
![Numix Theme](/assets/201608/08251828-3.jpg)

### 推荐插件

#### Package Control
安装代码经常变，详看：[Package Control 安装信息](https://packagecontrol.io/installation)

##### 查看安装的插件
ctrl + shift + P 后输入 "list packages" 后回车

##### 查看相关命令
ctrl + shift + P 后输入 “package control” 后回车

#### AutoBackups
自动备份插件，调用备份文件快捷键 ctrl+alt+B，备份文件默认存放路径：D:\Sublime Text Backups

#### ConvertToUTF8
转换字符为UTF8

#### CSS Format
CSS格式化插件，右键菜单

添加快捷键，首选项(preferences) - 按键绑定[用户] - 添加以下代码：

`{"keys": ["ctrl+alt+n"],"command": "css_format","args": {"action": "compact-ns"}}`

#### DeleteBlankLines
删除空行插件，快捷键 ctrl+alt+Backspace

#### Emmet
前身是大名鼎鼎的Zen coding，增加CSS3和HTML5许多新特性，使用仿CSS选择器的语法来快速开发HTML和CSS。
在安装之后可能会出现无法使用的情况，那是因为还有个PyV8环境没有安装好，同时如果是处在天朝底下的话，原本自动安装的也因为被墙而无法安装了，这时候只能手动安装。

手动安装PyV8环境的方法：

* 下载 [PyV8环境包](https://github.com/emmetio/pyv8-binaries)（请根据你当前系统选择合适的压缩包）
* 下载后解压压缩包，并将解压出来的文件夹（文件夹格式为：PyV8/%filename%）放入Sublime Text 3\Packages\PyV8路径下，如图：

![手动安装PyV8环境的方法](/assets/201608/08251828-4.jpg)

#### JsFormat
js格式化插件，快捷键 ctrl+alt+F

#### Open URL
选中文字右键打开链接，包含网址链接及文件路径，对于文件路径可以直接打开编辑和直接执行。

#### Sass
使 Sublime Text 支持 Sass 语法高亮

#### BracketHighlighter
标签结构高亮

![BracketHighlighter 标签结构高亮](/assets/201608/08251828-5.jpg)

#### CSS3
CSS3 代码填充插件，不过在使用的时候注意关掉 CSS 插件，同时官方说法是把 Emmet 也关掉，不过我没有关掉，感觉没啥影响，索性就保留了，顺带提一下，关掉 CSS 之后就没有该语言了，请在之前打开的 CSS 文件中重新设置语言为 CSS3（Sublimetext界面右下角选择）。

下面说下关掉 CSS 插件的方法：

* ctrl + shift +p 打开控制面板
* 输入 Disable Package 后回车
* 输入 CSS 后选中 CSS 一栏即可关闭该插件

#### TrailingSpaces
高亮显示尾部多余的空格，强迫症患者专用.

![TrailingSpaces](/assets/201608/08251828-6.jpg)

### 自写插件

#### addCurrentTime.py
*(通过快捷键调用一段自定字符，以下是文件内容，存放路径：Sublime Text 3\Packages\User )*

```python
import datetime
import sublime_plugin
class AddCurrentTimeCommand(sublime_plugin.TextCommand):
        def run(self, edit):
                self.view.run_command("insert_snippet",{
                        "contents":
                        "\n"
                        "-------------------------------------------------------------------------------------------------""\n"
                        "@StartTime: " "%s"  %datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S") +"\n"
                        "\n""\n"
                        "-------------------------------------------------------------------------------------------------"
                })
class AddOverWordsCommand(sublime_plugin.TextCommand):
        def run(self, edit):
                self.view.run_command("insert_snippet",{
                        "contents":
                        "  __( EndTime:" "%s" %datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S") +" )"
                })
class AddMyNameCommand(sublime_plugin.TextCommand):
        def run(self, edit):
                self.view.run_command("insert_snippet",{
                        "contents":
                        " ---炜"
                })
class AddJsPwdCommand(sublime_plugin.TextCommand):
        def run(self, edit):
                self.view.run_command("insert_snippet",{
                        "contents":
                        "\$_G['style']['merger']js/"
                })
class AddImagesPwdCommand(sublime_plugin.TextCommand):
        def run(self, edit):
                self.view.run_command("insert_snippet",{
                        "contents":
                        "\$_G['style']['merger']images/"
                })
class AddCssPwdCommand(sublime_plugin.TextCommand):
        def run(self, edit):
                self.view.run_command("insert_snippet",{
                        "contents":
                        "\$_G['style']['merger']css/"
                })
```

### 快捷键

`ctrl+shift+up/down` 上移下移当前选中行

`ctrl+/  ctrl+shift+/` 注释当前行和注释当前选中文字

`ctrl+L` 选中当前所在行（当前选中行）

`ctrl+shift+d` 复制当前选中行

`ctrl+G` 跳转到指定行

`ctrl+P` 快速打开文件

`ctrl+Enter` 快速换行

`ctrl+shift+[ or ctrl+shift+]` 展开或闭合所选内容下的标签，展开或闭合所有标签只需 ctrl+A 全选后执行快捷键组合即可

### 安装包

以下两个压缩包里面皆包含ST3安装包、keygen以及中文包。

[Sublime Text 3 Build 3047 32位 简体中文安装破解版](/assets/201608/SublimeText3Build304732bit.rar)

[Sublime Text 3 Build 3047 64位 简体中文安装破解版](/assets/201608/SublimeText3Build304764bit.rar)

#### 注册机破解步骤（前提得先安装ST3）

* 以管理员方式运行附件中的Sublime Text 3 注册机
* 先点中间那个Patch key按钮，找到安装包中的sublime_text.exe文件并打开，然后进行确定
* 输入Name，之后点击Generate生成注册码并进行复制，包括“—–BEGIN LICENSE—–”和“—–END LICENSE—–”都要复制到
* 打开sublime_text.exe（即主文件），然后填入刚刚复制的注册码即可成功使用了。

#### 安装 Sublime Text 3 汉化包步骤

* 运行Sublime Text 3 点击 Preferneces -> Browse Packages 打开 X:UserskousukeAppDataRoamingSublime Text 3Packages 目录
* 返回上一层并找到Installed Packages目录
* 打开附件中的汉化包文件夹，复制里面的Default.sublime-package文件到该目录（即Installed Packages目录），无需重启即可看到汉化效果。

#### 在 windows 8 64bit 下注册机无法生成 license 解决方案

* 以管理员方式运行附件中的Sublime Text 3 注册机
* 点击注册机底部中间那个Patch key按钮，找到安装包中的sublime_text.exe文件并打开，然后进行确定
* 在SublimeText的菜单栏中找到帮助一栏打开输入license窗口，输入以下代码后激活：

```
—–BEGIN LICENSE—–
xiaojue
Unlimited User License
EA7E-24352
8C355D962FB982C7145354A0DDA72B31
63E25C5316C6A67A7BB7DDD11D789FBB
8451410BA0A054DB58A26D92349E99EA
5A99A6F31E1C52A442C59242941738F0
1015F8F42397B910260CCA891803D0FC
70BECA4F00CFB5DB788DDDB182F1A154
F014EB731AA8A721D209891416B83B90
A564AF2B4CADE1BE1EDEE700BF5F3FE1
—–END LICENSE—–
```

#### 手动破解方案
* 通过编辑工具（比如UltraEdit）打开SublimeText安装路径下的SublimeText主文件
* 搜索“3342”并将该处替换成“3242”
* 关掉重启SublimeText后，在SublimeText的菜单栏中找到帮助一栏打开输入license窗口，输入上边的license后激活

### 同个文件多视图同步显示
文件-->文件新视图

