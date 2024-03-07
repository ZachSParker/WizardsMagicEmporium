package com.ZachP.WizardEmporiumSpring.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ZachP.WizardEmporiumSpring.models.User;
import com.ZachP.WizardEmporiumSpring.repositories.UserRepository;



@Service
public class UserService {
	@Autowired
	private UserRepository userRepo;

	// TO-DO: Write register and login methods!
	public User createUser(User user) {
		return userRepo.save(user);
	}
	public User getByEmail(String email) {
		return userRepo.findByEmail(email);
	}
	public User findById(Long id) {
    	return userRepo.findById(id).orElse(null);
    }
}
