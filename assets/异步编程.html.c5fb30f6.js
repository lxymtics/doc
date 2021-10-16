import{c as n,o as s,F as a,b as t,d as o}from"./app.7d2ff5c0.js";import{_ as e}from"./plugin-vue_export-helper.5a098b48.js";const c={},p=t("h2",{id:"执行顺序的问题",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#执行顺序的问题","aria-hidden":"true"},"#"),o(" 执行顺序的问题")],-1),l=t("p",null,"JavaScript是单线程的, 他有一个任务队列, 当空闲的时候会从任务队列中取出并执行",-1),u=t("p",null,[o("假如在"),t("code",null,"<script>"),o("标签中有如下代码:")],-1),i=t("div",{class:"language-javascript ext-js line-numbers-mode"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token function"},"setTimeout"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token operator"},"=>"),o(),t("span",{class:"token punctuation"},"{"),o("\n  console"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"log"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"该我上场表演了"'),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),o("\n"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),o(),t("span",{class:"token number"},"10"),t("span",{class:"token punctuation"},")"),o("\n"),t("span",{class:"token keyword"},"for"),t("span",{class:"token punctuation"},"("),o("int i "),t("span",{class:"token operator"},"="),o(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),o(" i "),t("span",{class:"token operator"},"<"),o(),t("span",{class:"token number"},"2000"),t("span",{class:"token punctuation"},";"),o(),t("span",{class:"token operator"},"++"),o("i"),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token punctuation"},"{"),o("\n  console"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"log"),t("span",{class:"token punctuation"},"("),o("i"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),o("\n"),t("span",{class:"token punctuation"},"}"),o("\n")])]),t("div",{class:"line-numbers"},[t("span",{class:"line-number"},"1"),t("br"),t("span",{class:"line-number"},"2"),t("br"),t("span",{class:"line-number"},"3"),t("br"),t("span",{class:"line-number"},"4"),t("br"),t("span",{class:"line-number"},"5"),t("br"),t("span",{class:"line-number"},"6"),t("br")])],-1),r=t("p",null,[o('这个程序并不能保证"该我上场表演了"的输出会在10ms后输出, 因为: 10ms的延迟过后, 输出这句话的任务被加入了这个任务队列, 但是, 由于程序还在执行for循环, 那么, 程序并不会从任务队列中取出'),t("code",null,'console.log("该我上场表演了")'),o("的命令, 而是会在打印完1999后输出:")],-1),k=t("p",null,[t("img",{src:"/assets/image-20210828083817912.702b76fb.png",alt:"image-20210828083817912"})],-1),b=t("p",null,[o("而Promise的"),t("code",null,"then"),o("则不同, 他有一个"),t("strong",null,"微队列"),o("的概念, 相对而言, 我们把原来的那个任务队列为"),t("strong",null,"宏队列"),o(", 前者具有更高的执行等级(也就是说, 先扫描微队列, 再扫描宏队列, 而不是打断宏队列)")],-1),m=t("div",{class:"language-javascript ext-js line-numbers-mode"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token function"},"setTimeout"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token operator"},"=>"),o(),t("span",{class:"token punctuation"},"{"),o("\n  console"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"log"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"该我上场表演了"'),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),o("\n"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),o(),t("span",{class:"token number"},"1000"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),o("\n\n"),t("span",{class:"token keyword"},"new"),o(),t("span",{class:"token class-name"},"Promise"),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"resolve"),o(),t("span",{class:"token operator"},"=>"),o(),t("span",{class:"token punctuation"},"{"),o("\n  "),t("span",{class:"token function"},"resolve"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),o("\n  console"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"log"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"Promise"'),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),o("\n"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"then"),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"value"),o(),t("span",{class:"token operator"},"=>"),o(),t("span",{class:"token punctuation"},"{"),o("\n  console"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"log"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"Then"'),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),o("\n"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),o("\n\n"),t("span",{class:"token keyword"},"for"),o(),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"let"),o(" i "),t("span",{class:"token operator"},"="),o(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),o(" i "),t("span",{class:"token operator"},"<"),o(),t("span",{class:"token number"},"200"),t("span",{class:"token punctuation"},";"),o(),t("span",{class:"token operator"},"++"),o("i"),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token punctuation"},"{"),o("\n  console"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"log"),t("span",{class:"token punctuation"},"("),o("i"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),o("\n"),t("span",{class:"token punctuation"},"}"),o("\n\n"),t("span",{class:"token comment"},"// 结果: "),o("\n"),t("span",{class:"token comment"},"// Promise"),o("\n"),t("span",{class:"token comment"},"// 1....199"),o("\n"),t("span",{class:"token comment"},"// Then"),o("\n"),t("span",{class:"token comment"},"// 该我上场表演了"),o("\n")])]),t("div",{class:"line-numbers"},[t("span",{class:"line-number"},"1"),t("br"),t("span",{class:"line-number"},"2"),t("br"),t("span",{class:"line-number"},"3"),t("br"),t("span",{class:"line-number"},"4"),t("br"),t("span",{class:"line-number"},"5"),t("br"),t("span",{class:"line-number"},"6"),t("br"),t("span",{class:"line-number"},"7"),t("br"),t("span",{class:"line-number"},"8"),t("br"),t("span",{class:"line-number"},"9"),t("br"),t("span",{class:"line-number"},"10"),t("br"),t("span",{class:"line-number"},"11"),t("br"),t("span",{class:"line-number"},"12"),t("br"),t("span",{class:"line-number"},"13"),t("br"),t("span",{class:"line-number"},"14"),t("br"),t("span",{class:"line-number"},"15"),t("br"),t("span",{class:"line-number"},"16"),t("br"),t("span",{class:"line-number"},"17"),t("br"),t("span",{class:"line-number"},"18"),t("br"),t("span",{class:"line-number"},"19"),t("br"),t("span",{class:"line-number"},"20"),t("br")])],-1);var g=e(c,[["render",function(t,o){return s(),n(a,null,[p,l,u,i,r,k,b,m],64)}]]);export{g as default};
