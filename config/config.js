module.exports = { 
    XC:{
        //网站名称
        GLOBAL_TITLE : '杭州协创实业有限公司',
        //网站Logo
        LOGO_IMG:'/public/upload/commen/logo.png',
        //公司邮箱
        EMAIL:'hangzhouxcsy@126.com',
        //公司电话
        CELL:'400-827-3666',
        //公司地址
        ADDRESS:'浙江省杭州市拱墅区花园岗路113号金通国际大厦A座9F',
        //网站ICP
        ICP:'浙ICP备17017268号-1',
    },
    port:8888,
    // development, production
    env:'development',
    //session
    session:{
        key:'xc_session',
        secret:'_tuDFELNf$fdkD#',
        maxAge:3600,
    },
    mongodb:{
        url:'mongodb://localhost:27017/hzxcsytest',
    },
}


