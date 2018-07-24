app.controller('itemcatController' ,function($scope,$controller,itemcatService){	
			$controller('baseController',{$scope:$scope});//继承
			$scope.grade=1;
			$scope.getParentIdW=0;
			$scope.setGrade=function(value){
				$scope.grade=value;
			}
			
			$scope.findAllList=function(p_entity){
				if($scope.grade==1){
					$scope.entity_1=null;
					$scope.entity_2=null;
				}
				if($scope.grade==2){
					$scope.entity_1=p_entity;
					$scope.entity_2=null;
				}
				if($scope.grade==3){
					$scope.entity_2=p_entity;
				}
				$scope.findAllByParentId(p_entity.id);
			}
			$scope.findAllByParentId = function(parentid){
				$scope.getParentIdW=parentid;
				itemCatService.findAllByParentId(parentid).success(function(response){
					$scope.list = response;
				})
			}
			//保存 
			$scope.save=function(){
				var methodName='add';//方法名称
				if($scope.entity.id!=null){//如果有ID
					methodName='update';//则执行修改方法 
				}
				$scope.entity.parentId=$scope.getParentIdW;
				itemCatService.save(methodName,$scope.entity).success(
					function(response){
						if(response.success){
							//重新查询 
							$scope.findAllByParentId($scope.getParentIdW);//重新加载
						 }else{
							 alert(response.message);
						 }
					}		
				);				
			}
			//查询实体 
			$scope.findOne=function(id){
				itemCatService.findOne(id).success(
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
						text : '删除会包含它的子数据,请谨慎!',
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
							itemCatService.dele($scope.selectIds).success(function(response){
										if(response.success){
											swal('已删除！', '信息已经被删除。');
												$scope.findAllByParentId(0);//刷新列表
										}			
									}
							);
						}else{
											swal('删除失败！', '请原谅老子删除失败。', 'error');
					}
					})
				}
				
			
			}
			
		});