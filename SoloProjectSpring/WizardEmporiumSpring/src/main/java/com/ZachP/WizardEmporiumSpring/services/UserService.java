package com.ZachP.WizardEmporiumSpring.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



import com.ZachP.WizardEmporiumSpring.models.UserDTO;
import com.ZachP.WizardEmporiumSpring.repositories.UserRepository;






@Service
public class UserService {
	@Autowired
	private UserRepository userRepo;
	

	public UserDTO createUser(UserDTO user) {
		return userRepo.save(user);
	}
	
	public UserDTO getByEmail(String email) {
		return userRepo.findByEmail(email);
	}
	public UserDTO findById(Long id) {
    	return userRepo.findById(id).orElse(null);
    }
}
