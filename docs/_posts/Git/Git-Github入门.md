---
title: git-github的入门
date: 2023-03-25
tags: [git, github]
---

## git-github入门

### 1. git介绍

工作区：仓库的目录。工作区是独立于各个分支的。
暂存区：数据暂时存放的区域，类似于工作区写入版本库前的缓存区。暂存区是独立于各个分支的。
版本库：存放所有已经提交到本地仓库的代码版本
版本结构：树结构(倒着的有向树)，树中每个节点代表一个代码版本,树中有`head`位置,表示你当前操作的位置。

工作区 ------> 暂存区(桥梁) ------>版本库

### 2. 演示ssh连接github
  （1）创建SSHkey
			打开`Git Bash`，输入`ssh-keygen -t rsa`
			会分别提示你文件名，密码（可不设置），确认密码。一般三次回车就可以
			在 `C:\Users\“你的用户名”.ssh` 目录下就会有.pub结尾的文件，用记事本打开，复制里面的东西，这就是你的SSH key
  （2）添加key到github
			github->设置->SSH公钥
			把key粘贴进去，标题默认是本机的名字

  （3）验证是否连接成功

  ```md
  ssh -T git@github.com
  Hi Shmilysw! You've successfully authenticated, but GitHub does not provide shell access. // 说明成功了
  ```
### 3. 演示git的基本操作
#### （创建项目，提交上传项目，拉取项目，添加删除用户分支，等）
  （1）添加用户名和邮箱
  ```md
  git config --global user.name shiwei
  git config --global user.email 1828045443@qq.com
  
  // 查看：
  cat .gitconfig
  [user]
        name = shiwei
        email = 1828045443@qq.com
  ```
  （2）创建空的项目（初始化仓库，将本地仓库和github仓库关联，将分支也关联）
  ```md
  git init
  git remote add origin git@github.com:Shmilysw/Learning.git // ssh
  git pull --rebase origin master // 即可跟刚创建的线上远程仓库的默认分支master关联
  git push -u origin master // 推送到github仓库
  ```
  （3）添加文件到仓库，并查看仓库状态，将修改的文件添加到暂存区内，提交版本
  ```md
  vim readme.txt
  git status    // 查看仓库状态 
  git add 文件名 // git add . （全部加到暂存区）
  git commit -m "add readme.txt"
  ```
  （4）在暂存区里删除内容（将文件从暂存区里拿出来，但是还是具有管理权），并对比仓库里的内容
  ```md
  git restore --stage readme.txt
  git diff readme.txt
  ```
  （5）查看当前当前节点之前的路径，版本的回退
  ```md
  git log 
  git reset --hard 版本名前五个字符
  ```
  （6）创建分支（协同开发），切换分支，查看分支，合并分支，删除分支
  ```md
  git checkout -b branch_name // 创建并切换到branch_name(dev)这个分支
  git branch                  // 查看所有分支和当前所处分支
  git checkout branch_name    // 切换到branch_name这个分支
  git merge branch_name       // 将分支branch_name合并到当前分支上
  git branch -d branch_name   // 删除本地仓库的branch_name分支
  ```
  （7）将当前分支推送到远程仓库
  ```md
  git push --set-upstream origin master // 第一次push的时候
  git push -u // (第一次需要-u以后不需要)：将当前分支推送到远程仓库
  ```
  （8）拉去项目到本地
  ```md
  git clone git@github.com:Shmilysw/Learning.git // ssh 
  ```

### 4. git的使用技巧（遇到的错误）

  + 如果`push`时提示错误信息，eg
  ```md
  $ git push -u origin master
  To https://github.com/xxxxx/xxxxx.git
  ! [rejected]        master -> master (non-fast-forward)
  error: failed to push some refs to 'https://github.com/xxxxx/xxxxx.git'
  hint: Updates were rejected because the tip of your current branch is behind
  hint: its remote counterpart. Integrate the remote changes (e.g.
  hint: 'git pull ...') before pushing again.
  hint: See the 'Note about fast-forwards' in 'git push --help' for details.
  ```
  + 问题原因
  git仓库中已经有一部分代码，所以它不允许你直接把你的代码覆盖上去。
  + 解决方案
  1. 强制推送，会覆盖之前的版本，所以建议谨慎使用！
  ```md
  // 添加使用 -f 强制推送 git push -f
  // 强推送到远端 master 分支
  git push -f --set-upstream origin master
  ```
  2. 同步（未使用过）
  ```md
  //把远程仓库和本地同步，消除差异
  git pull origin master --allow-unrelated-histories 
  // 重新 add 和 commit 相应文件
  git push origin master
  // 此时就能应该上传成功了
  ```
  3. 合并（未使用过）
  ```md
  // 先把 git 的东西 fetch 到你本地然后 merge 后再 push 
  git fetch
  git merge
  // 在使用的时候，git merge，又出现了以下的问题
  // xu:QProj xiaokai$ git merge
  // fatal: refusing to merge unrelated histories
  // 使用 git pull origin master --allow-unrelated-histories 处理一下
  // 继续执行 git merge
  // 如果提示，说明没问题！
  // fatal: You have not concluded your merge (MERGE_HEAD exists).
  // Please, commit your changes before you merge
  git add .
  git commit -m "提交信息"
  git merge
  // 然后输入git pull，显示如下
  // Already up-to-date.
  // 最后推到远端仓库
  git push origin master
  ```
  + 总结：不要乱删 .git 文件，如果是 git clone 下来的，就使用原本的 .git 文件，不要乱挪位置！  
### 5. github的基本介绍

  ```
代码托管平台
  ```