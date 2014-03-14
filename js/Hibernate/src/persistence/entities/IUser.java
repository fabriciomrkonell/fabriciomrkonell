package persistence.entities;

import java.util.List;

/**
 *
 * @author Fabrício Ronchi
 * 
 */
public interface IUser extends IDAO{

    void addRole(User u, Role r) throws Exception;
    
    void removeRole(User u, Role r) throws Exception;

    boolean hasRole(User u, Role r) throws Exception;
   
    List<User> list(User u) throws Exception;
    
}
