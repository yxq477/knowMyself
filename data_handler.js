import { TSExpressionWithTypeArguments } from "babel-types";

// 加载更多评论
setInterval(() => document.querySelector('.more_txt').click(), 3500)

// 展开子评论
setInterval(() => { document.querySelectorAll('[node-type=more_child_comment] a')[0].click() }, 3500)

// cout 评论数 校验和微博显示的评论数的差距
document.querySelectorAll('div.WB_text')

// 手动去掉 Script 脚本

// 数据处理 目的是保存成本地 html 去掉img的展示

const imgs = document.getElementsByTagName('img');
for (let i = 0; i < imgs.length; i++) {
  const element = imgs[i];
  element.src = ''
}

// 提取生成本地文本集
let a = ''
document.querySelectorAll('.WB_text').forEach(i => a += `${i.lastChild.textContent}\n`)  


// curl -i -k 'https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=【百度云应用的AK】&client_secret=【百度云应用的SK】'
// curl -H "Content-Type: application/json" -X POST -d '{"text": "" }' "https://aip.baidubce.com/rpc/2.0/nlp/v1/lexer?access_token=【百度云应用的access_token】"

// 竟然只能调 不到350个字，不然数据结构就会乱，服了，只能又写代码了

curl -H "Content-Type: application/json; charset=utf-8" -X POST -d '{"text": "​​​​我给你坦白吧，女生永远没有理想型，只有不理想型。永远不知道自己喜欢的是什么，瞬息万变，但女生知道自己不喜欢什么！！！！对很难不赞同:不想要什么还是清楚的哈哈哈哈哈哈哈:我们俩哈哈哈哈哈哈哈哈哈哈哈哈哈精辟对！！:看看我的简介！哈哈哈哈，就跟别人问我想吃啥菜我说不出来，但问我不想吃啥我绝对秒答“苦瓜相关的全部”。理论课程结束蹭蹭，一开始是喜欢长得好看的，后来缘分到了，觉得虽然他长的没有那么帅也没有关系，最后待久了觉得他越来越好看赶紧出书哈哈哈这个真的对:男生也这样总结的太精辟了！！理想型随下一任而变，但是不能接受的永远不可以其实达到及格线（不太糟）之后，随缘吧男生也是这样吧赞同，对个人来说，只要不讨厌的都愿意接近巧了不是很难不赞同哈哈哈哈哈哈哈哈哈哈哈原来如此很难不赞同太赞同了！！！！！太对了！！是的，我不知道自己喜欢什么但知道不喜欢什么可以的大差不差都可以不可以发绝对不可以说的对姐妹！！！别说传统医学了，现代医学也有局限性，你没有听到不同声音不代表其他人都没有思考。hhhh" }' "https://aip.baidubce.com/rpc/2.0/nlp/v1/lexer?charset=UTF-8&access_token=【token】"