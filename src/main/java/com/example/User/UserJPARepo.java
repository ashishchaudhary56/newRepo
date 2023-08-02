package com.example.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
@Repository
public interface UserJPARepo extends JpaRepository<UserObject, Integer> {
    //List<UserObject> findByName(String Username);
    List<UserObject> findByUserId(int userId);
    List<UserObject> findByCitizenId(String citizenId);
}