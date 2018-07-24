package com.aisile.sellergoods.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;

import com.aisile.mapper.TbBrandMapper;
import com.aisile.pojo.TbBrand;
import com.aisile.pojo.TbBrandExample;
import com.aisile.pojo.TbBrandExample.Criteria;
import com.aisile.pojo.entity.PageResult;
import com.aisile.sellergoods.service.BrandService;
import com.alibaba.dubbo.config.annotation.Service;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;

@Service
public class BrandServiceImpl implements BrandService {

	@Autowired
	private TbBrandMapper tbBrandMapper;
	
	@Override
	public List<TbBrand> findAll() {
		//条件为空是查询全部  
		return tbBrandMapper.selectByExample(null);
	}

	@Override
	public PageResult findPage(int pageNum, int pageSize) {
		PageHelper.startPage(pageNum,pageSize);
		List<TbBrand> tbbrands=tbBrandMapper.selectByExample(null);
		PageInfo<TbBrand> page=new PageInfo<>(tbbrands);
		return new PageResult(page.getTotal(),page.getList());
	}

	@Override
	public void add(TbBrand brand) {
		tbBrandMapper.insert(brand);
	}

	@Override
	public void update(TbBrand brand) {
		tbBrandMapper.updateByPrimaryKey(brand);
	}

	@Override
	public TbBrand findOne(Long id) {
		return tbBrandMapper.selectByPrimaryKey(id);
	}

	@Override
	public void delete(Long[] ids) {
		for(Long id:ids){
			tbBrandMapper.deleteByPrimaryKey(id);
		}
	}

	@Override
	public PageResult findPage(TbBrand brand, int pageNum, int pageSize) {
		PageHelper.startPage(pageNum, pageSize);		
		TbBrandExample example=new TbBrandExample();
		Criteria criteria = example.createCriteria();		
		if(brand!=null){
			if(brand.getName()!=null && brand.getName().length()>0){
				criteria.andNameLike("%"+brand.getName()+"%");
			}
			if(brand.getFirstChar()!=null && brand.getFirstChar().length()>0){
				criteria.andFirstCharEqualTo(brand.getFirstChar());
			}		
		}		
		Page<TbBrand> page= (Page<TbBrand>)tbBrandMapper.selectByExample(example);	
		return new PageResult(page.getTotal(), page.getResult());
	}

	@Override
	public List<Map> selectOptionList() {
		return tbBrandMapper.selectOptionList();
	}

}
