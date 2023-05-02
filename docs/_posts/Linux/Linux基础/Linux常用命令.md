---
title: Linux 常用命令
date: 2022-8-14
tags: [Linux, 操作系统]
---


<!-- 你好，我的名字叫`主要内容来源`失败的man！`include` `cpp`
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() 
{
    int a, b;
    cin >> a >> b;
    cout << a + b << endl;
    return 0;
}
```  -->
<!-- ![图片](https://cdn.acwing.com/media/article/image/2023/04/26/120382_bd66bcfce4-background00.png)

![图片](https://cdn.acwing.com/media/article/image/2023/04/26/120382_b639cb7ce4-background9.png) -->

<!-- https://gitee.com/shmilysw/imgs/raw/master/background9.png -->

<!-- ![图片](https://gitee.com/shmilysw/imgs/raw/master/background9.png) 不是gitee是真垃圾，专坑中国人！！！，tui！ -->


<!-- 可以使用这种方式居中 -->
<!-- <center>
    <b><font size='5px'>Linux 常用命令</font></b>
</center> -->

## Linux 常用命令

### 主要内容来源：
[AcWing-Linux-基础课](https://www.acwing.com/activity/content/punch_the_clock/57/)

### 常用命令介绍(y总总结)
```
(1) ctrl c: 取消命令，并且换行
(2) ctrl u: 清空本行命令
(3) tab键：可以补全命令和文件名，如果补全不了快速按两下tab键，可以显示备选选项
(4) ls: 列出当前目录下所有文件，蓝色的是文件夹，白色的是普通文件，绿色的是可执行文件
(5) pwd: 显示当前路径
(6) cd XXX: 进入XXX目录下, cd .. 返回上层目录
(7) cp XXX YYY: 将XXX文件复制成YYY，XXX和YYY可以是一个路径，比如../dir_c/a.txt，表示上层目录下的dir_c文件夹下的文件a.txt
(8) mkdir XXX: 创建目录XXX
(9) rm XXX: 删除普通文件;  rm XXX -r: 删除文件夹
(10) mv XXX YYY: 将XXX文件移动到YYY，和cp命令一样，XXX和YYY可以是一个路径；重命名也是用这个命令
(11) touch XXX: 创建一个文件
(12) cat XXX: 展示文件XXX中的内容
(13) 复制文本
    windows/Linux下：Ctrl + insert，Mac下：command + c
(14) 粘贴文本
    windows/Linux下：Shift + insert，Mac下：command + v
```
### 自己总结
```
Shmilysw
一：绝对路径 从根开始描述这个路径(有"/")
二：相对路径 从当前路径开始来描述你的这个路径(无"/")
区别：看开头是不是有 "/"
/：根目录
..：上一级目录
.：当前目录
~/：hmoe目录
ctrl+c：跳过当前行
ctrl+u：清空当前行
history：显示历史操作
tab：自动补全命令或路径（只有一种选项，多种选项再按一次tab会显示可以补全的命令）
ls：显示当前文件夹下的文件
    ls -l：显示详细信息
    ls -lh：人性化输出(将详细信息里面的大小换成多少K)
    ls -a：显示所有文件（包括隐藏文件）  ls-A：不显示当前目录和上层目录（.和..）
cd：进入一个路径
    cd ..：返回上一层目录
    cd -：返回到上一次操作所留在的目录(上一次所待过的地方)
cp a/tmp.txt b：把a文件夹下的tmp.txt复制到b文件夹
    cp a/tmp.txt b/tmp1.txt：把a文件夹下的tmp.txt复制到b文件夹并且重命名为tmp1.txt
    cp a b -r：把文件夹a复制到文件夹b中
mkdir a（路径也可以）：创建一个文件夹a
    mkdir a/b/c：创建一个文件目录a/b/c
rm 文件1 文件2 文件3 ……：删除文件
    rm 文件1 -r：删除文件夹
    rm 文件夹1/*：删除文件夹1下的所有文件但不删除文件夹1
touch a：创建一个文件a
mv a/tmp.txt b：把a文件夹下的tmp.txt文件移动到b
    mv a/tmp.txt b/tmp2.txt：把a文件夹下的tmp.txt文件移动到b并且重命名为tmp2.txt
cat 文件1：显示文件1的内容
vim 文件名：进入文件

复制文本：windows/Linux下：Ctrl + insert，Mac下：command + c
粘贴文本：windows/Linux下：Shift + insert，Mac下：command + v
```
作者：[Shmilysw](https://www.acwing.com/user/myspace/index/120382/)
链接：[https://www.acwing.com/activity/content/code/content/3858182/](https://www.acwing.com/activity/content/code/content/3858182/)
来源：[AcWing](https://www.acwing.com/)