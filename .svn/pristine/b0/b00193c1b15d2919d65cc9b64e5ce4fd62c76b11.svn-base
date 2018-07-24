package com.aisile.sellergoods.service;

import java.util.List;

import com.aisile.pojo.TbSeller;
import com.aisile.pojo.entity.PageResult;

public interface SellerService {

	List<TbSeller> findAll();

	PageResult findPage(TbSeller seller, int page, int rows);

	void add(TbSeller seller);

	PageResult findPage(int page, int rows);

	TbSeller findOne(String id);

	void updateStatus(TbSeller tbSeller, String status);

}
