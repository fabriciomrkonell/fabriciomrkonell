package persistence.entities;

/**
 *
 * @author Fabrício Ronchi
 * 
 */
public class RelacionamentoDAO extends GenericDAO {

    @Override
    protected String getNamedQueryToFindAll() {
        return "Relacionamento.find.all";
    }
    
    @Override
    protected String getNamedQueryToFindById() {
        return "Relacionamento.id.equals";
    }

    @Override
    protected String getNamedQueryToFindByName() {
        return "Relacionamento.name.equals";
    }    
 
    @Override
    protected String getNamedQueryToCountAll() {
        return "Relacionamento.count.all";
    }     

    @Override
    protected String getNamedQueryToRemoveAll() {
        return "Relacionamento.remove.all";
    }     

    @Override
    protected String getNamedQueryToFindByRange() {
        return "Relacionamento.find.range";
    } 
    
    protected String removeRole() {
        return "Relacionamento.find.range";
    } 

    @Override
    public Object getNewInstance() {
        return new Relacionamento();
    }   
    
}