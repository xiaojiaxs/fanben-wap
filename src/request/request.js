import api from './api'
import axios from 'axios'



const request = {

  //下载首页数据
  getWeekChoiceList(option, success, failure) {

    var url = api.weekChoiceList

    axios.get(url).then((res) => {
      var rd = res.data
      if (success) {
        success(rd)
      }
    }).catch((error) => {
      if (failure) {
        failure(error);
      }
    })
  },
  //下载发现数据
  getExploreList(option, success, failure) {

    var url = api.exploreList

    axios.get(url).then((res) => {
      var rd = res.data
      if (success) {
        success(rd)
      }
    }).catch((error) => {
      if (failure) {
        failure(error);
      }
    })
  },
  //下载邀请数据
  getInvite(option, success, failure) {

    var url = api.invite

    axios.get(url).then((res) => {
      var rd = res.data
      if (success) {
        success(rd)
      }
    }).catch((error) => {
      if (failure) {
        failure(error);
      }
    })
  },
  //下载个人中心数据
  getCenterList(option, success, failure) {

    var url = api.center

    axios.get(url).then((res) => {
      var rd = res.data
      if (success) {
        success(rd)
      }
    }).catch((error) => {
      if (failure) {
        failure(error);
      }
    })
  },
  //下载分类数据
  getClassifyList(option, success, failure) {

    var url = api.classifyList

    axios.get(url).then((res) => {
      var rd = res.data
      if (success) {
        success(rd)
      }
    }).catch((error) => {
      if (failure) {
        failure(error);
      }
    })
  },
  //手机验证码登录获取验证码
  postMobileLoginCode(option, success, failure) {
    var url = api.mobileLoginCodeUrl;

    var formData = new FormData();
    for (var k in option) {
      formData.append(k, option[k]);
    }

    axios.post(url, formData).then(res => {
      var rd = res.data;
      if (success) {
        success(rd);
      }
    }).catch(error => {
      if (failure) {
        failure(error);
      }
    });
  },

  //手机验证码真正登录
  postUserMobileLoginUrl(option, success, failure) {
    var url = api.userMobileLoginUrl;

    var formData = new FormData();
    for (var k in option) {
      formData.append(k, option[k]);
    }

    axios.post(url, formData).then(res => {
      var rd = res.data;
      if (success) {
        success(rd);
      }
    }).catch(error => {
      if (failure) {
        failure(error);
      }
    });
  },
  //退出登录
  postUserLogoutUrl(option, success, failure) {
    var url = api.userLogoutUrl;

    var formData = new FormData();
    for (var k in option) {
      formData.append(k, option[k]);
    }

    axios.post(url, formData).then(res => {
      var rd = res.data;
      if (success) {
        success(rd);
      }
    }).catch(error => {
      if (failure) {
        failure(error);
      }
    });
  },

  //下载详情数据
  getDetail(option, success, failure) {

    var url = api.detail
    //console.log(url)

    axios.get(url, {
      params: option
    }).then((res) => {
      var rd = res.data
      if (success) {
        success(rd)
      }
    }).catch((error) => {
      if (failure) {
        failure(error);
      }
    })
  },
  //下载分类列表数据
  getCategoryProductList(option, success, failure) {

    var url = api.categoryProductList
    //console.log(url)

    axios.get(url, {
      params: option
    }).then((res) => {
      var rd = res.data
      if (success) {
        success(rd)
      }
    }).catch((error) => {
      if (failure) {
        failure(error);
      }
    })
  },

  //下载分类过滤数据
  getSubCategory(option, success, failure) {

    var url = api.subCategory
    //console.log(url)

    axios.get(url, {
      params: option
    }).then((res) => {
      var rd = res.data
      if (success) {
        success(rd)
      }
    }).catch((error) => {
      if (failure) {
        failure(error);
      }
    })
  },
  //下载全球精品数据
  getTopicnew(option, success, failure) {

    var url = api.topicnew
    //console.log(url)

    axios.get(url, {
      params: option
    }).then((res) => {
      var rd = res.data
      if (success) {
        success(rd)
      }
    }).catch((error) => {
      if (failure) {
        failure(error);
      }
    })
  },

  //下载日本料理-精品店数据
  getDiscoveryList1(option, success, failure) {

    var url = api.discoveryList1
    //console.log(url)

    axios.get(url, {
      params: option
    }).then((res) => {
      var rd = res.data
      if (success) {
        success(rd)
      }
    }).catch((error) => {
      if (failure) {
        failure(error);
      }
    })
  },

  //下载日本料理-新品店数据
  getDiscoveryList2(option, success, failure) {

    var url = api.discoveryList2
    //console.log(url)

    axios.get(url, {
      params: option
    }).then((res) => {
      var rd = res.data
      if (success) {
        success(rd)
      }
    }).catch((error) => {
      if (failure) {
        failure(error);
      }
    })
  },
  //下载搜索-本地服务数据
  getSearchList1(option, success, failure) {

    var url = api.searchList1
    //console.log(url)

    axios.get(url, {
      params: option
    }).then((res) => {
      var rd = res.data
      if (success) {
        success(rd)
      }
    }).catch((error) => {
      if (failure) {
        failure(error);
      }
    })
  },
  //下载搜索-全国送数据
  getSearchList2(option, success, failure) {

    var url = api.searchList2
    //console.log(url)

    axios.get(url, {
      params: option
    }).then((res) => {
      var rd = res.data
      if (success) {
        success(rd)
      }
    }).catch((error) => {
      if (failure) {
        failure(error);
      }
    })
  },
  //下载购物车数据
  getCart(option, success, failure) {

    var url = api.cart
    //console.log(url)

    axios.get(url, {
      params: option
    }).then((res) => {
      var rd = res.data
      if (success) {
        success(rd)
      }
    }).catch((error) => {
      if (failure) {
        failure(error);
      }
    })
  },


}

export default request;
