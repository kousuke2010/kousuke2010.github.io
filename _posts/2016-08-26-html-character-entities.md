---
layout: post
title: "html字符实体(HTML Character Entities)"
date: 2016-08-26 10:50:53 +0800
categories: notes
tags: html
permalink: /:categories/:month-:day-:title
excerpt: #为空的清空默认摘要
---
之前发布过一篇介绍 jekyll 的文章，其中里面的调用标签代码会被 jekyll 编译出来导致无法显示代码，所以当时我就用以中括号代替大括号的形式输出到页面，但是这样子不好使，所以我要通过 html 字符实体代替大括号等调用标签使用到的符号。

>### html字符实体(HTML Character Entities)
>在 HTML 中，某些字符是预留的。
>
>在 HTML 中不能使用小于号（<）和大于号（>），这是因为浏览器会误认为它们是标签。
>
>如果希望正确地显示预留字符，我们必须在 HTML 源代码中使用字符实体（character entities）。
>
>**提示**：使用实体名而不是数字的好处是，名称易于记忆。不过坏处是，浏览器也许并不支持所有实体名称（对实体数字的支持却很好）。
>
>HTML 4.01 支持 ISO 8859-1 (Latin-1) 字符集。
>
>ISO-8859-1 的较低部分（从 1 到 127 之间的代码）是最初的 7 比特 ASCII。
>
>ISO-8859-1 的较高部分（从 160 到 255 之间的代码）全都有实体名称。
>
>这些符号中的大多数都可以在不进行实体引用的情况下使用，但是实体名称或实体编号为那些不容易通过键盘键入的符号提供了表达的方法。
>
>**注释**：实体名称对大小写敏感。

### 带有实体名称的 ASCII 实体

|结果  |描述          |实体名称    |实体编号    |
|:----:|:------------:|:----------:|:----------:|
|"     |quotation mark|&amp;quot;  |&amp;#34;   |
|'     |apostrophe    |&amp;apos;  |&amp;#39;   |
|&     |ampersand     |&amp;amp;   |&amp;#38;   |
|<     |less-than     |&amp;lt;    |&amp;#60;   |
|>     |greater-than  |&amp;gt;    |&amp;#62;   |

### ISO 8859-1 符号实体

|结果  |描述                         |实体名称     |实体编号   |
|:----:|:---------------------------:|:-----------:|:---------:|
|      |non-breaking space           |&amp;nbsp;   |&amp;#160; |
|¡     |inverted exclamation mark    |&amp;iexcl;  |&amp;#161; |
|¢     |cent                         |&amp;cent;   |&amp;#162; |
|£     |pound                        |&amp;pound;  |&amp;#163; |
|¤     |currency                     |&amp;curren; |&amp;#164; |
|¥     |yen                          |&amp;yen;    |&amp;#165; |
|¦     |broken vertical bar          |&amp;brvbar; |&amp;#166; |
|§     |section                      |&amp;sect;   |&amp;#167; |
|¨     |spacing diaeresis            |&amp;uml;    |&amp;#168; |
|©     |copyright                    |&amp;copy;   |&amp;#169; |
|ª     |feminine ordinal indicator   |&amp;ordf;   |&amp;#170; |
|«     |angle quotation mark (left)  |&amp;laquo;  |&amp;#171; |
|¬     |negation                     |&amp;not;    |&amp;#172; |
|      |soft hyphen                  |&amp;shy;    |&amp;#173; |
|®     |registered trademark         |&amp;reg;    |&amp;#174; |
|¯     |spacing macron               |&amp;macr;   |&amp;#175; |
|°     |degree                       |&amp;deg;    |&amp;#176; |
|±     |plus-or-minus                |&amp;plusmn; |&amp;#177; |
|²     |superscript 2                |&amp;sup2;   |&amp;#178; |
|³     |superscript 3                |&amp;sup3;   |&amp;#179; |
|´     |spacing acute                |&amp;acute;  |&amp;#180; |
|µ     |micro                        |&amp;micro;  |&amp;#181; |
|¶     |paragraph                    |&amp;para;   |&amp;#182; |
|·     |middle dot                   |&amp;middot; |&amp;#183; |
|¸     |spacing cedilla              |&amp;cedil;  |&amp;#184; |
|¹     |superscript 1                |&amp;sup1;   |&amp;#185; |
|º     |masculine ordinal indicator  |&amp;ordm;   |&amp;#186; |
|»     |angle quotation mark (right) |&amp;raquo;  |&amp;#187; |
|¼     |fraction 1/4                 |&amp;frac14; |&amp;#188; |
|½     |fraction 1/2                 |&amp;frac12; |&amp;#189; |
|¾     |fraction 3/4                 |&amp;frac34; |&amp;#190; |
|¿     |inverted question mark       |&amp;iquest; |&amp;#191; |
|×     |multiplication               |&amp;times;  |&amp;#215; |
|÷     |division                     |&amp;divide; |&amp;#247; |

### ISO 8859-1 字符实体

