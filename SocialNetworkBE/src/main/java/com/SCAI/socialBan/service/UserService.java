package com.SCAI.socialBan.service;

import com.SCAI.socialBan.model.User;

public interface UserService {
	
	public User findUserById(Long userId) throws Exception;
	public User findUserByJwt(String jwt) throws Exception;

}
