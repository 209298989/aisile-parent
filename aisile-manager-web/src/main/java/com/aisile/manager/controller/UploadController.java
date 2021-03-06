package com.aisile.manager.controller;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.aisile.pojo.entity.Result;
import com.aisile.uitil.FastDFSClient;

/**
 * 文件上传Controller
 * @author Administrator
 *
 */
@RestController
public class UploadController {
	
	@Value("${IMAGE_SERVER_URL}")
	private String IMAGE_SERVER_URL;//文件服务器地址

	@RequestMapping("/upload")
	public Result upload( MultipartFile file){				
		//进行文件上传,取文件的扩展名
		String originalFilename = file.getOriginalFilename();
		String extName = originalFilename.substring(originalFilename.lastIndexOf(".") + 1);
		try {
			//2、创建一个 FastDFS 的客户端
			FastDFSClient fastDFSClient  
			= new FastDFSClient("classpath:conf/client.conf");
			//3、执行上传处理
			String path = fastDFSClient.uploadFile(file.getBytes(), extName);
			//4、拼接返回的 url 和 ip 地址，拼装成完整的 url
			String url = IMAGE_SERVER_URL + path;;			
			return new Result(true,url);			
		} catch (Exception e) {
			e.printStackTrace();
			return new Result(false, "上传失败");
		}		
	}	
}