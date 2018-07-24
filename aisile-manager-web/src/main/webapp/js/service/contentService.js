app.service('contentService',function($http){
	//读取列表数据绑定到表单中
	this.findAll=function(){
		return $http.get('../content/findAll.do');		
	}
	//分页
	this.findPage=function(page,rows){
		return $http.get('../content/findPage.do?page='+page+'&rows='+rows);		
	}
	//保存
	this.save = function(methodName,entity){
		return $http.post('../content/'+ methodName +'.do',entity);
	}
	//查询
	this.findOne = function(id){
		return $http.get('../content/findOne.do?id='+id);
	}
	//删除
	this.dele = function(selectIds){
		return $http.get('../content/delete.do?ids='+selectIds);
	}
	//搜索
	this.search=function(page,rows,searchEntity){
		return $http.post('../content/search.do?page='+page+"&rows="+rows,searchEntity);
	}
})