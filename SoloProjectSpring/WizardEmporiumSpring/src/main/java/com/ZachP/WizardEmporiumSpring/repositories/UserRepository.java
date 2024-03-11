package com.ZachP.WizardEmporiumSpring.repositories;

import org.springframework.data.repository.CrudRepository;

import com.ZachP.WizardEmporiumSpring.models.UserDTO;

public interface UserRepository extends CrudRepository<UserDTO,Long> {
	public UserDTO findByEmail(String email);
}
