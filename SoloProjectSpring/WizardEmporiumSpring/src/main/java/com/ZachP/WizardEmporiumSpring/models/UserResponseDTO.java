package com.ZachP.WizardEmporiumSpring.models;

public class UserResponseDTO {
	private String message;
	
	public UserResponseDTO (String message) {
		super();
		this.message = message;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
	
}
