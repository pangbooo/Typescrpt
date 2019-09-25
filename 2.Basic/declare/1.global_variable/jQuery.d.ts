// 声明合并
declare function jQuery(selector: string): any

//interface 和 type
//防止命名冲突 (暴露在最外层的 interface 或 type 会作为全局类型作用于整个项目中，我们应该尽可能的减少全局变量或全局类型的数量。故最好将他们放到 namespace 下)
declare namespace jQuery {
    /**
     * interface 前是不需要 declare 
     **/
    interface AjaxSettings {
        method?: 'GET' | 'POST'
        data?: any
    }

    function ajax(url: string, settings?: AjaxSettings): void
}