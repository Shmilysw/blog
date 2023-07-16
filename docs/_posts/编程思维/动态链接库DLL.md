---
title: 浅学动态链接库DLL
date: 2023-07-06
tags: [编程思维, 资源共享]
---

# 动态链接库DLL(Dynamic Link Library)

学习一下，之后会补充相关内容([canon](), [halcon]())的动态链接库~

---

## 1、DLL是什么

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DLL文件即动态链接库文件（Dynamic Link Library）：是Windows系统中封装代码和数据以及实现资源共享的一种方式，当然本质上它就是`一个已经编译好的机器指令文件`。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;动态链接：指的是程序运行时，有需要才去调用某个DLL。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;库：指的是一般一个DLL里会包含各种函数并对外提供API。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一般就和开发中自定义的模块类似，可以将DLL通俗理解为具有某些功能的箱子，箱子里存放着已经编写好的逻辑代码和数据，箱子上有一些按钮，这就是API，外部程序调用API就好像按这些按钮一样，不需要知道箱子内部逻辑是怎么实现的，只需要阅读一些说明书之类的东西，就可以“把玩(调用)”这个箱子——也就是DLL了。

## 2、几个重要的DLL

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Windows中有3个非常重要的底层DLL：kernel32.dll、user32.dll、gdi32.dll。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;kernel32.dll是非常重要的32位动态链接库文件，属于内核级文件。当Windows启动时，kernel32.dll就驻留在内存中特定的写保护区域，当别的程序试图写入访问这些内存区域时，操作系统就会报错并终止该程序运行。kernel32.dll顾名思义，包含着操作系统的一核心功能比如内存管理、进程管理、中断处理等等。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;user32.dll是Windows用户界面相关应用程序接口，用于包括Windows处理，基本用户界面等特性，如创建窗口和发送消息，或者是将鼠标的点击信号传递给相应的窗口。当你要用操作系统的API直接创建用户图形界面时，也有可能用到该动态链接库。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;gdi32.dll是Windows GDI图形用户界面相关程序，包含的函数用来绘制图像和显示文字，缺少它可能会造成部分软件或游戏无法正常运行。

## 3、使用DLL的好处

### 3.1、提供代码共享与节省内存

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;库之所以为库，是因为其拥有可以让几乎任意恰当程序调用的API，也就是该库可以被许多需要的程序共享；而且通过在Windows上使用DLL，运行时按需调用，既`节省了非运行时的磁盘空间`，也`节省了运行时的内存空间`。

### 3.2、便利团队协作与迭代开发

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当一个软件需要`多人协同开发`时，常常面临这样一个问题：你用这个平台用这个编译器这个开发工具写代码，我用那个平台那个编译器那个工具写代码，他却用与我们都不同的其它工具写代码。当然你可以用一套统一的开发平台与工具，但实际上还是会碰到这种代码无法通用的问题，所以通过DLL可以让开发人员在各个模块中间便利地相互调用而不产生问题，因为在底层DLL已经是`某种机器架构的机器码指令序列了`。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;还有一个就是`迭代开发`，当一个功能需要更新时，并不需要重写整套代码，只需要修改相应功能的DLL即可。

### 3.3、易于扩展与本地化

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;相同的道理，当你需要增加新的功能时，就只需要增加新的DLL与更新相关的DLL而已，对用户来说并不需要重新将软件再下载一遍。至于本地化，就是一种更新补丁罢了。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;即使在恰当的时候使用DLL会有一定的优势，但必须提醒一句，万物不可滥用，毕竟写hello world 时，你应该不需要直接使用或者生成动态链接库。

## 4、Mac 和 Linux

+ Windows里动态链接库后缀为 .dll
+ Linux里后缀为 .so
+ Mac里后缀为 .dylib

尽管在不同的操作系统中，动态链接库的后缀名和具体生成方式有所不同，但本质是一样的。