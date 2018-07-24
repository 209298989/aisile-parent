package com.aisile.sellergoods.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;

import com.aisile.mapper.TbSpecificationMapper;
import com.aisile.mapper.TbSpecificationOptionMapper;
import com.aisile.pojo.TbSpecification;
import com.aisile.pojo.TbSpecificationExample;
import com.aisile.pojo.TbSpecificationExample.Criteria;
import com.aisile.pojo.TbSpecificationOption;
import com.aisile.pojo.TbSpecificationOptionExample;
import com.aisile.pojo.entity.PageResult;
import com.aisile.pojogroup.Specification;
import com.aisile.sellergoods.service.SpecificationService;
import com.alibaba.dubbo.config.annotation.Service;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
@Service
public class SpecificationServiceImpl implements SpecificationService {
	@Autowired
	private TbSpecificationMapper tbSpecificationMapper;
	@Autowired
	private TbSpecificationOptionMapper specificationOptionMapper;
	@Override
	public List<TbSpecification> findAll() {
		return tbSpecificationMapper.selectByExample(null);
	}
	@Override
	public PageResult findPage(int pageNum, int pageSize) {
		PageHelper.startPage(pageNum, pageSize);		
		Page<TbSpecification> page=   (Page<TbSpecification>) tbSpecificationMapper.selectByExample(null);
		return new PageResult(page.getTotal(), page.getResult());
	}
	@Override
	public PageResult findPage(TbSpecification specification, int pageNum, int pageSize) {
		PageHelper.startPage(pageNum, pageSize);		
		TbSpecificationExample example=new TbSpecificationExample();
		Criteria criteria = example.createCriteria();		
		if(specification!=null){
			if(specification.getSpecName()!=null && specification.getSpecName().length()>0){
				criteria.andSpecNameLike("%"+specification.getSpecName()+"%");
			}		
		}		
		Page<TbSpecification> page= (Page<TbSpecification>)tbSpecificationMapper.selectByExample(example);	
		return new PageResult(page.getTotal(), page.getResult());
	}
	@Override
	public void add(Specification specification) {
		TbSpecification tbspe = specification.getSpecification();
		tbSpecificationMapper.insert(tbspe);//插入规格	
		//循环插入规格选项
		System.out.println(tbspe.getId());
		for(TbSpecificationOption option:specification.getSpecificationOptionList()){	
			option.setSpecId(tbspe.getId());//设置规格ID		
			specificationOptionMapper.insert(option);
		}	
	}
	@Override
	public Specification findOne(Long id) {
				//查询规格
				TbSpecification tbSpecification = tbSpecificationMapper.selectByPrimaryKey(id);
				//查询规格选项列表
				TbSpecificationOptionExample example=new TbSpecificationOptionExample();
				com.aisile.pojo.TbSpecificationOptionExample.Criteria criteria = example.createCriteria();
				criteria.andSpecIdEqualTo(id);//根据规格ID查询		
				List<TbSpecificationOption> optionList = specificationOptionMapper.selectByExample(example);
				//构建组合实体类返回结果
				Specification spec=new Specification();
				spec.setSpecification(tbSpecification);
				spec.setSpecificationOptionList(optionList);		
				return spec;		
	}
	@Override
	public void update(Specification specification) {
				//保存修改的规格
				tbSpecificationMapper.updateByPrimaryKey(specification.getSpecification());//保存规格
				//删除原有的规格选项		
				TbSpecificationOptionExample example=new TbSpecificationOptionExample();
				com.aisile.pojo.TbSpecificationOptionExample.Criteria criteria = example.createCriteria();
				criteria.andSpecIdEqualTo(specification.getSpecification().getId());//指定规格ID为条件
				specificationOptionMapper.deleteByExample(example);//删除		
				//循环插入规格选项
				for(TbSpecificationOption specificationOption:specification.getSpecificationOptionList()){			
					specificationOption.setSpecId(specification.getSpecification().getId());
					specificationOptionMapper.insert(specificationOption);		
				}	
	}
	@Override
	public void delete(Long[] ids) {
		for(Long id:ids){
			tbSpecificationMapper.deleteByPrimaryKey(id);			
			//删除原有的规格选项		
			TbSpecificationOptionExample example=new TbSpecificationOptionExample();
			com.aisile.pojo.TbSpecificationOptionExample.Criteria criteria = example.createCriteria();
			criteria.andSpecIdEqualTo(id);//指定规格ID为条件
			specificationOptionMapper.deleteByExample(example);//删除
		}	
	}
	@Override
	public List<Map> selectOptionList() {
		return tbSpecificationMapper.selectOptionList();
	}

}
