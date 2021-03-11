package com.test.web.Mst.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.test.web.Mst.bean.Mst05Bean;
import com.test.web.Mst.dao.Mst05Dao;

@Controller
public class MstController {
	
	@Autowired
	private Mst05Dao mst05Dao;
	
	
	//�ʱ� jsp ȣ��
	@RequestMapping("/")
	private String initPage() {
		return "MST/storage";
	}
	
	
	@RequestMapping("/mst/selectMst050Ajax")
	@ResponseBody
	public Map<String, Object> 
	selectMst050Ajax(@RequestBody Mst05Bean vo)
	
	{
		
		Map<String, Object> m = new HashMap<>();
		m.put("result", "false");
		m.put("resultMsg", "�߰�������ʥ����");
		
		try {
			Mst05Bean vo2 = new Mst05Bean();
			vo2 = mst05Dao.selectMst05(vo);
			
			m.put("data", vo2);
			
			m.put("result", "true");
			m.put("resultMsg", "�߰�������ʥ����");
		}
		catch(Exception e) {
			e.printStackTrace();
			m.put("resultMsg", e.getMessage());
		}
		
		return m;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
}

