app.service('contentCategoryService',function($http){
	//读取列表数据绑定到表单中
	this.findAll=function(){
		return $http.get('../contentCategory/findAll.do');		
	}
	//分页
	this.findPage=function(page,rows){
		return $http.get('../contentCategory/findPage.do?page='+page+'&rows='+rows);		
	}
	//保存
	this.save = function(methodName,entity){
		return $http.post('../contentCategory/'+ methodName +'.do',entity);
	}
	//查询
	this.findOne = function(id){
		return $http.get('../contentCategory/findOne.do?id='+id);
	}
	//删除
	this.dele = function(selectIds){
		return $http.get('../contentCategory/delete.do?ids='+selectIds);
	}
	//搜索
	this.search=function(page,rows,searchEntity){
		return $http.post('../contentCategory/search.do?page='+page+"&rows="+rows,searchEntity);
	}
})