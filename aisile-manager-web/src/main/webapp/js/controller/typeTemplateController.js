app.controller('typeTemplateController' ,function($scope,$controller,typeTemplateService,brandService,specificationService){	
			$controller('baseController',{$scope:$scope});//继承
	        //读取列表数据绑定到表单中
			$scope.findAll=function(){
				typeTemplateService.findAll().success(
					function(response){
						$scope.list=response;
					}			
				);
			}
			//分页
			$scope.findPage=function(page,rows){	
				typeTemplateService.findPage(page,rows).success(
						function(response){
							$scope.list=response.rows;	
							$scope.paginationConf.totalItems=response.total;//更新总记录数
						}
				);
			}
			$scope.searchEntity={};//定义搜索对象 			
			//条件查询 
			$scope.search=function(page,rows){
				typeTemplateService.search(page,rows,$scope.searchEntity).success(
					function(response){
							$scope.paginationConf.totalItems=response.total;//总记录数 
							$scope.list=response.rows;//给列表变量赋值 
					}		
				);				
			}
			$scope.brandList={data:[]};//品牌列表
			//读取品牌列表
			$scope.findBrandList=function(){
				brandService.selectOptionList().success(
					function(response){
						$scope.brandList={data:response};	
					}
				);		
			}
			$scope.speList={data:[]};//规格列表
			//读取规格列表
			$scope.findSpeList=function(){
				specificationService.selectOptionList().success(
					function(response){
						$scope.speList={data:response};	
					}
				);		
			}
			//新增扩展属性行
			$scope.addTableRow=function(){	
				$scope.entity.customAttributeItems.push({});		
			}
			//批量选项删除 
			$scope.deleTableRow=function(index){			
				$scope.entity.customAttributeItems.splice(index,1);//删除		
			}
			//保存 
			$scope.save=function(){
				var methodName='add';//方法名称
				if($scope.entity.id!=null){//如果有ID
					methodName='update';//则执行修改方法 
				}
				typeTemplateService.save(methodName,$scope.entity).success(
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
				typeTemplateService.findOne(id).success(
						function(response){
							$scope.entity= response;
							$scope.entity.brandIds=  JSON.parse($scope.entity.brandIds);//转换品牌列表
							$scope.entity.specIds=  JSON.parse($scope.entity.specIds);//转换规格列表
							$scope.entity.customAttributeItems= JSON.parse($scope.entity.customAttributeItems);//转换扩展属性
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
							typeTemplateService.dele($scope.selectIds).success(
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
		});
