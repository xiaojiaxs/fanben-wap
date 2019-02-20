const urlPrefix = "http://127.0.0.1/project/fanben/index.php/";

//首页
//类型： GET
//案例：http://127.0.0.1/project/fanben/index.php/api/weekChoiceList
var weekChoiceList = urlPrefix + "api/weekChoiceList";

//发现
//类型： GET
//案例：http://127.0.0.1/project/fanben/index.php/api/exploreList
var exploreList = urlPrefix + "api/exploreList";

//邀请
//类型： GET
//案例：http://127.0.0.1/project/fanben/index.php/api/invite
var invite = urlPrefix + "api/invite";

//个人中心
//类型： GET
//案例：http://127.0.0.1/project/fanben/index.php/api/center
var center = urlPrefix + "api/center";

//分类
//类型： GET
//案例：http://127.0.0.1/project/fanben/index.php/api/classifyList
var classifyList = urlPrefix + "api/classifyList";

//分类列表
//类型： GET
//案例：http://127.0.0.1/project/fanben/index.php/api/categoryProductList
var categoryProductList = urlPrefix + "api/categoryProductList";

//分类过滤
//类型： GET
//案例：http://127.0.0.1/project/fanben/index.php/api/subCategory
var subCategory = urlPrefix + "api/subCategory";

//全球精品
//类型： GET
//案例：http://127.0.0.1/project/fanben/index.php/api/topicnew
var topicnew = urlPrefix + "api/topicnew";

//日本料理-精品店
//类型： GET
//案例：http://127.0.0.1/project/fanben/index.php/api/discoveryList1
var discoveryList1 = urlPrefix + "api/discoveryList1";

//日本料理-新品店
//类型： GET
//案例：http://127.0.0.1/project/fanben/index.php/api/discoveryList2
var discoveryList2 = urlPrefix + "api/discoveryList2";

//搜索-本地服务
//类型： GET
//案例：http://127.0.0.1/project/fanben/index.php/api/searchList1
var searchList1 = urlPrefix + "api/searchList1";

//搜索-全国送
//类型： GET
//案例：http://127.0.0.1/project/fanben/index.php/api/searchList2
var searchList2 = urlPrefix + "api/searchList2";

//购物车
//类型： GET
//案例：http://127.0.0.1/project/fanben/index.php/api/cart
var cart = urlPrefix + "api/cart";

//短信验证码登录
//Step1: 获取验证码
//类型: POST
//参数1: mobile=13611112222
//返回: 返回是否成功发送验证码
//	案例：http://127.0.0.1/project/fanben/index.php/api/mobileLoginCode
const mobileLoginCodeUrl = urlPrefix + "api/mobileLoginCode";

//Step2: 真正的登录
//类型: POST
//参数1: mobile=13611112222
//参数2: code=4444
//返回: 返回是否登录成功
//	案例：http://127.0.0.1/project/fanben/index.php/api/userMobileLogin
const userMobileLoginUrl = urlPrefix + "api/userMobileLogin";

//注销
//类型: POST
//参数1: userId=1
//参数2: token=$#@!#$@#!$@!#$
//返回: 返回是否注销成功
//	案例：http://127.0.0.1/project/fanben/index.php/api/userLogout
const userLogoutUrl = urlPrefix + "api/userLogout";

//详情
//类型： GET
//案例：http://127.0.0.1/project/fanben/index.php/api/detail
var detail = urlPrefix + "api/detail";

export default {
  weekChoiceList,
  exploreList,
  invite,
  center,
  classifyList,
  mobileLoginCodeUrl,
  userMobileLoginUrl,
  userLogoutUrl,
  detail,
  categoryProductList,
  subCategory,
  topicnew,
  discoveryList1,
  discoveryList2,
  searchList1,
  searchList2,
  cart

};
