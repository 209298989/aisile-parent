package com.aisile.sellergoods.service;

import java.util.List;
import java.util.Map;

import com.aisile.pojo.TbTypeTemplate;
import com.aisile.pojo.entity.PageResult;
import com.aisile.pojogroup.Specification;

public interface TypeTemplateService {

	List<TbTypeTemplate> findAll();

	PageResult findPage(int page, int rows);

	PageResult findPage(TbTypeTemplate tbTypeTemplate, int pageNum,int pageSize);

	void add(TbTypeTemplate tbTypeTemplate);

	TbTypeTemplate findOne(Long id);

	void update(TbTypeTemplate tbTypeTemplate);

	void delete(Long[] ids);

	public List<Map> findSpecList(Long id);

}
