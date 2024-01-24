---
outline: deep
---

# 前端开发规范

本开发规范适用保趣科技前端，开发者在开发过程中应按规范开发，如有好的建议可以一起提出修改

### CSS规范

将样式写在外部样式表中，尽量避免内联样式<br>
选择器命名要有意义，使用`短横线连接式` （例如 .my-class）<br>

### JavaScript规范

使用 `=== 和 !==` 进行比较，避免使用 == 和 !=<br>
变量声明应使用 `let 和 const` 代替 var<br>
函数参数名要有`意义`。<br>
变量和方法名命名应该为`小驼峰命名法` 例如：myFirstName<br>
常量命名应该为`全大写加下划线` 例如：FIRST_NAME<br>

bad

```js
let a1 = 1;  // 坚决杜绝使用让人看了也不知道是啥的字母数字组合
const user_last_login_time = {}; // 不要使用下划线命名变量
list(){}; // 只写一个list
```

goods

```js
const userLastLoginTime = {}; // 小驼峰可读性更高
getUserList(){}; // 方法名最好使用动词+名词的组合
```

### 方法名定义推荐加上动词前缀

- 加载数据使用 `load` 前缀，例如：`loadUserData` <br>
- 获取数据或值使用 `get` 前缀，例如： `getUserAvatar()`<br>

>load与get的关系是load前缀的方法可以包含多个get前缀的方法，get不可以包含load前缀的方法，可以理解为要加载的数据由一或多个get前缀的方法来获取

```js
 loadUserData(){
   this.getUserLocation();
   this.getUserInfo();
   ...
 }
```

- 设置数据或更新使用 `set/update` 前缀，例如： `updateUserAvatar()`<br>
- 格式化数据使用 `format`前缀， 例如： `formatUserList()`<br>
- 判断某种条件使用 `judge` 前缀，例如: j`udgeCanShowModal()`;<br>
`judgeIsVipUser()`;`judgeHasRecord()`;<br>

>有的同学直接使用`isVipUser()`这种命名方式，也可以，但是我更倾向于函数是一个动作，用 `const isVipUser = true 可以表示一个值`，表示一个判断动作的话还是加上前缀比较好。

- 监听事件或数据变化使用 `on`前缀，例如 `onFilterChanged()`; `onSubmitSuccess()`;<br>
- 点击事件使用 `click/tap` 前缀，例如 `clickUserAvatar()`;<br>

>移动端开发建议使用`tap`，PC端建议使用`click`
跳转新页面使用 `navTo` 前缀，例如 `navToDetailPage()`;<br>

### 命名风格全局要统一，有章可循

不是非要一定按照上面的前缀来命名，只要你做到让人一眼看上去就知道这个方法是干嘛的，而且要有规律可循，你可以按自己的喜好来命名。<br>
举个例子：<br>
你知道你的某个同事喜欢用 judge 前缀来命名具有判断相关逻辑的方法，那你看他代码时一看到 judge 开头的，不用看内容只看名你就大概知道是干嘛的了，节省下来的时间干别的不香么。

### 严格控制文件行数，最好保持在500行以下

该拆分的拆分，文件行数过多，可维护性和可读性都很差，别说什么业务本身就很复杂，拆不出来只能说你代码组织能力差。

拆分维度根据你的需求不同而不同，但是大体的思路可以是common通用方法、utils工具方法、gateway请求方法，presenter数据处理、models数据模型（TS）等，还可以根据你的业务逻辑来拆分，总之维度很多，重点是要拆的清晰，一定要避免拆的多而杂，那样还不如不拆。

### 严格控制代码重复率，不要图方便一味复制粘贴

代码重复率是一个团队代码质量评测一个很重要的指标，显而易见重复代码会占用更多空间，并且会增加维护的困难度，修改你复用的重复代码时很容易漏掉，要耗费额外精力去验证，所以尽量拆出你的复用逻辑，别偷懒，别给自己留坑。

### 写注释，随手写注释，刻在骨子里，像条件反射一样

不多说，你自己去看看不爱写注释的那位同事的代码，感受一下，你就明白为啥注释这么重要了，或者简单点，你就看你自己没写注释的代码，一个月前两个月前的，你还能完全捋清楚当时的思路不？

方法最好都写注释，变量名等如果你觉得实习生都可以轻松看懂的部分可以不写。

#### 务必添加注释列表

- 公共组件使用说明
- 各组件中重要函数或者类说明
- 复杂的业务逻辑处理说明
- 特殊情况的代码处理说明,对于代码中特殊用途的变量、存在临界值、函数中使用的 hack、使用了某种算法或思路等需要进行注释描述
- 多重 if 判断语句

#### 单行注释

注释单独一行，不要在代码后的同一行内加注释。例如：

```js
  // bad
  var name =”abc”; // 姓名    

  // good
  // 姓名
  var name = “abc”;    
```

#### 多行注释

```js
// 组件使用说明，和调用说明
      /**
      * 组件名称
      * @module 组件存放位置
      * @desc 组件描述
      * @author 组件作者
      * @date 2017年12月05日17:22:43
      * @param {Object} [title]    - 参数说明
      * @param {String} [columns] - 参数说明
      * @example 调用示例
      *  <hbTable :title="title" :columns="columns" :tableData="tableData"></hbTable>
      **/
```

### 不要使用变量拼接会经常被全局搜索的字符串

```js
const str = 'default';
const defaultAvatar = `https://www.aa.com/imgs/${str}-avatar.png`;
```

这样如果你想搜索哪里用到了default-avatar.png这个图片是搜不到的， 类似的还有跳转路径，埋点标识等，要格外注意。

### 使用ES6+语法，简化代码，提高效率

JavaScript语言本身也有一些令人不满意的地方，如变量提升，回调地狱等，ES6+主要是为了解决ES5的先天不足，每一次标准的诞生都意味着语言的完善，功能的加强。

### 附： 函数方法常用的动词

```base
get 获取/set 设置,
add 增加/remove 删除
create 创建/destory 移除
start 启动/stop 停止
open 打开/close 关闭,
read 读取/write 写入
load 载入/save 保存,
create 创建/destroy 销毁
begin 开始/end 结束,
backup 备份/restore 恢复
import 导入/export 导出,
split 分割/merge 合并
inject 注入/extract 提取,
attach 附着/detach 脱离
bind 绑定/separate 分离,
view 查看/browse 浏览
edit 编辑/modify 修改,
select 选取/mark 标记
copy 复制/paste 粘贴,
undo 撤销/redo 重做
insert 插入/delete 移除,
add 加入/append 添加
clean 清理/clear 清除,
index 索引/sort 排序
find 查找/search 搜索,
increase 增加/decrease 减少
play 播放/pause 暂停,
launch 启动/run 运行
compile 编译/execute 执行,
debug 调试/trace 跟踪
observe 观察/listen 监听,
build 构建/publish 发布
input 输入/output 输出,
encode 编码/decode 解码
encrypt 加密/decrypt 解密,
compress 压缩/decompress 解压缩
pack 打包/unpack 解包,
parse 解析/emit 生成
connect 连接/disconnect 断开,
send 发送/receive 接收
download 下载/upload 上传,
refresh 刷新/synchronize 同步
update 更新/revert 复原,
lock 锁定/unlock 解锁
check out 签出/check in 签入,
submit 提交/commit 交付
push 推/pull 拉,
expand 展开/collapse 折叠
begin 起始/end 结束,
start 开始/finish 完成
enter 进入/exit 退出,
abort 放弃/quit 离开
obsolete 废弃/depreciate 废旧,
collect 收集/aggregate 聚集

```
