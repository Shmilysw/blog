---
title: C#_三层（UI BLL DLL Model）架构模式
date: 2023-07-11
tags: [设计模式]
---

# 三层架构
三层结构符合`高内聚、低耦合`的特点，每个层职责明确。利用分层，降低了层间依赖，使系统的耦合更加松散，从而使系统更加容易维护和复用。

## 三层:
显示层（UI）、业务逻辑层(BLL)、数据访问层(DAL)再加上实体类库（Model）、数据库（DB）组成。

<center>
    <img src="https://cdn.acwing.com/media/article/image/2023/07/11/120382_092d78641f-csharp.png" alt="example">
</center>

<center>
    C#_（UI BLL DLL Model DB）架构
</center>

+ 1.显示层（UI）（UserInterface）
    - 1.1在UI中添加对Model、BLL的引用
    - 1.2编写代码传递数据给BLL层
    - 1.3职责
        + 向用户展示特定的业务数据
        + 采集用户的信息和操作

+ 2.业务逻辑层（BLL）（Business Logic Layer）
    - 2.1先建立业务逻辑层类库BLL
    - 2.2在BLL中添加对Model、DAL的引用
    - 2.3建立业务逻辑类
    - 2.4职责
        + 从UI中获取用户指令和数据，执行业务逻辑
        + 从UI中获取用户指令和数据，通过DAL写入数据源
        + 从DAL中获取数据，以供 UI 显示用
+ 3.数据访问层（DAL）（Data Access Layer）
    - 3.1先建立数据访问层类库DAL
    - 3.2在DAL中添加对Model的引用
    - 3.3建立数据访问类
        + 作用：跟数据源打交道
        + 职责：执行对数据的操作（增删改查）
+ 4.实体类库（Model）
    - 4.1作用：主要存放数据库中的表字段，对其字段进行封装