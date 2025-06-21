const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot95an6/",
            name: "springboot95an6",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot95an6/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于Web的社区医院管理服务系统"
        } 
    }
}
export default base
