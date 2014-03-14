package persistence.entities;

import java.io.Serializable;
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
@Table(name="Relacionamento")
@NamedQueries({
    @NamedQuery(name = "Relacionamento.id.equals", query = "SELECT o FROM Relacionamento o WHERE o.regra=:Regra"),
    @NamedQuery(name = "Relacionamento.name.equals", query = "SELECT o FROM Relacionamento o WHERE o.regra=:Regra"),
    @NamedQuery(name = "Relacionamento.find.all", query = "SELECT o FROM Relacionamento o"),
    @NamedQuery(name = "Relacionamento.count.all", query = "SELECT COUNT(o.regra) FROM Relacionamento o"),
    @NamedQuery(name = "Relacionamento.remove.all", query = "DELETE FROM Relacionamento o"),
    @NamedQuery(name = "Relacionamento.find.range", query = "SELECT o FROM Relacionamento o WHERE o.regra BETWEEN :minId AND :maxId")
})
public class Relacionamento implements Serializable {    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "Id")    
    private int id;
    @Column(name = "Regra")    
    private int regra;
    @Column(name = "User")
    private int user;

    public Relacionamento() {
        setRegra(0);
    }
    
     public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
    
    public int getRegra() {
        return regra;
    }

    public void setRegra(int id) {
        this.regra = id;
    }

    public int getUser() {
        return user;
    }

    public void setUser(int name) {
        this.user = name;
    }

    @Override
    public String toString() {
        return "Roles {" + "id=" + regra + ", name=" + user + '}';
    }
    
    
}
