package com.ZachP.WizardEmporiumSpring.models;

public class LoginResponseDTO {
	private String message;

	public LoginResponseDTO(String message) {
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