|结果 |描述                          |实体名称      |实体编号  |
|:---:|:----------------------------:|:------------:|:--------:|
|À    |capital a, grave accent       |&amp;Agrave;  |&amp;#192;|
|Á    |capital a, acute accent       |&amp;Aacute;  |&amp;#193;|
|Â    |capital a, circumflex accent  |&amp;Acirc;   |&amp;#194;|
|Ã    |capital a, tilde              |&amp;Atilde;  |&amp;#195;|
|Ä    |capital a, umlaut mark        |&amp;Auml;    |&amp;#196;|
|Å    |capital a, ring               |&amp;Aring;   |&amp;#197;|
|Æ    |capital ae                    |&amp;AElig;   |&amp;#198;|
|Ç    |capital c, cedilla            |&amp;Ccedil;  |&amp;#199;|
|È    |capital e, grave accent       |&amp;Egrave;  |&amp;#200;|
|É    |capital e, acute accent       |&amp;Eacute;  |&amp;#201;|
|Ê    |capital e, circumflex accent  |&amp;Ecirc;   |&amp;#202;|
|Ë    |capital e, umlaut mark        |&amp;Euml;    |&amp;#203;|
|Ì    |capital i, grave accent       |&amp;Igrave;  |&amp;#204;|
|Í    |capital i, acute accent       |&amp;Iacute;  |&amp;#205;|
|Î    |capital i, circumflex accent  |&amp;Icirc;   |&amp;#206;|
|Ï    |capital i, umlaut mark        |&amp;Iuml;    |&amp;#207;|
|Ð    |capital eth, Icelandic        |&amp;ETH;     |&amp;#208;|
|Ñ    |capital n, tilde              |&amp;Ntilde;  |&amp;#209;|
|Ò    |capital o, grave accent       |&amp;Ograve;  |&amp;#210;|
|Ó    |capital o, acute accent       |&amp;Oacute;  |&amp;#211;|
|Ô    |capital o, circumflex accent  |&amp;Ocirc;   |&amp;#212;|
|Õ    |capital o, tilde              |&amp;Otilde;  |&amp;#213;|
|Ö    |capital o, umlaut mark        |&amp;Ouml;    |&amp;#214;|
|Ø    |capital o, slash              |&amp;Oslash;  |&amp;#216;|
|Ù    |capital u, grave accent       |&amp;Ugrave;  |&amp;#217;|
|Ú    |capital u, acute accent       |&amp;Uacute;  |&amp;#218;|
|Û    |capital u, circumflex accent  |&amp;Ucirc;   |&amp;#219;|
|Ü    |capital u, umlaut mark        |&amp;Uuml;    |&amp;#220;|
|Ý    |capital y, acute accent       |&amp;Yacute;  |&amp;#221;|
|Þ    |capital THORN, Icelandic      |&amp;THORN;   |&amp;#222;|
|ß    |small sharp s, German         |&amp;szlig;   |&amp;#223;|
|à    |small a, grave accent         |&amp;agrave;  |&amp;#224;|
|á    |small a, acute accent         |&amp;aacute;  |&amp;#225;|
|â    |small a, circumflex accent    |&amp;acirc;   |&amp;#226;|
|ã    |small a, tilde                |&amp;atilde;  |&amp;#227;|
|ä    |small a, umlaut mark          |&amp;auml;    |&amp;#228;|
|å    |small a, ring                 |&amp;aring;   |&amp;#229;|
|æ    |small ae                      |&amp;aelig;   |&amp;#230;|
|ç    |small c, cedilla              |&amp;ccedil;  |&amp;#231;|
|è    |small e, grave accent         |&amp;egrave;  |&amp;#232;|
|é    |small e, acute accent         |&amp;eacute;  |&amp;#233;|
|ê    |small e, circumflex accent    |&amp;ecirc;   |&amp;#234;|
|ë    |small e, umlaut mark          |&amp;euml;    |&amp;#235;|
|ì    |small i, grave accent         |&amp;igrave;  |&amp;#236;|
|í    |small i, acute accent         |&amp;iacute;  |&amp;#237;|
|î    |small i, circumflex accent    |&amp;icirc;   |&amp;#238;|
|ï    |small i, umlaut mark          |&amp;iuml;    |&amp;#239;|
|ð    |small eth, Icelandic          |&amp;eth;     |&amp;#240;|
|ñ    |small n, tilde                |&amp;ntilde;  |&amp;#241;|
|ò    |small o, grave accent         |&amp;ograve;  |&amp;#242;|
|ó    |small o, acute accent         |&amp;oacute;  |&amp;#243;|
|ô    |small o, circumflex accent    |&amp;ocirc;   |&amp;#244;|
|õ    |small o, tilde                |&amp;otilde;  |&amp;#245;|
|ö    |small o, umlaut mark          |&amp;ouml;    |&amp;#246;|
|ø    |small o, slash                |&amp;oslash;  |&amp;#248;|
|ù    |small u, grave accent         |&amp;ugrave;  |&amp;#249;|
|ú    |small u, acute accent         |&amp;uacute;  |&amp;#250;|
|û    |small u, circumflex accent    |&amp;ucirc;   |&amp;#251;|
|ü    |small u, umlaut mark          |&amp;uuml;    |&amp;#252;|
|ý    |small y, acute accent         |&amp;yacute;  |&amp;#253;|
|þ    |small thorn, Icelandic        |&amp;thorn;   |&amp;#254;|
|ÿ    |small y, umlaut mark          |&amp;yuml;    |&amp;#255;|

>本文参考：[《HTML ISO-8859-1 参考手册》](http://www.w3school.com.cn/tags/html_ref_entities.html)
