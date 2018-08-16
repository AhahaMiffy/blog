 config = {
     // 左边
     fullStyle1: `
  /*
   * 大家好，我是Miffy
   * 漂亮的HR小姐姐在招聘哦
   * 来来来，我先准备一下！
   */

  /* 首先给所有元素加上过渡效果 */
  * {
    transition: all .3s;
  }
  /* 白色背景太单调了，来点背景 */
  html {
    color: rgb(222,222,222); background: #073A78;
  }
  /* 文字离边框太近了 */
  .styleEditor {
    padding: .5em;
    border: 1px solid;
    margin: .5em;
    overflow: auto;
    width: 45vw; height: 90vh;
  }
  /* 代码高亮 */
  .token.selector{ color: rgb(133,153,0); }
  .token.property{ color: rgb(187,137,0); }
  .token.punctuation{ color: yellow; }
  .token.function{ color: rgb(42,161,152); }

  /* 加点 3D 效果呗 */
  html{
    p erspective: 1000px;
  }
  .styleEditor {
    position: fixed; left: 0; top: 0;
    -webkit-transition: none;
    transition: none;
    -webkit-transform: rotateY(10deg) translateZ(-100px) ;
            transform: rotateY(10deg) translateZ(-100px) ;
  }

  /* 接下来我给自己准备一个小黑板 */
  .resumeEditor{
    position: fixed; right: 0; top: 0;
    padding: .5em;  margin: .5em;
    width: 48vw; height: 90vh;
    border: 1px solid;
    background: white; color: #222;
    overflow: auto;
  }
  /* 好了，我开始写了哈 */

  `,
     fullStyle2: `
  /* 将Markdown翻译成 HTML
   */
  `,
     fullStyle3: `
  /* 再对 HTML 加点样式 */
  .resumeEditor{
    padding: 2em;
  }
  .resumeEditor h2{
    display: inline-block;
    border-bottom: 1px solid;
    margin: 1em 0 .5em;
  }
  .resumeEditor ul,.resumeEditor ol{
    list-style: none;
  }
  .resumeEditor ul> li::before{
    content: '•';
    margin-right: .5em;
  }
  .resumeEditor ol {
    counter-reset: section;
  }
  .resumeEditor ol li::before {
    counter-increment: section;
    content: counters(section, ".") " ";
    margin-right: .5em;
  }
  .resumeEditor blockquote {
    margin: 1em;
    padding: .5em;
    background: #ddd;
  }
  `,
     // 右边
     fullMarkdown: `# 招聘岗位

项目：某500强银行核心系统开发项目


## 后端：
  * Java开发，掌握Springboot开发，微服务相关

## 前端：
  * React开发
  * 其他前端框架想转React也可以哦

## 自动化测试：
  * 掌握Selenium，掌握其他测试工具也可以哦

## 配置管理：
  * 参与版本发布迭代等工作（Jekins,Linux）


> 以上岗位需要**3年工作经验**以上哦

> 要能接受**英文办公环境**的


`
 }
