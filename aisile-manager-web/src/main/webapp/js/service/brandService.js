		 //品牌服务层
		 app.service('brandService',function($http){
			    	//读取列表数据绑定到表单中
			    	this.findAll=function(){
			    		return $http.get('../brand/findAll.do');		
			    	}
			    	//分页
			    	this.findPage=function(page,rows){
			    		return $http.get('../brand/findPage.do?page='+page+'&rows='+rows);		
			    	}
			    	//保存
			    	this.save = function(methodName,entity){
			    		return $http.post('../brand/'+ methodName +'.do',entity);
			    	}
			    	//查询
			    	this.findOne = function(id){
			    		return $http.get('../brand/findOne.do?id='+id);
			    	}
			    	//删除
			    	this.dele = function(selectIds){
			    		return $http.get('../brand/delete.do?ids='+selectIds);
			    	}
			    	//搜索
			    	this.search=function(page,rows,searchEntity){
			    		return $http.post('../brand/search.do?page='+page+"&rows="+rows,searchEntity);
			    	}
			    	//下拉列表数据
			    	this.selectOptionList=function(){
			    		return $http.get('../brand/selectOptionList.do');
			    	}
		 }); 