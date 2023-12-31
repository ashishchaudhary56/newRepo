package com.example.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
@Service
public class UserServices {
    @Autowired
    UserJPARepo userRepo;

    private RestTemplate template= new RestTemplate();

    //add person
    public UserObject addUser(UserObject person) {
        return userRepo.save(person);
    }

    public UserObject updateUser(UserObject person) {
        return userRepo.save(person);
    }

    public List<UserObject> findByCitizenId(String citizenId) {
        return  userRepo.findByCitizenId(citizenId);
    }
}