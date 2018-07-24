		 //品牌服务层
		 app.service('itemCatService',function($http){
			 		this.findAllByParentId=function(parentid){
			    		return $http.get('../ibItemCat/findAllByParentId.do?parentid='+parentid);		
			    	}
			 		//保存
			    	this.save = function(methodName,entity){
			    		return $http.post('../ibItemCat/'+ methodName +'.do',entity);
			    	}
			    	//查询
			    	this.findOne = function(id){
			    		return $http.get('../ibItemCat/findOne.do?id='+id);
			    	}
			    	/*this.selectTypeList=function(){
			    		return $http.get('../ibItemCat/selectTypeList.do');
			    	}*/
			    	//删除
			    	this.dele = function(selectIds){
			    		return $http.get('../ibItemCat/delete.do?ids='+selectIds);
			    	}
			    	//读取列表数据绑定到表单中
			    	this.findAll=function(){
			    		return $http.get('../ibItemCat/findAll.do');		
			    	}
		 }); 