package com.aisile.sellergoods.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.aisile.mapper.TbItemCatMapper;
import com.aisile.pojo.TbItemCat;
import com.aisile.pojo.TbItemCatExample;
import com.aisile.pojo.entity.PageResult;
import com.aisile.pojo.entity.Result;
import com.aisile.sellergoods.service.ItemCatService;
import com.alibaba.dubbo.config.annotation.Service;
@Service
public class TbItemCatServiceImpl implements ItemCatService{

	@Autowired
	private TbItemCatMapper itemCatMapper;
	
	@Override
	public List<TbItemCat> findAll() {
		return itemCatMapper.selectByExample(null);
	}

	@Override
	public PageResult findPage(int page, int rows) {
		return null;
	}

	@Override
	public void add(TbItemCat itemcat) {
		itemCatMapper.insert(itemcat);
	}

	@Override
	public void update(TbItemCat itemcat) {
		itemCatMapper.updateByPrimaryKey(itemcat);
	}

	@Override
	public TbItemCat findOne(Long id) {
		return itemCatMapper.selectByPrimaryKey(id);
	}

	@Override
	public PageResult findPage(TbItemCat itemcat, int page, int rows) {
		return null;
	}

	@Override
	public List<TbItemCat> findAllByParentId(Long parentid) {
		TbItemCatExample example = new TbItemCatExample();
		example.createCriteria().andParentIdEqualTo(parentid);
		return itemCatMapper.selectByExample(example);
	}

	@Override
	public void delete(Long[] ids) {
		for(Long id:ids){
			itemCatMapper.deleteByPrimaryKey(id);
		}
	}

	@Override
	public void deleteZi(Long[] ids) {
		for(Long id:ids){
			itemCatMapper.deleteByPrimaryKey2(id);
		}
	}

	@Override
	public void deleteZiZi(Long[] ids) {
		for(Long id:ids){
			itemCatMapper.deleteByPrimaryKey3(id);
		}
	}

}
