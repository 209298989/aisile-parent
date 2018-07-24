package com.aisile.content.test.jedis;

import org.junit.Test;

import redis.clients.jedis.Jedis;
import redis.clients.jedis.JedisPool;

public class JedisDemo {
@Test
public void jedisTest(){
	//初始化链接
	Jedis jedis = new Jedis("192.168.88.128", 6379);
	//操作
	jedis.set("nameTest", "valueTest");
	System.out.println(jedis.get("name1"));
	jedis.close();
}
//单机连接池版
@Test
public void jedisTestByPool(){
	JedisPool jedisPool = new JedisPool("192.168.88.128",6379);
	Jedis jedis = jedisPool.getResource();
	jedis.set("nameTest", "valueTest");
	System.out.println(jedis.get("nameTest"));
	jedis.close();
	jedisPool.close();
}
}
