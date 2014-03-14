package persistence.entities;

import java.io.Serializable;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

/**
 *
 * @author Fabrício Ronchi
 * 
 */
@Entity
@Table(name="ROLES")
@NamedQueries({
    @NamedQuery(name = "ROLES.id.equals", query = "SELECT o FROM Role o WHERE o.id=:id"),
    @NamedQuery(name = "ROLES.name.equals", query = "SELECT o FROM Role o WHERE o.name=:name"),
    @NamedQuery(name = "ROLES.find.all", query = "SELECT o FROM Role o"),
    @NamedQuery(name = "ROLES.count.all", query = "SELECT COUNT(o.id) FROM Role o"),
    @NamedQuery(name = "ROLES.remove.all", query = "DELETE FROM Role o"),
    @NamedQuery(name = "ROLES.find.range", query = "SELECT o FROM Role o WHERE o.id BETWEEN :minId AND :maxId"),
    @NamedQuery(name = "ROLES.find.user", query = "SELECT o FROM Relacionamento o WHERE o.regra=:role")        
})
public class Role implements Serializable {    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ID")    
    private int id;
    @Column(name = "NAME")
    private String name;

    public Role() {
        setId(0);
    }
    
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }        
      
    @Override
    public String toString() {
        return "Roles {" + "id=" + id + ", name=" + name + '}';
    }
    
    
}
