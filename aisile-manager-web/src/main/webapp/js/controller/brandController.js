app.controller('brandController' ,function($scope,$controller,brandService){	
			$controller('baseController',{$scope:$scope});//继承
	        //读取列表数据绑定到表单中
			$scope.findAll=function(){
				brandService.findAll().success(
					function(response){
						$scope.list=response;
					}			
				);
			}
			//分页
			$scope.findPage=function(page,rows){	
				brandService.findPage(page,rows).success(
						function(response){
							$scope.list=response.rows;	
							$scope.paginationConf.totalItems=response.total;//更新总记录数
						}			
				);
			}
			//保存 
			$scope.save=function(){
				var methodName='add';//方法名称
				if($scope.entity.id!=null){//如果有ID
					methodName='update';//则执行修改方法 
				}
				brandService.save(methodName,$scope.entity).success(
					function(response){
						if(response.success){
							//重新查询 
							 $scope.reloadList();//重新加载
						 }else{
							 alert(response.message);
						 }
					}		
				);				
			}
			//查询实体 
			$scope.findOne=function(id){
				brandService.findOne(id).success(
						function(response){
							$scope.entity= response;					
					     }
				);				
			}
			//批量删除 
			$scope.dele=function(){		
				if($scope.selectIds.length==0){
					swal({    title: "至少选择一条数据！",    text: "2秒后自动关闭。",    timer: 2000,    showConfirmButton: false  });
				}else{
					swal({
						title : '确定删除吗？',
						text : '你将无法恢复它！',
						type : 'warning',
						showCancelButton : true,
						confirmButtonColor : '#3085d6',
						cancelButtonColor : '#d33',
						confirmButtonText : '确定！',
						cancelButtonText : '取消！',
						confirmButtonClass : 'btn btn-success',
						cancelButtonClass : 'btn btn-danger'
					}).then(function(isConfirm) {
						if (isConfirm.value == true) {
							brandService.dele($scope.selectIds).success(
									function(response){
										if(response.success){
												$scope.reloadList();//刷新列表
												swal('已删除！', '信息已经被删除。');
										}						
									}		
							);
						}else{
											swal('删除失败！', '请稍后再试。', 'error');
					}
					})
				}
				
			
			}
			$scope.searchEntity={};//定义搜索对象 			
			//条件查询 
			$scope.search=function(page,rows){
				brandService.search(page,rows,$scope.searchEntity).success(
					function(response){
							$scope.paginationConf.totalItems=response.total;//总记录数 
							$scope.list=response.rows;//给列表变量赋值 
					}		
				);				
			}
		});