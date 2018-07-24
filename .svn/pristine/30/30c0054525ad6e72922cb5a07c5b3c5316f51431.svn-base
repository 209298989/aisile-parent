package com.aisile.content.service;

import java.util.List;
import java.util.Map;

import com.aisile.pojo.TbContent;
import com.aisile.pojo.TbContentCategory;
import com.aisile.pojo.entity.PageResult;

public interface ContentCategoryService {
	public List<TbContentCategory> findAll();
	public PageResult findPage(int pageNum,int pageSize);
	public void add(TbContentCategory contentCategory);
	public void update(TbContentCategory contentCategory);
	public TbContentCategory findOne(Long id);
	public void delete(Long [] ids);
	public PageResult findPage(TbContentCategory contentCategory, int pageNum,int pageSize);
}
