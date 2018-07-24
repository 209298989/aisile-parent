package com.aisile.sellergoods.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.aisile.mapper.TbSellerMapper;
import com.aisile.pojo.TbSeller;
import com.aisile.pojo.TbSellerExample;
import com.aisile.pojo.TbSellerExample.Criteria;
import com.aisile.pojo.entity.PageResult;
import com.aisile.sellergoods.service.SellerService;
import com.alibaba.dubbo.config.annotation.Service;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
@Service
public class SellerServiceImpl implements SellerService{
@Autowired 
private TbSellerMapper sellerMapper;
	@Override
	public List<TbSeller> findAll() {
		return sellerMapper.selectByExample(null);
	}

	@Override
	public PageResult findPage(int pageNum, int pageSize) {
		PageHelper.startPage(pageNum,pageSize);
		List<TbSeller> tbSellers=sellerMapper.selectByExample(null);
		PageInfo<TbSeller> page=new PageInfo<>(tbSellers);
		return new PageResult(page.getTotal(),page.getList());
	}

	@Override
	public void add(TbSeller seller) {
		sellerMapper.insert(seller);
	}
	
	@Override
	public PageResult findPage(TbSeller seller, int pageNum, int pageSize) {
		PageHelper.startPage(pageNum, pageSize);		
		TbSellerExample example=new TbSellerExample();	
		Criteria createCriteria = example.createCriteria();
		if(seller!=null){
			if(seller.getName()!=null && seller.getName().length()>0){
				createCriteria.andNameLike("%"+seller.getName()+"%");
			}	
			if(seller.getNickName()!=null && seller.getNickName().length()>0){
				createCriteria.andNickNameEqualTo(seller.getNickName());
			}
			if(seller.getStatus()!=null && seller.getStatus().length()>0){
				createCriteria.andStatusEqualTo(seller.getStatus());
			}
		}		
		Page<TbSeller> page= (Page<TbSeller>)sellerMapper.selectByExample(example);	
		return new PageResult(page.getTotal(), page.getResult());
	}

	@Override
	public TbSeller findOne(String id) {
		return sellerMapper.selectByPrimaryKey(id);
	}

	@Override
	public void updateStatus(TbSeller tbSeller, String status) {
		tbSeller.setStatus(status);
		sellerMapper.updateByPrimaryKey(tbSeller);
	}

}
