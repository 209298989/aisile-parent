		 //品牌服务层
		 app.service('sellerService',function($http){
			    	//读取列表数据绑定到表单中
			    	this.findAll=function(){
			    		return $http.get('../seller/findAll.do');		
			    	}
			    	//分页
			    	this.findPage=function(page,rows){
			    		return $http.get('../seller/findPage.do?page='+page+'&rows='+rows);		
			    	}
			    	//搜索
			    	this.search=function(page,rows,searchEntity){
			    		return $http.post('../seller/search.do?page='+page+"&rows="+rows,searchEntity);
			    	}
			    	//查询
			    	this.findOne = function(id){
			    		return $http.get('../seller/findOne.do?id='+id);
			    	}
			    	//查询
			    	this.updateStatus = function(status,entity){
			    		return $http.post('../seller/updateStatus.do?status='+status,entity);
			    	}
		 }); 