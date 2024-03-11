package com.ZachP.WizardEmporiumSpring.models;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public class LoginRequestDTO {
@NotNull(message = "Email is required.")
@Email(message="Email is not a valid email!")
private String email;

@NotNull(message="Password is required")
@Size(min=6,message="password must be at least 6 characters!")
private String password;

public String getEmail() {
	return email;
}

public void setEmail(String email) {
	this.email = email;
}

public String getPassword() {
	return password;
}

public void setPassword(String password) {
	this.password = password;
}

public LoginRequestDTO() {
	
}
	

}
