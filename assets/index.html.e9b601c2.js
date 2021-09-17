import{r as l,o as n,c as a,a as e,b as s,F as i,e as t}from"./app.78648994.js";const u={},r=e("h1",{id:"git的使用",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#git的使用","aria-hidden":"true"},"#"),t(" Git的使用")],-1),c=e("p",null,[e("strong",null,"参考链接")],-1),d={href:"http://git-scm.com/docs/git-init/zh_HANS-CN",target:"_blank",rel:"noopener noreferrer"},g=t("Git - Documentation"),h=t(" 官方中英文文档"),o={href:"http://gitref.justjavac.com/basic/",target:"_blank",rel:"noopener noreferrer"},b=t("Git 参考手册 (justjavac.com)"),m={href:"https://www.bilibili.com/video/BV1vy4y1s7k6",target:"_blank",rel:"noopener noreferrer"},p=t("尚硅谷Git教程2020"),f=e("h2",{id:"git安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#git安装","aria-hidden":"true"},"#"),t(" Git安装")],-1),x=e("h3",{id:"windows",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#windows","aria-hidden":"true"},"#"),t(" Windows")],-1),v=e("h3",{id:"linux",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#linux","aria-hidden":"true"},"#"),t(" Linux")],-1),k=e("h2",{id:"git命令",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#git命令","aria-hidden":"true"},"#"),t(" Git命令")],-1),G=e("h3",{id:"设置用户签名",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#设置用户签名","aria-hidden":"true"},"#"),t(" 设置用户签名")],-1),w=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"权重"),e("th",null,"中文名"),e("th",null,"优先级"),e("th",null,"配置文件")])]),e("tbody",null,[e("tr",null,[e("td",null,"system"),e("td",null,"系统级别"),e("td",null,"低"),e("td",null,[e("code",null,"/etc/gitconfig")])]),e("tr",null,[e("td",null,"global"),e("td",null,"全局级别"),e("td",null,"中"),e("td",null,[e("code",null,"~/.gitconfig")])]),e("tr",null,[e("td",null,"local"),e("td",null,"仓库级别"),e("td",null,"高"),e("td",null,[e("code",null,".git/config")])])])],-1),y=e("p",null,[e("strong",null,"查看设置:")],-1),H=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"git"),t(" config --global -l\n"),e("span",{class:"token function"},"git"),t(" config --system -l\n"),e("span",{class:"token function"},"git"),t(" config --local -l\n")])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br")])],-1),j=e("p",null,[t("或直接打开相应位置的"),e("code",null,"gitconfig"),t("文件")],-1),q=e("p",null,[e("strong",null,"设置全局:")],-1),L=e("p",null,"首次使用必须设置, 否则会报错",-1),_=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"git"),t(" cinfig --global user.name 用户名\n"),e("span",{class:"token function"},"git"),t(" config --global user.email 邮箱\n")])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br")])],-1),C=e("h3",{id:"初始化项目-init",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#初始化项目-init","aria-hidden":"true"},"#"),t(" 初始化项目 / init")],-1),S=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"git"),t(" init\n")])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br")])],-1),T=e("p",null,[e("img",{src:"/assets/image-20210816115520469.7d678c22.png",alt:"image-20210816115520469"})],-1),A=e("h3",{id:"查看状态-status",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#查看状态-status","aria-hidden":"true"},"#"),t(" 查看状态 / status")],-1),D=e("p",null,"假如我新建了一个文件, 并在文件中添加了一些内容, 然后再执行:",-1),N=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"git"),t(" status\n")])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br")])],-1),z=e("p",null,[e("img",{src:"/assets/image-20210816120033495.3ddc808b.png",alt:"image-20210816120033495"})],-1),B=e("p",null,"或者使用:",-1),E=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"git"),t(" status -s\n")])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br")])],-1),F=e("p",null,[e("img",{src:"/assets/image-20210816120138000.6f2d04d6.png",alt:"image-20210816120138000"})],-1),I=e("h3",{id:"添加暂存区-add",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#添加暂存区-add","aria-hidden":"true"},"#"),t(" 添加暂存区 / add")],-1),O=e("p",null,[t("现在我们有一个文件"),e("code",null,"first.txt"),t(", 由于我们只新建了这个文件, 所以他现在仍然处于工作区之中, 也正如上面两张图展示的那样. 现在, 如果我想把他添加到暂存区, 需要用如下命令:")],-1),P=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"git"),t(),e("span",{class:"token function"},"add"),t(" first.txt\n")])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br")])],-1),R=e("p",null,[e("img",{src:"/assets/image-20210816120845722.d8662ce1.png",alt:"image-20210816120845722"})],-1),U=e("p",null,"此时再看状态, 发现其状态已经发生了变化. 这说明这个文件被放在了暂存区了. 此时, 假如我们后悔了, 可以用如下命令在缓存区移除该文件:",-1),V=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"git"),t(),e("span",{class:"token function"},"rm"),t(" --cached first.txt\n")])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br")])],-1),W=e("p",null,[e("img",{src:"/assets/image-20210816202356044.54eb90f6.png",alt:"image-20210816202356044"})],-1),J=e("h3",{id:"提交本地库-commit",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#提交本地库-commit","aria-hidden":"true"},"#"),t(" 提交本地库 / commit")],-1),K=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"git"),t(" commit -m "),e("span",{class:"token string"},'"Test of commit"'),t(" first.txt\n")])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br")])],-1),M=e("p",null,[e("img",{src:"/assets/image-20210816202942899.0420ed5a.png",alt:"image-20210816202942899"})],-1),Q=e("p",null,[t("可以通过"),e("code",null,"git reflog"),t("或"),e("code",null,"git log"),t("(更详细)命令查看日志信息:")],-1),X=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"git"),t(" reflog\n"),e("span",{class:"token function"},"git"),t(" log\n")])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br")])],-1),Y=e("p",null,[e("img",{src:"/assets/image-20210816203153718.2ded4b5e.png",alt:"image-20210816203153718"})],-1),Z=e("p",null,[e("em",null,"4fa2714那一串是版本号")],-1),$=e("p",null,"重复上述操作, 结果展示如下:",-1),ll=e("p",null,[e("img",{src:"/assets/image-20210816204026805.a93df5c7.png",alt:"image-20210816204026805"})],-1),nl=e("h3",{id:"版本穿梭-reset",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#版本穿梭-reset","aria-hidden":"true"},"#"),t(" 版本穿梭 / reset")],-1),al=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"git"),t(" reset 4fa27\n")])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br")])],-1),el=e("h2",{id:"git分支",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#git分支","aria-hidden":"true"},"#"),t(" Git分支")],-1),sl=e("h3",{id:"分支特性",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#分支特性","aria-hidden":"true"},"#"),t(" 分支特性")],-1),il=e("h3",{id:"分支操作",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#分支操作","aria-hidden":"true"},"#"),t(" 分支操作")],-1),tl=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"命令"),e("th",null,"作用")])]),e("tbody",null,[e("tr",null,[e("td",null,"git branch 分支名"),e("td",null,"创建分支")]),e("tr",null,[e("td",null,"git branch -v"),e("td",null,"查看分支")]),e("tr",null,[e("td",null,"git checkout 分支名"),e("td",null,"切换分支")]),e("tr",null,[e("td",null,"git merge 分支名"),e("td",null,"把指定的分支合并到当前分支上")])])],-1),ul=e("p",null,[e("img",{src:"/assets/image-20210817095415808.07d985e9.png",alt:"image-20210817095415808"})],-1),rl=e("p",null,"合并分支的演示(正常合并, 没有冲突):",-1),cl=e("p",null,[e("img",{src:"/assets/image-20210817101324865.e3c67ecd.png",alt:"image-20210817101324865"})],-1),dl=e("p",null,[t("如果分支有冲突, 比如, 我们在master分支和hot-fix分支都修改了"),e("code",null,"first.txt"),t("这个文件, 此时若执行合并命令, 则会如下所示:")],-1),gl=e("p",null,[e("img",{src:"/assets/image-20210817142351555.fcd85598.png",alt:"image-20210817142351555"})],-1),hl=e("p",null,[t("此时git不知道为我们保留哪份修改, 所以我们要手动进行修改, 使用命令"),e("code",null,"vim first.txt"),t(" 打开该文件, 如图:")],-1),ol=e("p",null,[e("img",{src:"/assets/image-20210817142653697.fbccdbb5.png",alt:"image-20210817142653697"})],-1),bl=e("p",null,"上面两个区域分别表示在master分支和hot-fix分支中的变化, 我们要手动修改这个文件, 如下:",-1),ml=e("p",null,[e("img",{src:"/assets/image-20210817142756989.37435686.png",alt:"image-20210817142756989"})],-1),pl=e("p",null,"然后提交即可, 整个流程如下:",-1),fl=e("p",null,[e("img",{src:"/assets/image-20210817142850974.ce3299cb.png",alt:"image-20210817142850974"})],-1),xl=e("h2",{id:"远程库",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#远程库","aria-hidden":"true"},"#"),t(" 远程库")],-1),vl=e("h3",{id:"常见的远程库",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#常见的远程库","aria-hidden":"true"},"#"),t(" 常见的远程库")],-1),kl=e("ul",null,[e("li",null,"GitHub"),e("li",null,"Gitee"),e("li",null,"GitLab")],-1),Gl=e("p",null,"其中GitLab是基于局域网的",-1),wl=e("h3",{id:"起别名",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#起别名","aria-hidden":"true"},"#"),t(" 起别名")],-1),yl=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"命令"),e("th",null,"作用")])]),e("tbody",null,[e("tr",null,[e("td",null,"git remote -v"),e("td",null,"查看别名")]),e("tr",null,[e("td",null,"git remote add 别名 URL"),e("td",null,"起别名")])])],-1),Hl=e("p",null,[e("img",{src:"/assets/image-20210817143849376.5a7c3e49.png",alt:"image-20210817143849376"})],-1),jl=e("p",null,"之所以有两个, 是因为我们在fetch或push的时候都可以使用这个别名",-1),ql=e("h3",{id:"推送到远程库-push",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#推送到远程库-push","aria-hidden":"true"},"#"),t(" 推送到远程库 / push")],-1),Ll=e("p",null,"由于之前设置过别名, 所以这里可以直接用别名, 由于是master分支, 所以:",-1),_l=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"git"),t(" push note master\n")])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br")])],-1),Cl=e("p",null,[e("img",{src:"/assets/image-20210817145812133.7b6c023f.png",alt:"image-20210817145812133"})],-1),Sl=e("p",null,[e("img",{src:"/assets/image-20210817145909849.a03576ea.png",alt:"image-20210817145909849"})],-1),Tl=e("p",null,"此时内容被成功地提交到了远程库中",-1),Al=e("p",null,"其实上述过程中可能会弹出登陆窗口要求我们登录, 如果我们登录的账号就是仓库的所有者账号, 那自然没有什么权限问题, 但是假如我们有一个合作者, 他也要向远程仓库提交东西, 则我们需要在GitHub或Gitee中将其邀请到我们的项目中来以授予相应的权限:",-1),Dl=e("p",null,[e("img",{src:"/assets/image-20210817151722963.3a389b1b.png",alt:"image-20210817151722963"})],-1),Nl=e("h3",{id:"拉取到本地库-pull",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#拉取到本地库-pull","aria-hidden":"true"},"#"),t(" 拉取到本地库 / pull")],-1),zl=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"git"),t(" pull note master\n")])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br")])],-1),Bl=e("h3",{id:"克隆-clone",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#克隆-clone","aria-hidden":"true"},"#"),t(" 克隆 / clone")],-1),El=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"git"),t(" clone "),e("span",{class:"token punctuation"},"["),t("HTTP/SSH"),e("span",{class:"token punctuation"},"]"),t("\n")])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br")])],-1),Fl=e("h3",{id:"团队协作",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#团队协作","aria-hidden":"true"},"#"),t(" 团队协作")],-1),Il=e("p",null,[e("code",null,"fork"),t("和"),e("code",null,"pull request")],-1),Ol=e("h3",{id:"免密登录",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#免密登录","aria-hidden":"true"},"#"),t(" 免密登录")],-1),Pl=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,[t("ssh-keygen -t rsa -C "),e("span",{class:"token number"},"166"),t("@qq.com\n")])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br")])],-1),Rl=e("ul",null,[e("li",null,[e("code",null,"-t"),t("指定加密方式")]),e("li",null,[e("code",null,"-C"),t("指定描述")])],-1),Ul=e("p",null,[t("如上命令在"),e("code",null,"~/.ssh/"),t("目录下会生成一个公钥和私钥, 在"),e("code",null,"GitHub/Gitee"),t("中将这个公钥加入, 即可免密登录")],-1),Vl=e("p",null,[e("img",{src:"/assets/image-20210817155403333.6edd0eb0.png",alt:"image-20210817155403333"})],-1),Wl=e("h2",{id:"idea集成",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#idea集成","aria-hidden":"true"},"#"),t(" IDEA集成")],-1),Jl=e("h3",{id:"配置忽略文件",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#配置忽略文件","aria-hidden":"true"},"#"),t(" 配置忽略文件")],-1),Kl=e("p",null,[t("在"),e("code",null,"xxx.ignore"),t("文件中用通配符设置")],-1),Ml=e("blockquote",null,[e("p",null,[e("strong",null,"建议:")]),e("ol",null,[e("li",null,"原则上这个文件放在哪里都可以, 但是建议")])],-1);u.render=function(t,u){const Ql=l("OutboundLink");return n(),a(i,null,[r,e("blockquote",null,[c,e("ul",null,[e("li",null,[e("p",null,[e("a",d,[g,s(Ql)]),h])]),e("li",null,[e("p",null,[e("a",o,[b,s(Ql)])])]),e("li",null,[e("p",null,[e("a",m,[p,s(Ql)])])])])]),f,x,v,k,G,w,y,H,j,q,L,_,C,S,T,A,D,N,z,B,E,F,I,O,P,R,U,V,W,J,K,M,Q,X,Y,Z,$,ll,nl,al,el,sl,il,tl,ul,rl,cl,dl,gl,hl,ol,bl,ml,pl,fl,xl,vl,kl,Gl,wl,yl,Hl,jl,ql,Ll,_l,Cl,Sl,Tl,Al,Dl,Nl,zl,Bl,El,Fl,Il,Ol,Pl,Rl,Ul,Vl,Wl,Jl,Kl,Ml],64)};export{u as default};
