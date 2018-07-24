		 //品牌服务层
		 app.service('specificationService',function($http){
			    	//读取列表数据绑定到表单中
			    	this.findAll=function(){
			    		return $http.get('../specification/findAll.do');		
			    	}
			    	//分页
			    	this.findPage=function(page,rows){
			    		return $http.get('../specification/findPage.do?page='+page+'&rows='+rows);		
			    	}
			    	//搜索
			    	this.search=function(page,rows,searchEntity){
			    		return $http.post('../specification/search.do?page='+page+"&rows="+rows,searchEntity);
			    	}
			    	//添加
			    	this.add = function(entity){
			    		return $http.post('../specification/add.do',entity);
			    	}
			    	//查询
			    	this.findOne = function(id){
			    		return $http.get('../specification/findOne.do?id='+id);
			    	}
			    	//修改
			    	this.update = function(entity){
			    		return $http.post('../specification/update.do',entity);
			    	}
			    	//删除
			    	this.dele = function(selectIds){
			    		return $http.get('../specification/delete.do?ids='+selectIds);
			    	}
			    	//下拉列表数据
			    	this.selectOptionList=function(){
			    		return $http.get('../specification/selectOptionList.do');
			    	}
		 }); 