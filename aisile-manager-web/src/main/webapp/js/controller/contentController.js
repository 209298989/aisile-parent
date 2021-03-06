app.controller('contentController' ,function($scope,$controller,contentCategoryService,uploadService,contentService){
	$controller('baseController',{$scope:$scope});//继承
	//读取列表数据绑定到表单中
	$scope.findAll=function(){
		contentService.findAll().success(
			function(response){
				$scope.list=response;
			}			
		);
	}
	//显示状态的名称
	$scope.status=["无效","有效"];
	$scope.entity={};
	//上传图片
	$scope.uploadFile=function(){	  
		uploadService.uploadFile().success(function(response) {        	
        	if(response.success){//如果上传成功，取出url
        		$scope.entity.pic=response.message;//设置文件地址
        	}else{
        		alert(response.message);
        	}
        }).error(function() {           
        	     alert("上传发生错误");
        });        
    };
    //加载广告分类列表
	$scope.findContentCategoryList=function(){
		contentCategoryService.findAll().success(function(response){
			$scope.contentCategoryList=response;
		})
	}
	//保存
	$scope.save=function(){
		var methodName='add';//方法名称
		if($scope.entity.id!=null){//如果有ID
			methodName='update';//则执行修改方法 
		}
		contentService.save(methodName,$scope.entity).success(
			function(response){
				if(response.success){
					//重新查询 
					 $scope.findAll();//重新加载
				 }else{
					 alert(response.message);
				 }
			}		
		);				
	}
})