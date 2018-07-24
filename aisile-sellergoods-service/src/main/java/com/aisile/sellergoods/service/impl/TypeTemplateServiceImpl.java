package com.aisile.sellergoods.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;

import com.aisile.mapper.TbSpecificationOptionMapper;
import com.aisile.mapper.TbTypeTemplateMapper;
import com.aisile.pojo.TbSpecificationOption;
import com.aisile.pojo.TbSpecificationOptionExample;
import com.aisile.pojo.TbTypeTemplate;
import com.aisile.pojo.TbTypeTemplateExample;
import com.aisile.pojo.TbTypeTemplateExample.Criteria;
import com.aisile.pojo.entity.PageResult;
import com.aisile.sellergoods.service.TypeTemplateService;
import com.alibaba.dubbo.config.annotation.Service;
import com.alibaba.fastjson.JSON;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
@Service
public class TypeTemplateServiceImpl implements TypeTemplateService{
	@Autowired
	private TbTypeTemplateMapper tbTypeTemplateMapper;
	@Autowired
	private TbSpecificationOptionMapper specificationOptionMapper;
	@Override
	public List<TbTypeTemplate> findAll() {
		return tbTypeTemplateMapper.selectByExample(null);
	}
	@Override
	public PageResult findPage(int pageNum, int pageSize) {
		PageHelper.startPage(pageNum, pageSize);		
		Page<TbTypeTemplate> page=   (Page<TbTypeTemplate>) tbTypeTemplateMapper.selectByExample(null);
		return new PageResult(page.getTotal(), page.getResult());
	}
	@Override
	public PageResult findPage(TbTypeTemplate tbTypeTemplate, int pageNum, int pageSize) {
		PageHelper.startPage(pageNum, pageSize);		
		TbTypeTemplateExample example=new TbTypeTemplateExample();
		Criteria criteria = example.createCriteria();		
		if(tbTypeTemplate!=null){
			if(tbTypeTemplate.getName()!=null && tbTypeTemplate.getName().length()>0){
				criteria.andNameLike("%"+tbTypeTemplate.getName()+"%");
			}	
		}		
		Page<TbTypeTemplate> page= (Page<TbTypeTemplate>)tbTypeTemplateMapper.selectByExample(example);	
		return new PageResult(page.getTotal(), page.getResult());
	}
	@Override
	public void add(TbTypeTemplate tbTypeTemplate) {
		tbTypeTemplateMapper.insert(tbTypeTemplate);
	}
	@Override
	public TbTypeTemplate findOne(Long id) {
		return tbTypeTemplateMapper.selectByPrimaryKey(id);
	}
	@Override
	public void update(TbTypeTemplate tbTypeTemplate) {
		tbTypeTemplateMapper.updateByPrimaryKey(tbTypeTemplate);
	}
	@Override
	public void delete(Long[] ids) {
		for (Long id : ids) {
			tbTypeTemplateMapper.deleteByPrimaryKey(id);
		}
		
	}
	@Override
	public List<Map> findSpecList(Long id) {
		TbTypeTemplate template = tbTypeTemplateMapper.selectByPrimaryKey(id);
		List<Map> list = JSON.parseArray(template.getSpecIds(),Map.class);
		for (Map map : list) {
			TbSpecificationOptionExample example = new TbSpecificationOptionExample();
			example.createCriteria().andSpecIdEqualTo(new Long((Integer)map.get("id")));
			List<TbSpecificationOption> lists = specificationOptionMapper.selectByExample(example);
			map.put("options", lists);
		}
		return list;
	}

}
