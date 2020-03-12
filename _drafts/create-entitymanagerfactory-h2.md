java create entityManagerFactory entityManager programatically h2



import org.springframework.orm.jpa.JpaVendorAdapter;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;

import javax.persistence.EntityManager;
import javax.sql.DataSource;
import java.util.HashMap;
import java.util.Map;

public class H2EntityManager {

    static final DataSource dataSource = dataSource();

    static EntityManager entityManager() {
        LocalContainerEntityManagerFactoryBean entityManagerFactoryBean = new LocalContainerEntityManagerFactoryBean();
        entityManagerFactoryBean.setDataSource(dataSource);
        entityManagerFactoryBean.setPackagesToScan("com.acdcjunior");

        JpaVendorAdapter jpaVendorAdapter = new HibernateJpaVendorAdapter();
        entityManagerFactoryBean.setJpaVendorAdapter(jpaVendorAdapter);

        Map<String, String> jpaProperties = new HashMap<>();
        jpaProperties.put("hibernate.default_schema", "DOM_EVE_TESTES");
        jpaProperties.put("hibernate.dialect", "org.hibernate.dialect.H2Dialect");
        jpaProperties.put("hibernate.show_sql", "true");
        jpaProperties.put("hibernate.format_sql", "true");

        entityManagerFactoryBean.setJpaPropertyMap(jpaProperties);
        entityManagerFactoryBean.afterPropertiesSet();


        return entityManagerFactoryBean.getNativeEntityManagerFactory().createEntityManager();
    }

    private static DataSource dataSource() {
        try {
            org.h2.jdbcx.JdbcDataSource hsDS = new org.h2.jdbcx.JdbcDataSource();
            hsDS.setURL("jdbc:h2:mem:test");
            hsDS.setUser("sa");
            return hsDS;
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

}
