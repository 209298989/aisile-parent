app.controller('contentCategoryController' ,function($scope,$controller,contentCategoryService){
	$controller('baseController',{$scope:$scope});//继承
	//读取列表数据绑定到表单中
	$scope.findAll=function(){
		contentCategoryService.findAll().success(
			function(response){
				$scope.list=response;
			}			
		);
	}
	$scope.searchEntity={};//定义搜索对象 			
	//条件查询 
	$scope.search=function(page,rows){
		contentCategoryService.search(page,rows,$scope.searchEntity).success(
			function(response){
					$scope.paginationConf.totalItems=response.total;//总记录数 
					$scope.list=response.rows;//给列表变量赋值 
			}		
		);				
	}
	
	
})