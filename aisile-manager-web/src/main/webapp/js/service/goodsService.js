app.service('goodsService',function($http){
	this.add=function(entity){
		return $http.post('../goods/add.do',entity);		
	}
	this.update=function(entity){
		return $http.post('../goods/update.do',entity);		
	}
	//读取列表数据绑定到表单中
	this.findAll=function(){
		return $http.get('../goods/findAll.do');		
	}
	//分页
	this.findPage=function(page,rows){
		return $http.get('../goods/findPage.do?page='+page+'&rows='+rows);		
	}
	//查询
	this.findOne = function(id){
		return $http.get('../goods/findOne.do?id='+id);
	}
	//删除
	this.dele = function(selectIds){
		return $http.get('../goods/delete.do?ids='+selectIds);
	}
	//搜索
	this.search=function(page,rows,searchEntity){
		return $http.post('../goods/search.do?page='+page+"&rows="+rows,searchEntity);
	}
	
	this.updateStatus=function(selectId,selectIds){
		return $http.post('../goods/updateStatus.do?selectId='+selectId+"&selectIds="+selectIds);
	}
	this.godelete=function(deleteId,selectIds){
		return $http.post('../goods/isDelete.do?deleteId='+deleteId+"&selectIds="+selectIds);
	}
})