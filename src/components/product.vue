<template>
  <div>
    <!-- 预加载 -->
    <div class="scroll-loading" v-if="isLoading">
      <img src="https://s1.ricebook.com/feck/web-order/b380c4db1ab8094f087c772351ece4de.gif">
    </div>
    <!-- 内容 -->
    <div class="product" v-if="!isLoading">
      <!-- 头部轮播图 -->
      <div id="banner" class="swiper-container">
        <div class="swiper-wrapper" v-if="product.basic">
          <div
            v-for="(item,index) in product.basic.product_images"
            :key="index"
            class="swiper-slide"
          >
            <img class="swiper-lazy" :src="item.img_url" style="width: 750px;">
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <!-- 详情信息 -->
      <div>
        <div id="info" v-if="product.basic">
          <div class="info-title">
            <p class="title">{{product.basic.short_name}}-{{product.basic.spec}}</p>
            <p class="desc">{{product.basic.description}}</p>
            <p class="price">
              <span class="r-price">{{product.basic.price | deleteZero}}</span>
              <span class="unit">元</span>
              <span class="entity">/{{product.basic.show_entity_name}}</span>
              <span class="o-price">¥{{product.basic.origin_price | deleteZero}}</span>
              <span class="status">
                <span class="gap"></span>
                <span>随时退</span>
              </span>
            </p>
            <div class="fav">
              <div class="heart">
                <span class="iconfont"></span>
              </div>
              <p></p>
            </div>
          </div>
          <div class="tags">
            <span
              :style="{color:product.basic.display_property_group[0].font_color,backgroundColor:product.basic.display_property_group[0].background_color,borderColor:product.basic.display_property_group[0].font_color}"
            >{{product.basic.display_property_group[0].name}}</span>
          </div>
        </div>
        <div class="panel-gap"></div>
      </div>
      <!-- 商户信息 -->
      <div>
        <div id="store" v-if="product.modules">
          <h3 class="card-title">商户信息</h3>
          <div class="title">{{product.modules[0].data.restaurants[0].restaurant_name}}</div>
          <a class="address">
            <span class="iconfont"></span>
            <span class="content">{{product.modules[0].data.restaurants[0].restaurant_address}}</span>
            <span class="dir"></span>
          </a>
          <a
            v-for="(item,index) in product.modules[0].data.restaurants[0].restaurant_phone_numbers"
            :key="index"
            class="tel"
            href="{tel:021-52997088}"
          >
            <span class="iconfont"></span>
            <span class="content">{{item}}</span>
            <span class="dir"></span>
          </a>
        </div>
        <div class="panel-gap"></div>
      </div>
      <!-- 用户评价 -->
      <div id="feedback" v-if="product.modules">
        <h3 class="card-title" _v-0a8f279e>用户评价</h3>
        <div class="feedback-wrapper">
          <div class="feedback-cell">
            <div class="user clearfix">
              <img
                :src="product.modules[1].data.avatar"
                class="avatar"
                style="width: 60px; height: 60px;"
              >
              <span class="username">{{product.modules[1].data.nick_name}}</span>
            </div>
            <p class="score single-line-ellipsis">
              <span
                v-for="(item,index) in product.modules[1].data.scores"
                :key="index"
              >{{item.name}}&nbsp;{{item.score}}</span>
            </p>
            <div class="feedback-tags clearfix">
              <span
                class="tag-item"
                v-for="(item,index) in product.modules[1].data.tags"
                :key="index"
              >{{item.name}}</span>
            </div>
            <p class="content double-line-ellipsis">{{product.modules[1].data.text}}</p>
            <div class="images clearfix">
              <div>
                <img
                  v-for="(item,index) in product.modules[1].data.images"
                  :key="index"
                  :src="item"
                  style="width: 210px; height: 210px;"
                >
              </div>
              <!-- 图片缩略区域 -->
              <!-- <vue-preview
                :list="list"
                :thumbImageStyle="{width: '210px', height: '210px', marginRight: '20px',marginBottom:'20px'}"
                :tapToClose="true"
                @close="closeHandler"
                @destroy="destroyHandler"
              /> -->
              <div class="image-num">{{product.modules[1].data.images.length}}</div>
            </div>
          </div>
        </div>
        <a class="more" _v-0a8f279e>
          <span class="content" _v-0a8f279e>查看全部评价</span>
          <span class="dir" _v-0a8f279e></span>
        </a>
        <div class="panel-gap" _v-0a8f279e></div>
      </div>
      <!-- MENU部分 -->
      <div>
        <div id="menu" v-if="product.modules">
          <h3 class="card-title">MENU</h3>
          <div class="menu-list">
            <div
              class="menu-item clearfix"
              v-for="(item,index) in product.modules[2].data.contents"
              :key="index"
            >
              <p class="sub-title">-{{item.sub_title}}-</p>
              <p v-for="(tab,tabIndex) in item.text" :key="tabIndex">{{tab}}</p>
            </div>
          </div>
        </div>
        <div class="panel-gap"></div>
      </div>
      <!-- 亮点 -->
      <div>
        <div id="detail-normal" v-if="product.modules">
          <h3 class="card-title">亮点</h3>
          <div
            class="detail-item clearfix"
            v-for="(item,index) in product.modules[3].data.lights"
            :key="index"
          >
            <img :src="item.img_url">
            <p class="sub-title">{{item.title}}</p>
            <p class="content">{{item.content}}</p>
          </div>
        </div>
        <div class="panel-gap"></div>
      </div>
      <!-- 使用提示 -->
      <div>
        <div id="tips" v-if="product.modules">
          <h3 class="card-title">使用提示</h3>
          <ul class="tips-list">
            <li v-for="(item,index) in product.modules[4].data.contents" :key="index">{{item.text}}</li>
          </ul>
          <div class="tips-wrapper">
            <a class="tips-call" @click="showModal=true">
              <span class="iconfont"></span>联系客服
            </a>
          </div>
          <div class="modal-mask modal-transition" v-show="showModal">
            <div class="modal-wrapper">
              <div class="modal-container">
                <div class="modal-body">
                  <div slot="body" class="modal">
                    <div class="qr-wrapper">
                      <span class="lt"></span>
                      <span class="rt"></span>
                      <span class="lb"></span>
                      <span class="rb"></span>
                      <img
                        src="data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/wAALCAFYAVgBAREA/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/9oACAEBAAA/AP1TooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooopCcUA8UUUUUUE4pC2KUHiignFAOaWiikJxQDxS0hOKM0A5GaCeKAc0tFJRQTQDkZoJwM0A0UUUUUUtFFFFIRmv5WM0ZozRmjNGaBX9U+M4r+VjNGaBX9U46UtFFIRmv5WM1/VRSHpX8rOcZr+qev5V81/VOBilor+VfNGaMmv6qKK/lXJNGaM0ZozRmjNf1UUUUUUnpX8rFf1Tk4oBzS0UV/KuOor+qcdKWv5V8UYoxX9VFFfyr46V/VP6V/KxRX9U4OaCcUA5paTORX8rGMmjFGK/qnznNfysHrRX9VFfyrjqK/qnzgUtFFJnNfysV/VRRRRRSelfysV/VOeRX8rJNJRX9VFfyrjqK/qnzijNFH4008kelfytnk9KQHB6V/VL3POR6Uua/lZxQMg96XrjigD2r+qYcCv5WPwr+qboDzX8reMZr+qUDig9OtIOBX8rJ6miv6qK/lXHUV/VMRnFfys5ooBr+qf0r+Viv6qKKKKKT0r+Viv6qK/lXoor+qiv5Vx1Ff1TH6V/Kz+Nf1Tk8Umdw9q/lbzz71/VKOlfysDqKXNf1TAcUYoPTpSdRX8rVIeDX9U54GaQUuKOnagniv5WScd6AM0mK/qor+VcdRX9U/pX8rFFA61/VP6V/KxX9VFFFFFJ6V/KxX9VFfyr0UV/VRX8q46iv6p8ZFLX8q+a/qn2ijAoAxX8rFf1TgCgDFLX8q+a/qn2iggV/KxX9VFfyrkmjNGaM0E5oBxX9VFFfyrjqK/qn9K/lYooHWv6p/Sv5WK/qooooopPSv5WK/qooooor+VjGMV/VNnApa/lXxX9U+etfysEcmjpRijB9KMV/VRRX8q+M0Yo6V/VOTijIwa/lZI61/VPX8q+K/qnz1r+Vgjk0dK/qor+Vev6px0paKKQnFfysV/VRRRRRSE81/Kxij8KPwo/Cj8KX8KOpr+qXqBzX8rP4V/VORx1r+VsfTmv6ogOBX8rR61/VOee9fys4z2r+qTuPSv5Wzyelf1TZr+VnBr+qTr3r+Vo9a/qnPSv5Wvev6owOevA7V/K0Tk9K/qnPI61/K2O3rX9UQHAr+Vo9a/qor+VjBFB57Un4UfhR+FL+FIck96/qooooopMZoxQeBmkz7UE47ClHTpR+FIenpQTS9e1HWkIoz0r+Vk9aM0oOfpS96/qlHSv5WPxpxpKQ9TX9U7dDSV/K0OaQ9aB161/VMOc0EkEccV/KyRg9a/qnPTpSLzS4oxQenSkHPag8dqUdOlLRRRRRRRX8rGc4r+qbGcV/KxmjNAr+qfGcV/Kxmv6qKQ9K/lYzijrRQOtf1T4BoAxS1/KxnNf1TYziv5WK/qor+Vck0uTX9U9fyr9KMmjNf1UV/Kvmv6pwMUtFfyr5r+qcDFBGa/lYzX9VFFFFFITiloopCcUtITigHNLRRX8q+Olf1T5wOaWikBzQTiv5WMUV/VP61/KwetFGK/qnz1r+VnBya/qnr+VfrRjFf1T5xiv5WMV/VRX8q+M0AGv6qK/lXr+qbIwa/lZI5NHSv6qKKKKKQjNfysZr+qfNGaQnNfytHr0r+qY9K/lZIoxSfhSjg9K/qkxz149KK/lbPXpSfhX9Uy/WlIzQBxX8rGK/qmJHNfytEc0nSv6pyMjrX8rW4ccc1/VGBjFOHAxX8rA61/VMPrQRSjp1oyK/lZxX9UtKOBiv5WBkHvSjqK/qkr+Vo9a/qooooopPSv5WKM1/VMQOa/laJ5Nf1TYFfysjk9a/qk7n0r+VvOe9f1Tde1HTtSDkV/K32z3+lf1SjkdKOnakXmlJxQDxR07Ug5pcCv5WK/qor+VcdRX9U+OlfysZoHUUvWjJFf1T1/KwOT1r+qTJyfSv5WzwetJ+Nf1T4oIr+VmkPU1/VRRRRRSelfysUV/VP61/Kwepr+qiiv5V80ZPrRmjNf1T7RRiv5WM0Zr+qcDFBGa/lYzRmv6pwMUelfysV/VRX8q46iv6p/Sv5WKK/qnxjNfysV/VRRX8rAPSv6ph0paKQjNBAr+Viv6qKKKKKT0r+VijFAHNf1T56V/Kxiiv6p85zX8rFf1UUV/KvQBmv6qKRvumvwI+An/BNL4z/HzQLXX7PTrDwvoN2nm2t94imeDz0IVldI0RpCjBvlbbg464r2X/hyd8Uj08c+D/zuv/jNfskOlfjb/wAOS/il/wBD34Q/O6/+M0f8OTPimP8AmevCB/4Fdf8Axmv2SXpS0jDIPevwH+Pf/BNH40fATw/da/d6dY+KdBs0826v/Dszz/Z0CszO8borhFC/M23A+ma/fjI9aWikBzQTilor+Vev6px0pa/lXxQRiiiv6qKKKKKT0r+Viv6p6RulfyuH6c1/VIBx1r+VgZB70uaME1/VPRX8q9KOPrSHrX9U5PbvX43f8FDP+Chvj66+LuvfD74fa9c+FfDugTtYXN5prmO6vLhDiUmUfMqq2VAXH3SSa+Mz+038YT/zVfxx/wCFHef/AByj/hpr4w/9FX8cf+FHef8Axyj/AIaa+MP/AEVfxx/4Ud5/8co/4aa+MP8A0Vfxx/4Ud5/8co/4aa+MP/RV/HH/AIUd5/8AHKP+GmvjD/0Vfxx/4Ud5/wDHKB+038YQc/8AC1/G/wD4Ud5/8cr7L/4J6f8ABQ3x9a/F7Qfh98QddufFXh3xBOthb3epP5l1Z3DnEZEh+ZlZsKQ2fvAg+v7H5wcdO9fytnqeKK/qmBxQee9fys/hX9VFfysYIoPPak/Cv6pyOK/lZIz2pMUYr+qiiiiikJxX8rGK/qnJwM0ZzRijp2oPAzSD6UH6Uq9BQeBX8rPQ8V/VKeO1fys1/VID+8we44r+aX9ps/8AGSPxX/7GzVv/AEslrzWiiiiiivSv2ZP+TkvhR/2Nmk/+lkVfZX/BbPj4+eBf+xZH/pVPX510DqKcOor+qRelL+FHXtRj2pD9KUcjNB6dKQciv5W8+9f1SjkUtFFFFIRmlor+Vck0ZozX9VFfyrkmjJr+qikIzRgUbR6UtfjX/wAETOfj546/7Fk/+lUFfGv7TQz+0l8V/wDsbdW/9LJa81waMGjBxmjGRQASKMEjNLsPpXpP7Mn/ACcl8KP+xt0n/wBLIq+yv+C2n/JfPAv/AGLI/wDSqevzror+qbAwa/lZJ5ozRmjNGTX9VFfyr5r+qfaKMCgDFLRRRRSE4r+VjFGKMYNf1T+lfysV/VOTigHNHpX8rGK/qor+VjBpMUYr+qP/AJeP+A/4V/OR8VbWG+/bS8ZW1xEs9vN8QL2OSJhkOp1FwQR6EGvt79szRk+DU/jd9E+HPwU/4Re0TyII2WM6yiyKF3eSHBDgtkccDBrwP9i/4MfDX4q/AH4xz/EO5TQhYXWmpY+I/L3PpssvmoGPrGWK7h6fStLxv+zHL8FP2L/iP/wlWg2L+JrPxZZR6dr0UYkFxZSRgh4Je8b8nj8a88/Zz8GaFr37LP7Rur6lpNpe6rpFnpTafdzxBpLVnmlDmNjyuQBnHpXS/B3w74L+CX7J8nxq17wfYeP/ABLq+vNoml2GrhmsbJUQs8siD7zHBwD7VL8XdG8HfEv9mXQ/jz4a8Hab4G8R6Z4iGi6rpFhHnTrw7fMSVIm4HYFeRya9Ik0r4LD4Rf8ADUA8L2Xmta/2EPAf2Qf2d/b23HnY6eVs+fZ618h/s7Xz6n+1D8MLt1jjefxjpcjJCgRATexHCqOAPYdK+wv+C2Yz8fPAv/Ysj/0qnr86sH0r+qikBzR6V/KxX9VFfysYxiv6ph0pa/lXooor+qiiiiikIzQBxQee9fys4zjiv6pcjiv5Wa/qnPSv5WSPalH3elf1Sgcda/lYzS9T71/VKDxS9e9R/wDLx/wH/Cv5ufjnrP8Awjn7WvxD1YRCc2HjfUboRFtu/ZfyNjPbOK9i+LP7aXww+MOs67r2t/s+6dJ4m1WNg+qnX5yySbNqybQgB28HHtXjXw/+Pc3gL4IfEf4dJo6XkfjJ7N3v2n2ta/Z2ZhhNp3bt3qMYrXm/a18X6r+zbdfBrWmXV9BW7gudPuriQ+dZCMkmIf3kOeAfu9vSrGmftPW/hn9m7VvhX4e8F6fpd3rrRnXPEn2h5Li+SNy8a7CMJjdjqe/HNdZ+y/8AEb4haP8ADzX/AAynwnuPi98Mbq4FzeaVJZzPFb3Cj/WRTRqTG+MZxmue+P8A8fvEXxR8Iaf4T0rwND8O/h34duDKmg6dDKY0uXyPMnlcAtIeQMgd65lv2gJH/ZhX4O/2NH5K+ITr41bzzuz5fl+V5e3p3zu/Csv9mT/k5L4Uf9jbpP8A6WRV/SjL/wAhJP8Arn/U1cGAOtfysZr+qcDFHpX8rFH4Up61/VNnFGa/lYxRijFHSv6qKKKKKQnFAPFfysfjSnikzR1r+qfr2o6f/XpCaUdOlfysUfjThyOvNf1Sg8dKj/5eP+A/4V/NN+03/wAnJfFf/sbdW/8ASyWvNaKKAcV6f4I/ad+Kfw10LT9F8K+N9W0DSrGV54bSxnMce9jlmYD72ffNa3xc/a++Knxy8NRaB4w8SHUdKSZbhoEtooRLKoIV3KKCxGT19a8ar0r9mT/k5L4Uf9jbpP8A6WRV9mf8Fsv+S+eBf+xZH/pVPX51fjSYr+qYGgnpX8rJ61/VPiv5Wc1/VITz04r+Vs8HrX9U2KMUh47V/KzX9VFFFFFIRmv5WM1/VRX8q5OaKKM0Cv6p8ZxX8rGa/qoopPSv5WM1/VH/AMvH/Af8K/mm/ab/AOTkviv/ANjbq3/pZLXmtFFFFFFelfsyf8nJfCj/ALG3Sf8A0sir7L/4LZkj4+eBf+xZH/pVPX7J0UmMDiv5WM4o61/VRX8q+cUZr+qiiikIzS0UUUUUnpX8rFFf1T5xS0V/KvX9U2Rg1/KyRzRijFf1T561/KyR1r+qevxq/wCCJpC/H7xyCcE+GSQO5/0qD/Gvjf8AacBH7SXxXyMf8VZq3X/r8lrzSiiiiiivSv2ZP+TkvhR/2Nmk/wDpZFX9KUhzqSf7n9a/ljor+qcEUA5pa/lXxRjBr+qfOBS0V/KwB0r+qYdKWiiiiik9K/lYor+qbIr+Vo9aSgZB704dRX9Ui9KX8aCOOtfytj6c1/VEO3PFfytnk9K/qdnlEDozHCngk1+QX/BRD/gnj49b4ua58Q/h3oc/ijQddlN7d2OnruurO4b/AFn7scujH5gVyckgjoT8Uf8ADMnxh/6JR43/APCcvP8A43R/wzJ8Yf8AolHjj/wnLz/43R/wzJ8Yf+iUeOP/AAnLz/43R/wzJ8Yf+iUeOP8AwnLz/wCN0f8ADMnxh/6JR44/8Jy8/wDjdH/DMnxh/wCiUeOP/CcvP/jdH/DMnxh/6JR44/8ACcvP/jdfa3/BPD/gnf49Hxc0T4ifETRJ/C+gaBKL20sdQXZdXlyv+r/dnlEU/MS2DkAAdSP1zs7pL2/kljO6NflVux+lfy2EUDqKXFf1TA8UZoI4r+VrGcV/VJ1A5r+Vn8KUcHpX9Uh788V/K23XpSfhX9VFFFFFJ6V/KxR070ufek/Giv6pzwM0nXtQfpX8rJ4r+qfrRijFGKhuoBPEVIyDXNXUmr6USLRo5ox0SdcgfkQa/Jkf8Fsfinz/AMUL4Qx9Lr/49SH/AILZ/FP/AKEXwf8Aldf/AB6gf8Fs/imTj/hBfB//AHzdf/HqU/8ABbL4p/8AQi+D/wArr/49X6n/APCYeKs4/s+x/wC+X/8Aiq/K/wD4fZ/FMf8AMi+D/wArr/49SH/gtn8Uz/zIvg/8rr/49X6tRvruuYju5I7eA8NHbqVB9iSSfwzX8yYPWv6pR06V/KxX9UvXtRnnpx61/K2eD1r+qbr2oxRj2o/CjFGKMUYpaKKKKT0r+Viv6qKKKKK/lXJNGTR1r+qiiiiimsikHKg/hX8rWetf1R/Z4v8Anmn/AHyK/lbzX9Uf2eIZ/dp/3yK/lcz1Hav6pPs8X/PNP++RR5EQ/wCWaf8AfIpRGijhQPoK/lazg8UZr+qikxgcV/KxnrX9VFfyr5ozRmjNf1UUUUUUUUUUhOKWv5V8V/VP61/KxjJoxX9U5OKMigHNLX8q+KMUEYor+qikzkcV/KxjNHSv6qK/lXIxRX9VFfyr4r+qf1r+Vg9aKMV/VODmlor+VfFf1Tg5paK/lXxX9U+4UEiv5WK/qoooooprfWv5Wfwr+qc8jrX8rWcDoaTNf1TAcUHpX8rNf1TA0Zo6d6TNfys4o6UvfpX9UooP1r+Vk9aB1pTz9aSv6qKQjjrX8rWeOhzSEZpOlf1Tnp1pBx3pc0ZoPTrSDjvS5o60EcUmNo9q/laxSHqa/qoooooprcUvXtX8rH40HmlAGOvNf1TA5HSv5WRyetf1SDqfSv5WxzR+Nf1THpX8rXtX9UdfytHrX9U54HSv5WsZHvSD8aQ9aAMnrX9UvUnjiv5W+vev6pgeKOtB4pD9K/lZPWgZJ70p+tH40hyD3ozRmlB461/VMDxQTxSZyKTuOMj1r+VojB61/VRRRRRSEZr+VjNf1UUUnpX8rGa/qor+VfNLk1/VPSEZowMGv5WCeTR1ozX9U/rX8rOcV/VPRX8q+aMn1ozX9VFIelfysZxR1or+qcDFBGa/lYoooBxRmjNf1T4xmv5WM9a/qoooooopCcUtFFFFFFJuFfysYor+qbIwa/lZI5oxR1oxRjFf1UUUm4etGa/lYxRijFGDR0r+qikPSv5WMZo6V/VOTijIozmv5WK/qnJxQDmgnFfysV/VRRRRRSEZr+VjNH4UfhR+FH4UfhS9K/qlPNL071/KwMg96UdRX9Uq8DrS/jX8rA61/VMB1r+Vmv6qK/lY79K/qlHFfyt5wMEHNf1SgYHWj8aOtIevWv5WTzX9U+aCeKTHSv5WT1r+qc9K/laxX9Uo5xX8rFf1TnpX8rJHtR+FIck96/qooooopPSv5WK/qnPAzSD6Uv4UfhRiv5Wc1/VNjpX8rGa/qnPTpSDn/wCtX8rR/Kk/Ggda/qmB61/K1jNf1TA8UHgdK/laxx7001/VRX8q/wCNf1TD6UvWj8K/lYzSg81/VMOAK/lYr+qfr2oxSE4r+Vk9a/qnPTpSLzS4oxS0UUUUnpX8rFf1UV/KuSaM0Zr+qiv5Vx1Ff1T+lfysUZr+qfaKWiv5V+lGaMn1ozRmv6p/Wv5WK/qoopMYHFfysGjNFA61/VP6V/KxRmjNGTR1ozX9U4GKWiiiiiik9K/lYr+qiv5V6KK/qor+VcdRX9U+cClor+VjGMV/VMOlLX8q9f1TgigHNLX8q+KAOa/qmyMCv5Wa/qnJxRkYNfyskda/qnr+VfFf1T7hRkUA5r+VjFf1T7hS0UV/KuQaMGjpX9VFFFFFJ6V/KxX9VFfysYNJijFf1UV/KuOor+qY/Wv5Wfwr+qc8jFJj3pRxR1r+VgZB70o5r+qYHijNHTvSHkV/K0eppDknvX9U55Ffysg8iv6pB29K/lbPJ6V/VMenWk6Cv5W8e1f1SjgUde9IOK/la60n4V/VOeRikFB5xX8rJ69K/qooooopPSv5WK/qn69qMe1H4UfhQTxX8rOMYr+qbGaMV/KxmgU7p3r+qUdKD06Umcikzz049a/lbPB61/VMTx0r+VvHHWv6owaUcjNBPFfysnijNf1TYFfysfjRn3pRSHg0Dmv6ph9K/lazX9U2K/lY/Gv6puoPFfyt5yTX9Uo6dKWiiiik9K/lYozRmjNGaM0Zya/qnHSlr+Vegda/qnwDQBiv5WM1/VPjGa/lYz1r+qiv5V81/VPjrX8rOTk1/VPX8q+aCc0V/VRRRSEZr+VijpRmjOa/qoopMYFfysZwaM1/VRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRX//2Q=="
                      >
                    </div>
                    <p class="sub-title">保存二维码图片，微信识别联系客服。</p>
                  </div>
                </div>
                <a @click="showModal=false" class="modal-close iconfont"></a>
              </div>
            </div>
          </div>
        </div>
        <div class="panel-gap"></div>
      </div>
      <!-- 猜你喜欢 -->
      <div id="like">
        <div v-if="product.modules">
          <h3 class="card-title">猜你喜欢</h3>
          <ul class="like-list clearfix">
            <li
              class="clearfix"
              v-for="(item,index) in product.modules[5].data.recommend"
              :key="index"
            >
              <a class="full-link"></a>
              <img :src="item.product_image_url" style="width: 240px; height: 160px;">
              <div class="desc">
                <p class="sub-title">{{item.product_name}}</p>
                <p class="price">
                  <span>{{item.price | deleteZero}}元/{{item.show_entity_name}}</span>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- 底部区域 -->
      <div id="sub-normal">
        <div class="sub-btn">
          <div @click="$router.push('/cart')" class="cart fade-transition">
            <span class="iconfont"></span>
            <i class="tip">+1</i>
          </div>
          <a @click="dealAddCar" class="add-cart fade-transition">加入购物车</a>
          <a class="fade-transition pay">立即购买</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "product",
  data() {
    return {
      product: {},
      showModal: false,
      isLoading: true
    };
  },

  created() {
    //下载详情数据
    this.request.getDetail({}, data => {
      //console.log(data);
      this.product = data;
      this.isLoading = false;

      //图片缩略图
      var list = data.modules[1].data.images
					var photoList = [];
					for(var i = 0; i < list.length; i++) {
						var img = list[i];
						//console.log(img)
						var dict = {
							src: img,
							w: 600,
							h: 400
						};
						photoList.push(dict);
					}

          this.list = photoList;
          

      //轮播图初始化
      this.$nextTick(function() {
        var swiper = new Swiper(".swiper-container", {
          loop: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false
          },
          pagination: {
            el: ".swiper-pagination"
          }
        });
      });
    });
  },
  mounted() {},
  methods: {
    dealAddCar() {}
  },
  computed: {},
  watch: {},
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product {
  width: 750px;
  margin: 0 auto;
  padding-bottom: 160px;
}
#banner {
  width: 750px;
  height: 500px;
}

