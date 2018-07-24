package com.aisile.sellergoods.service;

import java.util.List;
import java.util.Map;

import com.aisile.pojo.TbSpecification;
import com.aisile.pojo.entity.PageResult;
import com.aisile.pojogroup.Specification;

public interface SpecificationService {

	List<TbSpecification> findAll();

	public PageResult findPage(int pageNum,int pageSize);
	
	public PageResult findPage(TbSpecification specification, int pageNum,int pageSize);
	
	public void add(Specification specification);

	Specification findOne(Long id);

	void update(Specification specification);

	void delete(Long[] ids);

	List<Map> selectOptionList();
}
