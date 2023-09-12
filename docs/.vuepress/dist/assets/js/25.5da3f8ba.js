(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{502:function(t,s,n){"use strict";n.r(s);var a=n(1),p=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[n("a",{attrs:{href:"https://github.com/Shmilysw/template-matching-ocr",target:"_blank",rel:"noopener noreferrer"}},[t._v("项目地址"),n("OutboundLink")],1)]),t._v(" "),n("h2",{attrs:{id:"简介"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介：")]),t._v(" "),n("p",[t._v("银行卡识别、练手项目、图像识别、OCR")]),t._v(" "),n("h3",{attrs:{id:"_1-在ocr-template-match-py中计算模板数字0-9的轮廓-并保存备用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-在ocr-template-match-py中计算模板数字0-9的轮廓-并保存备用"}},[t._v("#")]),t._v(" 1. 在 "),n("code",[t._v("ocr_template_match.py")]),t._v("  中计算模板数字 "),n("code",[t._v("0~9")]),t._v("  的轮廓，并保存备用")]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 计算轮廓")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cv2.findContours()函数接受的参数为二值图，即黑白的（不是灰度图），")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cv2.RETR_EXTERNAL只检测外轮廓，cv2.CHAIN_APPROX_SIMPLE只保留终点坐标")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 返回的list中每个元素都是图像中的一个轮廓")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ref_, refCnts, hierarchy = cv2.findContours(ref.copy(), cv2.RETR_EXTERNAL,cv2.CHAIN_APPROX_SIMPLE)")]),t._v("\nrefCnts"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hierarchy "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cv2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("findContours"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ref"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("copy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cv2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RETR_EXTERNAL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cv2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CHAIN_APPROX_SIMPLE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 特判 refCnts > 0, 防止")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("refCnts"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 绘制轮廓")]),t._v("\n    cv2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("drawContours"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("img"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" refCnts"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    cv_show"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'img'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" img"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"No contours found."')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# print(len(refCnts))")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 输出 1，并不为 null")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cv2.drawContours(img,refCnts,-1,(0,0,255),3)")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cv_show('img',img)")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# 打印维度值 "shape" 通常是指多维数组或矩阵的维度和大小')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# 一维数组的 "shape" 是 (n,)，其中 n 表示数组中元素的数量。')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# (10, ) 表示")]),t._v("\n\nshapes "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("np"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("array"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cnt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shape "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" cnt "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" refCnts"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("shapes"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("np"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("array"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("shapes"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shape"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# print(len(refCnts))")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ValueError: setting an array element with a sequence. ")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The requested array has an inhomogeneous shape after 1 dimensions.")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The detected shape was (10,) + inhomogeneous part.")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# print(np.array(refCnts).shape)")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 排序，从左到右，从上到下 (为了将 0 ~ 9 进行区分，返回排序完的轮廓)")]),t._v("\n\nrefCnts "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" myutils"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sort_contours"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("refCnts"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" method"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"left-to-right"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),n("h3",{attrs:{id:"_2-在ocr-template-match-py中计算银行卡号轮廓后-做模板匹配"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-在ocr-template-match-py中计算银行卡号轮廓后-做模板匹配"}},[t._v("#")]),t._v(" 2. 在 "),n("code",[t._v("ocr_template_match.py")]),t._v("  中计算银行卡号轮廓后，做模板匹配")]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 遍历每一个轮廓中的数字")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gX"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" gY"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" gW"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" gH"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("enumerate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("locs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# initialize the list of group digits")]),t._v("\n    groupOutput "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 输出每个轮廓的 x, y, w, h")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# print(gX)")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# print(gY)")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# print(gW)")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# print(gH)")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将一组数据的轮廓扩大 5 个单位")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 根据坐标提取每一个组")]),t._v("\n    group "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" gray"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("gY "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("gY "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" gH "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" gX "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("gX "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" gW "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    cv_show"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'group'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("group"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 预处理")]),t._v("\n    group "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cv2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("threshold"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("group"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        cv2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("THRESH_BINARY "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" cv2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("THRESH_OTSU"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    cv_show"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'group'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("group"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 计算每一组的轮廓")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# group_, digitCnts, hierarchy = cv2.findContours(group.copy(), cv2.RETR_EXTERNAL,")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# \t\t\t\t\t\t\t\t\t\t\t\tcv2.CHAIN_APPROX_SIMPLE)")]),t._v("\n    digitCnts"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hierarchy "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cv2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("findContours"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("group"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("copy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cv2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RETR_EXTERNAL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        cv2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CHAIN_APPROX_SIMPLE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    digitCnts "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" contours"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sort_contours"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("digitCnts"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        method"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"left-to-right"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 计算每一组中的每一个数值")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" c "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" digitCnts"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 找到当前数值的轮廓，resize成合适的的大小")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# x, y, w, h 是单个数字的坐标和长宽")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" w"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" h"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cv2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("boundingRect"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        roi "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" group"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("y "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" h"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" w"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        roi "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cv2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("resize"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("roi"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("57")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("88")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        cv_show"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'roi'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("roi"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 计算匹配得分")]),t._v("\n        scores "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在模板中计算每一个得分")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("digit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" digitROI"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" digits"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("items"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 模板匹配")]),t._v("\n            result "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cv2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("matchTemplate"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("roi"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" digitROI"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cv2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TM_CCOEFF"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" score"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" _"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" _"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cv2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("minMaxLoc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            scores"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("score"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 得到最合适的数字")]),t._v("\n        groupOutput"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("np"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("argmax"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scores"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 画出来")]),t._v("\n    cv2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rectangle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("image"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gX "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" gY "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gX "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" gW "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" gY "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" gH "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    cv2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("putText"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("image"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("groupOutput"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gX"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" gY "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        cv2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FONT_HERSHEY_SIMPLEX"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.65")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 得到结果")]),t._v("\n    output"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("extend"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("groupOutput"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打印结果")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Credit Card Type: {}"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("format")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("FIRST_NUMBER"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("output"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Credit Card #: {}"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("format")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("output"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ncv2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("imshow"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Image"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" image"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ncv2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("waitKey"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("h3",{attrs:{id:"_3-效果展示"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-效果展示"}},[t._v("#")]),t._v(" 3. 效果展示")]),t._v(" "),n("center",[n("img",{attrs:{src:"https://cdn.acwing.com/media/article/image/2023/09/12/120382_db2295da51-%E6%95%88%E6%9E%9C%E5%9B%BE.png",alt:"example"}})])],1)}),[],!1,null,null,null);s.default=p.exports}}]);