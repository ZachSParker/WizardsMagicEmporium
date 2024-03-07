package com.ZachP.WizardEmporiumSpring.repositories;

import org.springframework.data.repository.CrudRepository;

import com.ZachP.WizardEmporiumSpring.models.User;

public interface UserRepository extends CrudRepository<User,Long> {
	public User findByEmail(String email);
}
