package persistence.entities;

import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@StaticMetamodel(Relacionamento.class)
public abstract class Relacionamento_ {

	public static volatile SingularAttribute<Relacionamento, Integer> id;
	public static volatile SingularAttribute<Relacionamento, Integer> regra;
	public static volatile SingularAttribute<Relacionamento, Integer> user;

}

