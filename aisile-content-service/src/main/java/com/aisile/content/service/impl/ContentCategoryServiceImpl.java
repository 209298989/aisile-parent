package com.aisile.content.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.aisile.content.service.ContentCategoryService;
import com.aisile.mapper.TbContentCategoryMapper;
import com.aisile.pojo.TbContentCategory;
import com.aisile.pojo.TbContentCategoryExample;
import com.aisile.pojo.TbContentCategoryExample.Criteria;
import com.aisile.pojo.entity.PageResult;
import com.alibaba.dubbo.config.annotation.Service;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;

@Service
public class ContentCategoryServiceImpl implements ContentCategoryService {

	@Autowired
	private TbContentCategoryMapper contentCategoryMapper;
	
	@Override
	public List<TbContentCategory> findAll() {
		//条件为空是查询全部  
		return contentCategoryMapper.selectByExample(null);
	}

	@Override
	public PageResult findPage(int pageNum, int pageSize) {
		PageHelper.startPage(pageNum,pageSize);
		List<TbContentCategory> TbContentCategorys=contentCategoryMapper.selectByExample(null);
		PageInfo<TbContentCategory> page=new PageInfo<>(TbContentCategorys);
		return new PageResult(page.getTotal(),page.getList());
	}

	@Override
	public void add(TbContentCategory contentCategory) {
		contentCategoryMapper.insert(contentCategory);
	}

	@Override
	public void update(TbContentCategory contentCategory) {
		contentCategoryMapper.updateByPrimaryKey(contentCategory);
	}

	@Override
	public TbContentCategory findOne(Long id) {
		return contentCategoryMapper.selectByPrimaryKey(id);
	}

	@Override
	public void delete(Long[] ids) {
		for(Long id:ids){
			contentCategoryMapper.deleteByPrimaryKey(id);
		}
	}

	@Override
	public PageResult findPage(TbContentCategory contentCategory, int pageNum, int pageSize) {
		PageHelper.startPage(pageNum, pageSize);		
		TbContentCategoryExample example=new TbContentCategoryExample();
		Criteria criteria = example.createCriteria();		
		if(contentCategory!=null){
			if(contentCategory.getName()!=null && contentCategory.getName().length()>0){
				criteria.andNameLike("%"+contentCategory.getName()+"%");
			}
		}		
		Page<TbContentCategory> page= (Page<TbContentCategory>)contentCategoryMapper.selectByExample(example);	
		return new PageResult(page.getTotal(), page.getResult());
	}

}