#banner {
  overflow: hidden;
  position: relative;
  background-color: #eee;
}
/* 详情信息 */
#info {
  background-color: #fff;
  padding: 40px 40px 30px;
}
#info .info-title {
  position: relative;
  padding-bottom: 34px;
}
#info .info-title .title {
  width: 588px;
  font-family: PingFangSC;
  font-size: 42px;
  word-break: break-all;
  color: #2c3038;
}
#info .info-title .desc {
  width: 670px;
  font-size: 30px;
  line-height: 1.33;
  color: #92969c;
  margin-top: 24px;
}
#info .info-title .price {
  margin-top: 42px;
  font-size: 26px;
  color: #fc3838;
  line-height: 1;
}
#info .info-title .price .r-price,
#info .info-title .price .unit {
  font-size: 40px;
  line-height: 40px;
}
#info .info-title .price .entity {
  font-size: 26px;
  line-height: 40px;
  margin-right: 14px;
}
#info .info-title .price .o-price {
  margin-left: 10px;
  text-decoration: line-through;
  color: #92969c;
  margin-right: 14px;
}
#info .info-title .price .status {
  font-size: 26px;
  color: #92969c;
}
#info .info-title .price .status .gap {
  height: 26px;
  background: #92969c;
  display: inline-block;
  width: 1px;
  vertical-align: -3px;
  margin-right: 14px;
}
#info .info-title .fav {
  position: absolute;
  width: 86px;
  top: 5px;
  right: 0;
}
#info .info-title .fav .heart {
  position: relative;
  display: block;
  text-align: center;
}
#info .info-title .fav .heart span {
  font-size: 50px;
}
.iconfont {
  font-family: iconfont !important;
  font-style: normal;
  color: #000;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
#info .info-title .fav p {
  text-align: center;
  font-size: 28px;
  color: #92969c;
}
#info .tags {
  width: 670px;
  height: auto;
  margin: 0 auto;
  padding-top: 30px;
  border-top: 1px solid #e6e6e6;
  font-size: 0;
}
.tags {
  background-color: #fff;
  overflow: hidden;
}
#info .tags span {
  display: inline-block;
  padding: 5px 10px;
  font-size: 20px;
  border-radius: 8px;
  margin-right: 20px;
  border-style: solid;
  border-width: 1px;
}
.panel-gap {
  width: 100%;
  height: 16px;
  background-color: #fafafa;
  border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
}
/* 商户信息 */
#store {
  background-color: #fff;
  padding: 50px 40px;
}
.card-title {
  position: relative;
  font-size: 32px;
  font-weight: bolder;
  line-height: 1;
  text-align: center;
  color: #2c3038;
  display: block;
  margin-bottom: 24px;
}
.card-title:after {
  content: " ";
  position: absolute;
  bottom: -24px;
  left: 50%;
  margin-left: -30px;
  width: 60px;
  border-top: 6px solid #e0e0e0;
  display: block;
}
#store .title,
#store a {
  border-bottom: 1px solid #e6e6e6;
}

