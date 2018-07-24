package com.aisile.shop.controller;

import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aisile.pojo.TbTypeTemplate;
import com.aisile.pojo.entity.PageResult;
import com.aisile.pojo.entity.Result;
import com.aisile.sellergoods.service.TypeTemplateService;
import com.alibaba.dubbo.config.annotation.Reference;

@RestController
@RequestMapping("/typeTemplate")
public class TypeTemplateController {
	@Reference
	private TypeTemplateService typeTemplateService;
	@RequestMapping("/findAll")
	public List<TbTypeTemplate> findAll(){			
		return typeTemplateService.findAll();
	}
	@RequestMapping("/findPage")
	public PageResult  findPage(int page,int rows){			
		return typeTemplateService.findPage(page, rows);
	}
	@RequestMapping("/search")
	public PageResult search(@RequestBody TbTypeTemplate tbTypeTemplate, int page, int rows  ){
		return typeTemplateService.findPage(tbTypeTemplate, page, rows);		
	}
	@RequestMapping("/add")
	public Result add(@RequestBody TbTypeTemplate tbTypeTemplate){
		try {
			typeTemplateService.add(tbTypeTemplate);
			return new Result(true, "增加成功");
		} catch (Exception e) {
			e.printStackTrace();
			return new Result(false, "增加失败");
		}
	}
	@RequestMapping("/findOne")
	public TbTypeTemplate findOne(Long id){
		return typeTemplateService.findOne(id);		
	}
	@RequestMapping("/update")
	public Result update(@RequestBody TbTypeTemplate tbTypeTemplate){
		try {
			typeTemplateService.update(tbTypeTemplate);
			return new Result(true, "修改成功");
		} catch (Exception e) {
			e.printStackTrace();
			return new Result(false, "修改失败");
		}
	}
	@RequestMapping("/delete")
	public Result delete(Long [] ids){
		try {
			typeTemplateService.delete(ids);
			return new Result(true, "删除成功"); 
		} catch (Exception e) {
			e.printStackTrace();
			return new Result(false, "删除失败");
		}
	}
	@RequestMapping("/findSpecList")
	public List<Map> findSpecList(Long id){
		return typeTemplateService.findSpecList(id);
	}
}
