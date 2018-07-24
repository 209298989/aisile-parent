package com.aisile.sellergoods.service;

import java.util.List;

import com.aisile.pojo.TbItemCat;
import com.aisile.pojo.entity.PageResult;

public interface ItemCatService {

	List<TbItemCat> findAll();

	PageResult findPage(int page, int rows);

	void add(TbItemCat itemcat);

	void update(TbItemCat itemcat);

	TbItemCat findOne(Long id);

	PageResult findPage(TbItemCat itemcat, int page, int rows);

	List<TbItemCat> findAllByParentId(Long parentid);

	void delete(Long[] ids);

	void deleteZi(Long[] ids);

	void deleteZiZi(Long[] ids);

}
