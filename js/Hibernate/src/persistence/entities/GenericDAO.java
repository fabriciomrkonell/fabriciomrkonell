package persistence.entities;

import java.util.List;
import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.Session;

/**
 *
 * @author Fabrício Ronchi
 *
 */
public abstract class GenericDAO implements IDAO {

    protected Session session;

    @Override
    public Object create(Object o) throws Exception {
        try {
            session = obtainSession();
            session.beginTransaction();
            session.save(o);
            session.flush();
            session.getTransaction().commit();
            return o;
        } catch (HibernateException e) {
            session.getTransaction().rollback();
            throw new Exception(e.getCause().getMessage());
        } finally {
            releaseSession(session);
        }
    }

    @Override
    public void save(Object o) throws Exception {
        try {
            session = obtainSession();
            session.beginTransaction();
            session.update(o);
            session.flush();
            session.getTransaction().commit();
        } catch (HibernateException e) {
            session.getTransaction().rollback();
            throw new Exception(e.getCause().getMessage());
        } finally {
            releaseSession(session);
        }
    }

    @Override
    public void delete(Object o) throws Exception {
        try {
            session = obtainSession();
            session.beginTransaction();
            session.delete(o);
            session.getTransaction().commit();
        } catch (HibernateException e) {
            session.getTransaction().rollback();
            throw new Exception(e.getCause().getMessage());
        } finally {
            releaseSession(session);
        }
    }

    @Override
    public Object findById(Integer theId) throws Exception {
        try {
            session = HibernateUtil.getSessionFactory().openSession();
            //Query q = session.getNamedQuery("id.igual");
            Query q = session.getNamedQuery(getNamedQueryToFindById());
            q.setString("id", theId.toString());
            Object o = q.uniqueResult();
            return o;
        } catch (HibernateException e) {
            throw new Exception(e.getCause().getMessage());
        } finally {
            releaseSession(session);
        }
    }

    @Override
    public Object findByName(String theName) throws Exception {
        try {
            session = HibernateUtil.getSessionFactory().openSession();
            //Query q = session.getNamedQuery("name.igual");
            Query q = session.getNamedQuery(getNamedQueryToFindByName());
            q.setString("name", theName);
            Object o = q.uniqueResult();
            return o;
        } catch (HibernateException e) {
            throw new Exception(e.getCause().getMessage());
        } finally {
            releaseSession(session);
        }
    }

    @Override
    public List findAll() throws Exception {
        try {
            session = HibernateUtil.getSessionFactory().openSession();
            session.beginTransaction();
            //Query q = session.getNamedQuery("find.all");
            Query q = session.getNamedQuery(getNamedQueryToFindAll());
            List lst = q.list();
            session.getTransaction().commit();
            return lst;
        } catch (HibernateException e) {
            throw new Exception(e.getCause().getMessage());
        } finally {
            releaseSession(session);
        }
    }

    @Override
    public List list(Integer firstResult, Integer maxResults) throws Exception {
        try {
            session = HibernateUtil.getSessionFactory().openSession();
            session.beginTransaction();
            //Query q = session.getNamedQuery("find.all");
            Query q = session.getNamedQuery(getNamedQueryToFindByRange());
            q.setFirstResult(firstResult);
            q.setMaxResults(maxResults);
            List lst = q.list();
            return lst;
        } catch (HibernateException e) {
            throw new Exception(e.getCause().getMessage());
        } finally {
            releaseSession(session);
        }
    }

    @Override
    public Long countAll() throws Exception {
        try {
            session = HibernateUtil.getSessionFactory().openSession();
            session.beginTransaction();
            //Query q = session.getNamedQuery("count.all");
            Query q = session.getNamedQuery(getNamedQueryToCountAll());
            Long count = (Long) q.uniqueResult();
            session.getTransaction().commit();
            return count;
        } catch (HibernateException e) {
            throw new Exception(e.getCause().getMessage());
        } finally {
            releaseSession(session);
        }
    }

    @Override
    public void removeAll() throws Exception {
        try {
            session = HibernateUtil.getSessionFactory().openSession();
            session.beginTransaction();
            //Query q = session.getNamedQuery("count.all");
            Query q = session.getNamedQuery(getNamedQueryToRemoveAll());
            q.executeUpdate();
            session.getTransaction().commit();
        } catch (HibernateException e) {
            throw new Exception(e.getCause().getMessage());
        } finally {
            releaseSession(session);
        }
    }

    protected Session obtainSession() {
        return HibernateUtil.getSessionFactory().getCurrentSession();
    }

    protected void releaseSession(Session session) {
        // Do nothing...
    }

    /*
     * Abstract Members...
     */
    protected abstract String getNamedQueryToFindAll();

    protected abstract String getNamedQueryToFindById();

    protected abstract String getNamedQueryToFindByName();

    protected abstract String getNamedQueryToCountAll();

    protected abstract String getNamedQueryToRemoveAll();

    protected abstract String getNamedQueryToFindByRange();
}