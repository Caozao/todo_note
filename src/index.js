import Vue from 'vue' // 引入vue类库
import App from './app.vue'

const root = document.createElement('div') // 创建一个节点root
document.body.appendChild(root) //把root节点加入到body里面

new Vue({
    render: (h) => h(App)
}).$mount(root) 
// 把App(app.vue的组件)通过$mount挂载到html里面