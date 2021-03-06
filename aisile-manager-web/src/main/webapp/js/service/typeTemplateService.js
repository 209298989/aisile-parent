		 //品牌服务层
		 app.service('typeTemplateService',function($http){
			    	//读取列表数据绑定到表单中
			    	this.findAll=function(){
			    		return $http.get('../typeTemplate/findAll.do');		
			    	}
			    	//分页
			    	this.findPage=function(page,rows){
			    		return $http.get('../typeTemplate/findPage.do?page='+page+'&rows='+rows);		
			    	}
			    	//搜索
			    	this.search=function(page,rows,searchEntity){
			    		return $http.post('../typeTemplate/search.do?page='+page+"&rows="+rows,searchEntity);
			    	}
			    	//保存
			    	this.save = function(methodName,entity){
			    		return $http.post('../typeTemplate/'+ methodName +'.do',entity);
			    	}
			    	//回显
			    	this.findOne = function(id){
			    		return $http.get('../typeTemplate/findOne.do?id='+id);
			    	}
			    	//删除
			    	this.dele=function(selectIds){
			    		return $http.get('../typeTemplate/delete.do?ids='+selectIds);
			    	}
			    	//查询规格列表
			    	this.findSpecList=function(id){
			    		return $http.get('../typeTemplate/findSpecList.do?id='+id);
			    	}
		 }); 