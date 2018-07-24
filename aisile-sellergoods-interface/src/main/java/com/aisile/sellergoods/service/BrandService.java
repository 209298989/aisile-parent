package com.aisile.sellergoods.service;

import java.util.List;
import java.util.Map;

import com.aisile.pojo.TbBrand;
import com.aisile.pojo.entity.PageResult;

public interface BrandService {
	public List<TbBrand> findAll();
	public PageResult findPage(int pageNum,int pageSize);
	public void add(TbBrand brand);
	public void update(TbBrand brand);
	public TbBrand findOne(Long id);
	public void delete(Long [] ids);
	public PageResult findPage(TbBrand brand, int pageNum,int pageSize);
	public List<Map> selectOptionList();
}
