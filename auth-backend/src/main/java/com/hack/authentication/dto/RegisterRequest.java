package com.hack.authentication.dto;


import com.hack.authentication.entity.Role;

public class RegisterRequest {
    public String name;
    public String email;
    public String password;
    public Role role;
}