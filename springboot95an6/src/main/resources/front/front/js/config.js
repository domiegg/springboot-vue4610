
var projectName = '基于Web的社区医院管理服务系统';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
]


var indexNav = [

{
	name: '医生',
	url: './pages/yisheng/list.html'
}, 

{
	name: '公告资讯',
	url: './pages/news/list.html'
},
]

var adminurl =  "http://localhost:8080/springboot95an6/admin/dist/index.html";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-qrcode","buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"appFrontIcon":"cuIcon-send","buttons":["新增","查看","修改","删除"],"menu":"医生","menuJump":"列表","tableName":"yisheng"}],"menu":"医生管理"},{"child":[{"appFrontIcon":"cuIcon-taxi","buttons":["查看","修改","删除"],"menu":"预约医生","menuJump":"列表","tableName":"yuyueyisheng"}],"menu":"预约医生管理"},{"child":[{"appFrontIcon":"cuIcon-copy","buttons":["查看","修改","删除"],"menu":"就诊信息","menuJump":"列表","tableName":"jiuzhenxinxi"}],"menu":"就诊信息管理"},{"child":[{"appFrontIcon":"cuIcon-present","buttons":["查看","修改","删除"],"menu":"诊疗方案","menuJump":"列表","tableName":"zhenliaofangan"}],"menu":"诊疗方案管理"},{"child":[{"appFrontIcon":"cuIcon-circle","buttons":["查看","修改","删除","打印"],"menu":"病历信息","menuJump":"列表","tableName":"binglixinxi"}],"menu":"病历信息管理"},{"child":[{"appFrontIcon":"cuIcon-flashlightopen","buttons":["查看","修改","删除"],"menu":"健康档案","menuJump":"列表","tableName":"jiankangdangan"}],"menu":"健康档案管理"},{"child":[{"appFrontIcon":"cuIcon-phone","buttons":["查看","删除","修改"],"menu":"费用信息","menuJump":"列表","tableName":"feiyongxinxi"}],"menu":"费用信息管理"},{"child":[{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"公告资讯","tableName":"news"},{"appFrontIcon":"cuIcon-cardboard","buttons":["查看","修改","删除"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-explore","buttons":["查看","预约"],"menu":"医生列表","menuJump":"列表","tableName":"yisheng"}],"menu":"医生模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-taxi","buttons":["查看","删除"],"menu":"预约医生","menuJump":"列表","tableName":"yuyueyisheng"}],"menu":"预约医生管理"},{"child":[{"appFrontIcon":"cuIcon-copy","buttons":["查看"],"menu":"就诊信息","menuJump":"列表","tableName":"jiuzhenxinxi"}],"menu":"就诊信息管理"},{"child":[{"appFrontIcon":"cuIcon-present","buttons":["查看"],"menu":"诊疗方案","menuJump":"列表","tableName":"zhenliaofangan"}],"menu":"诊疗方案管理"},{"child":[{"appFrontIcon":"cuIcon-circle","buttons":["查看"],"menu":"病历信息","menuJump":"列表","tableName":"binglixinxi"}],"menu":"病历信息管理"},{"child":[{"appFrontIcon":"cuIcon-flashlightopen","buttons":["查看"],"menu":"健康档案","menuJump":"列表","tableName":"jiankangdangan"}],"menu":"健康档案管理"},{"child":[{"appFrontIcon":"cuIcon-phone","buttons":["查看","支付"],"menu":"费用信息","menuJump":"列表","tableName":"feiyongxinxi"}],"menu":"费用信息管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-explore","buttons":["查看","预约"],"menu":"医生列表","menuJump":"列表","tableName":"yisheng"}],"menu":"医生模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-send","buttons":["新增","查看","修改","删除"],"menu":"医生","menuJump":"列表","tableName":"yisheng"}],"menu":"医生管理"},{"child":[{"appFrontIcon":"cuIcon-taxi","buttons":["查看","修改","删除","审核","就诊"],"menu":"预约医生","menuJump":"列表","tableName":"yuyueyisheng"}],"menu":"预约医生管理"},{"child":[{"appFrontIcon":"cuIcon-copy","buttons":["查看","修改","删除","诊疗"],"menu":"就诊信息","menuJump":"列表","tableName":"jiuzhenxinxi"}],"menu":"就诊信息管理"},{"child":[{"appFrontIcon":"cuIcon-present","buttons":["查看","修改","删除","病历"],"menu":"诊疗方案","menuJump":"列表","tableName":"zhenliaofangan"}],"menu":"诊疗方案管理"},{"child":[{"appFrontIcon":"cuIcon-circle","buttons":["查看","修改","删除"],"menu":"病历信息","menuJump":"列表","tableName":"binglixinxi"}],"menu":"病历信息管理"},{"child":[{"appFrontIcon":"cuIcon-flashlightopen","buttons":["新增","查看","修改","删除"],"menu":"健康档案","menuJump":"列表","tableName":"jiankangdangan"}],"menu":"健康档案管理"},{"child":[{"appFrontIcon":"cuIcon-phone","buttons":["新增","查看","修改","删除"],"menu":"费用信息","menuJump":"列表","tableName":"feiyongxinxi"}],"menu":"费用信息管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-explore","buttons":["查看","预约"],"menu":"医生列表","menuJump":"列表","tableName":"yisheng"}],"menu":"医生模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"医生","tableName":"yisheng"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