#store .title {
  padding: 75px 0 30px;
  font-size: 36px;
  color: #2c3038;
}
#store a {
  display: block;
  padding: 31px 0 21px;
  font-size: 30px;
  color: #63666b;
}
#store a span {
  margin-right: 30px;
  display: inline-block;
  vertical-align: top;
}
#store a .iconfont {
  font-size: 38px;
}
#store a .content {
  width: 560px;
  margin-right: 0;
  font-size: 30px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
#store a .dir {
  width: 0;
  height: 0;
  font-size: 0;
  display: inline-block;
  margin: 0;
  vertical-align: 12px;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 10px solid #000;
  border-right: none;
}
/* 用户评价 */
#feedback {
  background-color: #fff;
  padding: 50px 0 30px;
}
.card-title {
  position: relative;
  font-size: 32px;
  font-weight: bolder;
  line-height: 1;
  text-align: center;
  color: #2c3038;
  display: block;
  margin-bottom: 24px;
}
.card-title:after {
  content: " ";
  position: absolute;
  bottom: -24px;
  left: 50%;
  margin-left: -30px;
  width: 60px;
  border-top: 6px solid #e0e0e0;
  display: block;
}
#feedback .feedback-wrapper {
  margin: 50px 40px 0;
  padding-bottom: 20px;
  border-bottom: 1px solid #e6e6e6;
}
.feedback-cell .user {
  height: 60px;
  line-height: 60px;
  overflow: hidden;
  margin-bottom: 24px;
}
.feedback-cell .user .avatar {
  float: left;
  border-radius: 30px;
  margin-right: 20px;
}
.feedback-cell .user .username {
  font-size: 28px;
  font-weight: 500;
  line-height: 60px;
  color: #1a1a1a;
  margin-right: 20px;
}
.clearfix:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
  overflow: hidden;
}
.feedback-cell .score {
  font-size: 24px;
  text-align: left;
  color: #92969c;
  margin-bottom: 24px;
}
.feedback-cell .score span {
  border-right: 2px solid #92969c;
  display: inline-block;
  height: 25px;
  padding: 0 10px;
  line-height: 25px;
}
.feedback-cell .score span:last-child {
  border: 0;
}
.single-line-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.feedback-cell .feedback-tags {
  margin-bottom: 24px;
  overflow: auto;
}
.feedback-cell .feedback-tags span {
  height: 40px;
  margin-right: 20px;
  line-height: 40px;
  padding: 0 10px;
  font-size: 24px;
  font-weight: 300;
  text-align: center;
  color: #92969c;
  border-radius: 4px;
  background-color: #f2f3f5;
}
.feedback-cell .content {
  font-size: 28px;
  line-height: 1.5;
  color: #63666b;
  margin-bottom: 24px;
}
.double-line-ellipsis {
  -webkit-line-clamp: 2;
}
.double-line-ellipsis,
.multiple-line-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
}
.feedback-cell .spec {
  font-size: 24px;
  text-align: left;
  color: #92969c;
  margin-bottom: 24px;
}
.feedback-cell .images {
  position: relative;
  overflow: auto;
}
.feedback-cell .images img {
  float: left;
  margin-right: 20px;
  margin-bottom: 20px;
}
.feedback-cell .images .image-num {
  position: absolute;
  width: 80px;
  height: 32px;
  line-height: 32px;
  bottom: 30px;
  right: 10px;
  font-size: 22px;
  text-align: center;
  color: #fff;
  border-radius: 100px;
  background-color: rgba(0, 0, 0, 0.4);
}
.clearfix:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
  overflow: hidden;
}
#feedback .more {
  display: block;
  border-bottom: 1px solid #e6e6e6;
  padding: 26px 0 30px;
  margin: 0 40px;
  line-height: 28px;
  font-size: 28px;
  color: #63666b;
}
#feedback .more .content {
  font-size: 28px;
  line-height: 28px;
  width: 640px;
}

