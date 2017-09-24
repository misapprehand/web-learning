## 列出所有tag

```sh
  git tag -l -n5
```

## 按标签的名称序号列出所有tag

```sh
  git tag -l -n5 -sort=v:refname
```

## 取出某一个tag的代码

例如: 取出tag v0.1.1的代码

```sh
  git checkout -b b0.1.1 v0.1.1
```

看到
```sh
  Switched to a new branch 'b0.1.1'
```

再输入
```sh
  git branch 
```

看到
```sh
 * b0.1.1   <-- * 表示当前分支
   master
```

这时候的代码就是tag v0.1.1的代码

# 常见问题
## 创建分支失败
### 分支已经存在

输入

```sh
  git checkout -b b0.1.1 v0.1.1
```

看到
```sh
  fatal: A branch named 'b0.1.1' already exists.
```

表示 b0.1.1 分支已经存在。可以直接切换到 b0.1.1分支

```sh
  git checkout b0.1.1 
```

### 有文件没有提交 

输入

```sh
  git checkout -b b0.1.2 v0.1.2
```

看到
```sh
error: Your local changes to the following files would be overwritten by checkout:
	README.md
Please commit your changes or stash them before you switch branches.
Aborting
  
```
说明目录下有文件没有提交

解决一： 提交文件 
解决二： 暂存文件 

```sh
  git stash
```
再运行

```sh
  git checkout -b b0.1.2 v0.1.2
```
