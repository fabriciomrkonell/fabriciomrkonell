import java.util.ArrayList;
import java.util.List;
import org.hibernate.tool.hbm2x.DAOExporter;
import persistence.entities.Relacionamento;
import persistence.entities.RelacionamentoDAO;
import persistence.entities.Role;
import persistence.entities.RoleDAO;
import persistence.entities.User;
import persistence.entities.UserDAO;

public class TestarPersistence {
 
    public static void main(String[] args) {
        try {
            //createUsers();            
            //showAllUser();
            //createRoles();
            //showAllRoles();                        
            //adicionarRole(); 
            //buscarRole();
            //removeRole();
            //temRole();
            buscarUser();            
        } catch (Exception ex) {
            System.out.println("Ocorreu algum erro: " + ex);
        }
        
    }
    
    private static void createUsers() throws Exception {
        System.out.println("Criando usuários...");
        UserDAO dao = new UserDAO();
        User admin = (User) dao.getNewInstance();
        admin.setName("Administrador155");

        User guest = (User) dao.getNewInstance();
        guest.setName("Convidado155");
        
        User user = (User) dao.getNewInstance();
        user.setName("Ayrton Senna155");

        dao.create(admin);
        dao.create(guest);
        dao.create(user);

        System.out.print(" OK!");

    } 
    
    private static void createRoles() throws Exception {
        System.out.println("Criando Regras...");
        RoleDAO dao = new RoleDAO();
        Role role1 = (Role) dao.getNewInstance();
        role1.setName("Super Usuário");

        Role role2 = (Role) dao.getNewInstance();
        role2.setName("Administrador");
        
        Role role3 = (Role) dao.getNewInstance();
        role3.setName("Representante");

        dao.create(role1);
        dao.create(role2);
        dao.create(role3);

        System.out.print(" OK!");

    } 
    
    private static void showAllUser() throws Exception {         
        UserDAO dao = new UserDAO();        
        ArrayList users = (ArrayList) dao.findAll();
        User o;
        
        System.out.println("Listando Usuários...");
        
        for (int i=0; i<users.size(); i++) {
            o = (User) users.get(i);
            System.out.println("Id: " + o.getId() + " - " +  "Nome: " + o.getName());
        }                
        
        User admin = (User) dao.getNewInstance();       
        
    }    

     private static void showAllRoles() throws Exception {         
        RoleDAO dao = new RoleDAO();        
        ArrayList users = (ArrayList) dao.findAll();
        Role o;
        
        System.out.println("Listando Regras...");
        
        for (int i=0; i<users.size(); i++) {
            o = (Role) users.get(i);
            System.out.println("Id: " + o.getId() + " - " +  "Regra: " + o.getName());
        }                
        
        Role admin = (Role) dao.getNewInstance();       
        
    }
     
     private static void adicionarRole() throws Exception {
        System.out.println("Adicionando Regras"); 
        UserDAO daou = new UserDAO();
        RoleDAO daor = new RoleDAO();
        User userObj = (User) daou.findById(1); 
        Role roleObj = (Role) daor.findById(2);                             
        RelacionamentoDAO dao = new RelacionamentoDAO();
        Relacionamento admin = (Relacionamento) dao.getNewInstance();        
        admin.setRegra(roleObj.getId()); 
        admin.setUser(1); 
        dao.create(admin);
              
    }  
     
     private static void buscarRole() throws Exception {                
        RoleDAO roled = new RoleDAO();
        UserDAO userd = new UserDAO();
        Role role = (Role) roled.findById(2);  
        System.err.println(role.getName());
        List<Relacionamento> r = roled.findUser(role);           
        Relacionamento o;
        User user = new User();
        System.out.println("Usuários da Regra " + role.getName()+ ": ");
        for (int i = 0; i < r.size(); i++) {              
            o = (Relacionamento) r.get(i);            
            user = (User) userd.findById(o.getRegra());
            System.out.println(i +" - " + user.getName());                        
        }
        
    } 
     
     private static void removeRole() throws Exception {                        
        UserDAO userd = new UserDAO();
        RoleDAO roled = new RoleDAO();
        Role role = (Role) roled.findById(2); 
        User user = (User) userd.findById(2);         
        userd.removeRole(user, role);
        
    } 
     
     private static void temRole() throws Exception {                        
        UserDAO userd = new UserDAO();
        RoleDAO roled = new RoleDAO();
        Role role = (Role) roled.findById(2); 
        User user = (User) userd.findById(2);         
        boolean rel = userd.hasRole(role, user);   
        if(rel == true){
            System.err.println("Tem uma regra pra esse Usuário!");
        }else{
            System.err.println("Não existe uma regra pra esse Usuário!");
        }
        
    } 
     
     private static void buscarUser() throws Exception {                
        RoleDAO roled = new RoleDAO();
        UserDAO userd = new UserDAO();
        User user = (User) userd.findById(2);                   
        List<Relacionamento> r = userd.findRoles(user);           
        Relacionamento o;        
        Role role; 
        System.out.println("Regras do Usuário " + user.getName()+ ": ");
        for (int i = 0; i < r.size(); i++) {                          
            o = (Relacionamento) r.get(i);            
            System.err.println(o);
            role = (Role) roled.findById(o.getRegra());
            System.out.println(i +" - " + role.getName());                        
        }
        
    } 
}