#feedback .more span {
  display: inline-block;
}
#feedback .more .dir {
  width: 0;
  height: 0;
  font-size: 0;
  display: inline-block;
  margin: 0;
  vertical-align: 6px;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 10px solid #000;
  border-right: none;
}
.feedback-cell .images img:nth-child(3n) {
  margin-right: 0;
}
/* MENU部分 */
#menu {
  background-color: #fff;
  padding: 50px 40px 30px;
}
#menu .menu-list {
  margin-bottom: 20px;
}
.clearfix {
  overflow: auto;
}
#menu .menu-list .sub-title {
  margin-top: 50px;
  color: #21242a;
}
#menu .menu-list p {
  font-size: 30px;
  line-height: 1.6;
  text-align: center;
  color: #76797e;
}
.clearfix:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
  overflow: hidden;
}
/* 亮点 */
#detail-normal {
  background-color: #fff;
  padding: 50px 0;
}
#detail-normal .card-title {
  margin-bottom: 80px;
}
#detail-normal .detail-item img {
  display: block;
  width: 100%;
  height: auto;
}
#detail-normal .detail-item .sub-title {
  font-size: 36px;
  color: #21242a;
  margin: 40px 40px 0;
}
#detail-normal .detail-item .content {
  font-size: 28px;
  line-height: 1.6;
  color: #63666b;
  margin: 30px 40px 40px;
  text-align: justify;
}
.clearfix:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
  overflow: hidden;
}
/* 使用提示 */
#tips {
  background-color: #fff;
  padding: 50px 40px;
}
#tips .tips-list {
  margin-top: 25px;
  font-family: PingFangSC-Light;
  font-size: 30px;
  line-height: 1.5;
  color: #63666b;
  list-style: disc inside none;
}
#tips .tips-list li {
  word-break: break-all;
  list-style: disc inside none;
}
#tips .tips-wrapper {
  margin: 0 auto;
  text-align: center;
}
#tips .tips-wrapper a {
  display: inline-block;
  margin: 34px auto;
  width: 260px;
  height: 53px;
  padding-top: 17px;
  border: 2px solid #1a1a1a;
  font-size: 26px;
  color: #2c3038;
}
#tips .tips-wrapper a span {
  font-size: 26px;
  margin-right: 22px;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
}
.modal-mask .modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-mask .modal-wrapper .modal-container {
  position: relative;
  width: 590px;
  margin: 0 auto;
  padding: 30px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  margin-top: calc(100% - 500px);
  margin-left: calc(100% - 600px);
}
#tips .modal {
  padding: 40px 40px 48px;
}
#tips .modal .qr-wrapper {
  position: relative;
  text-align: center;
  padding: 2px;
}
#tips .modal .qr-wrapper span {
  position: absolute;
  width: 30px;
  height: 30px;
}
#tips .modal .qr-wrapper .lt {
  left: 0;
  top: 0;
  border-left: 3px solid #ff3939;
  border-top: 3px solid #ff3939;
}
#tips .modal .qr-wrapper .rt {
  right: 0;
  top: 0;
  border-right: 3px solid #ff3939;
  border-top: 3px solid #ff3939;
}
#tips .modal .qr-wrapper .lb {
  left: 0;
  bottom: 0;
  border-left: 3px solid #ff3939;
  border-bottom: 3px solid #ff3939;
}
#tips .modal .qr-wrapper .rb {
  right: 0;
  bottom: 0;
  border-right: 3px solid #ff3939;
  border-bottom: 3px solid #ff3939;
}
#tips .modal .qr-wrapper img {
  width: 100%;
  height: 100%;
  vertical-align: top;
}
#tips .modal .sub-title {
  margin-top: 70px;
  padding: 0 10px;
  font-size: 28px;
  letter-spacing: -0.1px;
  text-align: center;
  color: #92969c;
}
.modal-mask .modal-wrapper .modal-container .modal-close {
  position: absolute;
  top: 0;
  right: 0;
  font-size: 26px;
  padding: 20px;
  color: #bdc0c5;
}
/* 猜你喜欢 */
#like {
  background-color: #fff;
  padding: 55px 40px;
}
#like .like-list {
  margin-top: 50px;
  display: inline-block;
}
#like .like-list li {
  margin-bottom: 42px;
  position: relative;
}
#like .full-link {
  z-index: 1;
  background-color: transparent;
}
.full-link {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  -webkit-tap-highlight-color: rgba(254, 254, 254, 0.4);
}
#like .like-list li img {
  float: left;
  vertical-align: top;
  margin-right: 20px;
}
#like .like-list li .desc {
  position: relative;
  float: left;
  width: 410px;
  height: 180px;
  overflow: hidden;
}
#like .like-list li .desc .sub-title {
  height: 72px;
  font-size: 28px;
  line-height: 1.3;
  margin-top: 10px;
  color: #2c3038;
  margin-bottom: 6px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
}
#like .like-list li .desc .price {
  font-size: 25px;
  color: #ff3939;
}
.clearfix:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
  overflow: hidden;
}
/* 底部 */
#sub-normal {
  position: fixed;
  width: 750px;
  left: 50%;
  bottom: 0;
  margin-left: -375px;
  z-index: 10;
  background: #fff;
  border-top: 1px solid #e6e6e6;
}
#sub-normal .sub-btn {
  position: relative;
  width: 100%;
  height: 120px;
}
#sub-normal .sub-btn .cart {
  position: absolute;
  width: 150px;
  height: 120px;
  line-height: 120px;
  text-align: center;
}
#sub-normal .sub-btn .cart span {
  font-size: 50px;
}
#sub-normal .sub-btn .cart .tip {
  top: 28px;
  left: 64px;
  opacity: 0;
  font-size: 26px;
  color: #ff3939;
  position: absolute;
  line-height: 26px;
  font-style: normal;
}
#sub-normal .sub-btn .add-cart {
  right: 300px;
  width: 300px;
  height: 120px;
  background-color: #f2f3f4;
  color: #2c3038;
}

#sub-normal .sub-btn a {
  position: absolute;
  line-height: 120px;
  font-size: 36px;
  text-align: center;
  color: #fff;
}
#sub-normal .sub-btn .pay {
  right: 0;
  width: 300px;
  height: 120px;
  background-color: #fba700;
}
</style>
<style>
/* 轮播图分页器 */
#banner .swiper-pagination {
  position: absolute;
  bottom: 8px;
  left: -20px;
  right: 0;
  text-align: center;
}
#banner .swiper-pagination span {
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-left: 20px;
  border-radius: 50%;
  background-color: hsla(0, 0%, 100%, 0.3);
  opacity: 1;
}
#banner .swiper-pagination span.swiper-pagination-bullet-active {
  background-color: #fff;
}
</style>
