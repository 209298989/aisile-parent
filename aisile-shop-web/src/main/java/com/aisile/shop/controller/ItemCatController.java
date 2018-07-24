package com.aisile.shop.controller;

import java.util.List;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aisile.pojo.TbItemCat;
import com.aisile.pojo.entity.PageResult;
import com.aisile.pojo.entity.Result;
import com.aisile.sellergoods.service.ItemCatService;
import com.alibaba.dubbo.config.annotation.Reference;

@RestController
@RequestMapping("/ibItemCat")
public class ItemCatController {
	
	@Reference
	private ItemCatService ibItemCatService;
	
	
	@RequestMapping("/findAll")
	public List<TbItemCat> findAll(){			
		return ibItemCatService.findAll();
	}
	
	@RequestMapping("/findPage")
	public PageResult  findPage(int page,int rows){			
		return ibItemCatService.findPage(page, rows);
	}
	
	@RequestMapping("/add")
	public Result add(@RequestBody TbItemCat itemcat){
		try {
			ibItemCatService.add(itemcat);
			return new Result(true, "增加成功");
		} catch (Exception e) {
			e.printStackTrace();
			return new Result(false, "增加失败");
		}
	}
	@RequestMapping("/update")
	public Result update(@RequestBody TbItemCat itemcat){
		try {
			ibItemCatService.update(itemcat);
			return new Result(true, "修改成功");
		} catch (Exception e) {
			e.printStackTrace();
			return new Result(false, "修改失败");
		}
	}
	@RequestMapping("/findOne")
	public TbItemCat findOne(Long id){
		return ibItemCatService.findOne(id);		
	}
	@RequestMapping("/delete")
	public Result delete(Long[] ids){
		try {
			ibItemCatService.deleteZiZi(ids);
			ibItemCatService.deleteZi(ids);
			ibItemCatService.delete(ids);
			return new Result(true, "删除成功"); 
		} catch (Exception e) {
			e.printStackTrace();
			return new Result(false, "删除失败");
		}
	}
	@RequestMapping("/search")
	public PageResult search(@RequestBody TbItemCat itemcat, int page, int rows  ){
		return ibItemCatService.findPage(itemcat, page, rows);		
	}
	@RequestMapping("/findAllByParentId")
	public List<TbItemCat> findAllByParentId(Long parentid){
		return ibItemCatService.findAllByParentId(parentid);
	}
}