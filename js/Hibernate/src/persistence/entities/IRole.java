package persistence.entities;

import java.util.List;

/**
 *
 * @author Fabrício Ronchi
 * 
 */
public interface IRole extends IDAO{

    List<User> findUser(Role o) throws Exception;
        
}
