package com.aisile.content.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.test.context.ContextConfiguration;

import com.aisile.content.service.ContentService;
import com.aisile.mapper.TbContentMapper;
import com.aisile.pojo.TbContent;
import com.aisile.pojo.TbContentExample;
import com.aisile.pojo.TbContentExample.Criteria;
import com.aisile.pojo.entity.PageResult;
import com.alibaba.dubbo.config.annotation.Service;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;

@Service
@ContextConfiguration(locations="classpath:spring/applicationContext-redis.xml")
public class ContentServiceImpl implements ContentService {

	@Autowired
	private TbContentMapper TbContentMapper;
	
	@Autowired
	private RedisTemplate redisTemplate;
	
	@Override
	public List<TbContent> findAll() {
		//条件为空是查询全部  
		return TbContentMapper.selectByExample(null);
	}

	@Override
	public PageResult findPage(int pageNum, int pageSize) {
		PageHelper.startPage(pageNum,pageSize);
		List<TbContent> TbContents=TbContentMapper.selectByExample(null);
		PageInfo<TbContent> page=new PageInfo<>(TbContents);
		return new PageResult(page.getTotal(),page.getList());
	}

	@Override
	public void add(TbContent content) {
		TbContentMapper.insert(content);
		//清除缓存
		redisTemplate.boundHashOps("content").delete(content.getCategoryId());
	}

	@Override
	public void update(TbContent content) {
		//查询修改前的分类Id
		Long categoryId = TbContentMapper.selectByPrimaryKey(content.getId()).getCategoryId();
		redisTemplate.boundHashOps("content").delete(categoryId);
		TbContentMapper.updateByPrimaryKey(content);
		//如果分类ID发生了修改,清除修改后的分类ID的缓存
		if(categoryId.longValue()!=content.getCategoryId().longValue()){
			redisTemplate.boundHashOps("content").delete(content.getCategoryId());
		}	
	}

	@Override
	public TbContent findOne(Long id) {
		return TbContentMapper.selectByPrimaryKey(id);
	}

	@Override
	public void delete(Long[] ids) {
		for(Long id:ids){
			//清除缓存
			Long categoryId = TbContentMapper.selectByPrimaryKey(id).getCategoryId();//广告分类ID
			redisTemplate.boundHashOps("content").delete(categoryId);
			TbContentMapper.deleteByPrimaryKey(id);
		}
	}

	@Override
	public PageResult findPage(TbContent content, int pageNum, int pageSize) {
		PageHelper.startPage(pageNum, pageSize);		
		TbContentExample example=new TbContentExample();
		Criteria criteria = example.createCriteria();		
		if(content!=null){	
		}		
		Page<TbContent> page= (Page<TbContent>)TbContentMapper.selectByExample(example);	
		return new PageResult(page.getTotal(), page.getResult());
	}
	
	@Override
	public List<TbContent> findByCategoryId(Long categoryId) {
		//先查询缓存  如果有直接return出去 如果没有去数据库查然后放到redis中
		List<TbContent> contentList = (List<TbContent>) redisTemplate.boundHashOps("content").get(categoryId);
		if (contentList!=null) {
			System.out.println("进来了!");
			return contentList;
		}else {
			TbContentExample contentExample = new TbContentExample();
			Criteria criteria = contentExample.createCriteria();
			criteria.andCategoryIdEqualTo(categoryId);
			criteria.andStatusEqualTo("1");
			contentExample.setOrderByClause("sort_order");//排序
			contentList = TbContentMapper.selectByExample(contentExample);
			redisTemplate.boundHashOps("content").put(categoryId, contentList);
		}
		
		return contentList;
	}

}
